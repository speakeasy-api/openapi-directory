<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class GlobalForwardingRules 
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
     * Deletes the specified GlobalForwardingRule resource.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteResponse
     */
	public function computeGlobalForwardingRulesDelete(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules/{forwardingRule}', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('DELETE', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesDeleteResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetResponse
     */
	public function computeGlobalForwardingRulesGet(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules/{forwardingRule}', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->forwardingRule = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ForwardingRule', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertResponse
     */
	public function computeGlobalForwardingRulesInsert(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "forwardingRule", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesInsertResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Retrieves a list of GlobalForwardingRule resources available to the specified project.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListResponse
     */
	public function computeGlobalForwardingRulesList(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->forwardingRuleList = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ForwardingRuleList', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchResponse
     */
	public function computeGlobalForwardingRulesPatch(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules/{forwardingRule}', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "forwardingRule1", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PATCH', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesPatchResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsResponse
     */
	public function computeGlobalForwardingRulesSetLabels(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules/{resource}/setLabels', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "globalSetLabelsRequest", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetLabelsResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetResponse
     */
	public function computeGlobalForwardingRulesSetTarget(
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/projects/{project}/global/forwardingRules/{forwardingRule}/setTarget', \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "targetReference", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalForwardingRulesSetTargetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->operation = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Operation', 'json');
            }
        }

        return $response;
    }
}