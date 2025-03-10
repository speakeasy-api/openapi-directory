<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Projects 
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
     * Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelResponse
     */
	public function testingProjectsTestMatricesCancel(
        \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel', \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCancelResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->cancelTestMatrixResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CancelTestMatrixResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. That happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateResponse
     */
	public function testingProjectsTestMatricesCreate(
        \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/projects/{projectId}/testMatrices', \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "testMatrix", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesCreateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->testMatrix = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\TestMatrix', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may still be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetResponse
     */
	public function testingProjectsTestMatricesGet(
        \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/projects/{projectId}/testMatrices/{testMatrixId}', \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\TestingProjectsTestMatricesGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->testMatrix = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\TestMatrix', 'json');
            }
        }

        return $response;
    }
}