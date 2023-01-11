import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1egressfrom as shared_googleidentityaccesscontextmanagerv1egressfrom
from ..shared import googleidentityaccesscontextmanagerv1egressto as shared_googleidentityaccesscontextmanagerv1egressto


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1EgressPolicy:
    r"""GoogleIdentityAccesscontextmanagerV1EgressPolicy
    Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo.
    """
    
    egress_from: Optional[shared_googleidentityaccesscontextmanagerv1egressfrom.GoogleIdentityAccesscontextmanagerV1EgressFrom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressFrom') }})
    egress_to: Optional[shared_googleidentityaccesscontextmanagerv1egressto.GoogleIdentityAccesscontextmanagerV1EgressTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressTo') }})
    
