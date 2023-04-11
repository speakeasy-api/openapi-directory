import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason the Certificate was revoked.
 */
export declare enum RevokedCertificateRevocationReasonEnum {
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
 * Describes a revoked Certificate.
 */
export declare class RevokedCertificate extends SpeakeasyBase {
    /**
     * The resource name for the Certificate in the format `projects/* /locations/* /caPools/* /certificates/*`.
     */
    certificate?: string;
    /**
     * The serial number of the Certificate.
     */
    hexSerialNumber?: string;
    /**
     * The reason the Certificate was revoked.
     */
    revocationReason?: RevokedCertificateRevocationReasonEnum;
}
