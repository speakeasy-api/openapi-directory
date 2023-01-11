import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import discountresponse as shared_discountresponse


@dataclasses.dataclass
class GetAllDiscountsPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllDiscountsSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllDiscountsRequest:
    path_params: GetAllDiscountsPathParams = dataclasses.field()
    security: GetAllDiscountsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllDiscountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    discount_responses: Optional[list[shared_discountresponse.DiscountResponse]] = dataclasses.field(default=None)
    
