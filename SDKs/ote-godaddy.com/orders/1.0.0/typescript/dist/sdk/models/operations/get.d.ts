import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class GetHeaders extends SpeakeasyBase {
    xMarketId?: string;
    xShopperId?: string;
}
export declare class GetRequest extends SpeakeasyBase {
    pathParams: GetPathParams;
    headers: GetHeaders;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    order?: any;
    statusCode: number;
}
