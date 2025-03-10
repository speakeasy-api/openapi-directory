<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class PingDevice 
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
     * Enqueue a job to check connectivity status to the device
     * 
     * Enqueue a job to check connectivity status to the device
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceResponse
     */
	public function createDeviceLiveToolsPingDevice(
        \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/devices/{serial}/liveTools/pingDevice', \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "requestBody", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDeviceResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 201) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->createDeviceLiveToolsPingDevice201ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\CreateDeviceLiveToolsPingDevice201ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Return a ping device job
     * 
     * Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceResponse
     */
	public function getDeviceLiveToolsPingDevice(
        \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/devices/{serial}/liveTools/pingDevice/{id}', \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDeviceResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getDeviceLiveToolsPingDevice200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetDeviceLiveToolsPingDevice200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
}