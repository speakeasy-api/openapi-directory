import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cmhybridconfig as shared_cmhybridconfig
from ..shared import thirdpartyonlyconfig as shared_thirdpartyonlyconfig


@dataclass_json
@dataclasses.dataclass
class AdvertiserAdServerConfig:
    r"""AdvertiserAdServerConfig
    Ad server related settings of an advertiser.
    """
    
    cm_hybrid_config: Optional[shared_cmhybridconfig.CmHybridConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmHybridConfig') }})
    third_party_only_config: Optional[shared_thirdpartyonlyconfig.ThirdPartyOnlyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyOnlyConfig') }})
    
