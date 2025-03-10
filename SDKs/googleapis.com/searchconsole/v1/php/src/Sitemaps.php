<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Sitemaps 
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
     * Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteResponse
     */
	public function webmastersSitemapsDelete(
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}', \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Retrieves information about a specific sitemap.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetResponse
     */
	public function webmastersSitemapsGet(
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}', \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->wmxSitemap = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\WmxSitemap', 'json');
            }
        }

        return $response;
    }
	
    /**
     *  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListResponse
     */
	public function webmastersSitemapsList(
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webmasters/v3/sites/{siteUrl}/sitemaps', \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->sitemapsListResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SitemapsListResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Submits a sitemap for a site.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitResponse
     */
	public function webmastersSitemapsSubmit(
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}', \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\WebmastersSitemapsSubmitResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
}