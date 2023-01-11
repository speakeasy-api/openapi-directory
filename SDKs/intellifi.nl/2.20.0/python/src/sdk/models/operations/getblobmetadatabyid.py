import dataclasses
from typing import Optional
from ..shared import blob as shared_blob


@dataclasses.dataclass
class GetBlobMetadataByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBlobMetadataByIDRequest:
    path_params: GetBlobMetadataByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBlobMetadataByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    blob: Optional[shared_blob.Blob] = dataclasses.field(default=None)
    
