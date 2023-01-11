import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateRevokePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateRevokeRequest extends SpeakeasyBase {
    pathParams: CertificateRevokePathParams;
    request: any;
}
export declare class CertificateRevokeResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
