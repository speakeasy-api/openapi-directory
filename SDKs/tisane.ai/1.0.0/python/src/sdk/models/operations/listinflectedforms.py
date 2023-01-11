import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ListInflectedFormsQueryParams:
    family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    lexeme: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lexeme', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListInflectedForms200ApplicationJSONFeatures:
    index: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ListInflectedForms200ApplicationJSON:
    features: Optional[list[ListInflectedForms200ApplicationJSONFeatures]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    is_lemma: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLemma') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclasses.dataclass
class ListInflectedFormsRequest:
    query_params: ListInflectedFormsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListInflectedFormsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_inflected_forms_200_application_json_objects: Optional[list[ListInflectedForms200ApplicationJSON]] = dataclasses.field(default=None)
    
