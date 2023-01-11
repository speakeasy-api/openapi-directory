import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import developermetadata as shared_developermetadata


@dataclass_json
@dataclasses.dataclass
class UpdateDeveloperMetadataResponse:
    r"""UpdateDeveloperMetadataResponse
    The response from updating developer metadata.
    """
    
    developer_metadata: Optional[list[shared_developermetadata.DeveloperMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    
