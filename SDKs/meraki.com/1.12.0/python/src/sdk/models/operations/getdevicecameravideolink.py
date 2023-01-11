import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceCameraVideoLinkPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceCameraVideoLinkQueryParams:
    timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'timestamp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceCameraVideoLinkRequest:
    path_params: GetDeviceCameraVideoLinkPathParams = dataclasses.field()
    query_params: GetDeviceCameraVideoLinkQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceCameraVideoLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_camera_video_link_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
