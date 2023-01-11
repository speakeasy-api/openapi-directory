import dataclasses
from typing import Optional
from ..shared import notification as shared_notification


@dataclasses.dataclass
class GetNotificationsQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    device_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    refresh: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'refresh', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNotificationsRequest:
    query_params: GetNotificationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNotificationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    notifications: Optional[list[shared_notification.Notification]] = dataclasses.field(default=None)
    
