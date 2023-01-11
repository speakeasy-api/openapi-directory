import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplayanalytics as shared_googleplayanalytics
from ..shared import itunesconnectanalytics as shared_itunesconnectanalytics


@dataclass_json
@dataclasses.dataclass
class AnalyticsInfo:
    r"""AnalyticsInfo
    Tracking parameters supported by Dynamic Link.
    """
    
    google_play_analytics: Optional[shared_googleplayanalytics.GooglePlayAnalytics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googlePlayAnalytics') }})
    itunes_connect_analytics: Optional[shared_itunesconnectanalytics.ITunesConnectAnalytics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itunesConnectAnalytics') }})
    
