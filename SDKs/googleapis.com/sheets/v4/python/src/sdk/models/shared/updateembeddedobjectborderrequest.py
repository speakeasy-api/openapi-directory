import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import embeddedobjectborder as shared_embeddedobjectborder


@dataclass_json
@dataclasses.dataclass
class UpdateEmbeddedObjectBorderRequest:
    r"""UpdateEmbeddedObjectBorderRequest
    Updates an embedded object's border property.
    """
    
    border: Optional[shared_embeddedobjectborder.EmbeddedObjectBorder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('border') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    object_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    
