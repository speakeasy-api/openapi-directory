import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetareacodefromnumberQueryParams:
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    number: str = dataclasses.field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getareacodefromnumber200ApplicationJSON:
    abbreviation: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Abbreviation') }})
    area_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AreaCode') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locale') }})
    primary_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryCity') }})
    

@dataclasses.dataclass
class GetareacodefromnumberRequest:
    query_params: GetareacodefromnumberQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetareacodefromnumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getareacodefromnumber_200_application_json_object: Optional[Getareacodefromnumber200ApplicationJSON] = dataclasses.field(default=None)
    
