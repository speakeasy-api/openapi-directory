import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bucket as shared_bucket


@dataclass_json
@dataclasses.dataclass
class ListBucketsResponse:
    r"""ListBucketsResponse
    The response returned by `ListBuckets`.
    """
    
    buckets: Optional[list[shared_bucket.Bucket]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
