import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OneGetResponses200ContentApplication1jsonSchemaStatusEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclasses.dataclass
class OneGetResponses200ContentApplication1jsonSchema:
    status: Optional[OneGetResponses200ContentApplication1jsonSchemaStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
