import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeactionschema as shared_runtimeactionschema


@dataclass_json
@dataclasses.dataclass
class ListRuntimeActionSchemasResponse:
    r"""ListRuntimeActionSchemasResponse
    Response message for ConnectorsService.ListRuntimeActionSchemas.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtime_action_schemas: Optional[list[shared_runtimeactionschema.RuntimeActionSchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeActionSchemas') }})
    
