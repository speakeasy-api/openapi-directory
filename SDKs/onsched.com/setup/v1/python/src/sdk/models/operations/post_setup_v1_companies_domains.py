import dataclasses
from typing import Optional
from ..shared import companydomaininputmodel as shared_companydomaininputmodel
from ..shared import companydomainviewmodel as shared_companydomainviewmodel


@dataclasses.dataclass
class PostSetupV1CompaniesDomainsRequests:
    company_domain_input_model: Optional[shared_companydomaininputmodel.CompanyDomainInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_domain_input_model1: Optional[shared_companydomaininputmodel.CompanyDomainInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_domain_input_model2: Optional[shared_companydomaininputmodel.CompanyDomainInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_domain_input_model3: Optional[shared_companydomaininputmodel.CompanyDomainInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1CompaniesDomainsRequest:
    request: Optional[PostSetupV1CompaniesDomainsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1CompaniesDomainsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_domain_view_model: Optional[shared_companydomainviewmodel.CompanyDomainViewModel] = dataclasses.field(default=None)
    
