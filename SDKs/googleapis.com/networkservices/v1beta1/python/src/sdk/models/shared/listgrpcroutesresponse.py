import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcroute as shared_grpcroute


@dataclass_json
@dataclasses.dataclass
class ListGrpcRoutesResponse:
    r"""ListGrpcRoutesResponse
    Response returned by the ListGrpcRoutes method.
    """
    
    grpc_routes: Optional[list[shared_grpcroute.GrpcRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoutes') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
