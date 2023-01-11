import dataclasses
from typing import Optional
from ..shared import mastertemplatesettingsinputmodel as shared_mastertemplatesettingsinputmodel
from ..shared import masteremailtemplatesettingsviewmodel as shared_masteremailtemplatesettingsviewmodel


@dataclasses.dataclass
class PostSetupV1CompaniesEmailTemplatesMasterRequests:
    master_template_settings_input_model: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    master_template_settings_input_model1: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    master_template_settings_input_model2: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    master_template_settings_input_model3: Optional[shared_mastertemplatesettingsinputmodel.MasterTemplateSettingsInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1CompaniesEmailTemplatesMasterRequest:
    request: Optional[PostSetupV1CompaniesEmailTemplatesMasterRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1CompaniesEmailTemplatesMasterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    master_email_template_settings_view_model: Optional[shared_masteremailtemplatesettingsviewmodel.MasterEmailTemplateSettingsViewModel] = dataclasses.field(default=None)
    
