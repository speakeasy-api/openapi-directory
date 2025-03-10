<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Enterprises 
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
     * Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateResponse
     */
	public function androidmanagementEnterprisesCreate(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/enterprises');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "enterprise", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesCreateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterprise = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Enterprise', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandResponse
     */
	public function androidmanagementEnterprisesDevicesIssueCommand(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{name}:issueCommand', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "command", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesIssueCommandResponse();
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
     * Lists devices for a given enterprise. Deleted devices are not returned in the response.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListResponse
     */
	public function androidmanagementEnterprisesDevicesList(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/devices', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listDevicesResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListDevicesResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelResponse
     */
	public function androidmanagementEnterprisesDevicesOperationsCancel(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{name}:cancel', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesDevicesOperationsCancelResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->empty = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateResponse
     */
	public function androidmanagementEnterprisesEnrollmentTokensCreate(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/enrollmentTokens', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "enrollmentToken", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensCreateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enrollmentToken = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\EnrollmentToken', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListResponse
     */
	public function androidmanagementEnterprisesEnrollmentTokensList(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/enrollmentTokens', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesEnrollmentTokensListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listEnrollmentTokensResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListEnrollmentTokensResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists EMM-managed enterprises. Only BASIC fields are returned.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListResponse
     */
	public function androidmanagementEnterprisesList(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/enterprises');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listEnterprisesResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListEnterprisesResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists policies for a given enterprise.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListResponse
     */
	public function androidmanagementEnterprisesPoliciesList(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/policies', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesPoliciesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listPoliciesResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListPoliciesResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a web app.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateResponse
     */
	public function androidmanagementEnterprisesWebAppsCreate(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/webApps', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "webApp", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsCreateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webApp = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WebApp', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Deletes a web app.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteResponse
     */
	public function androidmanagementEnterprisesWebAppsDelete(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{name}', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->empty = $serializer->deserialize((string)$httpResponse->getBody(), 'array<string, mixed>', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets a web app.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetResponse
     */
	public function androidmanagementEnterprisesWebAppsGet(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{name}', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webApp = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WebApp', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists web apps for a given enterprise.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListResponse
     */
	public function androidmanagementEnterprisesWebAppsList(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/webApps', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listWebAppsResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListWebAppsResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates a web app.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchResponse
     */
	public function androidmanagementEnterprisesWebAppsPatch(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{name}', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "webApp", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebAppsPatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webApp = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WebApp', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateResponse
     */
	public function androidmanagementEnterprisesWebTokensCreate(
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/{parent}/webTokens', \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "webToken", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidmanagementEnterprisesWebTokensCreateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->webToken = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WebToken', 'json');
            }
        }

        return $response;
    }
}