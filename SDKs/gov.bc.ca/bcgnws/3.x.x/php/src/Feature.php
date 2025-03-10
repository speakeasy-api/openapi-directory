<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Feature 
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
     * Get a feature by its featureId
     * 
     * Get information about the geographical feature with the specified featureId.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdResponse
     */
	public function getFeaturesFeatureId(
        \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/features/{featureId}', \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 404) {
        }

        return $response;
    }
}