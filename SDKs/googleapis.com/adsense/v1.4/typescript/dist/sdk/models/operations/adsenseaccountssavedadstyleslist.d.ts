import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsSavedadstylesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsSavedadstylesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsSavedadstylesListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsSavedadstylesListSecurityOption1;
    option2?: AdsenseAccountsSavedadstylesListSecurityOption2;
}
export declare class AdsenseAccountsSavedadstylesListRequest extends SpeakeasyBase {
    /**
     * Account for which to list saved ad styles.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of saved ad styles to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsSavedadstylesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    savedAdStyles?: shared.SavedAdStyles;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
