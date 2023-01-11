import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gceinstancefilter as shared_gceinstancefilter


@dataclass_json
@dataclasses.dataclass
class ResourceFilter:
    r"""ResourceFilter
    Message describing resource filters
    """
    
    gce_instance_filter: Optional[shared_gceinstancefilter.GceInstanceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gceInstanceFilter') }})
    inclusion_labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusionLabels') }})
    resource_id_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceIdPatterns') }})
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
