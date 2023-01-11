import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cvssv3 as shared_cvssv3
from ..shared import reference as shared_reference


@dataclass_json
@dataclasses.dataclass
class Cve:
    r"""Cve
    CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
    """
    
    cvssv3: Optional[shared_cvssv3.Cvssv3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvssv3') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    references: Optional[list[shared_reference.Reference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    upstream_fix_available: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstreamFixAvailable') }})
    
