import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListWordSensesQueryParams:
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    word: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'word', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListWordSenses200ApplicationJSONFamilies:
    key: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWordSenses200ApplicationJSONFeatures:
    index: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListWordSenses200ApplicationJSON:
    families: Optional[list[ListWordSenses200ApplicationJSONFamilies]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('families') }})
    features: Optional[list[ListWordSenses200ApplicationJSONFeatures]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    frequency: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    is_lemma: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLemma') }})
    legacy_map_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyMapId') }})
    lemma: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lemma') }})
    lexeme_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lexemeId') }})
    

@dataclasses.dataclass
class ListWordSensesRequest:
    query_params: ListWordSensesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListWordSensesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_word_senses_200_application_json_objects: Optional[list[ListWordSenses200ApplicationJSON]] = dataclasses.field(default=None)
    
