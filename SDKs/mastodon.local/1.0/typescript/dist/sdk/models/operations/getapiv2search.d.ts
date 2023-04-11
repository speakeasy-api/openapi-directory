import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SearchSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
/**
 * Enum(accounts, hashtags, statuses)
 */
export declare enum GetApiV2SearchTypeEnum {
    Accounts = "accounts",
    Hashtags = "hashtags",
    Statuses = "statuses"
}
export declare class GetApiV2SearchRequest extends SpeakeasyBase {
    /**
     * If provided, statuses returned will be authored only by this account
     */
    accountId?: string;
    /**
     * Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags.
     */
    excludeUnreviewed?: boolean;
    /**
     * Only who the user is following. Defaults to false.
     */
    following?: boolean;
    /**
     * Maximum number of results. Defaults to 40.
     */
    limit?: number;
    /**
     * Return results older than this id
     */
    maxId?: string;
    /**
     * Return results immediately newer than this id
     */
    minId?: string;
    /**
     * Offset in search results. Used for pagination. Defaults to 0.
     */
    offset?: number;
    /**
     * What to search for
     */
    q: string;
    /**
     * Attempt WebFinger lookup.
     */
    resolve?: string;
    /**
     * Enum(accounts, hashtags, statuses)
     */
    type?: GetApiV2SearchTypeEnum;
}
/**
 * Result
 */
export declare class GetApiV2Search200ApplicationJSON extends SpeakeasyBase {
    accounts?: shared.Account[];
    hashtags?: shared.Status[];
    statuses?: shared.Tag[];
}
export declare class GetApiV2SearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Result
     */
    getApiV2Search200ApplicationJSONObject?: GetApiV2Search200ApplicationJSON;
}
