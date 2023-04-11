import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateResendEmailRequest extends SpeakeasyBase {
    /**
     * Certificate id to resend email
     */
    certificateId: string;
    /**
     * Email id for email to resend
     */
    emailId: string;
}
export declare class CertificateResendEmailResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Certificate not found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
