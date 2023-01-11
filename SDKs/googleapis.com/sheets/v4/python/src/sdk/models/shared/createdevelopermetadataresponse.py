import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import developermetadata as shared_developermetadata


@dataclass_json
@dataclasses.dataclass
class CreateDeveloperMetadataResponse:
    r"""CreateDeveloperMetadataResponse
    The response from creating developer metadata.
    """
    
    developer_metadata: Optional[shared_developermetadata.DeveloperMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    
