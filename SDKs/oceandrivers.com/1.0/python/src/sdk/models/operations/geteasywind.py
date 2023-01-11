import dataclasses



@dataclasses.dataclass
class GetEasywindPathParams:
    easywind_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'easywindId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEasywindQueryParams:
    period: str = dataclasses.field(metadata={'query_param': { 'field_name': 'period', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEasywindRequest:
    path_params: GetEasywindPathParams = dataclasses.field()
    query_params: GetEasywindQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEasywindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
