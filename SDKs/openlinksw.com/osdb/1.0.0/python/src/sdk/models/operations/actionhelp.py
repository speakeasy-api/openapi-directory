import dataclasses
from typing import Optional
from ..shared import actionhelpresponse as shared_actionhelpresponse
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class ActionHelpPathParams:
    action_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActionHelpRequest:
    path_params: ActionHelpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ActionHelpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_help_response: Optional[shared_actionhelpresponse.ActionHelpResponse] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
