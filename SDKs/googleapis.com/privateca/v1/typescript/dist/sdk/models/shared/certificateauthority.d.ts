import { SpeakeasyBase } from "../../../internal/utils";
import { AccessUrls } from "./accessurls";
import { CertificateConfig } from "./certificateconfig";
import { CertificateDescription } from "./certificatedescription";
import { KeyVersionSpec } from "./keyversionspec";
import { SubordinateConfig } from "./subordinateconfig";
/**
 * Output only. The State for this CertificateAuthority.
 */
export declare enum CertificateAuthorityStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Staged = "STAGED",
    AwaitingUserActivation = "AWAITING_USER_ACTIVATION",
    Deleted = "DELETED"
}
/**
 * Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority.
 */
export declare enum CertificateAuthorityTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Enterprise = "ENTERPRISE",
    Devops = "DEVOPS"
}
/**
 * Required. Immutable. The Type of this CertificateAuthority.
 */
export declare enum CertificateAuthorityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    SelfSigned = "SELF_SIGNED",
    Subordinate = "SUBORDINATE"
}
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
 */
export declare class CertificateAuthority extends SpeakeasyBase {
    /**
     * URLs where a CertificateAuthority will publish content.
     */
    accessUrls?: AccessUrls;
    /**
     * Output only. A structured description of this CertificateAuthority's CA certificate and its issuers. Ordered as self-to-root.
     */
    caCertificateDescriptions?: CertificateDescription[];
    /**
     * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
     */
    config?: CertificateConfig;
    /**
     * Output only. The time at which this CertificateAuthority was created.
     */
    createTime?: string;
    /**
     * Output only. The time at which this CertificateAuthority was soft deleted, if it is in the DELETED state.
     */
    deleteTime?: string;
    /**
     * Output only. The time at which this CertificateAuthority will be permanently purged, if it is in the DELETED state.
     */
    expireTime?: string;
    /**
     * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
     */
    gcsBucket?: string;
    /**
     * A Cloud KMS key configuration that a CertificateAuthority will use.
     */
    keySpec?: KeyVersionSpec;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.
     */
    lifetime?: string;
    /**
     * Output only. The resource name for this CertificateAuthority in the format `projects/* /locations/* /caPools/* /certificateAuthorities/*`.
     */
    name?: string;
    /**
     * Output only. This CertificateAuthority's certificate chain, including the current CertificateAuthority's certificate. Ordered such that the root issuer is the final element (consistent with RFC 5246). For a self-signed CA, this will only list the current CertificateAuthority's certificate.
     */
    pemCaCertificates?: string[];
    /**
     * Output only. The State for this CertificateAuthority.
     */
    state?: CertificateAuthorityStateEnum;
    /**
     * Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
     */
    subordinateConfig?: SubordinateConfig;
    /**
     * Output only. The CaPool.Tier of the CaPool that includes this CertificateAuthority.
     */
    tier?: CertificateAuthorityTierEnum;
    /**
     * Required. Immutable. The Type of this CertificateAuthority.
     */
    type?: CertificateAuthorityTypeEnum;
    /**
     * Output only. The time at which this CertificateAuthority was last updated.
     */
    updateTime?: string;
}
/**
 * A CertificateAuthority represents an individual Certificate Authority. A CertificateAuthority can be used to create Certificates.
 */
export declare class CertificateAuthorityInput extends SpeakeasyBase {
    /**
     * URLs where a CertificateAuthority will publish content.
     */
    accessUrls?: AccessUrls;
    /**
     * A CertificateConfig describes an X.509 certificate or CSR that is to be created, as an alternative to using ASN.1.
     */
    config?: CertificateConfig;
    /**
     * Immutable. The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. This must be a bucket name, without any prefixes (such as `gs://`) or suffixes (such as `.googleapis.com`). For example, to use a bucket named `my-bucket`, you would simply specify `my-bucket`. If not specified, a managed bucket will be created.
     */
    gcsBucket?: string;
    /**
     * A Cloud KMS key configuration that a CertificateAuthority will use.
     */
    keySpec?: KeyVersionSpec;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Required. Immutable. The desired lifetime of the CA certificate. Used to create the "not_before_time" and "not_after_time" fields inside an X.509 certificate.
     */
    lifetime?: string;
    /**
     * Describes a subordinate CA's issuers. This is either a resource name to a known issuing CertificateAuthority, or a PEM issuer certificate chain.
     */
    subordinateConfig?: SubordinateConfig;
    /**
     * Required. Immutable. The Type of this CertificateAuthority.
     */
    type?: CertificateAuthorityTypeEnum;
}
