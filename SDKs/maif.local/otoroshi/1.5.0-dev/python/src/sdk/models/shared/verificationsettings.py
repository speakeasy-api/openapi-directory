import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mappingsettings as shared_mappingsettings


@dataclass_json
@dataclasses.dataclass
class VerificationSettings:
    r"""VerificationSettings
    Settings to verify the value of JWT token fields
    """
    
    fields: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    mapping_settings: Optional[shared_mappingsettings.MappingSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingSettings') }})
    
