import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateRevokeRequest extends SpeakeasyBase {
    /**
     * The certificate revocation request
     */
    certificateRevoke: shared.CertificateRevoke;
    /**
     * Certificate id to revoke
     */
    certificateId: string;
}
export declare class CertificateRevokeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
