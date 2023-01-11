import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ListApplicationQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListApplicationRequest:
    query_params: ListApplicationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_response_collection: Optional[Any] = dataclasses.field(default=None)
    list_application_400_application_json_any: Optional[Any] = dataclasses.field(default=None)
    list_application_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    list_application_405_application_json_any: Optional[Any] = dataclasses.field(default=None)
    list_application_406_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
