<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest
{
    /**
     * V1 error format.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\XgafvEnum $dollarXgafv
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=$.xgafv')]
    public ?\OpenAPI\OpenAPI\Models\Shared\XgafvEnum $dollarXgafv = null;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudIntegrationsV1alphaSfdcChannelInput $googleCloudIntegrationsV1alphaSfdcChannelInput = null;
    
    /**
     * OAuth access token.
     * 
     * @var ?string $accessToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=access_token')]
    public ?string $accessToken = null;
    
    /**
     * Data format for response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * JSONP
     * 
     * @var ?string $callback
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=callback')]
    public ?string $callback = null;
    
    /**
     * 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
     * 
     * @var ?string $clientCertificatePassphrase
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=clientCertificate.passphrase')]
    public ?string $clientCertificatePassphrase = null;
    
    /**
     * The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
     * 
     * @var ?string $clientCertificateSslCertificate
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=clientCertificate.sslCertificate')]
    public ?string $clientCertificateSslCertificate = null;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * 
     * @var ?string $key
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=key')]
    public ?string $key = null;
    
    /**
     * Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     * 
     * @var string $name
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=name')]
    public string $name;
    
    /**
     * OAuth 2.0 token for the current user.
     * 
     * @var ?string $oauthToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=oauth_token')]
    public ?string $oauthToken = null;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     * 
     * @var ?string $quotaUser
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=quotaUser')]
    public ?string $quotaUser = null;
    
    /**
     * Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.
     * 
     * @var ?string $updateMask
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=updateMask')]
    public ?string $updateMask = null;
    
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     * 
     * @var ?string $uploadType
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=uploadType')]
    public ?string $uploadType = null;
    
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     * 
     * @var ?string $uploadProtocol
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=upload_protocol')]
    public ?string $uploadProtocol = null;
    
	public function __construct()
	{
		$this->dollarXgafv = null;
		$this->googleCloudIntegrationsV1alphaSfdcChannelInput = null;
		$this->accessToken = null;
		$this->alt = null;
		$this->callback = null;
		$this->clientCertificatePassphrase = null;
		$this->clientCertificateSslCertificate = null;
		$this->fields = null;
		$this->key = null;
		$this->name = "";
		$this->oauthToken = null;
		$this->prettyPrint = null;
		$this->quotaUser = null;
		$this->updateMask = null;
		$this->uploadType = null;
		$this->uploadProtocol = null;
	}
}
