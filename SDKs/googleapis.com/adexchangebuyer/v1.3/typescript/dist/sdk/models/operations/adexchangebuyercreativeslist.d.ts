import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdexchangebuyerCreativesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * When specified, only creatives having the given status are returned.
 */
export declare enum AdexchangebuyerCreativesListStatusFilterEnum {
    Approved = "approved",
    Disapproved = "disapproved",
    NotChecked = "not_checked"
}
export declare class AdexchangebuyerCreativesListRequest extends SpeakeasyBase {
    /**
     * When specified, only creatives for the given account ids are returned.
     */
    accountId?: number[];
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * When specified, only creatives for the given buyer creative ids are returned.
     */
    buyerCreativeId?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
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
     * When specified, only creatives having the given status are returned.
     */
    statusFilter?: AdexchangebuyerCreativesListStatusFilterEnum;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdexchangebuyerCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    creativesList?: shared.CreativesList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
