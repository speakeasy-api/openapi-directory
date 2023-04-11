import { SpeakeasyBase } from "../../../internal/utils";
import { CertChain } from "./certchain";
/**
 * Response message for CertificateAuthorityService.FetchCaCerts.
 */
export declare class FetchCaCertsResponse extends SpeakeasyBase {
    /**
     * The PEM encoded CA certificate chains of all ACTIVE CertificateAuthority resources in this CaPool.
     */
    caCerts?: CertChain[];
}
