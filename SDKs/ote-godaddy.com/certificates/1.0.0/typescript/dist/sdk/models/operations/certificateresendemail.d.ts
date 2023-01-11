import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateResendEmailPathParams extends SpeakeasyBase {
    certificateId: string;
    emailId: string;
}
export declare class CertificateResendEmailRequest extends SpeakeasyBase {
    pathParams: CertificateResendEmailPathParams;
}
export declare class CertificateResendEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
