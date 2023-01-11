import dataclasses
from typing import Optional
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class DeleteLocationRulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLocationRuleRequest:
    path_params: DeleteLocationRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLocationRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
