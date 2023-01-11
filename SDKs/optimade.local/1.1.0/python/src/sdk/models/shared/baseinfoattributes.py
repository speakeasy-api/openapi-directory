import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availableapiversion as shared_availableapiversion


@dataclass_json
@dataclasses.dataclass
class BaseInfoAttributes:
    r"""BaseInfoAttributes
    Attributes for Base URL Info endpoint
    """
    
    api_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    available_api_versions: list[shared_availableapiversion.AvailableAPIVersion] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_api_versions') }})
    available_endpoints: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_endpoints') }})
    entry_types_by_format: dict[str, list[str]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entry_types_by_format') }})
    formats: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formats') }})
    is_index: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_index') }})
    
