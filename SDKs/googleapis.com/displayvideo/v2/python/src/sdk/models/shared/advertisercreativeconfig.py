import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AdvertiserCreativeConfig:
    r"""AdvertiserCreativeConfig
    Creatives related settings of an advertiser.
    """
    
    dynamic_creative_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicCreativeEnabled') }})
    ias_client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iasClientId') }})
    oba_compliance_disabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obaComplianceDisabled') }})
    video_creative_data_sharing_authorized: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoCreativeDataSharingAuthorized') }})
    
