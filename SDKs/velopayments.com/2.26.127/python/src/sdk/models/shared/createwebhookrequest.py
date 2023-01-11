import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import category_enum as shared_category_enum


@dataclass_json
@dataclasses.dataclass
class CreateWebhookRequest:
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    payor_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorId') }})
    webhook_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    authorization_header: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationHeader') }})
    categories: Optional[list[shared_category_enum.CategoryEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    
