<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class GlobalNetworkEndpointGroups 
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
     * Attach a network endpoint to the specified network endpoint group.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse
     */
	public function computeGlobalNetworkEndpointGroupsAttachNetworkEndpoints(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "globalNetworkEndpointGroupsAttachEndpointsRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsAttachNetworkEndpointsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Deletes the specified network endpoint group.Note that the NEG cannot be deleted if there are backend services referencing it.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteResponse
     */
	public function computeGlobalNetworkEndpointGroupsDelete(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Detach the network endpoint from the specified network endpoint group.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse
     */
	public function computeGlobalNetworkEndpointGroupsDetachNetworkEndpoints(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "globalNetworkEndpointGroupsDetachEndpointsRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsDetachNetworkEndpointsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns the specified network endpoint group.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetResponse
     */
	public function computeGlobalNetworkEndpointGroupsGet(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->networkEndpointGroup = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroup', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a network endpoint group in the specified project using the parameters that are included in the request.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertResponse
     */
	public function computeGlobalNetworkEndpointGroupsInsert(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "networkEndpointGroup", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsInsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Retrieves the list of network endpoint groups that are located in the specified project.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListResponse
     */
	public function computeGlobalNetworkEndpointGroupsList(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->networkEndpointGroupList = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupList', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists the network endpoints in the specified network endpoint group.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse
     */
	public function computeGlobalNetworkEndpointGroupsListNetworkEndpoints(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalNetworkEndpointGroupsListNetworkEndpointsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->networkEndpointGroupsListNetworkEndpoints = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\NetworkEndpointGroupsListNetworkEndpoints', 'json');
            }
        }

        return $response;
    }
}