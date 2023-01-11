import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import policytopicevidence as shared_policytopicevidence


@dataclass_json
@dataclasses.dataclass
class PolicyTopicEntry:
    r"""PolicyTopicEntry
    Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
    """
    
    evidences: Optional[list[shared_policytopicevidence.PolicyTopicEvidence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidences') }})
    help_center_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpCenterUrl') }})
    policy_topic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTopic') }})
    
