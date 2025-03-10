<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Conversions 
{

	// SDK private variables namespaced with _ to avoid conflicts with API models
	private \GuzzleHttp\ClientInterface $_defaultClient;
	private \GuzzleHttp\ClientInterface $_securityClient;
	private string $_serverUrl;
	private string $_language;
	private string $_sdkVersion;
	private string $_genVersion;	

	/**
	 * @param \GuzzleHttp\ClientInterface $defaultClient
	 * @param \GuzzleHttp\ClientInterface $securityClient
	 * @param string $serverUrl
	 * @param string $language
	 * @param string $sdkVersion
	 * @param string $genVersion
	 */
	public function __construct(\GuzzleHttp\ClientInterface $defaultClient, \GuzzleHttp\ClientInterface $securityClient, string $serverUrl, string $language, string $sdkVersion, string $genVersion)
	{
		$this->_defaultClient = $defaultClient;
		$this->_securityClient = $securityClient;
		$this->_serverUrl = $serverUrl;
		$this->_language = $language;
		$this->_sdkVersion = $sdkVersion;
		$this->_genVersion = $genVersion;
	}
	
    /**
     * Inserts conversions.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertResponse
     */
	public function dfareportingConversionsBatchinsert(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/conversions/batchinsert', \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "conversionsBatchInsertRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchinsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->conversionsBatchInsertResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ConversionsBatchInsertResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates existing conversions.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateResponse
     */
	public function dfareportingConversionsBatchupdate(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/conversions/batchupdate', \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "conversionsBatchUpdateRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingConversionsBatchupdateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->conversionsBatchUpdateResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ConversionsBatchUpdateResponse', 'json');
            }
        }

        return $response;
    }
}