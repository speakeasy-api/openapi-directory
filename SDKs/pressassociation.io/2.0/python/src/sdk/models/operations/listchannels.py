import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListChannelsQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    platform_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'platformId', 'style': 'form', 'explode': True }})
    region_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'regionId', 'style': 'form', 'explode': True }})
    schedule_end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scheduleEnd', 'style': 'form', 'explode': True }})
    schedule_start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scheduleStart', 'style': 'form', 'explode': True }})
    schedule_updated_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scheduleUpdatedSince', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListChannelsSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ListChannelsRequest:
    query_params: ListChannelsQueryParams = dataclasses.field()
    security: ListChannelsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_channels_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
