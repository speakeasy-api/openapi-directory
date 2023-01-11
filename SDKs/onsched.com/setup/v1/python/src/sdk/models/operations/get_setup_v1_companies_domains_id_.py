import dataclasses
from typing import Optional
from ..shared import companydomainviewmodel as shared_companydomainviewmodel


@dataclasses.dataclass
class GetSetupV1CompaniesDomainsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CompaniesDomainsIDRequest:
    path_params: GetSetupV1CompaniesDomainsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CompaniesDomainsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_domain_view_model: Optional[shared_companydomainviewmodel.CompanyDomainViewModel] = dataclasses.field(default=None)
    
