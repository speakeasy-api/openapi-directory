import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import caseclassification as shared_caseclassification


@dataclass_json
@dataclasses.dataclass
class SearchCaseClassificationsResponse:
    r"""SearchCaseClassificationsResponse
    The response message for SearchCaseClassifications endpoint.
    """
    
    case_classifications: Optional[list[shared_caseclassification.CaseClassification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseClassifications') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
