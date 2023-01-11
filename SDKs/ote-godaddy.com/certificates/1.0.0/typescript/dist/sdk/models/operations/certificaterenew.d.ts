import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateRenewPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateRenewRequest extends SpeakeasyBase {
    pathParams: CertificateRenewPathParams;
    request: any;
}
export declare class CertificateRenewResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
