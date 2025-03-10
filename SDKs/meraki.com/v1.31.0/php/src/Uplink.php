<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Uplink 
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
     * Returns the uplink settings for your MG network.
     * 
     * Returns the uplink settings for your MG network.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkResponse
     */
	public function getNetworkCellularGatewayUplink(
        \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/cellularGateway/uplink', \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetNetworkCellularGatewayUplinkResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getNetworkCellularGatewayUplink200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * List the uplink status of every Meraki MG cellular gateway in the organization
     * 
     * List the uplink status of every Meraki MG cellular gateway in the organization
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesResponse
     */
	public function getOrganizationCellularGatewayUplinkStatuses(
        \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/organizations/{organizationId}/cellularGateway/uplink/statuses', \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatusesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Operations\GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSON>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates the uplink settings for your MG network.
     * 
     * Updates the uplink settings for your MG network.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkResponse
     */
	public function updateNetworkCellularGatewayUplink(
        \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/cellularGateway/uplink', \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "requestBody", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkCellularGatewayUplinkResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->updateNetworkCellularGatewayUplink200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
}