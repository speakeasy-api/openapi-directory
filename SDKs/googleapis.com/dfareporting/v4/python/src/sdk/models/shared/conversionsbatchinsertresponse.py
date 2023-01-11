import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conversionstatus as shared_conversionstatus


@dataclass_json
@dataclasses.dataclass
class ConversionsBatchInsertResponse:
    r"""ConversionsBatchInsertResponse
    Insert Conversions Response.
    """
    
    has_failures: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFailures') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    status: Optional[list[shared_conversionstatus.ConversionStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
