import dataclasses
from typing import Optional
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class DeleteSubscriptionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSubscriptionRequest:
    path_params: DeleteSubscriptionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
