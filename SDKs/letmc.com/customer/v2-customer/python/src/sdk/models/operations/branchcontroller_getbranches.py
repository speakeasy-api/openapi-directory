import dataclasses
from typing import Optional
from ..shared import branchmodelresults as shared_branchmodelresults


@dataclasses.dataclass
class BranchControllerGetBranchesPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BranchControllerGetBranchesQueryParams:
    count: int = dataclasses.field(metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: int = dataclasses.field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class BranchControllerGetBranchesRequest:
    path_params: BranchControllerGetBranchesPathParams = dataclasses.field()
    query_params: BranchControllerGetBranchesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class BranchControllerGetBranchesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    branch_model_results: Optional[shared_branchmodelresults.BranchModelResults] = dataclasses.field(default=None)
    
