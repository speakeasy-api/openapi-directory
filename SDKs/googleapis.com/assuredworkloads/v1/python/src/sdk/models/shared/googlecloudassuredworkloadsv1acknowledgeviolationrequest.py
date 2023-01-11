import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest:
    r"""GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest
    Request for acknowledging the violation Next Id: 4
    """
    
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    non_compliant_org_policy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantOrgPolicy') }})
    
