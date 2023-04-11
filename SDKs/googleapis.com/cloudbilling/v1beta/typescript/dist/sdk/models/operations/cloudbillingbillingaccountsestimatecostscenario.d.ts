import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioSecurity extends SpeakeasyBase {
    option1?: CloudbillingBillingAccountsEstimateCostScenarioSecurityOption1;
    option2?: CloudbillingBillingAccountsEstimateCostScenarioSecurityOption2;
    option3?: CloudbillingBillingAccountsEstimateCostScenarioSecurityOption3;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    estimateCostScenarioForBillingAccountRequest?: shared.EstimateCostScenarioForBillingAccountRequest;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Resource name of the billing account for the cost estimate. The resource name has the form `billingAccounts/{billing_acount_id}`. For example, `billingAccounts/012345-567890-ABCDEF` is the resource name for billing account `012345-567890-ABCDEF`. Must be specified.
     */
    billingAccount: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudbillingBillingAccountsEstimateCostScenarioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    estimateCostScenarioForBillingAccountResponse?: shared.EstimateCostScenarioForBillingAccountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
