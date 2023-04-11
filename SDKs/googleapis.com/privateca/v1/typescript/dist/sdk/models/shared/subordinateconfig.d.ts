import { SpeakeasyBase } from "../../../internal/utils";
import { SubordinateConfigChain } from "./subordinateconfigchain";
/**
 * Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
 */
export declare class SubordinateConfig extends SpeakeasyBase {
    /**
     * Required. This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. This field is used for information and usability purposes only. The resource name is in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`.
     */
    certificateAuthority?: string;
    /**
     * This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
     */
    pemIssuerChain?: SubordinateConfigChain;
}
