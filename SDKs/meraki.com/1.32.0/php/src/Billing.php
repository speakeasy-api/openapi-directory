<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Billing 
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
     * Return the billing settings of this network
     * 
     * Return the billing settings of this network
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingResponse
     */
	public function getNetworkWirelessBilling(
        \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/wireless/billing', \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetNetworkWirelessBillingResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getNetworkWirelessBilling200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update the billing settings
     * 
     * Update the billing settings
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingResponse
     */
	public function updateNetworkWirelessBilling(
        \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/wireless/billing', \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "requestBody", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessBillingResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->updateNetworkWirelessBilling200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
}