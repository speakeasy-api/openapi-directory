import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event as shared_event


@dataclasses.dataclass
class ExportEventsJSONQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportEventsJSONSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportEventsJSONRequest:
    query_params: ExportEventsJSONQueryParams = dataclasses.field()
    security: ExportEventsJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportEventsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
