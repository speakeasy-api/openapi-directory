import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import example as shared_example


@dataclasses.dataclass
class AddExamplePathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddExampleRequestBody:
    data: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'data' }})
    label_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'labelId' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class AddExampleSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class AddExampleRequest:
    path_params: AddExamplePathParams = dataclasses.field()
    security: AddExampleSecurity = dataclasses.field()
    request: Optional[AddExampleRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddExampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example: Optional[shared_example.Example] = dataclasses.field(default=None)
    
