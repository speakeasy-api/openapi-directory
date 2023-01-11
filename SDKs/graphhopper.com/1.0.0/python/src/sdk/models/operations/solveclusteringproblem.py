import dataclasses
from typing import Optional
from ..shared import clusterrequest as shared_clusterrequest
from ..shared import badrequest as shared_badrequest
from ..shared import clusterresponse as shared_clusterresponse
from ..shared import internalerrormessage as shared_internalerrormessage


@dataclasses.dataclass
class SolveClusteringProblemRequest:
    request: shared_clusterrequest.ClusterRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SolveClusteringProblemResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request: Optional[shared_badrequest.BadRequest] = dataclasses.field(default=None)
    cluster_response: Optional[shared_clusterresponse.ClusterResponse] = dataclasses.field(default=None)
    internal_error_message: Optional[shared_internalerrormessage.InternalErrorMessage] = dataclasses.field(default=None)
    
