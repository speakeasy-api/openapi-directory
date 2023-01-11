import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rate_limit as shared_rate_limit


@dataclass_json
@dataclasses.dataclass
class RateLimitOverviewResources:
    core: shared_rate_limit.RateLimit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('core') }})
    search: shared_rate_limit.RateLimit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('search') }})
    code_scanning_upload: Optional[shared_rate_limit.RateLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_scanning_upload') }})
    graphql: Optional[shared_rate_limit.RateLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphql') }})
    integration_manifest: Optional[shared_rate_limit.RateLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integration_manifest') }})
    source_import: Optional[shared_rate_limit.RateLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_import') }})
    

@dataclass_json
@dataclasses.dataclass
class RateLimitOverview:
    r"""RateLimitOverview
    Rate Limit Overview
    """
    
    rate: shared_rate_limit.RateLimit = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    resources: RateLimitOverviewResources = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
