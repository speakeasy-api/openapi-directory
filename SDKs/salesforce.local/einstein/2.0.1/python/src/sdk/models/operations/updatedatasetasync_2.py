import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import dataset as shared_dataset


@dataclasses.dataclass
class UpdateDatasetAsync2PathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateDatasetAsync2RequestBody:
    data: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    

@dataclasses.dataclass
class UpdateDatasetAsync2Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class UpdateDatasetAsync2Request:
    path_params: UpdateDatasetAsync2PathParams = dataclasses.field()
    security: UpdateDatasetAsync2Security = dataclasses.field()
    request: Optional[UpdateDatasetAsync2RequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateDatasetAsync2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dataset: Optional[shared_dataset.Dataset] = dataclasses.field(default=None)
    
