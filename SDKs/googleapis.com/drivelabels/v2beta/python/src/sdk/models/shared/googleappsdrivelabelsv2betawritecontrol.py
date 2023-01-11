import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaWriteControl:
    r"""GoogleAppsDriveLabelsV2betaWriteControl
    Provides control over how write requests are executed. When not specified, the last write wins.
    """
    
    required_revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredRevisionId') }})
    
