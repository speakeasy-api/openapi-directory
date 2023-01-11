import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aquiferproductivity as shared_aquiferproductivity


@dataclasses.dataclass
class AquiferCodesProductivityListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AquiferCodesProductivityList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_aquiferproductivity.AquiferProductivity] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class AquiferCodesProductivityListRequest:
    query_params: AquiferCodesProductivityListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AquiferCodesProductivityListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aquifer_codes_productivity_list_200_application_json_object: Optional[AquiferCodesProductivityList200ApplicationJSON] = dataclasses.field(default=None)
    
