import dataclasses



@dataclasses.dataclass
class WikiContentPathParams:
    wiki_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'wiki_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WikiContentRequest:
    path_params: WikiContentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class WikiContentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
