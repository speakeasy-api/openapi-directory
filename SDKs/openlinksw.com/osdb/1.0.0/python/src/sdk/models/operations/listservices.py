import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import listservicesresponse as shared_listservicesresponse


@dataclasses.dataclass
class ListServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    list_services_response: Optional[shared_listservicesresponse.ListServicesResponse] = dataclasses.field(default=None)
    
