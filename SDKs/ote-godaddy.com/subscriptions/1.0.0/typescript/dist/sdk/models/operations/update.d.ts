import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class UpdateRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    subscriptionUpdate?: any;
    subscriptionUpdate1?: any;
    textXML: Uint8Array;
}
export declare class UpdateRequest extends SpeakeasyBase {
    pathParams: UpdatePathParams;
    request: UpdateRequests;
}
export declare class UpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    statusCode: number;
}
