import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operationstatusenum_enum as shared_operationstatusenum_enum


@dataclass_json
@dataclasses.dataclass
class OperationStatus:
    status: Optional[shared_operationstatusenum_enum.OperationStatusEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
