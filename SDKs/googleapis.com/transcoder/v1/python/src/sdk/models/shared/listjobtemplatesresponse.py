import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobtemplate as shared_jobtemplate


@dataclass_json
@dataclasses.dataclass
class ListJobTemplatesResponse:
    r"""ListJobTemplatesResponse
    Response message for `TranscoderService.ListJobTemplates`.
    """
    
    job_templates: Optional[list[shared_jobtemplate.JobTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobTemplates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
