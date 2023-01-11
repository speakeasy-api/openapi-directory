import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleiamv1auditconfig as shared_googleiamv1auditconfig
from ..shared import googleiamv1binding as shared_googleiamv1binding


@dataclass_json
@dataclasses.dataclass
class GoogleIamV1Policy:
    audit_configs: Optional[list[shared_googleiamv1auditconfig.GoogleIamV1AuditConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditConfigs') }})
    bindings: Optional[list[shared_googleiamv1binding.GoogleIamV1Binding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
