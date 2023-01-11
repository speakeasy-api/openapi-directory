import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtopicaction_enum as shared_eventtopicaction_enum
from ..shared import eventtopicresourcetype_enum as shared_eventtopicresourcetype_enum
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventsForSubscriptionByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsForSubscriptionByIDQueryParams:
    after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    after_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after_id', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    before_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before_id', 'style': 'form', 'explode': True }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    from_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'from_id', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id_only', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    populate: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'populate', 'style': 'form', 'explode': True }})
    results_only: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'results_only', 'style': 'form', 'explode': True }})
    select: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'select', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    time_created: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_created', 'style': 'form', 'explode': True }})
    time_event: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_event', 'style': 'form', 'explode': True }})
    time_expire: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'time_expire', 'style': 'form', 'explode': True }})
    timeout_s: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timeout_s', 'style': 'form', 'explode': True }})
    topic_action: Optional[shared_eventtopicaction_enum.EventTopicActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topic.action', 'style': 'form', 'explode': True }})
    topic_resource: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topic.resource', 'style': 'form', 'explode': True }})
    topic_resource_type: Optional[shared_eventtopicresourcetype_enum.EventTopicResourceTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'topic.resource_type', 'style': 'form', 'explode': True }})
    until: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    until_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'until_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetEventsForSubscriptionByID200ApplicationJSON:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    count_current: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_current') }})
    is_limited: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_limited') }})
    next_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_url') }})
    query_duration_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query_duration_ms') }})
    results: Optional[list[shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclasses.dataclass
class GetEventsForSubscriptionByIDRequest:
    path_params: GetEventsForSubscriptionByIDPathParams = dataclasses.field()
    query_params: GetEventsForSubscriptionByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsForSubscriptionByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_events_for_subscription_by_id_200_application_json_object: Optional[GetEventsForSubscriptionByID200ApplicationJSON] = dataclasses.field(default=None)
    
