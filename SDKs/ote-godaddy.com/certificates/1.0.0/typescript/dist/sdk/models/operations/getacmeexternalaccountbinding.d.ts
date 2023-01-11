import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAcmeExternalAccountBindingPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class GetAcmeExternalAccountBindingRequest extends SpeakeasyBase {
    pathParams: GetAcmeExternalAccountBindingPathParams;
}
export declare class GetAcmeExternalAccountBindingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    externalAccountBinding?: any;
    statusCode: number;
}
