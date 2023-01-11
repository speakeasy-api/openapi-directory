import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchData:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchData
    The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    phrase_matcher: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatcher') }})
    
