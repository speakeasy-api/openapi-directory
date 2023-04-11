import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest extends SpeakeasyBase {
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
     * Optional. Maximum number of items to return. The server may return fewer items. If left blank, the server may return any number of items.
     */
    pageSize?: number;
    /**
     * Optional. If left blank, returns the first page. To enumerate all items, use the next_page_token from your previous list operation.
     */
    pageToken?: string;
    /**
     * Required. Example: "organizations/256"
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
export declare class AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listGcpUserAccessBindingsResponse?: shared.ListGcpUserAccessBindingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
