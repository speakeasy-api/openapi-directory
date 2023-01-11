import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import record as shared_record
from ..shared import urlnormalization as shared_urlnormalization


@dataclass_json
@dataclasses.dataclass
class QueryResponse:
    r"""QueryResponse
    Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
    """
    
    record: Optional[shared_record.Record] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    url_normalization_details: Optional[shared_urlnormalization.URLNormalization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlNormalizationDetails') }})
    
