import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import advertisersdfconfig as shared_advertisersdfconfig


@dataclass_json
@dataclasses.dataclass
class AdvertiserDataAccessConfig:
    r"""AdvertiserDataAccessConfig
    Settings that control how advertiser related data may be accessed.
    """
    
    sdf_config: Optional[shared_advertisersdfconfig.AdvertiserSdfConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdfConfig') }})
    
