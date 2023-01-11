import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmTargetGroupsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmTargetGroupsQueryParams:
    with_details: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'withDetails', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSmTargetGroupsRequest:
    path_params: GetNetworkSmTargetGroupsPathParams = dataclasses.field()
    query_params: GetNetworkSmTargetGroupsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmTargetGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_target_groups_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
