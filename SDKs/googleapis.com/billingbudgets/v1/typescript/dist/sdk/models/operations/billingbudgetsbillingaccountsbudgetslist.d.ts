import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BillingbudgetsBillingAccountsBudgetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BillingbudgetsBillingAccountsBudgetsListSecurity extends SpeakeasyBase {
    option1?: BillingbudgetsBillingAccountsBudgetsListSecurityOption1;
    option2?: BillingbudgetsBillingAccountsBudgetsListSecurityOption2;
}
export declare class BillingbudgetsBillingAccountsBudgetsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
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
     * Optional. The maximum number of budgets to return per page. The default and maximum value are 100.
     */
    pageSize?: number;
    /**
     * Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the next page of data.
     */
    pageToken?: string;
    /**
     * Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`.
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
export declare class BillingbudgetsBillingAccountsBudgetsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudBillingBudgetsV1ListBudgetsResponse?: shared.GoogleCloudBillingBudgetsV1ListBudgetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
