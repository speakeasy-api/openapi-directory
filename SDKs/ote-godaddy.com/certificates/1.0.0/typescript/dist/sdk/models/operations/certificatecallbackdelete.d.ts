import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateCallbackDeleteRequest extends SpeakeasyBase {
    /**
     * Certificate id to unregister callback
     */
    certificateId: string;
}
export declare class CertificateCallbackDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
