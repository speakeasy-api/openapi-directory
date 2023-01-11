import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import variantoptionsresponse as shared_variantoptionsresponse


@dataclasses.dataclass
class GetAllOptionsPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllOptionsSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllOptionsRequest:
    path_params: GetAllOptionsPathParams = dataclasses.field()
    security: GetAllOptionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    variant_options_responses: Optional[list[shared_variantoptionsresponse.VariantOptionsResponse]] = dataclasses.field(default=None)
    
