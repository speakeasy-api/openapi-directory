import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import customfielddefinition as shared_customfielddefinition
from ..shared import error as shared_error


@dataclasses.dataclass
class GetAllCustomFieldsByCategoryPathParams:
    category: str = dataclasses.field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    company_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllCustomFieldsByCategorySecurity:
    paylocity_auth: shared_security.SchemePaylocityAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllCustomFieldsByCategoryRequest:
    path_params: GetAllCustomFieldsByCategoryPathParams = dataclasses.field()
    security: GetAllCustomFieldsByCategorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllCustomFieldsByCategoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_field_definitions: Optional[list[shared_customfielddefinition.CustomFieldDefinition]] = dataclasses.field(default=None)
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None)
    
