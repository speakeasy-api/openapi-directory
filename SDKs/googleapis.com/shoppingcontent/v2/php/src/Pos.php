<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Pos 
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
     * Batches multiple POS-related calls in a single request.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchResponse
     */
	public function contentPosCustombatch(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/pos/batch');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "posCustomBatchRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosCustombatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->posCustomBatchResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PosCustomBatchResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Deletes a store for the given merchant.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteResponse
     */
	public function contentPosDelete(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/pos/{targetMerchantId}/store/{storeCode}', \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Retrieves information about the given store.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosGetResponse
     */
	public function contentPosGet(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/pos/{targetMerchantId}/store/{storeCode}', \OpenAPI\OpenAPI\Models\Operations\ContentPosGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->posStore = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PosStore', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a store for the given merchant.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertResponse
     */
	public function contentPosInsert(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/pos/{targetMerchantId}/store', \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "posStore", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosInsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->posStore = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PosStore', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Submit inventory for the given merchant.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosInventorySecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryResponse
     */
	public function contentPosInventory(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosInventorySecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/pos/{targetMerchantId}/inventory', \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "posInventoryRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosInventoryResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->posInventoryResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PosInventoryResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Lists the stores of the target merchant.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosListResponse
     */
	public function contentPosList(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/pos/{targetMerchantId}/store', \OpenAPI\OpenAPI\Models\Operations\ContentPosListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->posListResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PosListResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Submit a sale event for the given merchant.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleResponse
     */
	public function contentPosSale(
        \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/pos/{targetMerchantId}/sale', \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "posSaleRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentPosSaleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentPosSaleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->posSaleResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\PosSaleResponse', 'json');
            }
        }

        return $response;
    }
}