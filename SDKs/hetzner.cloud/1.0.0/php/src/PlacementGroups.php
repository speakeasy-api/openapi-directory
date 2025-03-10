<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class PlacementGroups 
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
     * Delete a PlacementGroup
     * 
     * Deletes a PlacementGroup.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdResponse
     */
	public function deletePlacementGroupsId(
        \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/placement_groups/{id}', \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_defaultClient->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DeletePlacementGroupsIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
        }

        return $response;
    }
	
    /**
     * Get all PlacementGroups
     * 
     * Returns all PlacementGroup objects.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsResponse
     */
	public function getPlacementGroups(
        \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/placement_groups');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->placementGroupsResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsPlacementGroupsResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get a PlacementGroup
     * 
     * Gets a specific PlacementGroup object.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdResponse
     */
	public function getPlacementGroupsId(
        \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/placement_groups/{id}', \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->placementGroupResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetPlacementGroupsIdPlacementGroupResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Create a PlacementGroup
     * 
     * Creates a new PlacementGroup.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsCreatePlacementGroupRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsResponse
     */
	public function postPlacementGroups(
        \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsCreatePlacementGroupRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/placement_groups');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 201) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->createPlacementGroupResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PostPlacementGroupsCreatePlacementGroupResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update a PlacementGroup
     * 
     * Updates the PlacementGroup properties.
     * 
     * Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     * 
     * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdResponse
     */
	public function putPlacementGroupsId(
        \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/placement_groups/{id}', \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "requestBody", "json");
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_defaultClient->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->placementGroupResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\PutPlacementGroupsIdPlacementGroupResponse', 'json');
            }
        }

        return $response;
    }
}