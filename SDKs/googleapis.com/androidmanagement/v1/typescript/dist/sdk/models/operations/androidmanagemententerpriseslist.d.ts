import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AndroidmanagementEnterprisesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Specifies which Enterprise fields to return. This method only supports BASIC.
 */
export declare enum AndroidmanagementEnterprisesListViewEnum {
    EnterpriseViewUnspecified = "ENTERPRISE_VIEW_UNSPECIFIED",
    Basic = "BASIC"
}
export declare class AndroidmanagementEnterprisesListRequest extends SpeakeasyBase {
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
     * The requested page size. The actual page size may be fixed to a min or max value.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results returned by the server.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. The Cloud project ID of the EMM managing the enterprises.
     */
    projectId?: string;
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
    /**
     * Specifies which Enterprise fields to return. This method only supports BASIC.
     */
    view?: AndroidmanagementEnterprisesListViewEnum;
}
export declare class AndroidmanagementEnterprisesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listEnterprisesResponse?: shared.ListEnterprisesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
