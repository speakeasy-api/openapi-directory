import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gcsdestination as shared_gcsdestination


@dataclass_json
@dataclasses.dataclass
class DocumentOutputConfig:
    r"""DocumentOutputConfig
    A document translation request output config.
    """
    
    gcs_destination: Optional[shared_gcsdestination.GcsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
