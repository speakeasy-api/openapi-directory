import dataclasses
from typing import Optional
from ..shared import masteremailtemplatesettingsviewmodel as shared_masteremailtemplatesettingsviewmodel


@dataclasses.dataclass
class GetSetupV1LocationsIDEmailTemplatesMasterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1LocationsIDEmailTemplatesMasterRequest:
    path_params: GetSetupV1LocationsIDEmailTemplatesMasterPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1LocationsIDEmailTemplatesMasterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    master_email_template_settings_view_model: Optional[shared_masteremailtemplatesettingsviewmodel.MasterEmailTemplateSettingsViewModel] = dataclasses.field(default=None)
    
