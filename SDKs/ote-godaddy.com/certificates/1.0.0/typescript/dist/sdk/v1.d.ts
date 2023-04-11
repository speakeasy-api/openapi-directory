import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all certificate actions
     *
     * @remarks
     * This method is used to retrieve all stateful actions relating to a certificate lifecycle.
     */
    certificateActionRetrieve(req: operations.CertificateActionRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.CertificateActionRetrieveResponse>;
    /**
     * Add alternate email address
     *
     * @remarks
     * This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.
     */
    certificateAlternateEmailAddress(req: operations.CertificateAlternateEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.CertificateAlternateEmailAddressResponse>;
    /**
     * Unregister system callback
     *
     * @remarks
     * Unregister the callback for a particular certificate.
     */
    certificateCallbackDelete(req: operations.CertificateCallbackDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCallbackDeleteResponse>;
    /**
     * Retrieve system stateful action callback url
     *
     * @remarks
     * This method is used to retrieve the registered callback url for a certificate.
     */
    certificateCallbackGet(req: operations.CertificateCallbackGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCallbackGetResponse>;
    /**
     * Register of certificate action callback
     *
     * @remarks
     * This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.
     */
    certificateCallbackReplace(req: operations.CertificateCallbackReplaceRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCallbackReplaceResponse>;
    /**
     * Cancel a pending certificate
     *
     * @remarks
     * Use the cancel call to cancel a pending certificate order.
     */
    certificateCancel(req: operations.CertificateCancelRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCancelResponse>;
    /**
     * Create a pending order for certificate
     *
     * @remarks
     * <p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>
     */
    certificateCreate(req: operations.CertificateCreateRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCreateResponse>;
    /**
     * Download certificate
     */
    certificateDownload(req: operations.CertificateDownloadRequest, config?: AxiosRequestConfig): Promise<operations.CertificateDownloadResponse>;
    /**
     * Download certificate by entitlement
     */
    certificateDownloadEntitlement(req: operations.CertificateDownloadEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.CertificateDownloadEntitlementResponse>;
    /**
     * Retrieve email history
     *
     * @remarks
     * This method can be used to retrieve all emails sent for a certificate.
     */
    certificateEmailHistory(req: operations.CertificateEmailHistoryRequest, config?: AxiosRequestConfig): Promise<operations.CertificateEmailHistoryResponse>;
    /**
     * Retrieve certificate details
     *
     * @remarks
     * Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.
     */
    certificateGet(req: operations.CertificateGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificateGetResponse>;
    /**
     * Search for certificate details by entitlement
     *
     * @remarks
     * Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.
     */
    certificateGetEntitlement(req: operations.CertificateGetEntitlementRequest, config?: AxiosRequestConfig): Promise<operations.CertificateGetEntitlementResponse>;
    /**
     * Reissue active certificate
     *
     * @remarks
     * <p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>
     */
    certificateReissue(req: operations.CertificateReissueRequest, config?: AxiosRequestConfig): Promise<operations.CertificateReissueResponse>;
    /**
     * Renew active certificate
     *
     * @remarks
     * Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>
     */
    certificateRenew(req: operations.CertificateRenewRequest, config?: AxiosRequestConfig): Promise<operations.CertificateRenewResponse>;
    /**
     * Resend an email
     *
     * @remarks
     * This method can be used to resend emails by providing the certificate id and the email id
     */
    certificateResendEmail(req: operations.CertificateResendEmailRequest, config?: AxiosRequestConfig): Promise<operations.CertificateResendEmailResponse>;
    /**
     * Resend email to email address
     *
     * @remarks
     * This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address
     */
    certificateResendEmailAddress(req: operations.CertificateResendEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.CertificateResendEmailAddressResponse>;
    /**
     * Revoke active certificate
     *
     * @remarks
     * Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.
     */
    certificateRevoke(req: operations.CertificateRevokeRequest, config?: AxiosRequestConfig): Promise<operations.CertificateRevokeResponse>;
    /**
     * Get Site seal
     *
     * @remarks
     * <p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>
     */
    certificateSitesealGet(req: operations.CertificateSitesealGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificateSitesealGetResponse>;
    /**
     * Validate a pending order for certificate
     */
    certificateValidate(req: operations.CertificateValidateRequest, config?: AxiosRequestConfig): Promise<operations.CertificateValidateResponse>;
    /**
     * Check Domain Control
     *
     * @remarks
     * Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452
     */
    certificateVerifydomaincontrol(req: operations.CertificateVerifydomaincontrolRequest, config?: AxiosRequestConfig): Promise<operations.CertificateVerifydomaincontrolResponse>;
}
