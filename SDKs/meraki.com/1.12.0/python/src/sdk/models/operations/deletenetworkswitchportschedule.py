import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchPortSchedulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_schedule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchPortScheduleRequest:
    path_params: DeleteNetworkSwitchPortSchedulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchPortScheduleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
