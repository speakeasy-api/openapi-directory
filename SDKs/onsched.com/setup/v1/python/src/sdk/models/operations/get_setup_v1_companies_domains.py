import dataclasses
from typing import Optional
from ..shared import companydomainlistviewmodel as shared_companydomainlistviewmodel


@dataclasses.dataclass
class GetSetupV1CompaniesDomainsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_domain_list_view_model: Optional[shared_companydomainlistviewmodel.CompanyDomainListViewModel] = dataclasses.field(default=None)
    
