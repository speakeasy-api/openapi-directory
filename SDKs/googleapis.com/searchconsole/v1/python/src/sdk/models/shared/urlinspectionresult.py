import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ampinspectionresult as shared_ampinspectionresult
from ..shared import indexstatusinspectionresult as shared_indexstatusinspectionresult
from ..shared import mobileusabilityinspectionresult as shared_mobileusabilityinspectionresult
from ..shared import richresultsinspectionresult as shared_richresultsinspectionresult


@dataclass_json
@dataclasses.dataclass
class URLInspectionResult:
    r"""URLInspectionResult
    URL inspection result, including all inspection results.
    """
    
    amp_result: Optional[shared_ampinspectionresult.AmpInspectionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampResult') }})
    index_status_result: Optional[shared_indexstatusinspectionresult.IndexStatusInspectionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexStatusResult') }})
    inspection_result_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectionResultLink') }})
    mobile_usability_result: Optional[shared_mobileusabilityinspectionresult.MobileUsabilityInspectionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileUsabilityResult') }})
    rich_results_result: Optional[shared_richresultsinspectionresult.RichResultsInspectionResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richResultsResult') }})
    
