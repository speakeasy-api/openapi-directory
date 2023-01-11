import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1renewalsettings as shared_googlecloudchannelv1renewalsettings


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ChangeRenewalSettingsRequestInput:
    r"""GoogleCloudChannelV1ChangeRenewalSettingsRequestInput
    Request message for CloudChannelService.ChangeRenewalSettings.
    """
    
    renewal_settings: Optional[shared_googlecloudchannelv1renewalsettings.GoogleCloudChannelV1RenewalSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renewalSettings') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
