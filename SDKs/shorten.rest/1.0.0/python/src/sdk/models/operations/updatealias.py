import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import createaliasmodel as shared_createaliasmodel


@dataclasses.dataclass
class UpdateAliasQueryParams:
    alias_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UpdateAliasSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UpdateAliasRequest:
    query_params: UpdateAliasQueryParams = dataclasses.field()
    request: shared_createaliasmodel.CreateAliasModel = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAliasSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UpdateAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
