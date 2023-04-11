import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateCancelRequest extends SpeakeasyBase {
    /**
     * Certificate id to cancel
     */
    certificateId: string;
}
export declare class CertificateCancelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authentication info not sent or invalid
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
