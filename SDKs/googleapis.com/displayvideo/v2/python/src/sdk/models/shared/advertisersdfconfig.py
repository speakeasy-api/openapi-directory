import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sdfconfig as shared_sdfconfig


@dataclass_json
@dataclasses.dataclass
class AdvertiserSdfConfig:
    r"""AdvertiserSdfConfig
    Structured Data Files (SDF) settings of an advertiser.
    """
    
    override_partner_sdf_config: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridePartnerSdfConfig') }})
    sdf_config: Optional[shared_sdfconfig.SdfConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdfConfig') }})
    
