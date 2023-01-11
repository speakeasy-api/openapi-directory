import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignmentgrouplabel as shared_assignmentgrouplabel
from ..shared import assignmentostype as shared_assignmentostype


@dataclass_json
@dataclasses.dataclass
class Assignment:
    r"""Assignment
    An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
    """
    
    group_labels: Optional[list[shared_assignmentgrouplabel.AssignmentGroupLabel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupLabels') }})
    instance_name_prefixes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNamePrefixes') }})
    instances: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    os_types: Optional[list[shared_assignmentostype.AssignmentOsType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osTypes') }})
    zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
