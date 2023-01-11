import dataclasses
from typing import Optional
from ..shared import describeserviceresponse as shared_describeserviceresponse
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DescribeServicePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeServiceRequest:
    path_params: DescribeServicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_service_response: Optional[shared_describeserviceresponse.DescribeServiceResponse] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
