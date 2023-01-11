import dataclasses
from typing import Optional
from ..shared import mastertemplatesettingsinputmodel as shared_mastertemplatesettingsinputmodel
from ..shared import masteremailtemplatesettingsviewmodel as shared_masteremailtemplatesettingsviewmodel


@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterRequests:
    master_template_settings_input_model: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    master_template_settings_input_model1: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    master_template_settings_input_model2: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    master_template_settings_input_model3: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterRequest:
    path_params: PostSetupV1LocationsIDEmailTemplatesMasterPathParams = dataclasses.field()
    request: Optional[PostSetupV1LocationsIDEmailTemplatesMasterRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesMasterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    master_email_template_settings_view_model: Optional[shared_masteremailtemplatesettingsviewmodel.MasterEmailTemplateSettingsViewModel] = dataclasses.field(default=None)
    
