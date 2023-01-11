import dataclasses
from typing import Optional
from ..shared import activewidget as shared_activewidget
from ..shared import error as shared_error


@dataclasses.dataclass
class GetActiveWidgetPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    widget_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'widgetId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActiveWidgetRequest:
    path_params: GetActiveWidgetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActiveWidgetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    active_widget: Optional[shared_activewidget.ActiveWidget] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
