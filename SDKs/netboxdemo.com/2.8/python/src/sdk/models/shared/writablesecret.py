import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WritableSecretInput:
    device: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    plaintext: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintext') }})
    role: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    custom_fields: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
