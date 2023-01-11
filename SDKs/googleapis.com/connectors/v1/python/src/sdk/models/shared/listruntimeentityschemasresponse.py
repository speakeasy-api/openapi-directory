import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeentityschema as shared_runtimeentityschema


@dataclass_json
@dataclasses.dataclass
class ListRuntimeEntitySchemasResponse:
    r"""ListRuntimeEntitySchemasResponse
    Response message for ConnectorsService.ListRuntimeEntitySchemas.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtime_entity_schemas: Optional[list[shared_runtimeentityschema.RuntimeEntitySchema]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeEntitySchemas') }})
    
