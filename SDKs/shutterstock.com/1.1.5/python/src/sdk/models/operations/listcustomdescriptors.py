import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import descriptorslistresult as shared_descriptorslistresult


@dataclasses.dataclass
class ListCustomDescriptorsQueryParams:
    band_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'band_id', 'style': 'form', 'explode': True }})
    band_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'band_name', 'style': 'form', 'explode': True }})
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    instrument_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'instrument_id', 'style': 'form', 'explode': True }})
    instrument_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'instrument_name', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    render_speed_over: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'render_speed_over', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tempo: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tempo', 'style': 'form', 'explode': True }})
    tempo_from: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tempo_from', 'style': 'form', 'explode': True }})
    tempo_to: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tempo_to', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCustomDescriptorsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListCustomDescriptorsRequest:
    query_params: ListCustomDescriptorsQueryParams = dataclasses.field()
    security: ListCustomDescriptorsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListCustomDescriptorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    descriptors_list_result: Optional[shared_descriptorslistresult.DescriptorsListResult] = dataclasses.field(default=None)
    
