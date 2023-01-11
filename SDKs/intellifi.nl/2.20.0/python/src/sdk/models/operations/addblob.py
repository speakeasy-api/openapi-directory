import dataclasses
from typing import Optional
from ..shared import blob as shared_blob
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddBlobRequest:
    request: shared_blob.BlobInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddBlobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
