import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attachment as shared_attachment
from ..shared import sendabledocument as shared_sendabledocument
from ..shared import routing as shared_routing


@dataclass_json
@dataclasses.dataclass
class DocumentSubmission:
    r"""DocumentSubmission
    The document you want Storecove to send, with some meta-data.
    """
    
    attachments: Optional[list[shared_attachment.Attachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    create_primary_image: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPrimaryImage') }})
    document: Optional[shared_sendabledocument.SendableDocument] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    idempotency_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotencyGuid') }})
    legal_entity_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalEntityId') }})
    receive_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiveGuid') }})
    routing: Optional[shared_routing.Routing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    
