import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateEmailHistoryRequest extends SpeakeasyBase {
    /**
     * Certificate id to retrieve email history
     */
    certificateId: string;
}
export declare class CertificateEmailHistoryResponse extends SpeakeasyBase {
    /**
     * Email history retrieval successful
     */
    certificateEmailHistory?: shared.CertificateEmailHistory;
    contentType: string;
    /**
     * Email history not found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
