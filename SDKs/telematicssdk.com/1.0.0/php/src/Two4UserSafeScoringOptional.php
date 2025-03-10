<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Two4UserSafeScoringOptional 
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
     * User safe scoring - Accumulated value - v1/Scorings/individual
     * 
     * Safe driving score API. This API is a part of Telematics API that we provide to our clients.
     * 
     * Rating description presents the universal approach, developed by our company on the basis of many years of experience; most of the input variables presented in this document could be adopted depending on the needs of the company and the focus on the specific characteristics of clients' driving style.
     * Since 2019 we have moved to the 3rd Generation of the scoring model which allows distinguishing a context of events and add penalty points in accordance with a level of risk generated by an event
     * 
     * [More details](https://docs.telematicssdk.com)
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse
     */
	public function userSafeScoringAccumulatedValueV1ScoringsIndividual(
        \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/statistics/v1/Scorings/individual/');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividualRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividualResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->userSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\UserSafeScoringAccumulatedValueV1ScoringsIndividual200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
	
    /**
     * User safe scoring - daily value - /v1/Scorings/individual/daily
     * 
     * User safe scoring - daily value - /v1/Scorings/individual/daily
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest $request
     * @return \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse
     */
	public function userSafeScoringDailyValueV1ScoringsIndividualDaily(
        \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest $request,
    ): \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/statistics/v1/Scorings/individual/daily');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDailyRequest::class, $request, null));
        
        $httpResponse = $this->_defaultClient->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDailyResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            $response->headers = $httpResponse->getHeaders();
            
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->userSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSONObject = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Operations\UserSafeScoringDailyValueV1ScoringsIndividualDaily200ApplicationJSON', 'json');
            }
        }

        return $response;
    }
}