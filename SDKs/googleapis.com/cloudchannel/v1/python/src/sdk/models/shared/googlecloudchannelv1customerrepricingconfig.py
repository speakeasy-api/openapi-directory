import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudchannelv1repricingconfig as shared_googlecloudchannelv1repricingconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CustomerRepricingConfigInput:
    r"""GoogleCloudChannelV1CustomerRepricingConfigInput
    Configuration for how a reseller will reprice a Customer.
    """
    
    repricing_config: Optional[shared_googlecloudchannelv1repricingconfig.GoogleCloudChannelV1RepricingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1CustomerRepricingConfig:
    r"""GoogleCloudChannelV1CustomerRepricingConfig
    Configuration for how a reseller will reprice a Customer.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    repricing_config: Optional[shared_googlecloudchannelv1repricingconfig.GoogleCloudChannelV1RepricingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repricingConfig') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
