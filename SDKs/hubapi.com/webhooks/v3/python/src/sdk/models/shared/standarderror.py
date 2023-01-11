import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorcategory as shared_errorcategory
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class StandardError:
    category: shared_errorcategory.ErrorCategory = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    context: dict[str, list[str]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    errors: list[shared_errordetail.ErrorDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sub_category: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategory') }})
    
