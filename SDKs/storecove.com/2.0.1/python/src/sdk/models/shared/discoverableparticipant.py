import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DiscoverableParticipantDocumentTypesEnum(str, Enum):
    INVOICE = "invoice"
    CREDITNOTE = "creditnote"
    INVOICE_RESPONSE = "invoice_response"
    ORDER = "order"
    ORDER_RESPONSE = "order_response"
    DESPATCH_NOTIFICATION = "despatch_notification"
    PRODUCT_CATALOGUE = "product_catalogue"


@dataclass_json
@dataclasses.dataclass
class DiscoverableParticipant:
    r"""DiscoverableParticipant
    A participant to be discovered.
    """
    
    identifier: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    scheme: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    document_types: Optional[list[DiscoverableParticipantDocumentTypesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentTypes') }})
    meta_scheme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metaScheme') }})
    network: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    
