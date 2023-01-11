import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrunv2tasktemplate as shared_googlecloudrunv2tasktemplate


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2ExecutionTemplate:
    r"""GoogleCloudRunV2ExecutionTemplate
    ExecutionTemplate describes the data an execution should have when created from a template.
    """
    
    annotations: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    parallelism: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    task_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskCount') }})
    template: Optional[shared_googlecloudrunv2tasktemplate.GoogleCloudRunV2TaskTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
