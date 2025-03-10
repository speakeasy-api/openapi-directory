<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Quote 
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
     * Gets a `Quote` with a given `id`.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteResponse
     */
	public function getQuote(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->quoteResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\QuoteResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 401) {
        }

        return $response;
    }
	
    /**
     * Gets a list of popular author names in the system. 
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularResponse
     */
	public function getQuoteAuthorsPopular(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/authors/popular');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsPopularResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 400) {
        }

        return $response;
    }
	
    /**
     * Gets a list of author names in the system. 
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchResponse
     */
	public function getQuoteAuthorsSearch(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/authors/search');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteAuthorsSearchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 400) {
        }

        return $response;
    }
	
    /**
     * Toggle the user bookmark of the given Quote as a user of the API Key.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleResponse
     */
	public function getQuoteBookmarkToggle(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/bookmark/toggle');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteBookmarkToggleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 404) {
        }

        return $response;
    }
	
    /**
     * Gets a list of popular `Quote` Categories.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularResponse
     */
	public function getQuoteCategoriesPopular(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/categories/popular');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesPopularResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Gets a list of `Quote` Categories matching the query string.
     * 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchResponse
     */
	public function getQuoteCategoriesSearch(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/categories/search');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteCategoriesSearchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Toggle the user like of the given Quote as a user of the API Key.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleResponse
     */
	public function getQuoteLikeToggle(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/like/toggle');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteLikeToggleResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200 or $httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 404) {
        }

        return $response;
    }
	
    /**
     * Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomResponse
     */
	public function getQuoteRandom(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/random');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteRandomResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->quoteResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\QuoteResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 401) {
        }

        return $response;
    }
	
    /**
     * Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchResponse
     */
	public function getQuoteSearch(
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/quote/search');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\GetQuoteSearchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->quoteResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\QuoteResponse', 'json');
            }
        }
        else if ($httpResponse->getStatusCode() === 401 or $httpResponse->getStatusCode() === 404) {
        }

        return $response;
    }
}