import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import aliasmodel as shared_aliasmodel


@dataclasses.dataclass
class GetAliasQueryParams:
    alias_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAliasSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAliasRequest:
    query_params: GetAliasQueryParams = dataclasses.field()
    security: GetAliasSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    alias_model: Optional[shared_aliasmodel.AliasModel] = dataclasses.field(default=None)
    
