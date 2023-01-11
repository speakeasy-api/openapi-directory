import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import companyupdatemodel as shared_companyupdatemodel
from ..shared import companyviewmodel as shared_companyviewmodel


@dataclasses.dataclass
class PutSetupV1CompaniesRequests:
    company_update_model: Optional[shared_companyupdatemodel.CompanyUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    company_update_model1: Optional[shared_companyupdatemodel.CompanyUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    company_update_model2: Optional[shared_companyupdatemodel.CompanyUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    company_update_model3: Optional[shared_companyupdatemodel.CompanyUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1CompaniesRequest:
    request: Optional[PutSetupV1CompaniesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1CompaniesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_view_model: Optional[shared_companyviewmodel.CompanyViewModel] = dataclasses.field(default=None)
    
