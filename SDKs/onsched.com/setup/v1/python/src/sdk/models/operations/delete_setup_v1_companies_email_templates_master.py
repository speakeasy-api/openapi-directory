import dataclasses
from typing import Optional
from ..shared import masteremailtemplatesettingsviewmodel as shared_masteremailtemplatesettingsviewmodel


@dataclasses.dataclass
class DeleteSetupV1CompaniesEmailTemplatesMasterResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    master_email_template_settings_view_model: Optional[shared_masteremailtemplatesettingsviewmodel.MasterEmailTemplateSettingsViewModel] = dataclasses.field(default=None)
    
