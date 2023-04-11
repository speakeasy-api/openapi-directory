import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationAttemptInfo } from "./authorizationattemptinfo";
import { ProvisioningIssue } from "./provisioningissue";
/**
 * Output only. State of the managed certificate resource.
 */
export declare enum ManagedCertificateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
 */
export declare class ManagedCertificate extends SpeakeasyBase {
    /**
     * Output only. Detailed state of the latest authorization attempt for each domain specified for managed certificate resource.
     */
    authorizationAttemptInfo?: AuthorizationAttemptInfo[];
    /**
     * Immutable. Authorizations that will be used for performing domain authorization.
     */
    dnsAuthorizations?: string[];
    /**
     * Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.
     */
    domains?: string[];
    /**
     * Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/* /locations/* /certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
     */
    issuanceConfig?: string;
    /**
     * Information about issues with provisioning a Managed Certificate.
     */
    provisioningIssue?: ProvisioningIssue;
    /**
     * Output only. State of the managed certificate resource.
     */
    state?: ManagedCertificateStateEnum;
}
/**
 * Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.
 */
export declare class ManagedCertificateInput extends SpeakeasyBase {
    /**
     * Immutable. Authorizations that will be used for performing domain authorization.
     */
    dnsAuthorizations?: string[];
    /**
     * Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.
     */
    domains?: string[];
    /**
     * Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/* /locations/* /certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
     */
    issuanceConfig?: string;
}
