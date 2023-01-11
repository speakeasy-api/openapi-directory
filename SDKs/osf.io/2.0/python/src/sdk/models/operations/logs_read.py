import dataclasses
from typing import Optional


@dataclasses.dataclass
class LogsReadPathParams:
    log_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'log_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LogsReadRequest:
    path_params: LogsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class LogsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
