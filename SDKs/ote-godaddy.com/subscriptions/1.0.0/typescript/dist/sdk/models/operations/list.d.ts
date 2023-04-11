import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Optional details to be included in the response
 */
export declare enum ListIncludesEnum {
    Addons = "addons",
    Relations = "relations"
}
/**
 * Property name that will be used to sort results. "-" indicates descending
 */
export declare enum ListSortEnum {
    ExpiresAt = "expiresAt",
    MinusExpiresAt = "-expiresAt"
}
export declare class ListRequest extends SpeakeasyBase {
    /**
     * The market that the response should be formatted for
     */
    xMarketId?: string;
    /**
     * Shopper ID to return subscriptions for when not using JWT
     */
    xShopperId?: string;
    /**
     * Optional details to be included in the response
     */
    includes?: ListIncludesEnum;
    /**
     * Number of Subscriptions to retrieve in this page, starting after offset
     */
    limit?: number;
    /**
     * Number of Subscriptions to skip before starting to return paged results (must be a multiple of the limit)
     */
    offset?: number;
    /**
     * Only return Subscriptions with the specified product groups
     */
    productGroupKeys?: string[];
    /**
     * Property name that will be used to sort results. "-" indicates descending
     */
    sort?: ListSortEnum;
}
export declare class ListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    /**
     * Too many requests received within interval
     */
    errorLimit?: shared.ErrorLimit;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request was successful
     */
    subscriptionList?: shared.SubscriptionList;
}
