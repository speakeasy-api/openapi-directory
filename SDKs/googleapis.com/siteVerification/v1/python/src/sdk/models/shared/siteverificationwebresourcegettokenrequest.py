import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SiteVerificationWebResourceGettokenRequestSite:
    r"""SiteVerificationWebResourceGettokenRequestSite
    The site for which a verification token will be generated.
    """
    
    identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class SiteVerificationWebResourceGettokenRequest:
    site: Optional[SiteVerificationWebResourceGettokenRequestSite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    verification_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationMethod') }})
    
