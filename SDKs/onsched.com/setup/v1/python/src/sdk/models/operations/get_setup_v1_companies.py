import dataclasses
from typing import Optional
from ..shared import companyviewmodel as shared_companyviewmodel


@dataclasses.dataclass
class GetSetupV1CompaniesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_view_model: Optional[shared_companyviewmodel.CompanyViewModel] = dataclasses.field(default=None)
    
