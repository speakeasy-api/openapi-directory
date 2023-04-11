import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateDownloadEntitlementRequest extends SpeakeasyBase {
    /**
     * Entitlement id to download
     */
    entitlementId: string;
}
export declare class CertificateDownloadEntitlementResponse extends SpeakeasyBase {
    /**
     * Certificate retrieved
     */
    certificateBundle?: shared.CertificateBundle;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
