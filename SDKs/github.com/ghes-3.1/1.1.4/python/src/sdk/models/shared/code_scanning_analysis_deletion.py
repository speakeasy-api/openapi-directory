import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CodeScanningAnalysisDeletion:
    r"""CodeScanningAnalysisDeletion
    Successful deletion of a code scanning analysis
    """
    
    confirm_delete_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirm_delete_url') }})
    next_analysis_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_analysis_url') }})
    
