<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class ExternalVpnGateways 
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
     * Deletes the specified externalVpnGateway.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteResponse
     */
	public function computeExternalVpnGatewaysDelete(
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/externalVpnGateways/{externalVpnGateway}', \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysDeleteResponse();
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
     * Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetResponse
     */
	public function computeExternalVpnGatewaysGet(
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/externalVpnGateways/{externalVpnGateway}', \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->externalVpnGateway = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ExternalVpnGateway', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a ExternalVpnGateway in the specified project using the data included in the request.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertResponse
     */
	public function computeExternalVpnGatewaysInsert(
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/externalVpnGateways', \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "externalVpnGateway", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysInsertResponse();
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
     * Retrieves the list of ExternalVpnGateway available to the specified project.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListResponse
     */
	public function computeExternalVpnGatewaysList(
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/externalVpnGateways', \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->externalVpnGatewayList = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ExternalVpnGatewayList', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsResponse
     */
	public function computeExternalVpnGatewaysSetLabels(
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/externalVpnGateways/{resource}/setLabels', \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "globalSetLabelsRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysSetLabelsResponse();
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
     * Returns permissions that a caller has on the specified resource.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsResponse
     */
	public function computeExternalVpnGatewaysTestIamPermissions(
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/externalVpnGateways/{resource}/testIamPermissions', \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "testPermissionsRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeExternalVpnGatewaysTestIamPermissionsResponse();
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