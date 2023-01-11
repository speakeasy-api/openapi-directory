import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domaincalls as shared_domaincalls


@dataclass_json
@dataclasses.dataclass
class DomainCallEvidence:
    r"""DomainCallEvidence
    Number of HTTP calls made by a creative, broken down by domain.
    """
    
    top_http_call_domains: Optional[list[shared_domaincalls.DomainCalls]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topHttpCallDomains') }})
    total_http_call_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalHttpCallCount') }})
    
