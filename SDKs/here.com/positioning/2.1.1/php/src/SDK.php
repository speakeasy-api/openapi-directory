<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

/**
 * SDK - Positioning API accepts requests with radio network measurements and replies with corresponding location estimate. For more details and examples, see [Developer's Guide](https://developer.here.com/documentation/positioning). Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.
 * 
 * 
 * Breaking changes from v1:
 *   - JSON fields
 *     `altaccuracy`, `baselat`, `baselng`, `cellparams`, `pilotpower`, `pnoffset`, `powrx`, `rxlevel`,
 *     have been deprecated and replaced with
 *     `altAccuracy`, `baseLat`, `baseLng`, `cellParams`, `pilotPower`, `pnOffset`, `rss`, `rxLevel`
 *     respectively.
 *   - Dependent parameters combined as a subobject.
 *     - CDMA, GSM, WCDMA, TD-SCDMA and LTE local identification parameters for serving cell moved under `localId` property.
 *     - GSM neighbor global ID: `lac` and `cid` for neighbor cell moved under `globalIdentity` property.
 * 
 * 
 * @package OpenAPI\OpenAPI
 * @access public
 */
class SDK
{
	public const SERVERS = [
        /** Production Server */
		'https://positioning.hereapi.com/v2',
        /** Production Server on Azure */
		'https://az.positioning.hereapi.com/v2',
	];
  	
    /**
     * Additional API Information
     * 
     * @var APIInformation $$apiInformation
     */
	public APIInformation $apiInformation;
		
	// SDK private variables namespaced with _ to avoid conflicts with API models
	private ?\GuzzleHttp\ClientInterface $_defaultClient;
	private ?\GuzzleHttp\ClientInterface $_securityClient;
	private ?Models\Shared\Security $_security;
	private string $_serverUrl;
	private string $_language = 'php';
	private string $_sdkVersion = '0.0.1';
	private string $_genVersion = 'internal';

	/**
	 * Returns a new instance of the SDK builder used to configure and create the SDK instance.
	 * 
	 * @return SDKBuilder
	 */
	public static function builder(): SDKBuilder
	{
		return new SDKBuilder();
	}

	/**
	 * @param \GuzzleHttp\ClientInterface|null $client	 
	 * @param Models\Shared\Security|null $security
	 * @param string $serverUrl
	 * @param array<string, string>|null $params
	 */
	public function __construct(?\GuzzleHttp\ClientInterface $client, ?Models\Shared\Security $security, string $serverUrl, ?array $params)
	{
		$this->_defaultClient = $client;
		
		if ($this->_defaultClient === null) {
			$this->_defaultClient = new \GuzzleHttp\Client([
				'timeout' => 60,
			]);
		}

		$this->_securityClient = null;
		if ($security !== null) {
			$this->_security = $security;
			$this->_securityClient = Utils\Utils::configureSecurityClient($this->_defaultClient, $this->_security);
		}
		
		if ($this->_securityClient === null) {
			$this->_securityClient = $this->_defaultClient;
		}

		if (!empty($serverUrl)) {
			$this->_serverUrl = Utils\Utils::templateUrl($serverUrl, $params);
		}
		
		if (empty($this->_serverUrl)) {
			$this->_serverUrl = $this::SERVERS[0];
		}
		
		$this->apiInformation = new APIInformation(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
	}
}