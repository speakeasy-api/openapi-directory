<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class VerificationCodes 
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
     * Generates new backup verification codes for the user.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateResponse
     */
	public function directoryVerificationCodesGenerate(
        \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/admin/directory/v1/users/{userKey}/verificationCodes/generate', \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesGenerateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Invalidates the current backup verification codes for the user.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateResponse
     */
	public function directoryVerificationCodesInvalidate(
        \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/admin/directory/v1/users/{userKey}/verificationCodes/invalidate', \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesInvalidateResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Returns the current set of valid backup verification codes for the specified user.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListResponse
     */
	public function directoryVerificationCodesList(
        \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/admin/directory/v1/users/{userKey}/verificationCodes', \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\DirectoryVerificationCodesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->verificationCodes = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\VerificationCodes', 'json');
            }
        }

        return $response;
    }
}