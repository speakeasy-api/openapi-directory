<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class TrafficAnalysis 
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
     * Return the traffic analysis settings for a network
     * 
     * Return the traffic analysis settings for a network
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisResponse
     */
	public function getNetworkTrafficAnalysis(
        \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/trafficAnalysis', \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetNetworkTrafficAnalysisResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getNetworkTrafficAnalysis200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update the traffic analysis settings for a network
     * 
     * Update the traffic analysis settings for a network
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisResponse
     */
	public function updateNetworkTrafficAnalysis(
        \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/trafficAnalysis', \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "requestBody", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->updateNetworkTrafficAnalysis200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
}