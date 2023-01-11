import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import ipblocklistresponse as shared_ipblocklistresponse

class IPBlocklistRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class IPBlocklistRequestBody:
    ip: str = dataclasses.field(metadata={'form': { 'field_name': 'ip' }})
    output_case: Optional[IPBlocklistRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    vpn_lookup: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'vpn-lookup' }})
    

@dataclasses.dataclass
class IPBlocklistRequest:
    request: Optional[IPBlocklistRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class IPBlocklistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    ip_blocklist_response: Optional[shared_ipblocklistresponse.IPBlocklistResponse] = dataclasses.field(default=None)
    
