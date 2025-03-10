<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Locations 
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
     * Create location
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\LocationInput $request
     * @return \OpenAPI\OpenAPI\Models\Operations\AddLocationResponse
     */
	public function addLocation(
        \OpenAPI\OpenAPI\Models\Shared\LocationInput $request,
    ): \OpenAPI\OpenAPI\Models\Operations\AddLocationResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/locations');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AddLocationResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 201) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->responseDefaultResource = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ResponseDefaultResource', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Delete location
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\DeleteLocationResponse
     */
	public function deleteLocation(
        \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\DeleteLocationResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/locations/{id}', \OpenAPI\OpenAPI\Models\Operations\DeleteLocationRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DeleteLocationResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->responseDefaultResource = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ResponseDefaultResource', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get location
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdResponse
     */
	public function getLocationById(
        \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/locations/{id}', \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetLocationByIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->location = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Location', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get all locations
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetLocationsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetLocationsResponse
     */
	public function getLocations(
        \OpenAPI\OpenAPI\Models\Operations\GetLocationsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetLocationsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/locations');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetLocationsRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetLocationsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getLocations200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetLocations200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update existing location
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateLocationRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateLocationResponse
     */
	public function updateLocation(
        \OpenAPI\OpenAPI\Models\Operations\UpdateLocationRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateLocationResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/locations/{id}', \OpenAPI\OpenAPI\Models\Operations\UpdateLocationRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "locationInput", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateLocationResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->responseDefaultResource = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ResponseDefaultResource', 'json');
            }
        }

        return $response;
    }
}