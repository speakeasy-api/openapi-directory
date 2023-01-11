import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListSortEnum {
    CreatedAt = "createdAt",
    MinusCreatedAt = "-createdAt",
    OrderId = "orderId",
    MinusOrderId = "-orderId",
    PricingTotal = "pricing.total",
    MinusPricingTotal = "-pricing.total"
}
export declare class ListQueryParams extends SpeakeasyBase {
    domain?: string;
    limit?: number;
    offset?: number;
    parentOrderId?: string;
    paymentProfileId?: number;
    periodEnd?: string;
    periodStart?: string;
    productGroupId?: number;
    sort?: ListSortEnum;
}
export declare class ListHeaders extends SpeakeasyBase {
    xMarketId?: string;
    xShopperId?: string;
}
export declare class ListRequest extends SpeakeasyBase {
    queryParams: ListQueryParams;
    headers: ListHeaders;
}
export declare class ListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    orderList?: any;
    statusCode: number;
}
