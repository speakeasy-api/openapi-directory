import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taxsettingsresponse as shared_taxsettingsresponse


@dataclasses.dataclass
class GetTaxSettingsSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetTaxSettingsRequest:
    security: GetTaxSettingsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTaxSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tax_settings_response: Optional[shared_taxsettingsresponse.TaxSettingsResponse] = dataclasses.field(default=None)
    
