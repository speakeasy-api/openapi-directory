import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSmTargetGroupPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSmTargetGroupQueryParams:
    with_details: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'withDetails', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetNetworkSmTargetGroupRequest:
    path_params: GetNetworkSmTargetGroupPathParams = dataclasses.field()
    query_params: GetNetworkSmTargetGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSmTargetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_sm_target_group_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
