import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetBlobByIDPathParams:
    filename: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBlobByIDRequest:
    path_params: GetBlobByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBlobByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_blob_by_id_200_image_wildcard_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
