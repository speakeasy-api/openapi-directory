import { SpeakeasyBase } from "../../../internal/utils";
import { IssuancePolicy } from "./issuancepolicy";
import { PublishingOptions } from "./publishingoptions";
/**
 * Required. Immutable. The Tier of this CaPool.
 */
export declare enum CaPoolTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Enterprise = "ENTERPRISE",
    Devops = "DEVOPS"
}
/**
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
 */
export declare class CaPool extends SpeakeasyBase {
    /**
     * Defines controls over all certificate issuance within a CaPool.
     */
    issuancePolicy?: IssuancePolicy;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name for this CaPool in the format `projects/* /locations/* /caPools/*`.
     */
    name?: string;
    /**
     * Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
     */
    publishingOptions?: PublishingOptions;
    /**
     * Required. Immutable. The Tier of this CaPool.
     */
    tier?: CaPoolTierEnum;
}
/**
 * A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
 */
export declare class CaPoolInput extends SpeakeasyBase {
    /**
     * Defines controls over all certificate issuance within a CaPool.
     */
    issuancePolicy?: IssuancePolicy;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Options relating to the publication of each CertificateAuthority's CA certificate and CRLs and their inclusion as extensions in issued Certificates. The options set here apply to certificates issued by any CertificateAuthority in the CaPool.
     */
    publishingOptions?: PublishingOptions;
    /**
     * Required. Immutable. The Tier of this CaPool.
     */
    tier?: CaPoolTierEnum;
}
