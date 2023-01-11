import dataclasses



@dataclasses.dataclass
class DeleteNetworkSmTargetGroupPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    target_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'targetGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSmTargetGroupRequest:
    path_params: DeleteNetworkSmTargetGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSmTargetGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
