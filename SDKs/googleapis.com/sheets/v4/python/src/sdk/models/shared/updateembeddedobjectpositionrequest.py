import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import embeddedobjectposition as shared_embeddedobjectposition


@dataclass_json
@dataclasses.dataclass
class UpdateEmbeddedObjectPositionRequest:
    r"""UpdateEmbeddedObjectPositionRequest
    Update an embedded object's position (such as a moving or resizing a chart or image).
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    new_position: Optional[shared_embeddedobjectposition.EmbeddedObjectPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPosition') }})
    object_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
