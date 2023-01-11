import dataclasses



@dataclasses.dataclass
class GetMartParalogAssociationsResourcePathParams:
    taxon1: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxon1', 'style': 'simple', 'explode': False }})
    taxon2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxon2', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMartParalogAssociationsResourceRequest:
    path_params: GetMartParalogAssociationsResourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMartParalogAssociationsResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
