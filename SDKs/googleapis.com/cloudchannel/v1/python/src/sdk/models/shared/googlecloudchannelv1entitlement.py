import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1associationinfo as shared_googlecloudchannelv1associationinfo
from ..shared import googlecloudchannelv1commitmentsettings as shared_googlecloudchannelv1commitmentsettings
from ..shared import googlecloudchannelv1parameter as shared_googlecloudchannelv1parameter
from ..shared import googlecloudchannelv1provisionedservice as shared_googlecloudchannelv1provisionedservice
from ..shared import googlecloudchannelv1trialsettings as shared_googlecloudchannelv1trialsettings
from ..shared import googlecloudchannelv1commitmentsettings as shared_googlecloudchannelv1commitmentsettings
from ..shared import googlecloudchannelv1parameter as shared_googlecloudchannelv1parameter

class GoogleCloudChannelV1EntitlementProvisioningStateEnum(str, Enum):
    PROVISIONING_STATE_UNSPECIFIED = "PROVISIONING_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"

class GoogleCloudChannelV1EntitlementSuspensionReasonsEnum(str, Enum):
    SUSPENSION_REASON_UNSPECIFIED = "SUSPENSION_REASON_UNSPECIFIED"
    RESELLER_INITIATED = "RESELLER_INITIATED"
    TRIAL_ENDED = "TRIAL_ENDED"
    RENEWAL_WITH_TYPE_CANCEL = "RENEWAL_WITH_TYPE_CANCEL"
    PENDING_TOS_ACCEPTANCE = "PENDING_TOS_ACCEPTANCE"
    OTHER = "OTHER"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1Entitlement:
    r"""GoogleCloudChannelV1Entitlement
    An entitlement is a representation of a customer's ability to use a service.
    """
    
    association_info: Optional[shared_googlecloudchannelv1associationinfo.GoogleCloudChannelV1AssociationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationInfo') }})
    commitment_settings: Optional[shared_googlecloudchannelv1commitmentsettings.GoogleCloudChannelV1CommitmentSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentSettings') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    parameters: Optional[list[shared_googlecloudchannelv1parameter.GoogleCloudChannelV1Parameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    provisioned_service: Optional[shared_googlecloudchannelv1provisionedservice.GoogleCloudChannelV1ProvisionedService] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedService') }})
    provisioning_state: Optional[GoogleCloudChannelV1EntitlementProvisioningStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningState') }})
    purchase_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    suspension_reasons: Optional[list[GoogleCloudChannelV1EntitlementSuspensionReasonsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReasons') }})
    trial_settings: Optional[shared_googlecloudchannelv1trialsettings.GoogleCloudChannelV1TrialSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialSettings') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1EntitlementInput:
    r"""GoogleCloudChannelV1EntitlementInput
    An entitlement is a representation of a customer's ability to use a service.
    """
    
    association_info: Optional[shared_googlecloudchannelv1associationinfo.GoogleCloudChannelV1AssociationInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationInfo') }})
    commitment_settings: Optional[shared_googlecloudchannelv1commitmentsettings.GoogleCloudChannelV1CommitmentSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentSettings') }})
    offer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    parameters: Optional[list[shared_googlecloudchannelv1parameter.GoogleCloudChannelV1ParameterInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    purchase_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    trial_settings: Optional[shared_googlecloudchannelv1trialsettings.GoogleCloudChannelV1TrialSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialSettings') }})
    
