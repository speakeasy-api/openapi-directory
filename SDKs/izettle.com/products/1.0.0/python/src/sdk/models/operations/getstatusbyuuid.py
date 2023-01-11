import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import importresponse as shared_importresponse


@dataclasses.dataclass
class GetStatusByUUIDPathParams:
    import_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'importUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetStatusByUUIDSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetStatusByUUIDRequest:
    path_params: GetStatusByUUIDPathParams = dataclasses.field()
    security: GetStatusByUUIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetStatusByUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_response: Optional[shared_importresponse.ImportResponse] = dataclasses.field(default=None)
    
