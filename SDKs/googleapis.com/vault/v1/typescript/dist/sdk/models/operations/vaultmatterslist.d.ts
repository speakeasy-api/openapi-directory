import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VaultMattersListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class VaultMattersListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class VaultMattersListSecurity extends SpeakeasyBase {
    option1?: VaultMattersListSecurityOption1;
    option2?: VaultMattersListSecurityOption2;
}
/**
 * If set, lists only matters with the specified state. The default lists matters of all states.
 */
export declare enum VaultMattersListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED",
    Deleted = "DELETED"
}
/**
 * Specifies how much information about the matter to return in response.
 */
export declare enum VaultMattersListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class VaultMattersListRequest extends SpeakeasyBase {
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
     * The number of matters to return in the response. Default and maximum are 100.
     */
    pageSize?: number;
    /**
     * The pagination token as returned in the response.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If set, lists only matters with the specified state. The default lists matters of all states.
     */
    state?: VaultMattersListStateEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Specifies how much information about the matter to return in response.
     */
    view?: VaultMattersListViewEnum;
}
export declare class VaultMattersListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listMattersResponse?: shared.ListMattersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
