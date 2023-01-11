import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateResendEmailAddressPathParams extends SpeakeasyBase {
    certificateId: string;
    emailAddress: string;
    emailId: string;
}
export declare class CertificateResendEmailAddressRequest extends SpeakeasyBase {
    pathParams: CertificateResendEmailAddressPathParams;
}
export declare class CertificateResendEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
