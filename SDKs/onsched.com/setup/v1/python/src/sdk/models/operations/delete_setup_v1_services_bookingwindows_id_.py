import dataclasses



@dataclasses.dataclass
class DeleteSetupV1ServicesBookingwindowsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1ServicesBookingwindowsIDRequest:
    path_params: DeleteSetupV1ServicesBookingwindowsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1ServicesBookingwindowsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
