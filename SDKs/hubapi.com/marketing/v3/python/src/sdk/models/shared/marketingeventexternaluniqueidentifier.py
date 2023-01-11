import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MarketingEventExternalUniqueIdentifier:
    app_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    external_account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    external_event_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalEventId') }})
    
