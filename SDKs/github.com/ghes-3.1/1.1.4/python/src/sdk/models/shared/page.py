import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pages_https_certificate as shared_pages_https_certificate
from ..shared import pages_source_hash as shared_pages_source_hash

class PageStatusEnum(str, Enum):
    BUILT = "built"
    BUILDING = "building"
    ERRORED = "errored"


@dataclass_json
@dataclasses.dataclass
class Page:
    r"""Page
    The configuration for GitHub Pages for a repository.
    """
    
    cname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cname') }})
    custom_404: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_404') }})
    public: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    status: PageStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    https_certificate: Optional[shared_pages_https_certificate.PagesHTTPSCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('https_certificate') }})
    https_enforced: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('https_enforced') }})
    source: Optional[shared_pages_source_hash.PagesSourceHash] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
