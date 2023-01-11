import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import integratorobjectresult as shared_integratorobjectresult
from ..shared import toplevelactions as shared_toplevelactions

class IntegratorCardPayloadResponseResponseVersionEnum(str, Enum):
    V1 = "v1"
    V3 = "v3"


@dataclass_json
@dataclasses.dataclass
class IntegratorCardPayloadResponse:
    r"""IntegratorCardPayloadResponse
    The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
    """
    
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    all_items_link_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allItemsLinkUrl') }})
    card_label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardLabel') }})
    response_version: Optional[IntegratorCardPayloadResponseResponseVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseVersion') }})
    sections: Optional[list[shared_integratorobjectresult.IntegratorObjectResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    top_level_actions: Optional[shared_toplevelactions.TopLevelActions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelActions') }})
    
