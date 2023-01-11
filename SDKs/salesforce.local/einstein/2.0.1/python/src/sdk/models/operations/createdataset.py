import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import dataset as shared_dataset

class CreateDatasetRequestBodyTypeEnum(str, Enum):
    IMAGE = "image"
    IMAGE_MULTI_LABEL = "image-multi-label"


@dataclasses.dataclass
class CreateDatasetRequestBody:
    labels: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'labels' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    type: Optional[CreateDatasetRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class CreateDatasetSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateDatasetRequest:
    security: CreateDatasetSecurity = dataclasses.field()
    request: Optional[CreateDatasetRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateDatasetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None)
    
