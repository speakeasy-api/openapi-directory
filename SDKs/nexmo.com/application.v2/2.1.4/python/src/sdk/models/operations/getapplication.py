import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetApplicationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationRequest:
    path_params: GetApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_response: Optional[Any] = dataclasses.field(default=None)
    get_application_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_application_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_application_405_application_json_any: Optional[Any] = dataclasses.field(default=None)
    get_application_406_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
