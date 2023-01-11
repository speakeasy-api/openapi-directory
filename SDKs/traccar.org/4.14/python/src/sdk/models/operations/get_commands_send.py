import dataclasses
from typing import Optional
from ..shared import command as shared_command


@dataclasses.dataclass
class GetCommandsSendQueryParams:
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommandsSendRequest:
    query_params: GetCommandsSendQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommandsSendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commands: Optional[list[shared_command.Command]] = dataclasses.field(default=None)
    
