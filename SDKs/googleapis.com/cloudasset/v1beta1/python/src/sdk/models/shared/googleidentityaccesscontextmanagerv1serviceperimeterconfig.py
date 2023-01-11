import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1egresspolicy as shared_googleidentityaccesscontextmanagerv1egresspolicy
from ..shared import googleidentityaccesscontextmanagerv1ingresspolicy as shared_googleidentityaccesscontextmanagerv1ingresspolicy
from ..shared import googleidentityaccesscontextmanagerv1vpcaccessibleservices as shared_googleidentityaccesscontextmanagerv1vpcaccessibleservices


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig:
    r"""GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig
    `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
    """
    
    access_levels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    egress_policies: Optional[list[shared_googleidentityaccesscontextmanagerv1egresspolicy.GoogleIdentityAccesscontextmanagerV1EgressPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressPolicies') }})
    ingress_policies: Optional[list[shared_googleidentityaccesscontextmanagerv1ingresspolicy.GoogleIdentityAccesscontextmanagerV1IngressPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressPolicies') }})
    resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    restricted_services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedServices') }})
    vpc_accessible_services: Optional[shared_googleidentityaccesscontextmanagerv1vpcaccessibleservices.GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccessibleServices') }})
    
