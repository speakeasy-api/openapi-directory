import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleanalyticsadminv1betachangehistoryevent as shared_googleanalyticsadminv1betachangehistoryevent


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse:
    r"""GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse
    Response message for SearchAccounts RPC.
    """
    
    change_history_events: Optional[list[shared_googleanalyticsadminv1betachangehistoryevent.GoogleAnalyticsAdminV1betaChangeHistoryEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeHistoryEvents') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
