import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListHypernymsQueryParams:
    family: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    max_level: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxLevel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHypernymsRequest:
    query_params: ListHypernymsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListHypernymsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_hypernyms_200_application_json_arrays: Optional[list[list[float]]] = dataclasses.field(default=None)
    
