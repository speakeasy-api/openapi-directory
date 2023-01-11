import dataclasses
from typing import Optional
from ..shared import companydomainviewmodel as shared_companydomainviewmodel


@dataclasses.dataclass
class DeleteSetupV1CompaniesDomainsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1CompaniesDomainsIDRequest:
    path_params: DeleteSetupV1CompaniesDomainsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1CompaniesDomainsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_domain_view_model: Optional[shared_companydomainviewmodel.CompanyDomainViewModel] = dataclasses.field(default=None)
    
