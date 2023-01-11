import dataclasses
from typing import Optional
from ..shared import commandtype as shared_commandtype


@dataclasses.dataclass
class GetCommandsTypesQueryParams:
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'protocol', 'style': 'form', 'explode': True }})
    text_channel: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'textChannel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCommandsTypesRequest:
    query_params: GetCommandsTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCommandsTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    command_types: Optional[list[shared_commandtype.CommandType]] = dataclasses.field(default=None)
    
