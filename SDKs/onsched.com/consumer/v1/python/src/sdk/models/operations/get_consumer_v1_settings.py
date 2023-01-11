import dataclasses
from typing import Optional
from ..shared import onlinesettingsviewmodel as shared_onlinesettingsviewmodel


@dataclasses.dataclass
class GetConsumerV1SettingsQueryParams:
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetConsumerV1SettingsRequest:
    query_params: GetConsumerV1SettingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1SettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    online_settings_view_model: Optional[shared_onlinesettingsviewmodel.OnlineSettingsViewModel] = dataclasses.field(default=None)
    
