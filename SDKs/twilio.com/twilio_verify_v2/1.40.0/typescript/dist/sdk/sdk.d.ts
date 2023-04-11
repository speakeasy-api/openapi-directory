import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://verify.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create a new enrollment Access Token for the Entity
     */
    createAccessToken(req: operations.CreateAccessTokenRequest, security: operations.CreateAccessTokenSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAccessTokenResponse>;
    /**
     * Create a new Bucket for a Rate Limit
     */
    createBucket(req: operations.CreateBucketRequest, security: operations.CreateBucketSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBucketResponse>;
    /**
     * Create a new Challenge for the Factor
     */
    createChallenge(req: operations.CreateChallengeRequest, security: operations.CreateChallengeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateChallengeResponse>;
    /**
     * Create a new Entity for the Service
     */
    createEntity(req: operations.CreateEntityRequest, security: operations.CreateEntitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateEntityResponse>;
    /**
     * Create a new MessagingConfiguration for a service.
     */
    createMessagingConfiguration(req: operations.CreateMessagingConfigurationRequest, security: operations.CreateMessagingConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateMessagingConfigurationResponse>;
    /**
     * Create a new Factor for the Entity
     */
    createNewFactor(req: operations.CreateNewFactorRequest, security: operations.CreateNewFactorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNewFactorResponse>;
    /**
     * Create a new Notification for the corresponding Challenge
     */
    createNotification(req: operations.CreateNotificationRequest, security: operations.CreateNotificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateNotificationResponse>;
    /**
     * Create a new Rate Limit for a Service
     */
    createRateLimit(req: operations.CreateRateLimitRequest, security: operations.CreateRateLimitSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateRateLimitResponse>;
    /**
     * Add a new phone number to SafeList.
     */
    createSafelist(req: operations.CreateSafelistCreateSafelistRequest, security: operations.CreateSafelistSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSafelistResponse>;
    /**
     * Create a new Verification Service.
     */
    createService(req: operations.CreateServiceCreateServiceRequest, security: operations.CreateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * Create a new Verification using a Service
     */
    createVerification(req: operations.CreateVerificationRequest, security: operations.CreateVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateVerificationResponse>;
    /**
     * challenge a specific Verification Check.
     */
    createVerificationCheck(req: operations.CreateVerificationCheckRequest, security: operations.CreateVerificationCheckSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateVerificationCheckResponse>;
    /**
     * Create a new Webhook for the Service
     */
    createWebhook(req: operations.CreateWebhookRequest, security: operations.CreateWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * Delete a specific Bucket.
     */
    deleteBucket(req: operations.DeleteBucketRequest, security: operations.DeleteBucketSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteBucketResponse>;
    /**
     * Delete a specific Entity.
     */
    deleteEntity(req: operations.DeleteEntityRequest, security: operations.DeleteEntitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteEntityResponse>;
    /**
     * Delete a specific Factor.
     */
    deleteFactor(req: operations.DeleteFactorRequest, security: operations.DeleteFactorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFactorResponse>;
    /**
     * Delete a specific MessagingConfiguration.
     */
    deleteMessagingConfiguration(req: operations.DeleteMessagingConfigurationRequest, security: operations.DeleteMessagingConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteMessagingConfigurationResponse>;
    /**
     * Delete a specific Rate Limit.
     */
    deleteRateLimit(req: operations.DeleteRateLimitRequest, security: operations.DeleteRateLimitSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRateLimitResponse>;
    /**
     * Remove a phone number from SafeList.
     */
    deleteSafelist(req: operations.DeleteSafelistRequest, security: operations.DeleteSafelistSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSafelistResponse>;
    /**
     * Delete a specific Verification Service Instance.
     */
    deleteService(req: operations.DeleteServiceRequest, security: operations.DeleteServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * Delete a specific Webhook.
     */
    deleteWebhook(req: operations.DeleteWebhookRequest, security: operations.DeleteWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * Fetch an Access Token for the Entity
     */
    fetchAccessToken(req: operations.FetchAccessTokenRequest, security: operations.FetchAccessTokenSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAccessTokenResponse>;
    /**
     * Fetch a specific Bucket.
     */
    fetchBucket(req: operations.FetchBucketRequest, security: operations.FetchBucketSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBucketResponse>;
    /**
     * Fetch a specific Challenge.
     */
    fetchChallenge(req: operations.FetchChallengeRequest, security: operations.FetchChallengeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchChallengeResponse>;
    /**
     * Fetch a specific Entity.
     */
    fetchEntity(req: operations.FetchEntityRequest, security: operations.FetchEntitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEntityResponse>;
    /**
     * Fetch a specific Factor.
     */
    fetchFactor(req: operations.FetchFactorRequest, security: operations.FetchFactorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFactorResponse>;
    /**
     * Fetch the forms for a specific Form Type.
     */
    fetchForm(req: operations.FetchFormRequest, security: operations.FetchFormSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFormResponse>;
    /**
     * Fetch a specific MessagingConfiguration.
     */
    fetchMessagingConfiguration(req: operations.FetchMessagingConfigurationRequest, security: operations.FetchMessagingConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchMessagingConfigurationResponse>;
    /**
     * Fetch a specific Rate Limit.
     */
    fetchRateLimit(req: operations.FetchRateLimitRequest, security: operations.FetchRateLimitSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRateLimitResponse>;
    /**
     * Check if a phone number exists in SafeList.
     */
    fetchSafelist(req: operations.FetchSafelistRequest, security: operations.FetchSafelistSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSafelistResponse>;
    /**
     * Fetch specific Verification Service Instance.
     */
    fetchService(req: operations.FetchServiceRequest, security: operations.FetchServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * Fetch a specific Verification
     */
    fetchVerification(req: operations.FetchVerificationRequest, security: operations.FetchVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVerificationResponse>;
    /**
     * Fetch a specific verification attempt.
     */
    fetchVerificationAttempt(req: operations.FetchVerificationAttemptRequest, security: operations.FetchVerificationAttemptSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVerificationAttemptResponse>;
    /**
     * Get a summary of how many attempts were made and how many were converted.
     */
    fetchVerificationAttemptsSummary(req: operations.FetchVerificationAttemptsSummaryRequest, security: operations.FetchVerificationAttemptsSummarySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchVerificationAttemptsSummaryResponse>;
    /**
     * Fetch a specific Webhook.
     */
    fetchWebhook(req: operations.FetchWebhookRequest, security: operations.FetchWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWebhookResponse>;
    /**
     * Retrieve a list of all Buckets for a Rate Limit.
     */
    listBucket(req: operations.ListBucketRequest, security: operations.ListBucketSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBucketResponse>;
    /**
     * Retrieve a list of all Challenges for a Factor.
     */
    listChallenge(req: operations.ListChallengeRequest, security: operations.ListChallengeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListChallengeResponse>;
    /**
     * Retrieve a list of all Entities for a Service.
     */
    listEntity(req: operations.ListEntityRequest, security: operations.ListEntitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEntityResponse>;
    /**
     * Retrieve a list of all Factors for an Entity.
     */
    listFactor(req: operations.ListFactorRequest, security: operations.ListFactorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFactorResponse>;
    /**
     * Retrieve a list of all Messaging Configurations for a Service.
     */
    listMessagingConfiguration(req: operations.ListMessagingConfigurationRequest, security: operations.ListMessagingConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListMessagingConfigurationResponse>;
    /**
     * Retrieve a list of all Rate Limits for a service.
     */
    listRateLimit(req: operations.ListRateLimitRequest, security: operations.ListRateLimitSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRateLimitResponse>;
    /**
     * Retrieve a list of all Verification Services for an account.
     */
    listService(req: operations.ListServiceRequest, security: operations.ListServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * List all the verification attempts for a given Account.
     */
    listVerificationAttempt(req: operations.ListVerificationAttemptRequest, security: operations.ListVerificationAttemptSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVerificationAttemptResponse>;
    /**
     * List all the available templates for a given Account.
     */
    listVerificationTemplate(req: operations.ListVerificationTemplateRequest, security: operations.ListVerificationTemplateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListVerificationTemplateResponse>;
    /**
     * Retrieve a list of all Webhooks for a Service.
     */
    listWebhook(req: operations.ListWebhookRequest, security: operations.ListWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWebhookResponse>;
    /**
     * Update a specific Bucket.
     */
    updateBucket(req: operations.UpdateBucketRequest, security: operations.UpdateBucketSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateBucketResponse>;
    /**
     * Verify a specific Challenge.
     */
    updateChallenge(req: operations.UpdateChallengeRequest, security: operations.UpdateChallengeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateChallengeResponse>;
    /**
     * Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
     */
    updateFactor(req: operations.UpdateFactorRequest, security: operations.UpdateFactorSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFactorResponse>;
    /**
     * Update a specific MessagingConfiguration
     */
    updateMessagingConfiguration(req: operations.UpdateMessagingConfigurationRequest, security: operations.UpdateMessagingConfigurationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateMessagingConfigurationResponse>;
    /**
     * Update a specific Rate Limit.
     */
    updateRateLimit(req: operations.UpdateRateLimitRequest, security: operations.UpdateRateLimitSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRateLimitResponse>;
    /**
     * Update a specific Verification Service.
     */
    updateService(req: operations.UpdateServiceRequest, security: operations.UpdateServiceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * Update a Verification status
     */
    updateVerification(req: operations.UpdateVerificationRequest, security: operations.UpdateVerificationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateVerificationResponse>;
    updateWebhook(req: operations.UpdateWebhookRequest, security: operations.UpdateWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
