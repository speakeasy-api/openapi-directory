import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomerCertificatesByCustomerIdRequest extends SpeakeasyBase {
    /**
     * An identifier for a customer
     */
    customerId: string;
    /**
     * Maximum number of items to return
     */
    limit?: number;
    /**
     * Number of results to skip for pagination
     */
    offset?: number;
}
export declare class GetCustomerCertificatesByCustomerIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * Customer certificate information retrieved.
     */
    certificateSummariesV2?: shared.CertificateSummariesV2;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
