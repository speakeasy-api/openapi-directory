import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateVerifydomaincontrolRequest extends SpeakeasyBase {
    /**
     * Certificate id to lookup
     */
    certificateId: string;
}
export declare class CertificateVerifydomaincontrolResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
