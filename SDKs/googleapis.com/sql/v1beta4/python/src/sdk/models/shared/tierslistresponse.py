import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tier as shared_tier


@dataclass_json
@dataclasses.dataclass
class TiersListResponse:
    r"""TiersListResponse
    Tiers list response.
    """
    
    items: Optional[list[shared_tier.Tier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
