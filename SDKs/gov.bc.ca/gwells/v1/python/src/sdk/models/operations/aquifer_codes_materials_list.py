import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aquifermaterial as shared_aquifermaterial


@dataclasses.dataclass
class AquiferCodesMaterialsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class AquiferCodesMaterialsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_aquifermaterial.AquiferMaterial] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class AquiferCodesMaterialsListRequest:
    query_params: AquiferCodesMaterialsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AquiferCodesMaterialsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aquifer_codes_materials_list_200_application_json_object: Optional[AquiferCodesMaterialsList200ApplicationJSON] = dataclasses.field(default=None)
    
