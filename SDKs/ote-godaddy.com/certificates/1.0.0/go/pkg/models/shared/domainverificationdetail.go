package shared

type DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum string

const (
	DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnumAddCaToCaa            DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = "ADD_CA_TO_CAA"
	DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnumCreateTargetDomainCaa DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = "CREATE_TARGET_DOMAIN_CAA"
	DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnumDisableDnssec         DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = "DISABLE_DNSSEC"
	DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnumFixCriticalTag        DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = "FIX_CRITICAL_TAG"
	DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnumValidateSoa           DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum = "VALIDATE_SOA"
)

type DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum string

const (
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumPending                   DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "PENDING"
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumRemovedDNSError           DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "REMOVED_DNS_ERROR"
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumRemovedDnssecEnabled      DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "REMOVED_DNSSEC_ENABLED"
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumRemovedNotFoundCa         DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "REMOVED_NOT_FOUND_CA"
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumRemovedUnknownCriticalTag DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "REMOVED_UNKNOWN_CRITICAL_TAG"
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumSuccessCaa                DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "SUCCESS_CAA"
	DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnumSuccessDnssec             DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum = "SUCCESS_DNSSEC"
)

// DomainVerificationDetailCertificateAuthorityAuthorization
// Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
//
// In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
//
// The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
//
// In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
type DomainVerificationDetailCertificateAuthorityAuthorization struct {
	CompletedAt     *string                                                                        `json:"completedAt,omitempty"`
	QueryPaths      []string                                                                       `json:"queryPaths,omitempty"`
	Recommendations []DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum `json:"recommendations,omitempty"`
	Status          *DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum           `json:"status,omitempty"`
}

type DomainVerificationDetailStatusEnum string

const (
	DomainVerificationDetailStatusEnumCompleted                                DomainVerificationDetailStatusEnum = "COMPLETED"
	DomainVerificationDetailStatusEnumFailedVerification                       DomainVerificationDetailStatusEnum = "FAILED_VERIFICATION"
	DomainVerificationDetailStatusEnumVerifiedPossibleFraud                    DomainVerificationDetailStatusEnum = "VERIFIED_POSSIBLE_FRAUD"
	DomainVerificationDetailStatusEnumDropped                                  DomainVerificationDetailStatusEnum = "DROPPED"
	DomainVerificationDetailStatusEnumDroppedCertificateAuthorityAuthorization DomainVerificationDetailStatusEnum = "DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION"
	DomainVerificationDetailStatusEnumDroppedGoogleSafeBrowsing                DomainVerificationDetailStatusEnum = "DROPPED_GOOGLE_SAFE_BROWSING"
	DomainVerificationDetailStatusEnumInvalid                                  DomainVerificationDetailStatusEnum = "INVALID"
	DomainVerificationDetailStatusEnumAwaiting                                 DomainVerificationDetailStatusEnum = "AWAITING"
	DomainVerificationDetailStatusEnumPendingPossibleFraud                     DomainVerificationDetailStatusEnum = "PENDING_POSSIBLE_FRAUD"
	DomainVerificationDetailStatusEnumRevokedCertificate                       DomainVerificationDetailStatusEnum = "REVOKED_CERTIFICATE"
)

type DomainVerificationDetailTypeEnum string

const (
	DomainVerificationDetailTypeEnumDomainControlEmail                         DomainVerificationDetailTypeEnum = "DOMAIN_CONTROL_EMAIL"
	DomainVerificationDetailTypeEnumAutoGeneratedDomainAccessEmailAdmin        DomainVerificationDetailTypeEnum = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN"
	DomainVerificationDetailTypeEnumAutoGeneratedDomainAccessEmailAdminstrator DomainVerificationDetailTypeEnum = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR"
	DomainVerificationDetailTypeEnumAutoGeneratedDomainAccessEmailHostMaster   DomainVerificationDetailTypeEnum = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER"
	DomainVerificationDetailTypeEnumAutoGeneratedDomainAccessEmailPostMaster   DomainVerificationDetailTypeEnum = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER"
	DomainVerificationDetailTypeEnumAutoGeneratedDomainAccessEmailWebMaster    DomainVerificationDetailTypeEnum = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER"
	DomainVerificationDetailTypeEnumDomainAccessEmail                          DomainVerificationDetailTypeEnum = "DOMAIN_ACCESS_EMAIL"
	DomainVerificationDetailTypeEnumDomainAccessLetter                         DomainVerificationDetailTypeEnum = "DOMAIN_ACCESS_LETTER"
	DomainVerificationDetailTypeEnumDomainZoneControl                          DomainVerificationDetailTypeEnum = "DOMAIN_ZONE_CONTROL"
	DomainVerificationDetailTypeEnumManualDomainAccessEmail                    DomainVerificationDetailTypeEnum = "MANUAL_DOMAIN_ACCESS_EMAIL"
	DomainVerificationDetailTypeEnumPreviousDomainAccessEmail                  DomainVerificationDetailTypeEnum = "PREVIOUS_DOMAIN_ACCESS_EMAIL"
	DomainVerificationDetailTypeEnumRegistrationAuthorityDomainAccessLetter    DomainVerificationDetailTypeEnum = "REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER"
	DomainVerificationDetailTypeEnumRegistrationAuthorityDomainZoneControl     DomainVerificationDetailTypeEnum = "REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL"
	DomainVerificationDetailTypeEnumRegistrationAuthorityOverride              DomainVerificationDetailTypeEnum = "REGISTRATION_AUTHORITY_OVERRIDE"
	DomainVerificationDetailTypeEnumRegistrationAuthorityWebsiteControl        DomainVerificationDetailTypeEnum = "REGISTRATION_AUTHORITY_WEBSITE_CONTROL"
	DomainVerificationDetailTypeEnumCustomerOwned                              DomainVerificationDetailTypeEnum = "CUSTOMER_OWNED"
	DomainVerificationDetailTypeEnumWebsiteControl                             DomainVerificationDetailTypeEnum = "WEBSITE_CONTROL"
)

type DomainVerificationDetailUsageEnum string

const (
	DomainVerificationDetailUsageEnumCommonName             DomainVerificationDetailUsageEnum = "COMMON_NAME"
	DomainVerificationDetailUsageEnumSubjectAlternativeName DomainVerificationDetailUsageEnum = "SUBJECT_ALTERNATIVE_NAME"
)

type DomainVerificationDetail struct {
	CertificateAuthorityAuthorization *DomainVerificationDetailCertificateAuthorityAuthorization `json:"certificateAuthorityAuthorization,omitempty"`
	CreatedAt                         string                                                     `json:"createdAt"`
	DceToken                          *string                                                    `json:"dceToken,omitempty"`
	Domain                            string                                                     `json:"domain"`
	DomainEntityID                    int64                                                      `json:"domainEntityId"`
	ModifiedAt                        string                                                     `json:"modifiedAt"`
	Status                            DomainVerificationDetailStatusEnum                         `json:"status"`
	Type                              DomainVerificationDetailTypeEnum                           `json:"type"`
	Usage                             DomainVerificationDetailUsageEnum                          `json:"usage"`
}
