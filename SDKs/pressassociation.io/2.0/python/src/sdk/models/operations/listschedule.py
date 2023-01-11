import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListScheduleQueryParams:
    channel_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListScheduleSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListScheduleRequest:
    query_params: ListScheduleQueryParams = dataclasses.field()
    security: ListScheduleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_schedule_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
