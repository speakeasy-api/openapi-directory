import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudBillingBudgetsV1BudgetInput?: shared.GoogleCloudBillingBudgetsV1BudgetInput;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
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
     * Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`.
     */
    parent: string;
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
export declare class BillingbudgetsBillingAccountsBudgetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudBillingBudgetsV1Budget?: shared.GoogleCloudBillingBudgetsV1Budget;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
