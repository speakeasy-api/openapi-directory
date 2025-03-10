<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Campaigns 
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
     * Gets one campaign by ID.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetResponse
     */
	public function dfareportingCampaignsGet(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/campaigns/{id}', \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->campaign = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Campaign', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Inserts a new campaign.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertResponse
     */
	public function dfareportingCampaignsInsert(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/campaigns', \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "campaign", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsInsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->campaign = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Campaign', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Retrieves a list of campaigns, possibly filtered. This method supports paging.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListResponse
     */
	public function dfareportingCampaignsList(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/campaigns', \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->campaignsListResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CampaignsListResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates an existing campaign. This method supports patch semantics.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchResponse
     */
	public function dfareportingCampaignsPatch(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/campaigns', \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "campaign", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsPatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->campaign = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Campaign', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates an existing campaign.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateResponse
     */
	public function dfareportingCampaignsUpdate(
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/userprofiles/{profileId}/campaigns', \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "campaign", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DfareportingCampaignsUpdateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->campaign = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Campaign', 'json');
            }
        }

        return $response;
    }
}