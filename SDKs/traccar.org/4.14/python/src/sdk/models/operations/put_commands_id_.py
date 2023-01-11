import dataclasses
from typing import Optional
from ..shared import command as shared_command


@dataclasses.dataclass
class PutCommandsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutCommandsIDRequest:
    path_params: PutCommandsIDPathParams = dataclasses.field()
    request: shared_command.Command = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutCommandsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    command: Optional[shared_command.Command] = dataclasses.field(default=None)
    
