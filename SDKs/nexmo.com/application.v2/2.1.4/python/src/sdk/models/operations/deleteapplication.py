import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteApplicationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_application_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    delete_application_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    delete_application_405_application_json_any: Optional[Any] = dataclasses.field(default=None)
    delete_application_406_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
