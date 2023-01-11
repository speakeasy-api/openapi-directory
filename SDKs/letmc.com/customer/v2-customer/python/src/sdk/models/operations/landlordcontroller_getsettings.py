import dataclasses
from typing import Optional
from ..shared import landlordsettingsmodel as shared_landlordsettingsmodel


@dataclasses.dataclass
class LandlordControllerGetSettingsPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerGetSettingsQueryParams:
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerGetSettingsRequest:
    path_params: LandlordControllerGetSettingsPathParams = dataclasses.field()
    query_params: LandlordControllerGetSettingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerGetSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_settings_model: Optional[shared_landlordsettingsmodel.LandlordSettingsModel] = dataclasses.field(default=None)
    
