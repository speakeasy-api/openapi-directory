import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import prefix as shared_prefix


@dataclasses.dataclass
class IpamPrefixesListQueryParams:
    contains: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contains', 'style': 'form', 'explode': True }})
    family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_pool: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_pool', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mask_length: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mask_length', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role_id', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    vlan_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vlan_id', 'style': 'form', 'explode': True }})
    vlan_vid: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vlan_vid', 'style': 'form', 'explode': True }})
    vrf: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vrf', 'style': 'form', 'explode': True }})
    vrf_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vrf_id', 'style': 'form', 'explode': True }})
    within: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'within', 'style': 'form', 'explode': True }})
    within_include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'within_include', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class IpamPrefixesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_prefix.Prefix] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class IpamPrefixesListRequest:
    query_params: IpamPrefixesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class IpamPrefixesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ipam_prefixes_list_200_application_json_object: Optional[IpamPrefixesList200ApplicationJSON] = dataclasses.field(default=None)
    
