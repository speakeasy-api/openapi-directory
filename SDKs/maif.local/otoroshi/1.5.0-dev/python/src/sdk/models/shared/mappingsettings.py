import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MappingSettings:
    r"""MappingSettings
    Settings to change fields of a JWT token
    """
    
    map: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('map') }})
    remove: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove') }})
    values: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
