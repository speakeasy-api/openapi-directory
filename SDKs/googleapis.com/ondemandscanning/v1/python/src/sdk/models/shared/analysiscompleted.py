import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AnalysisCompleted:
    r"""AnalysisCompleted
    Indicates which analysis completed successfully. Multiple types of analysis can be performed on a single resource.
    """
    
    analysis_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisType') }})
    
