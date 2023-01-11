import dataclasses
from typing import Optional
from ..shared import describeactionresponse as shared_describeactionresponse
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DescribeActionPathParams:
    action_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'actionId', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeActionRequest:
    path_params: DescribeActionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeActionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_action_response: Optional[shared_describeactionresponse.DescribeActionResponse] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
