import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    CREATED = "CREATED"
    UPDATED = "UPDATED"
    DELETED = "DELETED"

class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum(str, Enum):
    CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    PROPERTY = "PROPERTY"
    FIREBASE_LINK = "FIREBASE_LINK"
    GOOGLE_ADS_LINK = "GOOGLE_ADS_LINK"
    GOOGLE_SIGNALS_SETTINGS = "GOOGLE_SIGNALS_SETTINGS"
    CONVERSION_EVENT = "CONVERSION_EVENT"
    MEASUREMENT_PROTOCOL_SECRET = "MEASUREMENT_PROTOCOL_SECRET"
    DATA_RETENTION_SETTINGS = "DATA_RETENTION_SETTINGS"
    DISPLAY_VIDEO_360_ADVERTISER_LINK = "DISPLAY_VIDEO_360_ADVERTISER_LINK"
    DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL"
    SEARCH_ADS_360_LINK = "SEARCH_ADS_360_LINK"
    DATA_STREAM = "DATA_STREAM"
    ATTRIBUTION_SETTINGS = "ATTRIBUTION_SETTINGS"
    EXPANDED_DATA_SET = "EXPANDED_DATA_SET"
    CHANNEL_GROUP = "CHANNEL_GROUP"


@dataclass_json
@dataclasses.dataclass
class GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest:
    r"""GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest
    Request message for SearchChangeHistoryEvents RPC.
    """
    
    action: Optional[list[GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    actor_email: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actorEmail') }})
    earliest_change_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliestChangeTime') }})
    latest_change_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestChangeTime') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    property: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    resource_type: Optional[list[GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    
