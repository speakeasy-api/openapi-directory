import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import version as shared_version
from ..shared import grafeasv1filelocation as shared_grafeasv1filelocation

class PackageIssueEffectiveSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    MINIMAL = "MINIMAL"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    CRITICAL = "CRITICAL"


@dataclass_json
@dataclasses.dataclass
class PackageIssue:
    r"""PackageIssue
    A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
    """
    
    affected_cpe_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedCpeUri') }})
    affected_package: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedPackage') }})
    affected_version: Optional[shared_version.Version] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affectedVersion') }})
    effective_severity: Optional[PackageIssueEffectiveSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveSeverity') }})
    file_location: Optional[list[shared_grafeasv1filelocation.GrafeasV1FileLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileLocation') }})
    fix_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixAvailable') }})
    fixed_cpe_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedCpeUri') }})
    fixed_package: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedPackage') }})
    fixed_version: Optional[shared_version.Version] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedVersion') }})
    package_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageType') }})
    
