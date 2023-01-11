import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import dataset as shared_dataset

class UploadDatasetAsync1RequestBodyTypeEnum(str, Enum):
    IMAGE = "image"
    IMAGE_DETECTION = "image-detection"
    IMAGE_MULTI_LABEL = "image-multi-label"


@dataclasses.dataclass
class UploadDatasetAsync1RequestBody:
    data: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    type: Optional[UploadDatasetAsync1RequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class UploadDatasetAsync1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UploadDatasetAsync1Request:
    security: UploadDatasetAsync1Security = dataclasses.field()
    request: Optional[UploadDatasetAsync1RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadDatasetAsync1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None)
    
