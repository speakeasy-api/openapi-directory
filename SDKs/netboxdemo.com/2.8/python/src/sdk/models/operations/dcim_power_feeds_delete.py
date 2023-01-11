import dataclasses



@dataclasses.dataclass
class DcimPowerFeedsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPowerFeedsDeleteRequest:
    path_params: DcimPowerFeedsDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPowerFeedsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
