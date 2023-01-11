import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import examplelist as shared_examplelist


@dataclasses.dataclass
class GetExamplesByLabel1QueryParams:
    count: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    label_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'labelId', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetExamplesByLabel1Security:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetExamplesByLabel1Request:
    query_params: GetExamplesByLabel1QueryParams = dataclasses.field()
    security: GetExamplesByLabel1Security = dataclasses.field()
    

@dataclasses.dataclass
class GetExamplesByLabel1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example_list: Optional[shared_examplelist.ExampleList] = dataclasses.field(default=None)
    
