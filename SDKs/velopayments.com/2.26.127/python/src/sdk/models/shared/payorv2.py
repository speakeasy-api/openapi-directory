import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import payoraddressv2 as shared_payoraddressv2
from ..shared import kycstate_enum as shared_kycstate_enum
from ..shared import paymentrails_enum as shared_paymentrails_enum
from ..shared import transmissiontypes_2 as shared_transmissiontypes_2

class PayorV2LanguageEnum(str, Enum):
    EN = "EN"
    FR = "FR"


@dataclass_json
@dataclasses.dataclass
class PayorV2:
    payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    payor_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    address: Optional[shared_payoraddressv2.PayorAddressV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    allows_language_choice: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsLanguageChoice') }})
    collective_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectiveAlias') }})
    dba_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    includes_reports: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includesReports') }})
    kyc_state: Optional[shared_kycstate_enum.KycStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kycState') }})
    language: Optional[PayorV2LanguageEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    manual_lockout: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualLockout') }})
    max_master_payor_admins: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxMasterPayorAdmins') }})
    payee_grace_period_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeGracePeriodDays') }})
    payee_grace_period_processing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeGracePeriodProcessingEnabled') }})
    payment_rails: Optional[shared_paymentrails_enum.PaymentRailsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentRails') }})
    payor_xid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorXid') }})
    primary_contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactEmail') }})
    primary_contact_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactName') }})
    primary_contact_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryContactPhone') }})
    reminder_emails_opt_out: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminderEmailsOptOut') }})
    remote_system_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remoteSystemIds') }})
    support_contact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContact') }})
    transmission_types: Optional[shared_transmissiontypes_2.TransmissionTypes2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmissionTypes') }})
    wu_customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wuCustomerId') }})
    
