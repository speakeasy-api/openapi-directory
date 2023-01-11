import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import urlinspectionresult as shared_urlinspectionresult


@dataclass_json
@dataclasses.dataclass
class InspectURLIndexResponse:
    r"""InspectURLIndexResponse
    Index-Status inspection response.
    """
    
    inspection_result: Optional[shared_urlinspectionresult.URLInspectionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectionResult') }})
    
