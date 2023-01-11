import dataclasses



@dataclasses.dataclass
class GetMartOrthologAssociationsResourcePathParams:
    taxon1: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxon1', 'style': 'simple', 'explode': False }})
    taxon2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxon2', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMartOrthologAssociationsResourceRequest:
    path_params: GetMartOrthologAssociationsResourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMartOrthologAssociationsResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
