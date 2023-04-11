import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A predefined matcher for particular cases, other than SNI selection.
 */
export declare enum CertificateMapEntryMatcherEnum {
    MatcherUnspecified = "MATCHER_UNSPECIFIED",
    Primary = "PRIMARY"
}
/**
 * Output only. A serving state of this Certificate Map Entry.
 */
export declare enum CertificateMapEntryStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Pending = "PENDING"
}
/**
 * Defines a certificate map entry.
 */
export declare class CertificateMapEntry extends SpeakeasyBase {
    /**
     * A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/* /locations/* /certificates/*`.
     */
    certificates?: string[];
    /**
     * Output only. The creation timestamp of a Certificate Map Entry.
     */
    createTime?: string;
    /**
     * One or more paragraphs of text description of a certificate map entry.
     */
    description?: string;
    /**
     * A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.
     */
    hostname?: string;
    /**
     * Set of labels associated with a Certificate Map Entry.
     */
    labels?: Record<string, string>;
    /**
     * A predefined matcher for particular cases, other than SNI selection.
     */
    matcher?: CertificateMapEntryMatcherEnum;
    /**
     * A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/* /certificateMapEntries/*`.
     */
    name?: string;
    /**
     * Output only. A serving state of this Certificate Map Entry.
     */
    state?: CertificateMapEntryStateEnum;
    /**
     * Output only. The update timestamp of a Certificate Map Entry.
     */
    updateTime?: string;
}
/**
 * Defines a certificate map entry.
 */
export declare class CertificateMapEntryInput extends SpeakeasyBase {
    /**
     * A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/* /locations/* /certificates/*`.
     */
    certificates?: string[];
    /**
     * One or more paragraphs of text description of a certificate map entry.
     */
    description?: string;
    /**
     * A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.
     */
    hostname?: string;
    /**
     * Set of labels associated with a Certificate Map Entry.
     */
    labels?: Record<string, string>;
    /**
     * A predefined matcher for particular cases, other than SNI selection.
     */
    matcher?: CertificateMapEntryMatcherEnum;
    /**
     * A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/* /locations/* /certificateMaps/* /certificateMapEntries/*`.
     */
    name?: string;
}
