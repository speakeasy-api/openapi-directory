import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateCreateRequest extends SpeakeasyBase {
    /**
     * The certificate order information
     */
    certificateCreate: shared.CertificateCreate;
    /**
     * Setting locale for communications such as emails and error messages
     */
    xMarketId?: string;
}
export declare class CertificateCreateResponse extends SpeakeasyBase {
    /**
     * Request was successful
     */
    certificateIdentifier?: shared.CertificateIdentifier;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
