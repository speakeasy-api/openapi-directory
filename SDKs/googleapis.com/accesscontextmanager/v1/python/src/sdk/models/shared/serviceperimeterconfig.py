import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import egresspolicy as shared_egresspolicy
from ..shared import ingresspolicy as shared_ingresspolicy
from ..shared import vpcaccessibleservices as shared_vpcaccessibleservices


@dataclass_json
@dataclasses.dataclass
class ServicePerimeterConfig:
    r"""ServicePerimeterConfig
    `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
    """
    
    access_levels: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessLevels') }})
    egress_policies: Optional[list[shared_egresspolicy.EgressPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressPolicies') }})
    ingress_policies: Optional[list[shared_ingresspolicy.IngressPolicy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressPolicies') }})
    resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    restricted_services: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedServices') }})
    vpc_accessible_services: Optional[shared_vpcaccessibleservices.VpcAccessibleServices] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcAccessibleServices') }})
    
