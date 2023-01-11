import dataclasses
from typing import Optional
from ..shared import imageurl as shared_imageurl
from ..shared import computervisionerror as shared_computervisionerror


@dataclasses.dataclass
class BatchReadFileRequest:
    request: shared_imageurl.ImageURL = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchReadFileResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    computer_vision_error: Optional[shared_computervisionerror.ComputerVisionError] = dataclasses.field(default=None)
    
