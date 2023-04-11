import { SpeakeasyBase } from "../../../internal/utils";
import { RevokedCertificate } from "./revokedcertificate";
/**
 * Output only. The State for this CertificateRevocationList.
 */
export declare enum CertificateRevocationListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Superseded = "SUPERSEDED"
}
/**
 * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
 */
export declare class CertificateRevocationList extends SpeakeasyBase {
    /**
     * Output only. The location where 'pem_crl' can be accessed.
     */
    accessUrl?: string;
    /**
     * Output only. The time at which this CertificateRevocationList was created.
     */
    createTime?: string;
    /**
     * Optional. Labels with user-defined metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name for this CertificateRevocationList in the format `projects/* /locations/* /caPools/*certificateAuthorities/* / certificateRevocationLists/*`.
     */
    name?: string;
    /**
     * Output only. The PEM-encoded X.509 CRL.
     */
    pemCrl?: string;
    /**
     * Output only. The revision ID of this CertificateRevocationList. A new revision is committed whenever a new CRL is published. The format is an 8-character hexadecimal string.
     */
    revisionId?: string;
    /**
     * Output only. The revoked serial numbers that appear in pem_crl.
     */
    revokedCertificates?: RevokedCertificate[];
    /**
     * Output only. The CRL sequence number that appears in pem_crl.
     */
    sequenceNumber?: string;
    /**
     * Output only. The State for this CertificateRevocationList.
     */
    state?: CertificateRevocationListStateEnum;
    /**
     * Output only. The time at which this CertificateRevocationList was updated.
     */
    updateTime?: string;
}
