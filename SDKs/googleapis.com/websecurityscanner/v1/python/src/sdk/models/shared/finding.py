import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import form as shared_form
from ..shared import outdatedlibrary as shared_outdatedlibrary
from ..shared import violatingresource as shared_violatingresource
from ..shared import vulnerableheaders as shared_vulnerableheaders
from ..shared import vulnerableparameters as shared_vulnerableparameters
from ..shared import xss as shared_xss
from ..shared import xxe as shared_xxe

class FindingSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"


@dataclass_json
@dataclasses.dataclass
class Finding:
    r"""Finding
    A Finding resource represents a vulnerability instance identified during a ScanRun.
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    final_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalUrl') }})
    finding_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingType') }})
    form: Optional[shared_form.Form] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form') }})
    frame_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameUrl') }})
    fuzzed_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuzzedUrl') }})
    http_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outdated_library: Optional[shared_outdatedlibrary.OutdatedLibrary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outdatedLibrary') }})
    reproduction_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reproductionUrl') }})
    severity: Optional[FindingSeverityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    violating_resource: Optional[shared_violatingresource.ViolatingResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violatingResource') }})
    vulnerable_headers: Optional[shared_vulnerableheaders.VulnerableHeaders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerableHeaders') }})
    vulnerable_parameters: Optional[shared_vulnerableparameters.VulnerableParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerableParameters') }})
    xss: Optional[shared_xss.XSS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xss') }})
    xxe: Optional[shared_xxe.Xxe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xxe') }})
    
