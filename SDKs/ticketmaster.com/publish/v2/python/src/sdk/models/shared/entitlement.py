import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import source as shared_source

class EntitlementRelatedEntityTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"

class EntitlementSourceEnum(str, Enum):
    TICKETMASTER = "ticketmaster"


@dataclass_json
@dataclasses.dataclass
class Entitlement:
    r"""Entitlement
    This class defines an entitlement data on the Publish API
    """
    
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    related_entity_type: EntitlementRelatedEntityTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityType') }})
    source: EntitlementSourceEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    related_entity_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntityId') }})
    related_entity_source: Optional[shared_source.Source] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedEntitySource') }})
    version_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionNumber') }})
    
