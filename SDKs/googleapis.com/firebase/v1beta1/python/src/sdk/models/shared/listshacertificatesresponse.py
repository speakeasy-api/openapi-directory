import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import shacertificate as shared_shacertificate


@dataclass_json
@dataclasses.dataclass
class ListShaCertificatesResponse:
    certificates: Optional[list[shared_shacertificate.ShaCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    
