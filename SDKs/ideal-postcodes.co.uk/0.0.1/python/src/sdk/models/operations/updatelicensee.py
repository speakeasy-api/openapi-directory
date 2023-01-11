import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import updatelicenseeschema as shared_updatelicenseeschema
from ..shared import licenseeresponseschema as shared_licenseeresponseschema


@dataclasses.dataclass
class UpdateLicenseePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLicenseeSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared_security.SchemeUserToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class UpdateLicenseeRequest:
    path_params: UpdateLicenseePathParams = dataclasses.field()
    request: shared_updatelicenseeschema.UpdateLicenseeSchema = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLicenseeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    licensee_response_schema: Optional[shared_licenseeresponseschema.LicenseeResponseSchema] = dataclasses.field(default=None)
    
