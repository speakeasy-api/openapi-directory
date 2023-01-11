import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import strategy as shared_strategy


@dataclass_json
@dataclasses.dataclass
class Stage:
    r"""Stage
    Stage specifies a location to which to deploy.
    """
    
    profiles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profiles') }})
    strategy: Optional[shared_strategy.Strategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    target_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    
