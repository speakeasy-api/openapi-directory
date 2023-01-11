import dataclasses



@dataclasses.dataclass
class VirtualizationVirtualMachinesDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesDeleteRequest:
    path_params: VirtualizationVirtualMachinesDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class VirtualizationVirtualMachinesDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
