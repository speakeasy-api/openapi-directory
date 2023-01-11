import dataclasses
from typing import Optional
from ..shared import activewidgetlist as shared_activewidgetlist
from ..shared import error as shared_error


@dataclasses.dataclass
class GetActiveWidgetsPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActiveWidgetsRequest:
    path_params: GetActiveWidgetsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActiveWidgetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    active_widget_list: Optional[shared_activewidgetlist.ActiveWidgetList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
