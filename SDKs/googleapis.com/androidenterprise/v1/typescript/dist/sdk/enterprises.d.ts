import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Enterprises {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
     */
    androidenterpriseEnterprisesAcknowledgeNotificationSet(req: operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetRequest, security: operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesAcknowledgeNotificationSetResponse>;
    /**
     * Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
     */
    androidenterpriseEnterprisesCompleteSignup(req: operations.AndroidenterpriseEnterprisesCompleteSignupRequest, security: operations.AndroidenterpriseEnterprisesCompleteSignupSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesCompleteSignupResponse>;
    /**
     * Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
     */
    androidenterpriseEnterprisesCreateEnrollmentToken(req: operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest, security: operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse>;
    /**
     * Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
     */
    androidenterpriseEnterprisesCreateWebToken(req: operations.AndroidenterpriseEnterprisesCreateWebTokenRequest, security: operations.AndroidenterpriseEnterprisesCreateWebTokenSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesCreateWebTokenResponse>;
    /**
     * Enrolls an enterprise with the calling EMM.
     */
    androidenterpriseEnterprisesEnroll(req: operations.AndroidenterpriseEnterprisesEnrollRequest, security: operations.AndroidenterpriseEnterprisesEnrollSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesEnrollResponse>;
    /**
     * Generates a sign-up URL.
     */
    androidenterpriseEnterprisesGenerateSignupUrl(req: operations.AndroidenterpriseEnterprisesGenerateSignupUrlRequest, security: operations.AndroidenterpriseEnterprisesGenerateSignupUrlSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGenerateSignupUrlResponse>;
    /**
     * Retrieves the name and domain of an enterprise.
     */
    androidenterpriseEnterprisesGet(req: operations.AndroidenterpriseEnterprisesGetRequest, security: operations.AndroidenterpriseEnterprisesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGetResponse>;
    /**
     * Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
     */
    androidenterpriseEnterprisesGetServiceAccount(req: operations.AndroidenterpriseEnterprisesGetServiceAccountRequest, security: operations.AndroidenterpriseEnterprisesGetServiceAccountSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGetServiceAccountResponse>;
    /**
     * Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
     */
    androidenterpriseEnterprisesGetStoreLayout(req: operations.AndroidenterpriseEnterprisesGetStoreLayoutRequest, security: operations.AndroidenterpriseEnterprisesGetStoreLayoutSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesGetStoreLayoutResponse>;
    /**
     * Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
     */
    androidenterpriseEnterprisesList(req: operations.AndroidenterpriseEnterprisesListRequest, security: operations.AndroidenterpriseEnterprisesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesListResponse>;
    /**
     * Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
     */
    androidenterpriseEnterprisesPullNotificationSet(req: operations.AndroidenterpriseEnterprisesPullNotificationSetRequest, security: operations.AndroidenterpriseEnterprisesPullNotificationSetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesPullNotificationSetResponse>;
    /**
     * Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
     */
    androidenterpriseEnterprisesSendTestPushNotification(req: operations.AndroidenterpriseEnterprisesSendTestPushNotificationRequest, security: operations.AndroidenterpriseEnterprisesSendTestPushNotificationSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesSendTestPushNotificationResponse>;
    /**
     * Sets the account that will be used to authenticate to the API as the enterprise.
     */
    androidenterpriseEnterprisesSetAccount(req: operations.AndroidenterpriseEnterprisesSetAccountRequest, security: operations.AndroidenterpriseEnterprisesSetAccountSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesSetAccountResponse>;
    /**
     * Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
     */
    androidenterpriseEnterprisesSetStoreLayout(req: operations.AndroidenterpriseEnterprisesSetStoreLayoutRequest, security: operations.AndroidenterpriseEnterprisesSetStoreLayoutSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesSetStoreLayoutResponse>;
    /**
     * Unenrolls an enterprise from the calling EMM.
     */
    androidenterpriseEnterprisesUnenroll(req: operations.AndroidenterpriseEnterprisesUnenrollRequest, security: operations.AndroidenterpriseEnterprisesUnenrollSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseEnterprisesUnenrollResponse>;
}
