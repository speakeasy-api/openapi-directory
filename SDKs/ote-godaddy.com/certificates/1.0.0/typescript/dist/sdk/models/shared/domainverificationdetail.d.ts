import { SpeakeasyBase } from "../../../internal/utils";
/**
 * * `ADD_CA_TO_CAA` - The system found a CAA record in the domain hierarchy, but it did not find our CA in the record's values. Add `godaddy.com` or `starfieldtech.com` to the CAA record's values.
 *
 * @remarks
 * * `CREATE_TARGET_DOMAIN_CAA` - Create a CAA record on the specified domain with `godaddy.com` or `starfieldtech.com` as the value. If the system finds a CAA record in the specified domain, it will stop scanning the domain hierarchy, thereby preventing potentially problematic parent domain paths from being scanned.
 * * `DISABLE_DNSSEC` - Disable DNSSEC on the domain if CAA lookups fail and a DNSSEC scan is being used as the method for determining if the specified domain can remain in the certificate request.
 * * `FIX_CRITICAL_TAG` - When setting the critical flag in a CAA record, you must ensure you're using a well-known tag, per RFC 6844.
 * * `VALIDATE_SOA` - Make sure all queryPaths for the specified domain have an SOA record pointing to a valid publicly-accessible nameserver and respond in a timely fashion.
 *
 */
export declare enum DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum {
    AddCaToCaa = "ADD_CA_TO_CAA",
    CreateTargetDomainCaa = "CREATE_TARGET_DOMAIN_CAA",
    DisableDnssec = "DISABLE_DNSSEC",
    FixCriticalTag = "FIX_CRITICAL_TAG",
    ValidateSoa = "VALIDATE_SOA"
}
/**
 * Returns the status of the CAA Lookup for the specified domain:
 *
 * @remarks
 * * `PENDING` - The CAA lookup has not yet been attempted for the specified domain.
 * * `REMOVED_DNS_ERROR` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNS errors then prevented the system from determining if DNSSEC was enabled for the specified domain, and it had to be removed from the certificate request.
 * * `REMOVED_DNSSEC_ENABLED` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNSSEC was determined to be enabled for the specified domain, and it had to be removed from the certificate request.
 * * `REMOVED_NOT_FOUND_CA` - CAA records were found during the CAA lookup for the speicified domain, but `godaddy.com` or `starfieldtech.com` was not listed as a value, thereby not allowing us to issue a certificate with this domain. The specified domain was removed from the certificate request.
 * * `REMOVED_UNKNOWN_CRITICAL_TAG` - A CAA record was found during the CAA lookup with its Critical bit set, as outlined by RFC 6844, yet the Tag of the CAA record was not understood (as outlined by RFC 6844). The specified domain was removed from the certificate request.
 * * `SUCCESS_CAA` - The CAA lookup was successful for the specified domain, and the domain can remain in the certificate request.
 * * `SUCCESS_DNSSEC` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. The system detemined that DNSSEC was not enabled for the specified domain, so the domain is allowed to remain in the certificate request.
 *
 */
export declare enum DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum {
    Pending = "PENDING",
    RemovedDnsError = "REMOVED_DNS_ERROR",
    RemovedDnssecEnabled = "REMOVED_DNSSEC_ENABLED",
    RemovedNotFoundCa = "REMOVED_NOT_FOUND_CA",
    RemovedUnknownCriticalTag = "REMOVED_UNKNOWN_CRITICAL_TAG",
    SuccessCaa = "SUCCESS_CAA",
    SuccessDnssec = "SUCCESS_DNSSEC"
}
/**
 * Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
 *
 * @remarks
 *
 * In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
 *
 * The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
 *
 * In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
 *
 */
export declare class DomainVerificationDetailCertificateAuthorityAuthorization extends SpeakeasyBase {
    /**
     * The date the certificate request completed processing.
     */
    completedAt?: string;
    /**
     * Details all the individual DNS paths that were scanned for CAA records for this domain, as detailed by RFC 6844. This element not only contains the parts determined from parsing the domain, but also any CNAME or DNAME targets specified by any of those individual parts.
     */
    queryPaths?: string[];
    /**
     * Returns a list of fix recommendations if the query was unsuccessful, or if the domain was dropped from the certificate request, so that a subsequent certificate request with the specified domain will successfully pass its CAA scan.
     */
    recommendations?: DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum[];
    /**
     * Returns the status of the CAA Lookup for the specified domain:
     *
     * @remarks
     * * `PENDING` - The CAA lookup has not yet been attempted for the specified domain.
     * * `REMOVED_DNS_ERROR` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNS errors then prevented the system from determining if DNSSEC was enabled for the specified domain, and it had to be removed from the certificate request.
     * * `REMOVED_DNSSEC_ENABLED` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. DNSSEC was determined to be enabled for the specified domain, and it had to be removed from the certificate request.
     * * `REMOVED_NOT_FOUND_CA` - CAA records were found during the CAA lookup for the speicified domain, but `godaddy.com` or `starfieldtech.com` was not listed as a value, thereby not allowing us to issue a certificate with this domain. The specified domain was removed from the certificate request.
     * * `REMOVED_UNKNOWN_CRITICAL_TAG` - A CAA record was found during the CAA lookup with its Critical bit set, as outlined by RFC 6844, yet the Tag of the CAA record was not understood (as outlined by RFC 6844). The specified domain was removed from the certificate request.
     * * `SUCCESS_CAA` - The CAA lookup was successful for the specified domain, and the domain can remain in the certificate request.
     * * `SUCCESS_DNSSEC` - Repeated errors occurred while scanning for CAA records, thereby resulting in a DNSSEC scan. The system detemined that DNSSEC was not enabled for the specified domain, so the domain is allowed to remain in the certificate request.
     *
     */
    status?: DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum;
}
/**
 * Domain verification status:
 *
 * @remarks
 *   * `AWAITING` - Verification pending customer input
 *   * `INVALID` - SAN connected to a cancelled request
 *   * `COMPLETED` - Verification completed
 *   * `FAILED_VERIFICATION` - Verification failed
 *   * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review
 *   * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified
 *   * `DROPPED` - SAN dropped from request
 *   * `REVOKED_CERT` - Certificate revoked
 *   * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check
 *   * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check
 *
 */
export declare enum DomainVerificationDetailStatusEnum {
    Completed = "COMPLETED",
    FailedVerification = "FAILED_VERIFICATION",
    VerifiedPossibleFraud = "VERIFIED_POSSIBLE_FRAUD",
    Dropped = "DROPPED",
    DroppedCertificateAuthorityAuthorization = "DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION",
    DroppedGoogleSafeBrowsing = "DROPPED_GOOGLE_SAFE_BROWSING",
    Invalid = "INVALID",
    Awaiting = "AWAITING",
    PendingPossibleFraud = "PENDING_POSSIBLE_FRAUD",
    RevokedCertificate = "REVOKED_CERTIFICATE"
}
/**
 * Domain verification type:
 *
 * @remarks
 *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com>
 *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com>
 *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com>
 *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com>
 *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com>
 *   * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email
 *   * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification
 *   * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value
 *   * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification
 *   * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep
 *   * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification
 *   * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain
 *   * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check
 *   * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods
 *   * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check
 *   * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification
 *   * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification
 *
 */
export declare enum DomainVerificationDetailTypeEnum {
    DomainControlEmail = "DOMAIN_CONTROL_EMAIL",
    AutoGeneratedDomainAccessEmailAdmin = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN",
    AutoGeneratedDomainAccessEmailAdminstrator = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR",
    AutoGeneratedDomainAccessEmailHostMaster = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER",
    AutoGeneratedDomainAccessEmailPostMaster = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER",
    AutoGeneratedDomainAccessEmailWebMaster = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER",
    DomainAccessEmail = "DOMAIN_ACCESS_EMAIL",
    DomainAccessLetter = "DOMAIN_ACCESS_LETTER",
    DomainZoneControl = "DOMAIN_ZONE_CONTROL",
    ManualDomainAccessEmail = "MANUAL_DOMAIN_ACCESS_EMAIL",
    PreviousDomainAccessEmail = "PREVIOUS_DOMAIN_ACCESS_EMAIL",
    RegistrationAuthorityDomainAccessLetter = "REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER",
    RegistrationAuthorityDomainZoneControl = "REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL",
    RegistrationAuthorityOverride = "REGISTRATION_AUTHORITY_OVERRIDE",
    RegistrationAuthorityWebsiteControl = "REGISTRATION_AUTHORITY_WEBSITE_CONTROL",
    CustomerOwned = "CUSTOMER_OWNED",
    WebsiteControl = "WEBSITE_CONTROL"
}
/**
 * Type of domain name used for domain verification
 */
export declare enum DomainVerificationDetailUsageEnum {
    CommonName = "COMMON_NAME",
    SubjectAlternativeName = "SUBJECT_ALTERNATIVE_NAME"
}
/**
 * Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details.
 */
export declare class DomainVerificationDetail extends SpeakeasyBase {
    /**
     * Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
     *
     * @remarks
     *
     * In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
     *
     * The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
     *
     * In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
     *
     */
    certificateAuthorityAuthorization?: DomainVerificationDetailCertificateAuthorityAuthorization;
    /**
     * Timestamp indicating when the domain verification process was started
     */
    createdAt: string;
    /**
     * DCE verification type token (if DCE verification type).
     */
    dceToken?: string;
    /**
     * Domain name
     */
    domain: string;
    /**
     * A unique identifier that can be leveraged for retrieving domain verification related information. Primarily used when troubleshooting a request
     */
    domainEntityId: number;
    /**
     * Timestamp indicating when the domain verification process was last updated
     */
    modifiedAt: string;
    /**
     * Domain verification status:
     *
     * @remarks
     *   * `AWAITING` - Verification pending customer input
     *   * `INVALID` - SAN connected to a cancelled request
     *   * `COMPLETED` - Verification completed
     *   * `FAILED_VERIFICATION` - Verification failed
     *   * `PENDING_POSSIBLE_FRAUD` - Flagged for a system level fraud review
     *   * `VERIFIED_POSSIBLE_FRAUD` - Fraud detection reviewed but verified
     *   * `DROPPED` - SAN dropped from request
     *   * `REVOKED_CERT` - Certificate revoked
     *   * `DROPPED_GOOGLE_SAFE_BROWSING` - SAN dropped from request due to Google Safe Browsing check
     *   * `DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION` - SAN dropped from request due to Certificate Authorization Authority DNS record check
     *
     */
    status: DomainVerificationDetailStatusEnum;
    /**
     * Domain verification type:
     *
     * @remarks
     *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN` - Domain verified using domain control verification email sent to admin@<your.domain.com>
     *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR` - Domain verified using domain control verification email sent to administrator@<your.domain.com>
     *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER` - Domain verified using domain control verification email sent to hostmaster@<your.domain.com>
     *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER` - Domain verified using domain control verification email sent to postmaster@<your.domain.com>
     *   * `AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER` - Domain verified using domain control verification email sent to webmaster@<your.domain.com>
     *   * `DOMAIN_ACCESS_EMAIL` - Domain verified using a domain access email
     *   * `DOMAIN_ACCESS_LETTER` - Customer completed a domain access letter which was used for domain verification
     *   * `DOMAIN_CONTROL_EMAIL` - Domain verified using HTML file or DNS zone file text value
     *   * `DOMAIN_ZONE_CONTROL` - DNS zone file containing a pre-generated text value used for domain verification
     *   * `MANUAL_DOMAIN_ACCESS_EMAIL` - DAE sent to an email address manually entered by a rep
     *   * `PREVIOUS_DOMAIN_ACCESS_EMAIL` - Customers domain access email for a prior certificate request was used for domain verification
     *   * `REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER` - Representative reviewed a customer provided domain access letter and verified domain
     *   * `REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL` - Representative verified domain using a manual domain zone control check
     *   * `REGISTRATION_AUTHORITY_OVERRIDE` - Representative verified domain using alternative methods
     *   * `REGISTRATION_AUTHORITY_WEBSITE_CONTROL` - Representative verified domain using a manual website control check
     *   * `CUSTOMER_OWNED` - Validated customer account information used for domain control verification
     *   * `WEBSITE_CONTROL` - HTML file in root website directory containing pre-generated value used for domain control verification
     *
     */
    type: DomainVerificationDetailTypeEnum;
    /**
     * Type of domain name used for domain verification
     */
    usage: DomainVerificationDetailUsageEnum;
}
