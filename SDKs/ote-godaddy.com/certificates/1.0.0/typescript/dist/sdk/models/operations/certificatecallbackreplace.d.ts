import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateCallbackReplaceRequest extends SpeakeasyBase {
    /**
     * Callback url registered/replaced to receive stateful actions
     */
    callbackUrl: string;
    /**
     * Certificate id to register/replace for callback
     */
    certificateId: string;
}
export declare class CertificateCallbackReplaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
