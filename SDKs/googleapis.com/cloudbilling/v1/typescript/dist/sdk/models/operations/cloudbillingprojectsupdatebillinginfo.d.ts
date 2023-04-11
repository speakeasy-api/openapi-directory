import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudbillingProjectsUpdateBillingInfoSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudbillingProjectsUpdateBillingInfoSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudbillingProjectsUpdateBillingInfoSecurity extends SpeakeasyBase {
    option1?: CloudbillingProjectsUpdateBillingInfoSecurityOption1;
    option2?: CloudbillingProjectsUpdateBillingInfoSecurityOption2;
}
export declare class CloudbillingProjectsUpdateBillingInfoRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    projectBillingInfo?: shared.ProjectBillingInfo;
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
     * Required. The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.
     */
    name: string;
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
export declare class CloudbillingProjectsUpdateBillingInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    projectBillingInfo?: shared.ProjectBillingInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
