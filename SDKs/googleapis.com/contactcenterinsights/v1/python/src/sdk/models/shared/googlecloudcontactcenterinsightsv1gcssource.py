import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1GcsSource:
    r"""GoogleCloudContactcenterinsightsV1GcsSource
    A Cloud Storage source of conversation data.
    """
    
    audio_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioUri') }})
    transcript_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcriptUri') }})
    
