import dataclasses



@dataclasses.dataclass
class DcimManufacturersDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimManufacturersDeleteRequest:
    path_params: DcimManufacturersDeletePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimManufacturersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
