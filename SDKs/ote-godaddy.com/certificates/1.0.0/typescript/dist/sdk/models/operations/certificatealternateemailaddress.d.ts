import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateAlternateEmailAddressPathParams extends SpeakeasyBase {
    certificateId: string;
    emailAddress: string;
}
export declare class CertificateAlternateEmailAddressRequest extends SpeakeasyBase {
    pathParams: CertificateAlternateEmailAddressPathParams;
}
export declare class CertificateAlternateEmailAddressResponse extends SpeakeasyBase {
    certificateEmailHistory?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
