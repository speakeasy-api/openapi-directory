import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateResendEmailAddressRequest extends SpeakeasyBase {
    /**
     * Certificate id to resend emails
     */
    certificateId: string;
    /**
     * Specific email address to resend email
     */
    emailAddress: string;
    /**
     * Email id for email to resend
     */
    emailId: string;
}
export declare class CertificateResendEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Certificate not found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
