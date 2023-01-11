import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import examplelist as shared_examplelist


@dataclasses.dataclass
class GetExamplesPathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    
class GetExamplesSourceEnum(str, Enum):
    ALL = "all"
    FEEDBACK = "feedback"
    UPLOAD = "upload"


@dataclasses.dataclass
class GetExamplesQueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    source: Optional[GetExamplesSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExamplesSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetExamplesRequest:
    path_params: GetExamplesPathParams = dataclasses.field()
    query_params: GetExamplesQueryParams = dataclasses.field()
    security: GetExamplesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetExamplesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example_list: Optional[shared_examplelist.ExampleList] = dataclasses.field(default=None)
    
