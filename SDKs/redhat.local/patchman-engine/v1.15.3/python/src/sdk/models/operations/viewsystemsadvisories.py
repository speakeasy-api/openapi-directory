import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systemsadvisoriesrequest as shared_controllers_systemsadvisoriesrequest
from ..shared import controllers_systemsadvisoriesresponse as shared_controllers_systemsadvisoriesresponse


@dataclasses.dataclass
class ViewSystemsAdvisoriesSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ViewSystemsAdvisoriesRequest:
    request: shared_controllers_systemsadvisoriesrequest.ControllersSystemsAdvisoriesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: ViewSystemsAdvisoriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ViewSystemsAdvisoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_systems_advisories_response: Optional[shared_controllers_systemsadvisoriesresponse.ControllersSystemsAdvisoriesResponse] = dataclasses.field(default=None)
    
