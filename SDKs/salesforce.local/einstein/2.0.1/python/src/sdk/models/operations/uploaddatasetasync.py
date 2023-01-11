import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import dataset as shared_dataset

class UploadDatasetAsyncRequestBodyTypeEnum(str, Enum):
    TEXT_INTENT = "text-intent"
    TEXT_SENTIMENT = "text-sentiment"


@dataclasses.dataclass
class UploadDatasetAsyncRequestBody:
    data: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    type: Optional[UploadDatasetAsyncRequestBodyTypeEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class UploadDatasetAsyncSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UploadDatasetAsyncRequest:
    security: UploadDatasetAsyncSecurity = dataclasses.field()
    request: Optional[UploadDatasetAsyncRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadDatasetAsyncResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None)
    
