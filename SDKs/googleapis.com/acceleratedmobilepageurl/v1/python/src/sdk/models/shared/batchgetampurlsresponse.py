import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ampurl as shared_ampurl
from ..shared import ampurlerror as shared_ampurlerror


@dataclass_json
@dataclasses.dataclass
class BatchGetAmpUrlsResponse:
    r"""BatchGetAmpUrlsResponse
    Batch AMP URL response.
    """
    
    amp_urls: Optional[list[shared_ampurl.AmpURL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampUrls') }})
    url_errors: Optional[list[shared_ampurlerror.AmpURLError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlErrors') }})
    
