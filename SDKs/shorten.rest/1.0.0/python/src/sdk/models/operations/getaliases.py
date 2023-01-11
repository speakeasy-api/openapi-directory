import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import getaliasesmodel as shared_getaliasesmodel


@dataclasses.dataclass
class GetAliasesQueryParams:
    continue_from: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'continueFrom', 'style': 'form', 'explode': True }})
    domain_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'domainName', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAliasesSecurity:
    api_key_auth: shared_security.SchemeAPIKeyAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAliasesRequest:
    query_params: GetAliasesQueryParams = dataclasses.field()
    security: GetAliasesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAliasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aliases_model: Optional[shared_getaliasesmodel.GetAliasesModel] = dataclasses.field(default=None)
    
