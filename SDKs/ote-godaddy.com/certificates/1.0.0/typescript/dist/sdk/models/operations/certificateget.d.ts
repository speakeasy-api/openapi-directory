import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateGetRequest extends SpeakeasyBase {
    /**
     * Certificate id to lookup
     */
    certificateId: string;
}
export declare class CertificateGetResponse extends SpeakeasyBase {
    /**
     * Certificate details retrieved
     */
    certificate?: shared.Certificate;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
