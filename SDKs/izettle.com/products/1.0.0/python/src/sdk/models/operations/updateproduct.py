import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import productupdaterequest as shared_productupdaterequest
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class UpdateProductPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    product_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProductHeaders:
    if_match: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProductSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateProductRequest:
    headers: UpdateProductHeaders = dataclasses.field()
    path_params: UpdateProductPathParams = dataclasses.field()
    request: shared_productupdaterequest.ProductUpdateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateProductResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
