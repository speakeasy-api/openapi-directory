import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Atomically gets the AppAttestConfigs for the specified list of apps.
     */
    firebaseappcheckProjectsAppsAppAttestConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse>;
    /**
     * Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
     */
    firebaseappcheckProjectsAppsDebugTokensCreate(req: operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest, security: operations.FirebaseappcheckProjectsAppsDebugTokensCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse>;
    /**
     * Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
     */
    firebaseappcheckProjectsAppsDebugTokensDelete(req: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest, security: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse>;
    /**
     * Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
     */
    firebaseappcheckProjectsAppsDebugTokensList(req: operations.FirebaseappcheckProjectsAppsDebugTokensListRequest, security: operations.FirebaseappcheckProjectsAppsDebugTokensListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDebugTokensListResponse>;
    /**
     * Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
     */
    firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse>;
    /**
     * Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeAppAttestAssertion(req: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest, security: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse>;
    /**
     * Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
     */
    firebaseappcheckProjectsAppsExchangeAppAttestAttestation(req: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest, security: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse>;
    /**
     * Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeCustomToken(req: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse>;
    /**
     * Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
     */
    firebaseappcheckProjectsAppsExchangeDebugToken(req: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse>;
    /**
     * Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeDeviceCheckToken(req: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse>;
    /**
     * Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangePlayIntegrityToken(req: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse>;
    /**
     * Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken(req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse>;
    /**
     * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeRecaptchaToken(req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse>;
    /**
     * Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeRecaptchaV3Token(req: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse>;
    /**
     * Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
     */
    firebaseappcheckProjectsAppsExchangeSafetyNetToken(req: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest, security: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse>;
    /**
     * Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
     */
    firebaseappcheckProjectsAppsGenerateAppAttestChallenge(req: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest, security: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse>;
    /**
     * Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
     */
    firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(req: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest, security: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse>;
    /**
     * Atomically gets the PlayIntegrityConfigs for the specified list of apps.
     */
    firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse>;
    /**
     * Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
     */
    firebaseappcheckProjectsAppsRecaptchaConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse>;
    /**
     * Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
     */
    firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse>;
    /**
     * Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
     */
    firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse>;
    /**
     * Atomically gets the SafetyNetConfigs for the specified list of apps.
     */
    firebaseappcheckProjectsAppsSafetyNetConfigBatchGet(req: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest, security: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse>;
    /**
     * Atomically updates the specified Service configurations.
     */
    firebaseappcheckProjectsServicesBatchUpdate(req: operations.FirebaseappcheckProjectsServicesBatchUpdateRequest, security: operations.FirebaseappcheckProjectsServicesBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesBatchUpdateResponse>;
    /**
     * Gets the Service configuration for the specified service name.
     */
    firebaseappcheckProjectsServicesGet(req: operations.FirebaseappcheckProjectsServicesGetRequest, security: operations.FirebaseappcheckProjectsServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesGetResponse>;
    /**
     * Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
     */
    firebaseappcheckProjectsServicesList(req: operations.FirebaseappcheckProjectsServicesListRequest, security: operations.FirebaseappcheckProjectsServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesListResponse>;
    /**
     * Updates the specified Service configuration.
     */
    firebaseappcheckProjectsServicesPatch(req: operations.FirebaseappcheckProjectsServicesPatchRequest, security: operations.FirebaseappcheckProjectsServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.FirebaseappcheckProjectsServicesPatchResponse>;
}
