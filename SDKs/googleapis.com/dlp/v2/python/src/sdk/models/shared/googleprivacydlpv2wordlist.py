import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2WordList:
    r"""GooglePrivacyDlpV2WordList
    Message defining a list of words or phrases to search for in the data.
    """
    
    words: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    
