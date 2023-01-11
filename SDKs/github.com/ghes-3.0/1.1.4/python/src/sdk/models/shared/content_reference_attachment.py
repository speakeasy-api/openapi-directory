import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContentReferenceAttachment:
    r"""ContentReferenceAttachment
    Content Reference attachments allow you to provide context around URLs posted in comments
    """
    
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    node_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    
