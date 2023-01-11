import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import importresponse as shared_importresponse


@dataclasses.dataclass
class GetLatestImportStatusPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLatestImportStatusSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetLatestImportStatusRequest:
    path_params: GetLatestImportStatusPathParams = dataclasses.field()
    security: GetLatestImportStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLatestImportStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_response: Optional[shared_importresponse.ImportResponse] = dataclasses.field(default=None)
    
