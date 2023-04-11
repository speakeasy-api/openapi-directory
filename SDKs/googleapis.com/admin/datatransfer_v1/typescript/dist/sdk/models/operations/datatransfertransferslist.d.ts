import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatatransferTransfersListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DatatransferTransfersListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DatatransferTransfersListSecurity extends SpeakeasyBase {
    option1?: DatatransferTransfersListSecurityOption1;
    option2?: DatatransferTransfersListSecurityOption2;
}
export declare class DatatransferTransfersListRequest extends SpeakeasyBase {
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
     * Immutable ID of the Google Workspace account.
     */
    customerId?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of results to return. Default is 100.
     */
    maxResults?: number;
    /**
     * Destination user's profile ID.
     */
    newOwnerUserId?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Source user's profile ID.
     */
    oldOwnerUserId?: string;
    /**
     * Token to specify the next page in the list.
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
     * Status of the transfer.
     */
    status?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DatatransferTransfersListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    dataTransfersListResponse?: shared.DataTransfersListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
