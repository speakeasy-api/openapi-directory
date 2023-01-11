import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteWebhooksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteWebhooksID401ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteWebhooksID403ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteWebhooksID404ApplicationJSON:
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    

@dataclasses.dataclass
class DeleteWebhooksIDRequest:
    path_params: DeleteWebhooksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteWebhooksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_webhooks_id_401_application_json_object: Optional[DeleteWebhooksID401ApplicationJSON] = dataclasses.field(default=None)
    delete_webhooks_id_403_application_json_object: Optional[DeleteWebhooksID403ApplicationJSON] = dataclasses.field(default=None)
    delete_webhooks_id_404_application_json_object: Optional[DeleteWebhooksID404ApplicationJSON] = dataclasses.field(default=None)
    
