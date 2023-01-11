import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteDiscountPathParams:
    discount_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'discountUuid', 'style': 'simple', 'explode': False }})
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDiscountSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DeleteDiscountRequest:
    path_params: DeleteDiscountPathParams = dataclasses.field()
    security: DeleteDiscountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDiscountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
