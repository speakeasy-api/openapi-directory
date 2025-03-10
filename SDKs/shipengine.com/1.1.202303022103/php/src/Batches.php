<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Batches 
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
     * Add to a Batch
     * 
     * Add a Shipment or Rate to a Batch
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AddToBatchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\AddToBatchResponse
     */
	public function addToBatch(
        \OpenAPI\OpenAPI\Models\Operations\AddToBatchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\AddToBatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}/add', \OpenAPI\OpenAPI\Models\Operations\AddToBatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "addToBatchRequestBody", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AddToBatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
            if (Utils\Utils::matchContentType($contentType, 'text/plain')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Create A Batch
     * 
     * Create a Batch
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\CreateBatchRequestBody $request
     * @return \OpenAPI\OpenAPI\Models\Operations\CreateBatchResponse
     */
	public function createBatch(
        \OpenAPI\OpenAPI\Models\Shared\CreateBatchRequestBody $request,
    ): \OpenAPI\OpenAPI\Models\Operations\CreateBatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\CreateBatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->createBatchResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CreateBatchResponseBody', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Delete Batch By Id
     * 
     * Delete Batch By Id
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DeleteBatchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\DeleteBatchResponse
     */
	public function deleteBatch(
        \OpenAPI\OpenAPI\Models\Operations\DeleteBatchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\DeleteBatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}', \OpenAPI\OpenAPI\Models\Operations\DeleteBatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DeleteBatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
            if (Utils\Utils::matchContentType($contentType, 'text/plain')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get Batch By External ID
     * 
     * Get Batch By External ID
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdResponse
     */
	public function getBatchByExternalId(
        \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/external_batch_id/{external_batch_id}', \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetBatchByExternalIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getBatchByExternalIdResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\GetBatchByExternalIdResponseBody', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get Batch By ID
     * 
     * Get Batch By ID
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdResponse
     */
	public function getBatchById(
        \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}', \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetBatchByIdResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getBatchByIdResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\GetBatchByIdResponseBody', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get Batch Errors
     * 
     * Error handling in batches are handled differently than in a single synchronous request.
     * You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsResponse
     */
	public function listBatchErrors(
        \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}/errors', \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ListBatchErrorsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listBatchErrorsResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListBatchErrorsResponseBody', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * List Batches
     * 
     * List Batches associated with your Shipengine account
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ListBatchesRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\ListBatchesResponse
     */
	public function listBatches(
        \OpenAPI\OpenAPI\Models\Operations\ListBatchesRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\ListBatchesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ListBatchesRequest::class, $request, null));
        
        $httpResponse = $this->_securityClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ListBatchesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->listBatchesResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ListBatchesResponseBody', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Process Batch ID Labels
     * 
     * Process Batch ID Labels
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ProcessBatchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\ProcessBatchResponse
     */
	public function processBatch(
        \OpenAPI\OpenAPI\Models\Operations\ProcessBatchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\ProcessBatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}/process/labels', \OpenAPI\OpenAPI\Models\Operations\ProcessBatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "processBatchRequestBody", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ProcessBatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
            if (Utils\Utils::matchContentType($contentType, 'text/plain')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Remove From Batch
     * 
     * Remove a shipment or rate from a batch
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchResponse
     */
	public function removeFromBatch(
        \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}/remove', \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "removeFromBatchRequestBody", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_securityClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\RemoveFromBatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
            if (Utils\Utils::matchContentType($contentType, 'text/plain')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Update Batch By Id
     * 
     * Update Batch By Id
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UpdateBatchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UpdateBatchResponse
     */
	public function updateBatch(
        \OpenAPI\OpenAPI\Models\Operations\UpdateBatchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UpdateBatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/v1/batches/{batch_id}', \OpenAPI\OpenAPI\Models\Operations\UpdateBatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $httpResponse = $this->_securityClient->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UpdateBatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 204) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
            if (Utils\Utils::matchContentType($contentType, 'text/plain')) {
                $response->emptyResponseBody = $httpResponse->getBody()->getContents();
            }
        }
        else if ($httpResponse->getStatusCode() === 400 or $httpResponse->getStatusCode() === 404 or $httpResponse->getStatusCode() === 500) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->errorResponseBody = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ErrorResponseBody', 'json');
            }
        }

        return $response;
    }
}