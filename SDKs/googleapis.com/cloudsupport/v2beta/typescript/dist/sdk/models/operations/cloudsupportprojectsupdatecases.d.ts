import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudsupportProjectsUpdateCasesSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudsupportProjectsUpdateCasesRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    caseInput?: shared.CaseInput;
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
     * The resource name for the case.
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
     * A list of attributes of the case object that should be updated as part of this request. Supported values are severity, display_name, and subscriber_email_addresses. If no fields are specified, all supported fields are updated. WARNING: If you do not provide a field mask, then you may accidentally clear some fields. For example, if you leave field mask empty and do not provide a value for subscriber_email_addresses, then subscriber_email_addresses is updated to empty.
     */
    updateMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudsupportProjectsUpdateCasesResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    case?: shared.Case;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
