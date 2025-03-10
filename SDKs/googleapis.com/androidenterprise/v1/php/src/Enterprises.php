<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

class Enterprises 
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
     * Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse
     */
	public function androidenterpriseEnterprisesAcknowledgeNotificationSet(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/acknowledgeNotificationSet');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
	
    /**
     * Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupResponse
     */
	public function androidenterpriseEnterprisesCompleteSignup(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/completeSignup');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCompleteSignupResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterprise = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Enterprise', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse
     */
	public function androidenterpriseEnterprisesCreateEnrollmentToken(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/createEnrollmentToken', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->createEnrollmentTokenResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\CreateEnrollmentTokenResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenResponse
     */
	public function androidenterpriseEnterprisesCreateWebToken(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/createWebToken', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "administratorWebTokenSpec", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesCreateWebTokenResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->administratorWebToken = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\AdministratorWebToken', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Enrolls an enterprise with the calling EMM.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollResponse
     */
	public function androidenterpriseEnterprisesEnroll(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/enroll');
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "enterprise", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesEnrollResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterprise = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Enterprise', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Generates a sign-up URL.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlResponse
     */
	public function androidenterpriseEnterprisesGenerateSignupUrl(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/signupUrl');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGenerateSignupUrlResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->signupInfo = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\SignupInfo', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Retrieves the name and domain of an enterprise.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetResponse
     */
	public function androidenterpriseEnterprisesGet(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterprise = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\Enterprise', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountResponse
     */
	public function androidenterpriseEnterprisesGetServiceAccount(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetServiceAccountResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->serviceAccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\ServiceAccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutResponse
     */
	public function androidenterpriseEnterprisesGetStoreLayout(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesGetStoreLayoutResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->storeLayout = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\StoreLayout', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListResponse
     */
	public function androidenterpriseEnterprisesList(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('GET', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesListResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterprisesListResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\EnterprisesListResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetResponse
     */
	public function androidenterpriseEnterprisesPullNotificationSet(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/pullNotificationSet');
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesPullNotificationSetResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->notificationSet = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\NotificationSet', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationResponse
     */
	public function androidenterpriseEnterprisesSendTestPushNotification(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSendTestPushNotificationResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterprisesSendTestPushNotificationResponse = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\EnterprisesSendTestPushNotificationResponse', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sets the account that will be used to authenticate to the API as the enterprise.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountResponse
     */
	public function androidenterpriseEnterprisesSetAccount(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/account', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "enterpriseAccount", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetAccountResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->enterpriseAccount = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\EnterpriseAccount', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutResponse
     */
	public function androidenterpriseEnterprisesSetStoreLayout(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutRequest::class, $request);
        
        $options = ['http_errors' => false];
        $body = Utils\Utils::serializeRequestBody($request, "storeLayout", "json");
        $options = array_merge_recursive($options, $body);
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('PUT', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesSetStoreLayoutResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
            if (Utils\Utils::matchContentType($contentType, 'application/json')) {
                $serializer = Utils\JSON::createSerializer();
                $response->storeLayout = $serializer->deserialize((string)$httpResponse->getBody(), 'OpenAPI\OpenAPI\Models\Shared\StoreLayout', 'json');
            }
        }

        return $response;
    }
	
    /**
     * Unenrolls an enterprise from the calling EMM.
     * 
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollRequest $request
     * @param \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollSecurity $security
     * @return \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollResponse
     */
	public function androidenterpriseEnterprisesUnenroll(
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollRequest $request,
        \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollSecurity $security,
    ): \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollResponse
    {
        $baseUrl = $this->_serverUrl;
        $url = Utils\Utils::generateUrl($baseUrl, '/androidenterprise/v1/enterprises/{enterpriseId}/unenroll', \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollRequest::class, $request);
        
        $options = ['http_errors' => false];
        $options = array_merge_recursive($options, Utils\Utils::getQueryParams(\OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollRequest::class, $request, null));
        
        $client = Utils\Utils::configureSecurityClient($this->_defaultClient, $security);
        $httpResponse = $client->request('POST', $url, $options);
        
        $contentType = $httpResponse->getHeader('Content-Type')[0] ?? '';

        $response = new \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseEnterprisesUnenrollResponse();
        $response->statusCode = $httpResponse->getStatusCode();
        $response->contentType = $contentType;
        $response->rawResponse = $httpResponse;
        
        if ($httpResponse->getStatusCode() === 200) {
        }

        return $response;
    }
}