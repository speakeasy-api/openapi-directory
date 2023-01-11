import dataclasses



@dataclasses.dataclass
class ShortenLinkQueryParams:
    cta: int = dataclasses.field(metadata={'query_param': { 'field_name': 'cta', 'style': 'form', 'explode': True }})
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ShortenLinkRequest:
    query_params: ShortenLinkQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ShortenLinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
