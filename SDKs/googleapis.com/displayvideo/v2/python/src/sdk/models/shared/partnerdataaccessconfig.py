import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sdfconfig as shared_sdfconfig


@dataclass_json
@dataclasses.dataclass
class PartnerDataAccessConfig:
    r"""PartnerDataAccessConfig
    Settings that control how partner related data may be accessed.
    """
    
    sdf_config: Optional[shared_sdfconfig.SdfConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdfConfig') }})
    
