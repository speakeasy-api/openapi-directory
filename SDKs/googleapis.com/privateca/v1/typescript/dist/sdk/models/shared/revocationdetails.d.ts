import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates why a Certificate was revoked.
 */
export declare enum RevocationDetailsRevocationStateEnum {
    RevocationReasonUnspecified = "REVOCATION_REASON_UNSPECIFIED",
    KeyCompromise = "KEY_COMPROMISE",
    CertificateAuthorityCompromise = "CERTIFICATE_AUTHORITY_COMPROMISE",
    AffiliationChanged = "AFFILIATION_CHANGED",
    Superseded = "SUPERSEDED",
    CessationOfOperation = "CESSATION_OF_OPERATION",
    CertificateHold = "CERTIFICATE_HOLD",
    PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN",
    AttributeAuthorityCompromise = "ATTRIBUTE_AUTHORITY_COMPROMISE"
}
/**
 * Describes fields that are relavent to the revocation of a Certificate.
 */
export declare class RevocationDetails extends SpeakeasyBase {
    /**
     * Indicates why a Certificate was revoked.
     */
    revocationState?: RevocationDetailsRevocationStateEnum;
    /**
     * The time at which this Certificate was revoked.
     */
    revocationTime?: string;
}
