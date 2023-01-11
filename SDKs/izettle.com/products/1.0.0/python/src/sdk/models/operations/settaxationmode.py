import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import taxsettingsupdaterequest as shared_taxsettingsupdaterequest
from ..shared import errorresponse as shared_errorresponse
from ..shared import taxsettingsresponse as shared_taxsettingsresponse


@dataclasses.dataclass
class SetTaxationModeSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SetTaxationModeRequest:
    request: shared_taxsettingsupdaterequest.TaxSettingsUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: SetTaxationModeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SetTaxationModeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    tax_settings_response: Optional[shared_taxsettingsresponse.TaxSettingsResponse] = dataclasses.field(default=None)
    
