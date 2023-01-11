import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import contributorprofile as shared_contributorprofile


@dataclasses.dataclass
class GetContributorPathParams:
    contributor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contributor_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetContributorSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetContributorRequest:
    path_params: GetContributorPathParams = dataclasses.field()
    security: GetContributorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetContributorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    contributor_profile: Optional[shared_contributorprofile.ContributorProfile] = dataclasses.field(default=None)
    
