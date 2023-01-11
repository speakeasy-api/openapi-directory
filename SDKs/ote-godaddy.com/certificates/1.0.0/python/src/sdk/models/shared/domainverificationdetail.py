import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum(str, Enum):
    ADD_CA_TO_CAA = "ADD_CA_TO_CAA"
    CREATE_TARGET_DOMAIN_CAA = "CREATE_TARGET_DOMAIN_CAA"
    DISABLE_DNSSEC = "DISABLE_DNSSEC"
    FIX_CRITICAL_TAG = "FIX_CRITICAL_TAG"
    VALIDATE_SOA = "VALIDATE_SOA"

class DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum(str, Enum):
    PENDING = "PENDING"
    REMOVED_DNS_ERROR = "REMOVED_DNS_ERROR"
    REMOVED_DNSSEC_ENABLED = "REMOVED_DNSSEC_ENABLED"
    REMOVED_NOT_FOUND_CA = "REMOVED_NOT_FOUND_CA"
    REMOVED_UNKNOWN_CRITICAL_TAG = "REMOVED_UNKNOWN_CRITICAL_TAG"
    SUCCESS_CAA = "SUCCESS_CAA"
    SUCCESS_DNSSEC = "SUCCESS_DNSSEC"


@dataclass_json
@dataclasses.dataclass
class DomainVerificationDetailCertificateAuthorityAuthorization:
    r"""DomainVerificationDetailCertificateAuthorityAuthorization
    Contains information about the last Certificate Authority Authorization (CAA) Lookup details for the specified domain.
    
    In order for a domain to be eligible to be included in the certificate, the entire domain hierarchy must be scanned for DNS CAA records, as outlined by RFC 6844.
    
    The absence of any CAA records found in the domain hierarchy indicates that the domain may be included in the certificate. Alternatively, if CAA records are found when scanning the domain hierarchy, the domain may be included in the certificate as long as `godaddy.com` or `starfieldtech.com` is found in the DNS record value. However, if CAA records are found, yet `godaddy.com` or `starfieldtech.com` is not found in any CAA record's value, then we must drop the domain from the certificate request.
    
    In the case where there are repeated DNS errors when scanning the domain hierarchy for CAA records, thus ending in an unsuccessful scan, then the domain can still be included in the certificate provided the primary domain is not setup with DNSSEC. Conversely, if DNSSEC is found to be setup on the primary domain when scanning following repeated CAA failures, the domain must be dropped from the certificate request. Finally, if DNS errors persist to the point where a successful DNSSEC query could not be obtained, then the domain must be dropped from the certificate request.
    
    """
    
    completed_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedAt') }})
    query_paths: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryPaths') }})
    recommendations: Optional[list[DomainVerificationDetailCertificateAuthorityAuthorizationRecommendationsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    status: Optional[DomainVerificationDetailCertificateAuthorityAuthorizationStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
class DomainVerificationDetailStatusEnum(str, Enum):
    COMPLETED = "COMPLETED"
    FAILED_VERIFICATION = "FAILED_VERIFICATION"
    VERIFIED_POSSIBLE_FRAUD = "VERIFIED_POSSIBLE_FRAUD"
    DROPPED = "DROPPED"
    DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION = "DROPPED_CERTIFICATE_AUTHORITY_AUTHORIZATION"
    DROPPED_GOOGLE_SAFE_BROWSING = "DROPPED_GOOGLE_SAFE_BROWSING"
    INVALID = "INVALID"
    AWAITING = "AWAITING"
    PENDING_POSSIBLE_FRAUD = "PENDING_POSSIBLE_FRAUD"
    REVOKED_CERTIFICATE = "REVOKED_CERTIFICATE"

class DomainVerificationDetailTypeEnum(str, Enum):
    DOMAIN_CONTROL_EMAIL = "DOMAIN_CONTROL_EMAIL"
    AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMIN"
    AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_ADMINSTRATOR"
    AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_HOST_MASTER"
    AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_POST_MASTER"
    AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER = "AUTO_GENERATED_DOMAIN_ACCESS_EMAIL_WEB_MASTER"
    DOMAIN_ACCESS_EMAIL = "DOMAIN_ACCESS_EMAIL"
    DOMAIN_ACCESS_LETTER = "DOMAIN_ACCESS_LETTER"
    DOMAIN_ZONE_CONTROL = "DOMAIN_ZONE_CONTROL"
    MANUAL_DOMAIN_ACCESS_EMAIL = "MANUAL_DOMAIN_ACCESS_EMAIL"
    PREVIOUS_DOMAIN_ACCESS_EMAIL = "PREVIOUS_DOMAIN_ACCESS_EMAIL"
    REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER = "REGISTRATION_AUTHORITY_DOMAIN_ACCESS_LETTER"
    REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL = "REGISTRATION_AUTHORITY_DOMAIN_ZONE_CONTROL"
    REGISTRATION_AUTHORITY_OVERRIDE = "REGISTRATION_AUTHORITY_OVERRIDE"
    REGISTRATION_AUTHORITY_WEBSITE_CONTROL = "REGISTRATION_AUTHORITY_WEBSITE_CONTROL"
    CUSTOMER_OWNED = "CUSTOMER_OWNED"
    WEBSITE_CONTROL = "WEBSITE_CONTROL"

class DomainVerificationDetailUsageEnum(str, Enum):
    COMMON_NAME = "COMMON_NAME"
    SUBJECT_ALTERNATIVE_NAME = "SUBJECT_ALTERNATIVE_NAME"


@dataclass_json
@dataclasses.dataclass
class DomainVerificationDetail:
    created_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    domain_entity_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainEntityId') }})
    modified_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedAt') }})
    status: DomainVerificationDetailStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: DomainVerificationDetailTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    usage: DomainVerificationDetailUsageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    certificate_authority_authorization: Optional[DomainVerificationDetailCertificateAuthorityAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorityAuthorization') }})
    dce_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dceToken') }})
    
