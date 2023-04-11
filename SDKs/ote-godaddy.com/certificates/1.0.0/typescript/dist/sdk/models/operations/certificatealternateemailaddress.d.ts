import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateAlternateEmailAddressRequest extends SpeakeasyBase {
    /**
     * Certificate id to resend emails
     */
    certificateId: string;
    /**
     * Specific email address to resend email
     */
    emailAddress: string;
}
export declare class CertificateAlternateEmailAddressResponse extends SpeakeasyBase {
    /**
     * Alternate email address added and emails re-sent
     */
    certificateEmailHistory?: shared.CertificateEmailHistory;
    contentType: string;
    /**
     * Certificate not found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
