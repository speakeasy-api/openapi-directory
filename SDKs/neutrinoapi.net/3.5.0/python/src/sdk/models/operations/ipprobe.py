import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import ipproberesponse as shared_ipproberesponse

class IPProbeRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class IPProbeRequestBody:
    ip: str = dataclasses.field(metadata={'form': { 'field_name': 'ip' }})
    output_case: Optional[IPProbeRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class IPProbeRequest:
    request: Optional[IPProbeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class IPProbeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    ip_probe_response: Optional[shared_ipproberesponse.IPProbeResponse] = dataclasses.field(default=None)
    
