import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ListSortEnum {
    ExpiresAt = "expiresAt",
    MinusExpiresAt = "-expiresAt"
}
export declare class ListQueryParams extends SpeakeasyBase {
    includes?: string[];
    limit?: number;
    offset?: number;
    productGroupKeys?: string[];
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
    statusCode: number;
    subscriptionList?: any;
}
