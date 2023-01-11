import dataclasses



@dataclasses.dataclass
class NeighborhoodInAStreetPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = dataclasses.field(metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = dataclasses.field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    street: str = dataclasses.field(metadata={'path_param': { 'field_name': 'street', 'style': 'simple', 'explode': False }})
    ward: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ward', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NeighborhoodInAStreetRequest:
    path_params: NeighborhoodInAStreetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class NeighborhoodInAStreetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
