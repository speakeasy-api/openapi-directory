import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class CancelHeaders extends SpeakeasyBase {
    xShopperId?: string;
}
export declare class CancelRequest extends SpeakeasyBase {
    pathParams: CancelPathParams;
    headers: CancelHeaders;
}
export declare class CancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    statusCode: number;
}
