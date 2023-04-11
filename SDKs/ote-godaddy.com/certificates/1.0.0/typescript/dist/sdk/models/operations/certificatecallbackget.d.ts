import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateCallbackGetRequest extends SpeakeasyBase {
    /**
     * Certificate id to register for stateful action callback
     */
    certificateId: string;
}
export declare class CertificateCallbackGetResponse extends SpeakeasyBase {
    /**
     * Callback registered
     */
    certificateCallback?: shared.CertificateCallback;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
