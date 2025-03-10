<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class MachineImages 
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
     * Deletes the specified machine image. Deleting a machine image is permanent and cannot be undone.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteResponse
     */
	public function computeMachineImagesDelete(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages/{machineImage}', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesDeleteResponse();
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
     * Returns the specified machine image.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetResponse
     */
	public function computeMachineImagesGet(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages/{machineImage}', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->machineImage = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\MachineImage', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicySecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyResponse
     */
	public function computeMachineImagesGetIamPolicy(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicySecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages/{resource}/getIamPolicy', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesGetIamPolicyResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->policy = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Policy', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a machine image in the specified project using the data that is included in the request. If you are creating a new machine image to update an existing instance, your new machine image should use the same network or, if applicable, the same subnetwork as the original instance.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertResponse
     */
	public function computeMachineImagesInsert(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "machineImage", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesInsertResponse();
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
     * Retrieves a list of machine images that are contained within the specified project.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListResponse
     */
	public function computeMachineImagesList(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->machineImageList = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\MachineImageList', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicySecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyResponse
     */
	public function computeMachineImagesSetIamPolicy(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicySecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages/{resource}/setIamPolicy', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "globalSetPolicyRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesSetIamPolicyResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->policy = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Policy', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns permissions that a caller has on the specified resource.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsResponse
     */
	public function computeMachineImagesTestIamPermissions(
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/machineImages/{resource}/testIamPermissions', \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "testPermissionsRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeMachineImagesTestIamPermissionsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->testPermissionsResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\TestPermissionsResponse', 'json');
            }
        }

        return $response;
    }
}