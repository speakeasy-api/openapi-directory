import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderedjob as shared_orderedjob
from ..shared import templateparameter as shared_templateparameter
from ..shared import workflowtemplateplacement as shared_workflowtemplateplacement
from ..shared import workflowtemplateplacement as shared_workflowtemplateplacement


@dataclass_json
@dataclasses.dataclass
class WorkflowTemplate:
    r"""WorkflowTemplate
    A Dataproc workflow template resource.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dag_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagTimeout') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jobs: Optional[list[shared_orderedjob.OrderedJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[list[shared_templateparameter.TemplateParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    placement: Optional[shared_workflowtemplateplacement.WorkflowTemplatePlacement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class WorkflowTemplateInput:
    r"""WorkflowTemplateInput
    A Dataproc workflow template resource.
    """
    
    dag_timeout: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagTimeout') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jobs: Optional[list[shared_orderedjob.OrderedJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobs') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    parameters: Optional[list[shared_templateparameter.TemplateParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    placement: Optional[shared_workflowtemplateplacement.WorkflowTemplatePlacementInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
