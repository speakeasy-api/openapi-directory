import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1renewalsettings as shared_googlecloudchannelv1renewalsettings
from ..shared import googlecloudchannelv1renewalsettings as shared_googlecloudchannelv1renewalsettings


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CommitmentSettings:
    r"""GoogleCloudChannelV1CommitmentSettings
    Commitment settings for commitment-based offers.
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    renewal_settings: Optional[shared_googlecloudchannelv1renewalsettings.GoogleCloudChannelV1RenewalSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CommitmentSettingsInput:
    r"""GoogleCloudChannelV1CommitmentSettingsInput
    Commitment settings for commitment-based offers.
    """
    
    renewal_settings: Optional[shared_googlecloudchannelv1renewalsettings.GoogleCloudChannelV1RenewalSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    
