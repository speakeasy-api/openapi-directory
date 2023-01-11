import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateCallbackGetPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateCallbackGetRequest extends SpeakeasyBase {
    pathParams: CertificateCallbackGetPathParams;
}
export declare class CertificateCallbackGetResponse extends SpeakeasyBase {
    certificateCallback?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
