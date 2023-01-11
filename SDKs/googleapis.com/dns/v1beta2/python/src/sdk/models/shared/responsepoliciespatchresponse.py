import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseheader as shared_responseheader
from ..shared import responsepolicy as shared_responsepolicy


@dataclass_json
@dataclasses.dataclass
class ResponsePoliciesPatchResponse:
    header: Optional[shared_responseheader.ResponseHeader] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    response_policy: Optional[shared_responsepolicy.ResponsePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicy') }})
    
