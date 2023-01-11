import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_advisorydetailresponse as shared_controllers_advisorydetailresponse


@dataclasses.dataclass
class DetailAdvisoryPathParams:
    advisory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'advisory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DetailAdvisorySecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DetailAdvisoryRequest:
    path_params: DetailAdvisoryPathParams = dataclasses.field()
    security: DetailAdvisorySecurity = dataclasses.field()
    

@dataclasses.dataclass
class DetailAdvisoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_advisory_detail_response: Optional[shared_controllers_advisorydetailresponse.ControllersAdvisoryDetailResponse] = dataclasses.field(default=None)
    
