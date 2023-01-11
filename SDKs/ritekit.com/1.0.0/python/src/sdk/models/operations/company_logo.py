import dataclasses



@dataclasses.dataclass
class CompanyLogoQueryParams:
    domain: str = dataclasses.field(metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanyLogoRequest:
    query_params: CompanyLogoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CompanyLogoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
