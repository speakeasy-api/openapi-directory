import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patchinstancefiltergrouplabel as shared_patchinstancefiltergrouplabel


@dataclass_json
@dataclasses.dataclass
class PatchInstanceFilter:
    r"""PatchInstanceFilter
    A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
    """
    
    all: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    group_labels: Optional[list[shared_patchinstancefiltergrouplabel.PatchInstanceFilterGroupLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupLabels') }})
    instance_name_prefixes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNamePrefixes') }})
    instances: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
