import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDFileOoxmlautomationidDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    ooxml_automation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ooxml_automation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDFileOoxmlautomationidDeleteRequest:
    path_params: StoryIDFileOoxmlautomationidDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDFileOoxmlautomationidDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
