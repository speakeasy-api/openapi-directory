import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetContributorPathParams:
    contributor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contributorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContributorQueryParams:
    aliases: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'aliases', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetContributorSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetContributorRequest:
    path_params: GetContributorPathParams = dataclasses.field()
    query_params: GetContributorQueryParams = dataclasses.field()
    security: GetContributorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetContributorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_contributor_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
