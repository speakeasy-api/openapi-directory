import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDOutlineGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDOutlineGetRequest:
    path_params: StoryIDOutlineGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDOutlineGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    status: Optional[Any] = dataclasses.field(default=None)
    story_id_outline_get_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
