import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1TransactionData } from "./googlecloudrecaptchaenterprisev1transactiondata";
/**
 * The event being assessed.
 */
export declare class GoogleCloudRecaptchaenterpriseV1Event extends SpeakeasyBase {
    /**
     * Optional. The expected action for this type of event. This should be the same action provided at token generation time on client-side platforms already integrated with recaptcha enterprise.
     */
    expectedAction?: string;
    /**
     * Optional. Flag for a reCAPTCHA express request for an assessment without a token. If enabled, `site_key` must reference a SCORE key with WAF feature set to EXPRESS.
     */
    express?: boolean;
    /**
     * Optional. Flag for enabling firewall policy config assessment. If this flag is enabled, the firewall policy will be evaluated and a suggested firewall action will be returned in the response.
     */
    firewallPolicyEvaluation?: boolean;
    /**
     * Optional. Unique stable hashed user identifier for the request. The identifier must be hashed using hmac-sha256 with stable secret.
     */
    hashedAccountId?: string;
    /**
     * Optional. HTTP header information about the request.
     */
    headers?: string[];
    /**
     * Optional. Optional JA3 fingerprint for SSL clients.
     */
    ja3?: string;
    /**
     * Optional. The URI resource the user requested that triggered an assessment.
     */
    requestedUri?: string;
    /**
     * Optional. The site key that was used to invoke reCAPTCHA Enterprise on your site and generate the token.
     */
    siteKey?: string;
    /**
     * Optional. The user response token provided by the reCAPTCHA Enterprise client-side integration on your site.
     */
    token?: string;
    /**
     * Transaction data associated with a payment protected by reCAPTCHA Enterprise. All fields are optional.
     */
    transactionData?: GoogleCloudRecaptchaenterpriseV1TransactionData;
    /**
     * Optional. The user agent present in the request from the user's device related to this event.
     */
    userAgent?: string;
    /**
     * Optional. The IP address in the request from the user's device related to this event.
     */
    userIpAddress?: string;
    /**
     * Optional. Flag for running WAF token assessment. If enabled, the token must be specified, and have been created by a WAF-enabled key.
     */
    wafTokenAssessment?: boolean;
}
