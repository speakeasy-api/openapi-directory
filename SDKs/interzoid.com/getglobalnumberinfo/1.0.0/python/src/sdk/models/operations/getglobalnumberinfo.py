import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetglobalnumberinfoQueryParams:
    intlnumber: str = dataclasses.field(metadata={'query_param': { 'field_name': 'intlnumber', 'style': 'form', 'explode': True }})
    license: str = dataclasses.field(metadata={'query_param': { 'field_name': 'license', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class Getglobalnumberinfo200ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    credits: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credits') }})
    language2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language2') }})
    language3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language3') }})
    mobile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mobile') }})
    primary_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryCity') }})
    primary_language: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryLanguage') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    wealth: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Wealth') }})
    

@dataclasses.dataclass
class GetglobalnumberinfoRequest:
    query_params: GetglobalnumberinfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetglobalnumberinfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getglobalnumberinfo_200_application_json_object: Optional[Getglobalnumberinfo200ApplicationJSON] = dataclasses.field(default=None)
    
