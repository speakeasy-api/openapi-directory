import dataclasses
from typing import Optional
from ..shared import command as shared_command


@dataclasses.dataclass
class GetCommandsQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommandsRequest:
    query_params: GetCommandsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommandsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    commands: Optional[list[shared_command.Command]] = dataclasses.field(default=None)
    
