import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateGetEntitlementRequest extends SpeakeasyBase {
    /**
     * Entitlement id to lookup
     */
    entitlementId: string;
    /**
     * Fetch only the most recent certificate
     */
    latest?: boolean;
}
export declare class CertificateGetEntitlementResponse extends SpeakeasyBase {
    /**
     * Certificate details retrieved
     */
    certificates?: shared.Certificate[];
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
