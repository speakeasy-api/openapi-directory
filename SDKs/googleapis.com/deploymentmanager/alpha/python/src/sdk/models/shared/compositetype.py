import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compositetypelabelentry as shared_compositetypelabelentry
from ..shared import operation as shared_operation
from ..shared import templatecontents as shared_templatecontents

class CompositeTypeStatusEnum(str, Enum):
    UNKNOWN_STATUS = "UNKNOWN_STATUS"
    DEPRECATED = "DEPRECATED"
    EXPERIMENTAL = "EXPERIMENTAL"
    SUPPORTED = "SUPPORTED"


@dataclass_json
@dataclasses.dataclass
class CompositeType:
    r"""CompositeType
    Holds the composite type.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    insert_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertTime') }})
    labels: Optional[list[shared_compositetypelabelentry.CompositeTypeLabelEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation: Optional[shared_operation.Operation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    self_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    status: Optional[CompositeTypeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template_contents: Optional[shared_templatecontents.TemplateContents] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateContents') }})
    
