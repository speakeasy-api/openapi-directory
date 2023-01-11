import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import instrumentslistresult as shared_instrumentslistresult


@dataclasses.dataclass
class ListCustomInstrumentsQueryParams:
    id: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCustomInstrumentsSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListCustomInstrumentsRequest:
    query_params: ListCustomInstrumentsQueryParams = dataclasses.field()
    security: ListCustomInstrumentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListCustomInstrumentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    instruments_list_result: Optional[shared_instrumentslistresult.InstrumentsListResult] = dataclasses.field(default=None)
    
