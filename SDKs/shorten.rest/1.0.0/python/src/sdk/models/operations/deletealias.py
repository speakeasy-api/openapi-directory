import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAliasQueryParams:
    alias_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAliasSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteAliasRequest:
    query_params: DeleteAliasQueryParams = dataclasses.field()
    security: DeleteAliasSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
