import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customclass as shared_customclass
from ..shared import phraseset as shared_phraseset


@dataclass_json
@dataclasses.dataclass
class SpeechAdaptation:
    r"""SpeechAdaptation
    Speech adaptation configuration.
    """
    
    custom_classes: Optional[list[shared_customclass.CustomClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClasses') }})
    phrase_set_references: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSetReferences') }})
    phrase_sets: Optional[list[shared_phraseset.PhraseSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSets') }})
    
