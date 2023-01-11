import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamicgroupquery as shared_dynamicgroupquery
from ..shared import dynamicgroupstatus as shared_dynamicgroupstatus


@dataclass_json
@dataclasses.dataclass
class DynamicGroupMetadata:
    r"""DynamicGroupMetadata
    Dynamic group metadata like queries and status.
    """
    
    queries: Optional[list[shared_dynamicgroupquery.DynamicGroupQuery]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    status: Optional[shared_dynamicgroupstatus.DynamicGroupStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
