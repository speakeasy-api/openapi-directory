import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossaryinputconfig as shared_glossaryinputconfig
from ..shared import languagecodesset as shared_languagecodesset
from ..shared import languagecodepair as shared_languagecodepair


@dataclass_json
@dataclasses.dataclass
class Glossary:
    r"""Glossary
    Represents a glossary built from user provided data.
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    entry_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryCount') }})
    input_config: Optional[shared_glossaryinputconfig.GlossaryInputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    language_codes_set: Optional[shared_languagecodesset.LanguageCodesSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodesSet') }})
    language_pair: Optional[shared_languagecodepair.LanguageCodePair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languagePair') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    submit_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitTime') }})
    

@dataclass_json
@dataclasses.dataclass
class GlossaryInput:
    r"""GlossaryInput
    Represents a glossary built from user provided data.
    """
    
    input_config: Optional[shared_glossaryinputconfig.GlossaryInputConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    language_codes_set: Optional[shared_languagecodesset.LanguageCodesSet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodesSet') }})
    language_pair: Optional[shared_languagecodepair.LanguageCodePair] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languagePair') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
