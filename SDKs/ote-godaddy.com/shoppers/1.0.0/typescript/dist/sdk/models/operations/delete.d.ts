import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePathParams extends SpeakeasyBase {
    shopperId: string;
}
export declare class DeleteQueryParams extends SpeakeasyBase {
    auditClientIp: string;
}
export declare class DeleteRequest extends SpeakeasyBase {
    pathParams: DeletePathParams;
    queryParams: DeleteQueryParams;
}
export declare class DeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    statusCode: number;
}
