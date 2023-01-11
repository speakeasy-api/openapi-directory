import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import createaliasmodel as shared_createaliasmodel
from ..shared import createaliasresponsemodel as shared_createaliasresponsemodel


@dataclasses.dataclass
class CreateAliasQueryParams:
    alias_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliasName', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateAliasSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CreateAliasRequest:
    query_params: CreateAliasQueryParams = dataclasses.field()
    request: shared_createaliasmodel.CreateAliasModel = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAliasSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAliasResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_alias_response_model: Optional[shared_createaliasresponsemodel.CreateAliasResponseModel] = dataclasses.field(default=None)
    
