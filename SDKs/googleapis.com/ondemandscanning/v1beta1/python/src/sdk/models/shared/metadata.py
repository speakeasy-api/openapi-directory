import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import completeness as shared_completeness


@dataclass_json
@dataclasses.dataclass
class Metadata:
    r"""Metadata
    Other properties of the build.
    """
    
    build_finished_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildFinishedOn') }})
    build_invocation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildInvocationId') }})
    build_started_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildStartedOn') }})
    completeness: Optional[shared_completeness.Completeness] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completeness') }})
    reproducible: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reproducible') }})
    
