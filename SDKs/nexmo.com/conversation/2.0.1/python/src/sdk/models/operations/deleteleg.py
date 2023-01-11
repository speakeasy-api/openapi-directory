import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteLegPathParams:
    leg_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'leg_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLegRequest:
    path_params: DeleteLegPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLegResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_leg_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
