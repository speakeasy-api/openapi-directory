import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateValidateRequest extends SpeakeasyBase {
    /**
     * The certificate order info
     */
    certificateCreate: shared.CertificateCreate;
    /**
     * Setting locale for communications such as emails and error messages
     */
    xMarketId?: string;
}
export declare class CertificateValidateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
