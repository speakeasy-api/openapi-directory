import dataclasses
from typing import Optional
from ..shared import branchmodel as shared_branchmodel


@dataclasses.dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDPathParams:
    branch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branchID', 'style': 'simple', 'explode': False }})
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDRequest:
    path_params: GetV2CustomerShortNameBranchBranchesBranchIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    branch_model: Optional[shared_branchmodel.BranchModel] = dataclasses.field(default=None)
    
