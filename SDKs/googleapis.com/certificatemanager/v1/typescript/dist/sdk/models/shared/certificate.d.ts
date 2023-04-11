import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedCertificate, ManagedCertificateInput } from "./managedcertificate";
import { SelfManagedCertificate } from "./selfmanagedcertificate";
/**
 * Immutable. The scope of the certificate.
 */
export declare enum CertificateScopeEnum {
    Default = "DEFAULT",
    EdgeCache = "EDGE_CACHE"
}
/**
 * Defines TLS certificate.
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * Output only. The creation timestamp of a Certificate.
     */
    createTime?: string;
    /**
     * One or more paragraphs of text description of a certificate.
     */
    description?: string;
    /**
     * Output only. The expiry timestamp of a Certificate.
     */
    expireTime?: string;
    /**
     * Set of labels associated with a Certificate.
     */
    labels?: Record<string, string>;
    /**
     * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
     */
    managed?: ManagedCertificate;
    /**
     * A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/* /locations/* /certificates/*`.
     */
    name?: string;
    /**
     * Output only. The PEM-encoded certificate chain.
     */
    pemCertificate?: string;
    /**
     * Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field.
     */
    sanDnsnames?: string[];
    /**
     * Immutable. The scope of the certificate.
     */
    scope?: CertificateScopeEnum;
    /**
     * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
     */
    selfManaged?: SelfManagedCertificate;
    /**
     * Output only. The last update timestamp of a Certificate.
     */
    updateTime?: string;
}
/**
 * Defines TLS certificate.
 */
export declare class CertificateInput extends SpeakeasyBase {
    /**
     * One or more paragraphs of text description of a certificate.
     */
    description?: string;
    /**
     * Set of labels associated with a Certificate.
     */
    labels?: Record<string, string>;
    /**
     * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
     */
    managed?: ManagedCertificateInput;
    /**
     * A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/* /locations/* /certificates/*`.
     */
    name?: string;
    /**
     * Immutable. The scope of the certificate.
     */
    scope?: CertificateScopeEnum;
    /**
     * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
     */
    selfManaged?: SelfManagedCertificate;
}
