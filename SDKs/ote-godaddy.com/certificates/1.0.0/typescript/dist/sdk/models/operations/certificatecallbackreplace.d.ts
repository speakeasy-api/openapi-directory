import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateCallbackReplacePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateCallbackReplaceQueryParams extends SpeakeasyBase {
    callbackUrl: string;
}
export declare class CertificateCallbackReplaceRequest extends SpeakeasyBase {
    pathParams: CertificateCallbackReplacePathParams;
    queryParams: CertificateCallbackReplaceQueryParams;
}
export declare class CertificateCallbackReplaceResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
