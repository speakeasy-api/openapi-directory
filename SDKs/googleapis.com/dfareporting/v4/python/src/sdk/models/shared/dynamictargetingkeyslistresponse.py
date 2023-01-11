import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamictargetingkey as shared_dynamictargetingkey


@dataclass_json
@dataclasses.dataclass
class DynamicTargetingKeysListResponse:
    r"""DynamicTargetingKeysListResponse
    Dynamic Targeting Key List Response
    """
    
    dynamic_targeting_keys: Optional[list[shared_dynamictargetingkey.DynamicTargetingKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicTargetingKeys') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
