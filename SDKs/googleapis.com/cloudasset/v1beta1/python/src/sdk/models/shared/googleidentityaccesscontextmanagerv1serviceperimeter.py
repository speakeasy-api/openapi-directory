import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1serviceperimeterconfig as shared_googleidentityaccesscontextmanagerv1serviceperimeterconfig

class GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum(str, Enum):
    PERIMETER_TYPE_REGULAR = "PERIMETER_TYPE_REGULAR"
    PERIMETER_TYPE_BRIDGE = "PERIMETER_TYPE_BRIDGE"


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1ServicePerimeter:
    r"""GoogleIdentityAccesscontextmanagerV1ServicePerimeter
    `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    perimeter_type: Optional[GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perimeterType') }})
    spec: Optional[shared_googleidentityaccesscontextmanagerv1serviceperimeterconfig.GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[shared_googleidentityaccesscontextmanagerv1serviceperimeterconfig.GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    use_explicit_dry_run_spec: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useExplicitDryRunSpec') }})
    
