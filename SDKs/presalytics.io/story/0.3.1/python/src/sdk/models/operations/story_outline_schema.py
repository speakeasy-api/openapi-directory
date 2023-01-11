import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryOutlineSchemaPathParams:
    schema_version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'schema_version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryOutlineSchemaRequest:
    path_params: StoryOutlineSchemaPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryOutlineSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
