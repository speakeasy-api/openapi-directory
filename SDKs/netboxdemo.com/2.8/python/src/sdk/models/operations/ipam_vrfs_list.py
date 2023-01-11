import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vrf as shared_vrf


@dataclasses.dataclass
class IpamVrfsListQueryParams:
    created: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    enforce_unique: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'enforce_unique', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    last_updated: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_updated', 'style': 'form', 'explode': True }})
    last_updated_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_updated__gte', 'style': 'form', 'explode': True }})
    last_updated_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_updated__lte', 'style': 'form', 'explode': True }})
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
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    rd: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd', 'style': 'form', 'explode': True }})
    rd_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__ic', 'style': 'form', 'explode': True }})
    rd_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__ie', 'style': 'form', 'explode': True }})
    rd_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__iew', 'style': 'form', 'explode': True }})
    rd_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__isw', 'style': 'form', 'explode': True }})
    rd_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__n', 'style': 'form', 'explode': True }})
    rd_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__nic', 'style': 'form', 'explode': True }})
    rd_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__nie', 'style': 'form', 'explode': True }})
    rd_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__niew', 'style': 'form', 'explode': True }})
    rd_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rd__nisw', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant__n', 'style': 'form', 'explode': True }})
    tenant_group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group', 'style': 'form', 'explode': True }})
    tenant_group_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group__n', 'style': 'form', 'explode': True }})
    tenant_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id', 'style': 'form', 'explode': True }})
    tenant_group_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id__n', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    tenant_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class IpamVrfsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_vrf.Vrf] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class IpamVrfsListRequest:
    query_params: IpamVrfsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamVrfsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ipam_vrfs_list_200_application_json_object: Optional[IpamVrfsList200ApplicationJSON] = dataclasses.field(default=None)
    
