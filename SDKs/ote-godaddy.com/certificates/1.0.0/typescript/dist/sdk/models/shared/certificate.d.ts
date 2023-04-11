import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateContact } from "./certificatecontact";
import { CertificateOrganization } from "./certificateorganization";
import { SubjectAlternativeNameDetails } from "./subjectalternativenamedetails";
/**
 * Certificate product type
 */
export declare enum CertificateProductTypeEnum {
    DvSsl = "DV_SSL",
    DvWildcardSsl = "DV_WILDCARD_SSL",
    EvSsl = "EV_SSL",
    OvCs = "OV_CS",
    OvDs = "OV_DS",
    OvSsl = "OV_SSL",
    OvWildcardSsl = "OV_WILDCARD_SSL",
    UccDvSsl = "UCC_DV_SSL",
    UccEvSsl = "UCC_EV_SSL",
    UccOvSsl = "UCC_OV_SSL"
}
/**
 * Root Type
 */
export declare enum CertificateRootTypeEnum {
    GodaddySha1 = "GODADDY_SHA_1",
    GodaddySha2 = "GODADDY_SHA_2",
    StarfieldSha1 = "STARFIELD_SHA_1",
    StarfieldSha2 = "STARFIELD_SHA_2"
}
/**
 * Number of subject alternative names(SAN) to be included in certificate
 */
export declare enum CertificateSlotSizeEnum {
    Five = "FIVE",
    Ten = "TEN",
    Fifteen = "FIFTEEN",
    Twenty = "TWENTY",
    Thirty = "THIRTY",
    Fourty = "FOURTY",
    Fifty = "FIFTY",
    OneHundred = "ONE_HUNDRED"
}
/**
 * Status of certificate
 */
export declare enum CertificateStatusEnum {
    PendingIssuance = "PENDING_ISSUANCE",
    Issued = "ISSUED",
    Revoked = "REVOKED",
    Canceled = "CANCELED",
    Denied = "DENIED",
    PendingRevocation = "PENDING_REVOCATION",
    PendingRekey = "PENDING_REKEY",
    Unused = "UNUSED",
    Expired = "EXPIRED"
}
/**
 * Certificate details retrieved
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * The unique identifier of the certificate request. Only present if no errors returned
     */
    certificateId: string;
    /**
     * Common name of certificate
     */
    commonName?: string;
    contact: CertificateContact;
    /**
     * The date the certificate was ordered.
     */
    createdAt: string;
    /**
     * Only present if certificate order has been denied
     */
    deniedReason?: string;
    organization?: CertificateOrganization;
    /**
     * Validity period of order. Specified in years
     */
    period: number;
    /**
     * Certificate product type
     */
    productType: CertificateProductTypeEnum;
    /**
     * Percentage of completion for certificate vetting
     */
    progress?: number;
    /**
     * The revocation date of certificate (if revoked).
     */
    revokedAt?: string;
    /**
     * Root Type
     */
    rootType?: CertificateRootTypeEnum;
    /**
     * Serial number of certificate (if issued or revoked)
     */
    serialNumber?: string;
    /**
     * Hexadecmial format for Serial number of certificate(if issued or revoked)
     */
    serialNumberHex?: string;
    /**
     * Number of subject alternative names(SAN) to be included in certificate
     */
    slotSize?: CertificateSlotSizeEnum;
    /**
     * Status of certificate
     */
    status: CertificateStatusEnum;
    /**
     * Contains subject alternative names set
     */
    subjectAlternativeNames?: SubjectAlternativeNameDetails[];
    /**
     * The end date of the certificate's validity (if issued or revoked).
     */
    validEnd?: string;
    /**
     * The start date of the certificate's validity (if issued or revoked).
     */
    validStart?: string;
}
