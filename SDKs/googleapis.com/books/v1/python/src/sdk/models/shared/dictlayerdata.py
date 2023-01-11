import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DictlayerdataCommon:
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictSource:
    r"""DictlayerdataDictSource
    The source, url and attribution for this dictionary data.
    """
    
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsDerivativesSource:
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsDerivatives:
    source: Optional[DictlayerdataDictWordsDerivativesSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsExamplesSource:
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsExamples:
    source: Optional[DictlayerdataDictWordsExamplesSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesConjugations:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesDefinitionsExamplesSource:
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesDefinitionsExamples:
    source: Optional[DictlayerdataDictWordsSensesDefinitionsExamplesSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesDefinitions:
    definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    examples: Optional[list[DictlayerdataDictWordsSensesDefinitionsExamples]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesSource:
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesSynonymsSource:
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSensesSynonyms:
    source: Optional[DictlayerdataDictWordsSensesSynonymsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSenses:
    conjugations: Optional[list[DictlayerdataDictWordsSensesConjugations]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conjugations') }})
    definitions: Optional[list[DictlayerdataDictWordsSensesDefinitions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    part_of_speech: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partOfSpeech') }})
    pronunciation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pronunciation') }})
    pronunciation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pronunciationUrl') }})
    source: Optional[DictlayerdataDictWordsSensesSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    syllabification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syllabification') }})
    synonyms: Optional[list[DictlayerdataDictWordsSensesSynonyms]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synonyms') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWordsSource:
    r"""DictlayerdataDictWordsSource
    The words with different meanings but not related words, e.g. \"go\" (game) and \"go\" (verb).
    """
    
    attribution: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDictWords:
    derivatives: Optional[list[DictlayerdataDictWordsDerivatives]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('derivatives') }})
    examples: Optional[list[DictlayerdataDictWordsExamples]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('examples') }})
    senses: Optional[list[DictlayerdataDictWordsSenses]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('senses') }})
    source: Optional[DictlayerdataDictWordsSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass_json
@dataclasses.dataclass
class DictlayerdataDict:
    source: Optional[DictlayerdataDictSource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    words: Optional[list[DictlayerdataDictWords]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('words') }})
    

@dataclass_json
@dataclasses.dataclass
class Dictlayerdata:
    common: Optional[DictlayerdataCommon] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common') }})
    dict: Optional[DictlayerdataDict] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dict') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
