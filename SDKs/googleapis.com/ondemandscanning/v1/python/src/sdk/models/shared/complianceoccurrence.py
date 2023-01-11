import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import noncompliantfile as shared_noncompliantfile


@dataclass_json
@dataclasses.dataclass
class ComplianceOccurrence:
    r"""ComplianceOccurrence
    An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
    """
    
    non_compliance_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonComplianceReason') }})
    non_compliant_files: Optional[list[shared_noncompliantfile.NonCompliantFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantFiles') }})
    
