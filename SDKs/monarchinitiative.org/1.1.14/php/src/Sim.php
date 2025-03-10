<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Sim 
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
     * Get annotation score
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreResponse
     */
	public function getAnnotationScore(
        \OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sim/score');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAnnotationScoreResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->sufficiencyOutput = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SufficiencyOutput', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Compare a reference profile vs one profiles
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetSimCompareRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetSimCompareResponse
     */
	public function getSimCompare(
        \OpenAPI\OpenAPI\Models\Operations\GetSimCompareRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetSimCompareResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sim/compare');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetSimCompareRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetSimCompareResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->simResult = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SimResult', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Search for phenotypically similar diseases or model genes
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetSimSearchRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\GetSimSearchResponse
     */
	public function getSimSearch(
        \OpenAPI\OpenAPI\Models\Operations\GetSimSearchRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\GetSimSearchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sim/search');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetSimSearchRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetSimSearchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->simResult = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SimResult', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Get annotation score
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\SufficiencyPostInput $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostAnnotationScoreResponse
     */
	public function postAnnotationScore(
        \OpenAPI\OpenAPI\Models\Shared\SufficiencyPostInput $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostAnnotationScoreResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sim/score');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostAnnotationScoreResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->sufficiencyOutput = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SufficiencyOutput', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Compare a reference profile vs one or more profiles
     * 
     * @param \OpenAPI\OpenAPI\Models\Shared\CompareInput $request
     * @return \OpenAPI\OpenAPI\Models\Operations\PostSimCompareResponse
     */
	public function postSimCompare(
        \OpenAPI\OpenAPI\Models\Shared\CompareInput $request,
    ): \OpenAPI\OpenAPI\Models\Operations\PostSimCompareResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/sim/compare');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "request", "json");
        if ($body === null) {
            throw new \Exception('Request body is required');
        }
        $options = array_merge_recursive($options, $body);
        
        $httpResponse = $this->_defaultClient->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\PostSimCompareResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->simResult = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SimResult', 'json');
            }
        }

        return $response;
    }
}