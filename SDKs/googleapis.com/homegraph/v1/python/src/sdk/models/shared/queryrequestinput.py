import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import queryrequestpayload as shared_queryrequestpayload


@dataclass_json
@dataclasses.dataclass
class QueryRequestInput:
    r"""QueryRequestInput
    Device ID inputs to QueryRequest.
    """
    
    payload: Optional[shared_queryrequestpayload.QueryRequestPayload] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    
