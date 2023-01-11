import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payoraddress as shared_payoraddress
from ..shared import kycstate_enum as shared_kycstate_enum
from ..shared import transmissiontypes as shared_transmissiontypes

class PayorV1LanguageEnum(str, Enum):
    EN = "EN"
    FR = "FR"


@dataclass_json
@dataclasses.dataclass
class PayorV1:
    payor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    address: Optional[shared_payoraddress.PayorAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    allows_language_choice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsLanguageChoice') }})
    collective_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectiveAlias') }})
    dba_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    funding_account_account_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountAccountName') }})
    funding_account_account_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountAccountNumber') }})
    funding_account_routing_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fundingAccountRoutingNumber') }})
    includes_reports: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includesReports') }})
    kyc_state: Optional[shared_kycstate_enum.KycStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kycState') }})
    language: Optional[PayorV1LanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    manual_lockout: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualLockout') }})
    max_master_payor_admins: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxMasterPayorAdmins') }})
    payee_grace_period_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeGracePeriodDays') }})
    payee_grace_period_processing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeGracePeriodProcessingEnabled') }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    primary_contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactEmail') }})
    primary_contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactName') }})
    primary_contact_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactPhone') }})
    reminder_emails_opt_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminderEmailsOptOut') }})
    support_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContact') }})
    transmission_types: Optional[shared_transmissiontypes.TransmissionTypes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionTypes') }})
    
