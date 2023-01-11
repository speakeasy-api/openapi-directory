import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crawledurl as shared_crawledurl


@dataclass_json
@dataclasses.dataclass
class ListCrawledUrlsResponse:
    r"""ListCrawledUrlsResponse
    Response for the `ListCrawledUrls` method.
    """
    
    crawled_urls: Optional[list[shared_crawledurl.CrawledURL]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawledUrls') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
