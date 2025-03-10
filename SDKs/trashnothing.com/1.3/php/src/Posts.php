<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Posts 
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
     * List all posts
     * 
     * This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAllPostsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAllPostsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAllPostsResponse
     */
	public function getAllPosts(
        \OpenAPI\OpenAPI\Models\Operations\GetAllPostsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetAllPostsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAllPostsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts/all');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetAllPostsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAllPostsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getAllPosts200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetAllPosts200ApplicationJSON', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400) {
        }

        return $response;
    }
	
    /**
     * List all post changes
     * 
     * This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesResponse
     */
	public function getAllPostsChanges(
        \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts/all/changes');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetAllPostsChangesResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getAllPostsChanges200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetAllPostsChanges200ApplicationJSON', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400) {
        }

        return $response;
    }
	
    /**
     * Retrieve a post
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetPostResponse
     */
	public function getPost(
        \OpenAPI\OpenAPI\Models\Operations\GetPostRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetPostSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetPostResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts/{post_id}', \OpenAPI\OpenAPI\Models\Operations\GetPostRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetPostResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->post = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Post', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404) {
        }

        return $response;
    }
	
    /**
     * Retrieve post display data
     * 
     * Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataResponse
     */
	public function getPostAndRelatedData(
        \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts/{post_id}/display', \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataRequest::class, $request);
        
        $options = ['http_errors' => false];
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedDataResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getPostAndRelatedData200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetPostAndRelatedData200ApplicationJSON', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 403 or $httpResponse->getStatusCode() === 404) {
        }

        return $response;
    }
	
    /**
     * List posts
     * 
     * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
     * NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetPostsResponse
     */
	public function getPosts(
        \OpenAPI\OpenAPI\Models\Operations\GetPostsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetPostsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetPostsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetPostsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetPostsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getPosts200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetPosts200ApplicationJSON', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400) {
        }

        return $response;
    }
	
    /**
     * Retrieve multiple posts
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsResponse
     */
	public function getPostsByIds(
        \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts/multiple');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetPostsByIdsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->getPostsByIds200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\GetPostsByIds200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Search posts
     * 
     * Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
     * NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\SearchPostsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\SearchPostsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\SearchPostsResponse
     */
	public function searchPosts(
        \OpenAPI\OpenAPI\Models\Operations\SearchPostsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\SearchPostsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\SearchPostsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/posts/search');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\SearchPostsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\SearchPostsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->searchPosts200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\SearchPosts200ApplicationJSON', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 400) {
        }

        return $response;
    }
}