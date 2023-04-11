import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCertificateDetailByCertIdentifierRequest extends SpeakeasyBase {
    /**
     * Certificate id to lookup
     */
    certificateId: string;
    /**
     * An identifier for a customer
     */
    customerId: string;
}
export declare class GetCertificateDetailByCertIdentifierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Certificate details retrieved
     */
    certificateDetailV2?: shared.CertificateDetailV2;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
