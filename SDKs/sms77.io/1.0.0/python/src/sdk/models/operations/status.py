import dataclasses
from typing import Optional


@dataclasses.dataclass
class StatusQueryParams:
    msg_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'msg_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StatusRequest:
    query_params: StatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    status_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
