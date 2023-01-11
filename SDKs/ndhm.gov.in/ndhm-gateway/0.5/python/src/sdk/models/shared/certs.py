import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateorkeygetschema as shared_certificateorkeygetschema


@dataclass_json
@dataclasses.dataclass
class Certs:
    keys: Optional[list[shared_certificateorkeygetschema.CertificateOrKeyGetSchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keys') }})
    
