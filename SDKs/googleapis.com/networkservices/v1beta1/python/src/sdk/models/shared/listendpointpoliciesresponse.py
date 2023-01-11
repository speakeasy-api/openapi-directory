import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointpolicy as shared_endpointpolicy


@dataclass_json
@dataclasses.dataclass
class ListEndpointPoliciesResponse:
    r"""ListEndpointPoliciesResponse
    Response returned by the ListEndpointPolicies method.
    """
    
    endpoint_policies: Optional[list[shared_endpointpolicy.EndpointPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointPolicies') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
