import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainInformationByCertificateIdRequest extends SpeakeasyBase {
    /**
     * Certificate id to lookup
     */
    certificateId: string;
    /**
     * An identifier for a customer
     */
    customerId: string;
}
export declare class GetDomainInformationByCertificateIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Domain verification status list for specified certificateId.
     */
    domainVerificationSummaries?: shared.DomainVerificationSummary[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
