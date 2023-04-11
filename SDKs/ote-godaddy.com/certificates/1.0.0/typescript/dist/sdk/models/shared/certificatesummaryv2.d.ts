import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Number of subject alternative names (SAN) to be included in certificate (if UCC):
 *
 * @remarks
 *   * `FIVE` - Five slot UCC request
 *   * `TEN` - Ten slot UCC request
 *   * `FIFTEEN` - Fifteen slot UCC request
 *   * `TWENTY` - Twenty slot UCC request
 *   * `THIRTY` - Thirty slot UCC request
 *   * `FOURTY` - Fourty slot UCC request
 *   * `FIFTY` - Fifty slot UCC request
 *   * `ONE_HUNDRED` - One hundred slot UCC request
 *
 */
export declare enum CertificateSummaryV2SlotSizeEnum {
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
 * Certificate status (if issued or revoked):
 *
 * @remarks
 *   * `CANCELED` - Certificate request was canceled by customer
 *   * `DENIED` - Certificate request was denied by customer
 *   * `EXPIRED` - Issued certificate has exceeded the valid end date
 *   * `ISSUED` - Certificate has been issued and is within validity period
 *   * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued
 *   * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued
 *   * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked
 *   * `REVOKED` - Issued certificate has been revoked
 *   * `UNUSED` - Certificate in an error state
 *
 */
export declare enum CertificateSummaryV2StatusEnum {
    Issued = "ISSUED",
    Canceled = "CANCELED",
    Denied = "DENIED",
    Expired = "EXPIRED",
    PendingIssuance = "PENDING_ISSUANCE",
    PendingRekey = "PENDING_REKEY",
    PendingRevocation = "PENDING_REVOCATION",
    Revoked = "REVOKED",
    Unused = "UNUSED"
}
/**
 * Certificate type:
 *
 * @remarks
 *   * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only
 *   * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only
 *   * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors
 *   * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information
 *   * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information
 *   * `OV_SSL` - SSL certificate validated using organization information and domain name
 *   * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name
 *   * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only
 *   * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors
 *   * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name
 *
 */
export declare enum CertificateSummaryV2TypeEnum {
    DvSsl = "DV_SSL",
    DvWildcardSsl = "DV_WILDCARD_SSL",
    EvSsl = "EV_SSL",
    OvCodeSigning = "OV_CODE_SIGNING",
    OvDriverSigning = "OV_DRIVER_SIGNING",
    OvSsl = "OV_SSL",
    OvWildcardSsl = "OV_WILDCARD_SSL",
    UccDvSsl = "UCC_DV_SSL",
    UccEvSsl = "UCC_EV_SSL",
    UccOvSsl = "UCC_OV_SSL"
}
export declare class CertificateSummaryV2 extends SpeakeasyBase {
    /**
     * The unique identifier of the certificate request.
     */
    certificateId: string;
    /**
     * Common name for the certificate request.
     */
    commonName: string;
    /**
     * The date the certificate request completed processing (if issued or revoked).
     */
    completedAt?: string;
    /**
     * Date that the certificate request was received.
     */
    createdAt: string;
    /**
     * Validity period of order. Specified in years.
     */
    period: number;
    /**
     * Only returned when a renewal is available.
     */
    renewalAvailable?: boolean;
    /**
     * The revocation date of certificate (if revoked).
     */
    revokedAt?: string;
    /**
     * Serial number of certificate (if issued or revoked).
     */
    serialNumber?: string;
    /**
     * Number of subject alternative names (SAN) to be included in certificate (if UCC):
     *
     * @remarks
     *   * `FIVE` - Five slot UCC request
     *   * `TEN` - Ten slot UCC request
     *   * `FIFTEEN` - Fifteen slot UCC request
     *   * `TWENTY` - Twenty slot UCC request
     *   * `THIRTY` - Thirty slot UCC request
     *   * `FOURTY` - Fourty slot UCC request
     *   * `FIFTY` - Fifty slot UCC request
     *   * `ONE_HUNDRED` - One hundred slot UCC request
     *
     */
    slotSize?: CertificateSummaryV2SlotSizeEnum;
    /**
     * Certificate status (if issued or revoked):
     *
     * @remarks
     *   * `CANCELED` - Certificate request was canceled by customer
     *   * `DENIED` - Certificate request was denied by customer
     *   * `EXPIRED` - Issued certificate has exceeded the valid end date
     *   * `ISSUED` - Certificate has been issued and is within validity period
     *   * `PENDING_ISSUANCE` - Certificate request has completed domain verification and is in the process of being issued
     *   * `PENDING_REKEY` - Previously issued certificate was rekeyed by customer and is in the process of being reissued
     *   * `PENDING_REVOCATION` - Previously issued certificate is in the process of being revoked
     *   * `REVOKED` - Issued certificate has been revoked
     *   * `UNUSED` - Certificate in an error state
     *
     */
    status: CertificateSummaryV2StatusEnum;
    /**
     * Subject Alternative names (if UCC). Collection of subjectAlternativeNames to be included in certificate.
     */
    subjectAlternativeNames?: string[];
    /**
     * Certificate type:
     *
     * @remarks
     *   * `DV_SSL` - (Domain Validated Secure Sockets Layer) SSL certificate validated using domain name only
     *   * `DV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using domain name only
     *   * `EV_SSL` - (Extended Validation) SSL certificate validated using organization information, domain name, business legal status, and other factors
     *   * `OV_CODE_SIGNING` - Code signing SSL certificate used by software developers to digitally sign apps. Validated using organization information
     *   * `OV_DRIVER_SIGNING` - Driver signing SSL certificate request used by software developers to digitally sign secure code for Windows hardware drivers. Validated using organization information
     *   * `OV_SSL` - SSL certificate validated using organization information and domain name
     *   * `OV_WILDCARD_SSL` - SSL certificate containing subdomains which is validated using organization information and domain name
     *   * `UCC_DV_SSL` - (Unified Communication Certificate) Multi domain SSL certificate validated using domain name only
     *   * `UCC_EV_SSL` - Multi domain SSL certificate validated using organization information, domain name, business legal status, and other factors
     *   * `UCC_OV_SSL` - Multi domain SSL certificate validated using organization information and domain name
     *
     */
    type: CertificateSummaryV2TypeEnum;
    /**
     * The end date of the certificate's validity (if issued or revoked).
     */
    validEndAt?: string;
    /**
     * The start date of the certificate's validity (if issued or revoked).
     */
    validStartAt?: string;
}
