import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatusPathParams extends SpeakeasyBase {
    shopperId: string;
}
export declare class GetStatusQueryParams extends SpeakeasyBase {
    auditClientIp: string;
}
export declare class GetStatusRequest extends SpeakeasyBase {
    pathParams: GetStatusPathParams;
    queryParams: GetStatusQueryParams;
}
export declare class GetStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    shopperStatus?: any;
    statusCode: number;
}
