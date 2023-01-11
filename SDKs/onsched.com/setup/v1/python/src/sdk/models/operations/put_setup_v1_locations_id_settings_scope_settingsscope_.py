import dataclasses
from typing import Optional
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class PutSetupV1LocationsIDSettingsScopeSettingsScopePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    settings_scope: str = dataclasses.field(metadata={'path_param': { 'field_name': 'settingsScope', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest:
    path_params: PutSetupV1LocationsIDSettingsScopeSettingsScopePathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
