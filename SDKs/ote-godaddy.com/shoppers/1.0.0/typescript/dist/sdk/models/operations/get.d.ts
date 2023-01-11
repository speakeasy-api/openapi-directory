import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPathParams extends SpeakeasyBase {
    shopperId: string;
}
export declare enum GetIncludesEnum {
    CustomerId = "customerId"
}
export declare class GetQueryParams extends SpeakeasyBase {
    includes?: GetIncludesEnum[];
}
export declare class GetRequest extends SpeakeasyBase {
    pathParams: GetPathParams;
    queryParams: GetQueryParams;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    shopper?: any;
    statusCode: number;
}
