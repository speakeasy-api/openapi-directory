<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Subaccounts 
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
     * Gets one subaccount by ID.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetResponse
     */
	public function dfareportingSubaccountsGet(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/subaccounts/{id}', \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->subaccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Subaccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Inserts a new subaccount.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertResponse
     */
	public function dfareportingSubaccountsInsert(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/subaccounts', \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "subaccount", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsInsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->subaccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Subaccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Gets a list of subaccounts, possibly filtered. This method supports paging.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListResponse
     */
	public function dfareportingSubaccountsList(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/subaccounts', \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->subaccountsListResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SubaccountsListResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates an existing subaccount. This method supports patch semantics.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchResponse
     */
	public function dfareportingSubaccountsPatch(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/subaccounts', \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "subaccount", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsPatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->subaccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Subaccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates an existing subaccount.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateResponse
     */
	public function dfareportingSubaccountsUpdate(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/subaccounts', \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "subaccount", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingSubaccountsUpdateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->subaccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Subaccount', 'json');
            }
        }

        return $response;
    }
}