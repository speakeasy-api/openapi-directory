import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import site as shared_site


@dataclasses.dataclass
class DcimSitesListQueryParams:
    asn: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asn', 'style': 'form', 'explode': True }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contact_email', 'style': 'form', 'explode': True }})
    contact_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contact_name', 'style': 'form', 'explode': True }})
    contact_phone: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contact_phone', 'style': 'form', 'explode': True }})
    facility: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'facility', 'style': 'form', 'explode': True }})
    id_in: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'region_id', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimSitesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_site.Site] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimSitesListRequest:
    query_params: DcimSitesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimSitesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_sites_list_200_application_json_object: Optional[DcimSitesList200ApplicationJSON] = dataclasses.field(default=None)
    
