import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateCallbackDeletePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateCallbackDeleteRequest extends SpeakeasyBase {
    pathParams: CertificateCallbackDeletePathParams;
}
export declare class CertificateCallbackDeleteResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
