import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceAttributes:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationshipsTransactionData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationshipsTransactionLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationshipsTransaction:
    data: WebhookEventResourceRelationshipsTransactionData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[WebhookEventResourceRelationshipsTransactionLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationshipsWebhookData:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationshipsWebhookLinks:
    related: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationshipsWebhook:
    data: WebhookEventResourceRelationshipsWebhookData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    links: Optional[WebhookEventResourceRelationshipsWebhookLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResourceRelationships:
    webhook: WebhookEventResourceRelationshipsWebhook = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    transaction: Optional[WebhookEventResourceRelationshipsTransaction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    

@dataclass_json
@dataclasses.dataclass
class WebhookEventResource:
    r"""WebhookEventResource
    Provides the event data used in asynchronous webhook event callbacks to
    subscribed endpoints. Webhooks events have defined `eventType`s and may
    optionally relate to other resources within the Up API.
    
    """
    
    attributes: WebhookEventResourceAttributes = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: WebhookEventResourceRelationships = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
