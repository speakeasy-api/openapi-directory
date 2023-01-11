import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualchassis as shared_virtualchassis


@dataclasses.dataclass
class DcimVirtualChassisListQueryParams:
    domain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    domain_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__ic', 'style': 'form', 'explode': True }})
    domain_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__ie', 'style': 'form', 'explode': True }})
    domain_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__iew', 'style': 'form', 'explode': True }})
    domain_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__isw', 'style': 'form', 'explode': True }})
    domain_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__n', 'style': 'form', 'explode': True }})
    domain_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__nic', 'style': 'form', 'explode': True }})
    domain_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__nie', 'style': 'form', 'explode': True }})
    domain_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__niew', 'style': 'form', 'explode': True }})
    domain_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domain__nisw', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region__n', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    region_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region_id__n', 'style': 'form', 'explode': True }})
    site: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    site_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site__n', 'style': 'form', 'explode': True }})
    site_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id', 'style': 'form', 'explode': True }})
    site_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'site_id__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant__n', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    tenant_id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimVirtualChassisList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_virtualchassis.VirtualChassis] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimVirtualChassisListRequest:
    query_params: DcimVirtualChassisListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimVirtualChassisListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_virtual_chassis_list_200_application_json_object: Optional[DcimVirtualChassisList200ApplicationJSON] = dataclasses.field(default=None)
    
