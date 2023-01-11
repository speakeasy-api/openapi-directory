import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import companydomainupdatemodel as shared_companydomainupdatemodel
from ..shared import companydomainviewmodel as shared_companydomainviewmodel


@dataclasses.dataclass
class PutSetupV1CompaniesDomainsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1CompaniesDomainsIDRequests:
    company_domain_update_model: Optional[shared_companydomainupdatemodel.CompanyDomainUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_domain_update_model1: Optional[shared_companydomainupdatemodel.CompanyDomainUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_domain_update_model2: Optional[shared_companydomainupdatemodel.CompanyDomainUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_domain_update_model3: Optional[shared_companydomainupdatemodel.CompanyDomainUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1CompaniesDomainsIDRequest:
    path_params: PutSetupV1CompaniesDomainsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1CompaniesDomainsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1CompaniesDomainsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_domain_view_model: Optional[shared_companydomainviewmodel.CompanyDomainViewModel] = dataclasses.field(default=None)
    
