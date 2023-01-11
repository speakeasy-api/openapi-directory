import dataclasses



@dataclasses.dataclass
class GetPrefixContractPathParams:
    uri: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPrefixContractRequest:
    path_params: GetPrefixContractPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPrefixContractResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
