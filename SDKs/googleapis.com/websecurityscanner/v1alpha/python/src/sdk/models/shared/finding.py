import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outdatedlibrary as shared_outdatedlibrary
from ..shared import violatingresource as shared_violatingresource
from ..shared import vulnerableheaders as shared_vulnerableheaders
from ..shared import vulnerableparameters as shared_vulnerableparameters
from ..shared import xss as shared_xss

class FindingFindingTypeEnum(str, Enum):
    FINDING_TYPE_UNSPECIFIED = "FINDING_TYPE_UNSPECIFIED"
    MIXED_CONTENT = "MIXED_CONTENT"
    OUTDATED_LIBRARY = "OUTDATED_LIBRARY"
    ROSETTA_FLASH = "ROSETTA_FLASH"
    XSS_CALLBACK = "XSS_CALLBACK"
    XSS_ERROR = "XSS_ERROR"
    CLEAR_TEXT_PASSWORD = "CLEAR_TEXT_PASSWORD"
    INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE"
    XSS_ANGULAR_CALLBACK = "XSS_ANGULAR_CALLBACK"
    INVALID_HEADER = "INVALID_HEADER"
    MISSPELLED_SECURITY_HEADER_NAME = "MISSPELLED_SECURITY_HEADER_NAME"
    MISMATCHING_SECURITY_HEADER_VALUES = "MISMATCHING_SECURITY_HEADER_VALUES"


@dataclass_json
@dataclasses.dataclass
class Finding:
    r"""Finding
    A Finding resource represents a vulnerability instance identified during a ScanRun.
    """
    
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    final_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalUrl') }})
    finding_type: Optional[FindingFindingTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingType') }})
    frame_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameUrl') }})
    fuzzed_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuzzedUrl') }})
    http_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outdated_library: Optional[shared_outdatedlibrary.OutdatedLibrary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outdatedLibrary') }})
    reproduction_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reproductionUrl') }})
    tracking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    violating_resource: Optional[shared_violatingresource.ViolatingResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violatingResource') }})
    vulnerable_headers: Optional[shared_vulnerableheaders.VulnerableHeaders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerableHeaders') }})
    vulnerable_parameters: Optional[shared_vulnerableparameters.VulnerableParameters] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vulnerableParameters') }})
    xss: Optional[shared_xss.XSS] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xss') }})
    
