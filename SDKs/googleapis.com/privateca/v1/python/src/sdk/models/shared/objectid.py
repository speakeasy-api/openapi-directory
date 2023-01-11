import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ObjectID:
    r"""ObjectID
    An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
    """
    
    object_id_path: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIdPath') }})
    
