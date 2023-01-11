import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcsdestination as shared_gcsdestination


@dataclass_json
@dataclasses.dataclass
class OutputConfig:
    r"""OutputConfig
    Output configuration for BatchTranslateText request.
    """
    
    gcs_destination: Optional[shared_gcsdestination.GcsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    
