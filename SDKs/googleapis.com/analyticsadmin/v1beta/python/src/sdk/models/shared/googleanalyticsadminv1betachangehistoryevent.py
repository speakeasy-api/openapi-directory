import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betachangehistorychange as shared_googleanalyticsadminv1betachangehistorychange

class GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum(str, Enum):
    ACTOR_TYPE_UNSPECIFIED = "ACTOR_TYPE_UNSPECIFIED"
    USER = "USER"
    SYSTEM = "SYSTEM"
    SUPPORT = "SUPPORT"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaChangeHistoryEvent:
    r"""GoogleAnalyticsAdminV1betaChangeHistoryEvent
    A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.
    """
    
    actor_type: Optional[GoogleAnalyticsAdminV1betaChangeHistoryEventActorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorType') }})
    change_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeTime') }})
    changes: Optional[list[shared_googleanalyticsadminv1betachangehistorychange.GoogleAnalyticsAdminV1betaChangeHistoryChange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    changes_filtered: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changesFiltered') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    user_actor_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActorEmail') }})
    
