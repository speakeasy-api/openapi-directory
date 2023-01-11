import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationnotcrawlableevidence as shared_destinationnotcrawlableevidence
from ..shared import destinationnotworkingevidence as shared_destinationnotworkingevidence
from ..shared import destinationurlevidence as shared_destinationurlevidence
from ..shared import domaincallevidence as shared_domaincallevidence
from ..shared import downloadsizeevidence as shared_downloadsizeevidence
from ..shared import httpcallevidence as shared_httpcallevidence
from ..shared import httpcookieevidence as shared_httpcookieevidence


@dataclass_json
@dataclasses.dataclass
class PolicyTopicEvidence:
    r"""PolicyTopicEvidence
    Evidence associated with a policy topic entry.
    """
    
    destination_not_crawlable: Optional[shared_destinationnotcrawlableevidence.DestinationNotCrawlableEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNotCrawlable') }})
    destination_not_working: Optional[shared_destinationnotworkingevidence.DestinationNotWorkingEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNotWorking') }})
    destination_url: Optional[shared_destinationurlevidence.DestinationURLEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUrl') }})
    domain_call: Optional[shared_domaincallevidence.DomainCallEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainCall') }})
    download_size: Optional[shared_downloadsizeevidence.DownloadSizeEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadSize') }})
    http_call: Optional[shared_httpcallevidence.HTTPCallEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpCall') }})
    http_cookie: Optional[shared_httpcookieevidence.HTTPCookieEvidence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpCookie') }})
    
