import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rearporttemplate as shared_rearporttemplate


@dataclasses.dataclass
class DcimRearPortTemplatesListQueryParams:
    devicetype_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devicetype_id', 'style': 'form', 'explode': True }})
    devicetype_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devicetype_id__n', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    name_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__ic', 'style': 'form', 'explode': True }})
    name_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__ie', 'style': 'form', 'explode': True }})
    name_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__iew', 'style': 'form', 'explode': True }})
    name_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__isw', 'style': 'form', 'explode': True }})
    name_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__n', 'style': 'form', 'explode': True }})
    name_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nic', 'style': 'form', 'explode': True }})
    name_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nie', 'style': 'form', 'explode': True }})
    name_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__niew', 'style': 'form', 'explode': True }})
    name_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    positions: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'positions', 'style': 'form', 'explode': True }})
    positions_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'positions__gt', 'style': 'form', 'explode': True }})
    positions_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'positions__gte', 'style': 'form', 'explode': True }})
    positions_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'positions__lt', 'style': 'form', 'explode': True }})
    positions_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'positions__lte', 'style': 'form', 'explode': True }})
    positions_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'positions__n', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    type_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimRearPortTemplatesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_rearporttemplate.RearPortTemplate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimRearPortTemplatesListRequest:
    query_params: DcimRearPortTemplatesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRearPortTemplatesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_rear_port_templates_list_200_application_json_object: Optional[DcimRearPortTemplatesList200ApplicationJSON] = dataclasses.field(default=None)
    
