import dataclasses



@dataclasses.dataclass
class WardsInADistrictPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = dataclasses.field(metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = dataclasses.field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WardsInADistrictRequest:
    path_params: WardsInADistrictPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WardsInADistrictResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
