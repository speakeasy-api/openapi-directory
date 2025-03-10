<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class CommentThreads 
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
     * Inserts a new resource into this collection.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertResponse
     */
	public function youtubeCommentThreadsInsert(
        \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/youtube/v3/commentThreads');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "commentThread", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsInsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->commentThread = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CommentThread', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Retrieves a list of resources, possibly filtered.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListResponse
     */
	public function youtubeCommentThreadsList(
        \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/youtube/v3/commentThreads');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\YoutubeCommentThreadsListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->commentThreadListResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CommentThreadListResponse', 'json');
            }
        }

        return $response;
    }
}