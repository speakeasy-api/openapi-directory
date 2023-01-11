import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1cloudidentityinfo as shared_googlecloudchannelv1cloudidentityinfo
from ..shared import googlecloudchannelv1adminuser as shared_googlecloudchannelv1adminuser


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1ProvisionCloudIdentityRequestInput:
    r"""GoogleCloudChannelV1ProvisionCloudIdentityRequestInput
    Request message for CloudChannelService.ProvisionCloudIdentity
    """
    
    cloud_identity_info: Optional[shared_googlecloudchannelv1cloudidentityinfo.GoogleCloudChannelV1CloudIdentityInfoInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudIdentityInfo') }})
    user: Optional[shared_googlecloudchannelv1adminuser.GoogleCloudChannelV1AdminUser] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    validate_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
