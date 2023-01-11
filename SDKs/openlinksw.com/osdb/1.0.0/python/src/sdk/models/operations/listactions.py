import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import listactionsresponse as shared_listactionsresponse


@dataclasses.dataclass
class ListActionsPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListActionsRequest:
    path_params: ListActionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    list_actions_response: Optional[shared_listactionsresponse.ListActionsResponse] = dataclasses.field(default=None)
    
