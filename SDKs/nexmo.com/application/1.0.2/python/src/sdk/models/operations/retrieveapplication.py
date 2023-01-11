import dataclasses
from typing import Optional
from ..shared import application as shared_application


@dataclasses.dataclass
class RetrieveApplicationPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrieveApplicationQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveApplicationRequest:
    path_params: RetrieveApplicationPathParams = dataclasses.field()
    query_params: RetrieveApplicationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application: Optional[shared_application.Application] = dataclasses.field(default=None)
    
