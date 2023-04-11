import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDomainDetailsByDomainRequest extends SpeakeasyBase {
    /**
     * Certificate id to lookup
     */
    certificateId: string;
    /**
     * An identifier for a customer
     */
    customerId: string;
    /**
     * A valid domain name in the certificate request
     */
    domain: string;
}
export declare class GetDomainDetailsByDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details.
     */
    domainVerificationDetail?: shared.DomainVerificationDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
