import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rackreservation as shared_rackreservation


@dataclasses.dataclass
class DcimRackReservationsListQueryParams:
    created: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__gt', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__lt', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    created_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__n', 'style': 'form', 'explode': True }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    group_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group__n', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    group_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id__n', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rack_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rack_id', 'style': 'form', 'explode': True }})
    rack_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rack_id__n', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant__n', 'style': 'form', 'explode': True }})
    tenant_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group', 'style': 'form', 'explode': True }})
    tenant_group_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group__n', 'style': 'form', 'explode': True }})
    tenant_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id', 'style': 'form', 'explode': True }})
    tenant_group_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id__n', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    tenant_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id__n', 'style': 'form', 'explode': True }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user', 'style': 'form', 'explode': True }})
    user_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user__n', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    user_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimRackReservationsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_rackreservation.RackReservation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimRackReservationsListRequest:
    query_params: DcimRackReservationsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRackReservationsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_rack_reservations_list_200_application_json_object: Optional[DcimRackReservationsList200ApplicationJSON] = dataclasses.field(default=None)
    
