import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import direction_enum1 as shared_direction_enum1
from ..shared import enterprise_public_key as shared_enterprise_public_key


@dataclasses.dataclass
class EnterpriseAdminListPublicKeysQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared_direction_enum1.DirectionEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListPublicKeysRequest:
    query_params: EnterpriseAdminListPublicKeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListPublicKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_public_keys: Optional[list[shared_enterprise_public_key.EnterprisePublicKey]] = dataclasses.field(default=None)
    
