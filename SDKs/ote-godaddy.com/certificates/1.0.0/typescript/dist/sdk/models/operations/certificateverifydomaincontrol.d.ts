import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateVerifydomaincontrolPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateVerifydomaincontrolRequest extends SpeakeasyBase {
    pathParams: CertificateVerifydomaincontrolPathParams;
}
export declare class CertificateVerifydomaincontrolResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
