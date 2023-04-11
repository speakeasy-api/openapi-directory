import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateRenewRequest extends SpeakeasyBase {
    /**
     * The renew request info
     */
    certificateRenew: shared.CertificateRenew;
    /**
     * Certificate id to renew
     */
    certificateId: string;
}
export declare class CertificateRenewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
