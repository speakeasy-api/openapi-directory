import dataclasses
from typing import Optional
from ..shared import companyinputmodel as shared_companyinputmodel
from ..shared import companyviewmodel as shared_companyviewmodel


@dataclasses.dataclass
class PostSetupV1CompaniesRequests:
    company_input_model: Optional[shared_companyinputmodel.CompanyInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_input_model1: Optional[shared_companyinputmodel.CompanyInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_input_model2: Optional[shared_companyinputmodel.CompanyInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_input_model3: Optional[shared_companyinputmodel.CompanyInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1CompaniesRequest:
    request: Optional[PostSetupV1CompaniesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1CompaniesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_view_model: Optional[shared_companyviewmodel.CompanyViewModel] = dataclasses.field(default=None)
    
