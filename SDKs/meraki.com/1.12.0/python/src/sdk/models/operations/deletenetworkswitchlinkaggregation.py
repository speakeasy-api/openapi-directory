import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchLinkAggregationPathParams:
    link_aggregation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'linkAggregationId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchLinkAggregationRequest:
    path_params: DeleteNetworkSwitchLinkAggregationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchLinkAggregationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
