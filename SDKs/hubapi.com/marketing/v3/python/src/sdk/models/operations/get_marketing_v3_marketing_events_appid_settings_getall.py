import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import eventdetailsettings as shared_eventdetailsettings


@dataclasses.dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity:
    developer_hapikey: Optional[shared_security.SchemeDeveloperHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllRequest:
    path_params: GetMarketingV3MarketingEventsAppIDSettingsGetAllPathParams = dataclasses.field()
    security: GetMarketingV3MarketingEventsAppIDSettingsGetAllSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMarketingV3MarketingEventsAppIDSettingsGetAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    event_detail_settings: Optional[shared_eventdetailsettings.EventDetailSettings] = dataclasses.field(default=None)
    
