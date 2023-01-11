import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import examplelist as shared_examplelist


@dataclasses.dataclass
class GetExamples1PathParams:
    dataset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'datasetId', 'style': 'simple', 'explode': False }})
    
class GetExamples1SourceEnum(str, Enum):
    ALL = "all"
    FEEDBACK = "feedback"
    UPLOAD = "upload"


@dataclasses.dataclass
class GetExamples1QueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    source: Optional[GetExamples1SourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExamples1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetExamples1Request:
    path_params: GetExamples1PathParams = dataclasses.field()
    query_params: GetExamples1QueryParams = dataclasses.field()
    security: GetExamples1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetExamples1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example_list: Optional[shared_examplelist.ExampleList] = dataclasses.field(default=None)
    
