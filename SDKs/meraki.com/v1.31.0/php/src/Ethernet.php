<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Ethernet 
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
     * Endpoint to see power status for wireless devices
     * 
     * Endpoint to see power status for wireless devices
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesResponse
     */
	public function getOrganizationWirelessDevicesEthernetStatuses(
        \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/organizations/{organizationId}/wireless/devices/ethernet/statuses', \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatusesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects = $serializer->deserialize((string)$httpResponse->getBody(), 'array<OpenAPI\OpenAPI\Models\Operations\GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSON>', 'json');
            }
        }

        return $response;
    }
}