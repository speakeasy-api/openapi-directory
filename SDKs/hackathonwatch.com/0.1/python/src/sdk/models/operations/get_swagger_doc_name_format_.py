import dataclasses



@dataclasses.dataclass
class GetSwaggerDocNameFormatPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSwaggerDocNameFormatRequest:
    path_params: GetSwaggerDocNameFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSwaggerDocNameFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
