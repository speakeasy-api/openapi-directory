import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StoryIDFileOoxmlautomationidGetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    ooxml_automation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ooxml_automation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoryIDFileOoxmlautomationidGetRequest:
    path_params: StoryIDFileOoxmlautomationidGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoryIDFileOoxmlautomationidGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    excel_spreadsheet: Optional[bytes] = dataclasses.field(default=None)
    powerpoint_presentation: Optional[bytes] = dataclasses.field(default=None)
    word_document: Optional[bytes] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
