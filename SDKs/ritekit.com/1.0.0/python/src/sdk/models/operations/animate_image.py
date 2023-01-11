import dataclasses



@dataclasses.dataclass
class AnimateImageQueryParams:
    type: str = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AnimateImageRequest:
    query_params: AnimateImageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AnimateImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
