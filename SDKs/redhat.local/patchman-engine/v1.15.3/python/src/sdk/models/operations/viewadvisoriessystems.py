import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systemsadvisoriesrequest as shared_controllers_systemsadvisoriesrequest
from ..shared import controllers_advisoriessystemsresponse as shared_controllers_advisoriessystemsresponse


@dataclasses.dataclass
class ViewAdvisoriesSystemsSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ViewAdvisoriesSystemsRequest:
    request: shared_controllers_systemsadvisoriesrequest.ControllersSystemsAdvisoriesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ViewAdvisoriesSystemsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ViewAdvisoriesSystemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_advisories_systems_response: Optional[shared_controllers_advisoriessystemsresponse.ControllersAdvisoriesSystemsResponse] = dataclasses.field(default=None)
    
