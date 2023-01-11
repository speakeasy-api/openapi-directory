import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import secretrole as shared_secretrole


@dataclasses.dataclass
class SecretsSecretRolesListQueryParams:
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    name_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__ic', 'style': 'form', 'explode': True }})
    name_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__ie', 'style': 'form', 'explode': True }})
    name_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__iew', 'style': 'form', 'explode': True }})
    name_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__isw', 'style': 'form', 'explode': True }})
    name_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__n', 'style': 'form', 'explode': True }})
    name_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nic', 'style': 'form', 'explode': True }})
    name_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nie', 'style': 'form', 'explode': True }})
    name_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__niew', 'style': 'form', 'explode': True }})
    name_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    slug: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    slug_ic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__ic', 'style': 'form', 'explode': True }})
    slug_ie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__ie', 'style': 'form', 'explode': True }})
    slug_iew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__iew', 'style': 'form', 'explode': True }})
    slug_isw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__isw', 'style': 'form', 'explode': True }})
    slug_n: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__n', 'style': 'form', 'explode': True }})
    slug_nic: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__nic', 'style': 'form', 'explode': True }})
    slug_nie: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__nie', 'style': 'form', 'explode': True }})
    slug_niew: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__niew', 'style': 'form', 'explode': True }})
    slug_nisw: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'slug__nisw', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SecretsSecretRolesList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_secretrole.SecretRole] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class SecretsSecretRolesListRequest:
    query_params: SecretsSecretRolesListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SecretsSecretRolesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    secrets_secret_roles_list_200_application_json_object: Optional[SecretsSecretRolesList200ApplicationJSON] = dataclasses.field(default=None)
    
