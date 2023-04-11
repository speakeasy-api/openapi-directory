import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
 */
export declare class SubordinateConfigChain extends SpeakeasyBase {
    /**
     * Required. Expected to be in leaf-to-root order according to RFC 5246.
     */
    pemCertificates?: string[];
}
