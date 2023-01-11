import dataclasses
from typing import Optional
from ..shared import command as shared_command


@dataclasses.dataclass
class PostCommandsSendRequest:
    request: shared_command.Command = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCommandsSendResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    command: Optional[shared_command.Command] = dataclasses.field(default=None)
    
