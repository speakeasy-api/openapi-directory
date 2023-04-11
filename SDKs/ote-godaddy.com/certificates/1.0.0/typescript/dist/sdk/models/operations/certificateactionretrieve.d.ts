import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateActionRetrieveRequest extends SpeakeasyBase {
    /**
     * Certificate id to register for callback
     */
    certificateId: string;
}
export declare class CertificateActionRetrieveResponse extends SpeakeasyBase {
    /**
     * Action retrieval successful
     */
    arrayOfCertificateAction?: shared.CertificateAction[];
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
