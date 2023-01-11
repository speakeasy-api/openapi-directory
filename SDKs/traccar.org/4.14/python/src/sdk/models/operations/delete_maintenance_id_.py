import dataclasses



@dataclasses.dataclass
class DeleteMaintenanceIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMaintenanceIDRequest:
    path_params: DeleteMaintenanceIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMaintenanceIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
