import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingtemplate as shared_targetingtemplate


@dataclass_json
@dataclasses.dataclass
class TargetingTemplatesListResponse:
    r"""TargetingTemplatesListResponse
    Targeting Template List Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    targeting_templates: Optional[list[shared_targetingtemplate.TargetingTemplate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingTemplates') }})
    
