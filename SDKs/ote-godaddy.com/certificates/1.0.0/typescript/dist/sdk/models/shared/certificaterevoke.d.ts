import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reason for revocation
 */
export declare enum CertificateRevokeReasonEnum {
    AffiliationChanged = "AFFILIATION_CHANGED",
    CessationOfOperation = "CESSATION_OF_OPERATION",
    KeyCompromise = "KEY_COMPROMISE",
    PrivilegeWithdrawn = "PRIVILEGE_WITHDRAWN",
    Superseded = "SUPERSEDED"
}
/**
 * The certificate revocation request
 */
export declare class CertificateRevoke extends SpeakeasyBase {
    /**
     * Reason for revocation
     */
    reason: CertificateRevokeReasonEnum;
}
