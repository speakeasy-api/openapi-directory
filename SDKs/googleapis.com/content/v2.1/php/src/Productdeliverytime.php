<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Productdeliverytime 
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
     * Creates or updates the delivery time of a product.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateResponse
     */
	public function contentProductdeliverytimeCreate(
        \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/productdeliverytime', \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "productDeliveryTime", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeCreateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->productDeliveryTime = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ProductDeliveryTime', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Deletes the delivery time of a product.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteResponse
     */
	public function contentProductdeliverytimeDelete(
        \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/productdeliverytime/{productId}', \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Gets `productDeliveryTime` by `productId`.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetResponse
     */
	public function contentProductdeliverytimeGet(
        \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/{merchantId}/productdeliverytime/{productId}', \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ContentProductdeliverytimeGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->productDeliveryTime = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ProductDeliveryTime', 'json');
            }
        }

        return $response;
    }
}