import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IntentMatchData:
    r"""GoogleCloudContactcenterinsightsV1IntentMatchData
    The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.
    """
    
    intent_unique_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentUniqueId') }})
    
