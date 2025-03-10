<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class DeviceProfiles 
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
     * Get the installed profiles associated with a device
     * 
     * Get the installed profiles associated with a device
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesResponse
     */
	public function getNetworkSmDeviceDeviceProfiles(
        \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/sm/devices/{deviceId}/deviceProfiles', \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfilesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getNetworkSmDeviceDeviceProfiles200ApplicationJSONObjects = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Operations\GetNetworkSmDeviceDeviceProfiles200ApplicationJSON>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get the profiles associated with a user
     * 
     * Get the profiles associated with a user
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesResponse
     */
	public function getNetworkSmUserDeviceProfiles(
        \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/networks/{networkId}/sm/users/{userId}/deviceProfiles', \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfilesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getNetworkSmUserDeviceProfiles200ApplicationJSONObjects = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Operations\GetNetworkSmUserDeviceProfiles200ApplicationJSON>', 'json');
            }
        }

        return $response;
    }
}