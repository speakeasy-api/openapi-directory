import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pipelinereadycondition as shared_pipelinereadycondition
from ..shared import targetspresentcondition as shared_targetspresentcondition


@dataclass_json
@dataclasses.dataclass
class PipelineCondition:
    r"""PipelineCondition
    PipelineCondition contains all conditions relevant to a Delivery Pipeline.
    """
    
    pipeline_ready_condition: Optional[shared_pipelinereadycondition.PipelineReadyCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineReadyCondition') }})
    targets_present_condition: Optional[shared_targetspresentcondition.TargetsPresentCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetsPresentCondition') }})
    
