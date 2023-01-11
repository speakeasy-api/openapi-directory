import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betachangehistorychangechangehistoryresource as shared_googleanalyticsadminv1betachangehistorychangechangehistoryresource

class GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    CREATED = "CREATED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaChangeHistoryChange:
    r"""GoogleAnalyticsAdminV1betaChangeHistoryChange
    A description of a change to a single Google Analytics resource.
    """
    
    action: Optional[GoogleAnalyticsAdminV1betaChangeHistoryChangeActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_after_change: Optional[shared_googleanalyticsadminv1betachangehistorychangechangehistoryresource.GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAfterChange') }})
    resource_before_change: Optional[shared_googleanalyticsadminv1betachangehistorychangechangehistoryresource.GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceBeforeChange') }})
    
