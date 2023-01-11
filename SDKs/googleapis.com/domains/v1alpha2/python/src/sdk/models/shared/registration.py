import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactsettings as shared_contactsettings
from ..shared import dnssettings as shared_dnssettings
from ..shared import managementsettings as shared_managementsettings
from ..shared import dnssettings as shared_dnssettings
from ..shared import managementsettings as shared_managementsettings

class RegistrationIssuesEnum(str, Enum):
    ISSUE_UNSPECIFIED = "ISSUE_UNSPECIFIED"
    CONTACT_SUPPORT = "CONTACT_SUPPORT"
    UNVERIFIED_EMAIL = "UNVERIFIED_EMAIL"

class RegistrationRegisterFailureReasonEnum(str, Enum):
    REGISTER_FAILURE_REASON_UNSPECIFIED = "REGISTER_FAILURE_REASON_UNSPECIFIED"
    REGISTER_FAILURE_REASON_UNKNOWN = "REGISTER_FAILURE_REASON_UNKNOWN"
    DOMAIN_NOT_AVAILABLE = "DOMAIN_NOT_AVAILABLE"
    INVALID_CONTACTS = "INVALID_CONTACTS"

class RegistrationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    REGISTRATION_PENDING = "REGISTRATION_PENDING"
    REGISTRATION_FAILED = "REGISTRATION_FAILED"
    TRANSFER_PENDING = "TRANSFER_PENDING"
    TRANSFER_FAILED = "TRANSFER_FAILED"
    IMPORT_PENDING = "IMPORT_PENDING"
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"
    EXPORTED = "EXPORTED"

class RegistrationSupportedPrivacyEnum(str, Enum):
    CONTACT_PRIVACY_UNSPECIFIED = "CONTACT_PRIVACY_UNSPECIFIED"
    PUBLIC_CONTACT_DATA = "PUBLIC_CONTACT_DATA"
    PRIVATE_CONTACT_DATA = "PRIVATE_CONTACT_DATA"
    REDACTED_CONTACT_DATA = "REDACTED_CONTACT_DATA"

class RegistrationTransferFailureReasonEnum(str, Enum):
    TRANSFER_FAILURE_REASON_UNSPECIFIED = "TRANSFER_FAILURE_REASON_UNSPECIFIED"
    TRANSFER_FAILURE_REASON_UNKNOWN = "TRANSFER_FAILURE_REASON_UNKNOWN"
    EMAIL_CONFIRMATION_FAILURE = "EMAIL_CONFIRMATION_FAILURE"
    DOMAIN_NOT_REGISTERED = "DOMAIN_NOT_REGISTERED"
    DOMAIN_HAS_TRANSFER_LOCK = "DOMAIN_HAS_TRANSFER_LOCK"
    INVALID_AUTHORIZATION_CODE = "INVALID_AUTHORIZATION_CODE"
    TRANSFER_CANCELLED = "TRANSFER_CANCELLED"
    TRANSFER_REJECTED = "TRANSFER_REJECTED"
    INVALID_REGISTRANT_EMAIL_ADDRESS = "INVALID_REGISTRANT_EMAIL_ADDRESS"
    DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER = "DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER"
    TRANSFER_ALREADY_PENDING = "TRANSFER_ALREADY_PENDING"


@dataclass_json
@dataclasses.dataclass
class Registration:
    r"""Registration
    The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
    """
    
    contact_settings: Optional[shared_contactsettings.ContactSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactSettings') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dns_settings: Optional[shared_dnssettings.DNSSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSettings') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    expire_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    issues: Optional[list[RegistrationIssuesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    management_settings: Optional[shared_managementsettings.ManagementSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementSettings') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_contact_settings: Optional[shared_contactsettings.ContactSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingContactSettings') }})
    register_failure_reason: Optional[RegistrationRegisterFailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registerFailureReason') }})
    state: Optional[RegistrationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    supported_privacy: Optional[list[RegistrationSupportedPrivacyEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedPrivacy') }})
    transfer_failure_reason: Optional[RegistrationTransferFailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferFailureReason') }})
    

@dataclass_json
@dataclasses.dataclass
class RegistrationInput:
    r"""RegistrationInput
    The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
    """
    
    contact_settings: Optional[shared_contactsettings.ContactSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactSettings') }})
    dns_settings: Optional[shared_dnssettings.DNSSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsSettings') }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    management_settings: Optional[shared_managementsettings.ManagementSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementSettings') }})
    pending_contact_settings: Optional[shared_contactsettings.ContactSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingContactSettings') }})
    
