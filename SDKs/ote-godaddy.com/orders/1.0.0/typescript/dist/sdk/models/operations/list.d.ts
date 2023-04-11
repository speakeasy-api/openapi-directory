import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Property name that will be used to sort results. '-' indicates descending
 */
export declare enum ListSortEnum {
    CreatedAt = "createdAt",
    MinusCreatedAt = "-createdAt",
    OrderId = "orderId",
    MinusOrderId = "-orderId",
    PricingTotal = "pricing.total",
    MinusPricingTotal = "-pricing.total"
}
export declare class ListRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Market in which the request is happening
     */
    xMarketId?: string;
    /**
     * Shopper ID to be operated on, if different from JWT<br/><b>Reseller subaccounts are not supported</b>
     */
    xShopperId?: string;
    /**
     * Domain name to use as the filter of results
     */
    domain?: string;
    /**
     * Maximum number of items to return
     */
    limit?: number;
    /**
     * Number of results to skip for pagination
     */
    offset?: number;
    /**
     * Parent order id to use as the filter of results
     */
    parentOrderId?: string;
    /**
     * Payment profile id to use as the filter of results
     */
    paymentProfileId?: number;
    /**
     * End of range indicating what time-frame should be returned. Inclusive
     */
    periodEnd?: string;
    /**
     * Start of range indicating what time-frame should be returned. Inclusive
     */
    periodStart?: string;
    /**
     * Product group id to use as the filter of results
     */
    productGroupId?: number;
    /**
     * Property name that will be used to sort results. '-' indicates descending
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
    /**
     * Request was successful
     */
    orderList?: shared.OrderList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
