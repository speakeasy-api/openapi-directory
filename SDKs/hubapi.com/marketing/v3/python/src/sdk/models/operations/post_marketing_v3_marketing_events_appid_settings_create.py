import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import eventdetailsettingsurl as shared_eventdetailsettingsurl
from ..shared import eventdetailsettings as shared_eventdetailsettings


@dataclasses.dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams:
    app_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity:
    developer_hapikey: Optional[shared_security.SchemeDeveloperHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    hapikey: Optional[shared_security.SchemeHapikey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateRequest:
    path_params: PostMarketingV3MarketingEventsAppIDSettingsCreatePathParams = dataclasses.field()
    request: shared_eventdetailsettingsurl.EventDetailSettingsURL = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostMarketingV3MarketingEventsAppIDSettingsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostMarketingV3MarketingEventsAppIDSettingsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    event_detail_settings: Optional[shared_eventdetailsettings.EventDetailSettings] = dataclasses.field(default=None)
    
