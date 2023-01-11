import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataset as shared_dataset


@dataclasses.dataclass
class UpdateDatasetAsyncPathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDatasetAsyncRequestBody:
    data: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'type' }})
    

@dataclasses.dataclass
class UpdateDatasetAsyncSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateDatasetAsyncRequest:
    path_params: UpdateDatasetAsyncPathParams = dataclasses.field()
    security: UpdateDatasetAsyncSecurity = dataclasses.field()
    request: Optional[UpdateDatasetAsyncRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateDatasetAsyncResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None)
    
