import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import hostreputationresponse as shared_hostreputationresponse

class HostReputationRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class HostReputationRequestBody:
    host: str = dataclasses.field(metadata={'form': { 'field_name': 'host' }})
    list_rating: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'list-rating' }})
    output_case: Optional[HostReputationRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class HostReputationRequest:
    request: Optional[HostReputationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class HostReputationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    host_reputation_response: Optional[shared_hostreputationresponse.HostReputationResponse] = dataclasses.field(default=None)
    
