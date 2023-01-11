import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreativeDealIdsDealStatuses:
    arc_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arcStatus') }})
    deal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealId') }})
    web_property_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyId') }})
    

@dataclass_json
@dataclasses.dataclass
class CreativeDealIds:
    r"""CreativeDealIds
    The external deal ids associated with a creative.
    """
    
    deal_statuses: Optional[list[CreativeDealIdsDealStatuses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealStatuses') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
