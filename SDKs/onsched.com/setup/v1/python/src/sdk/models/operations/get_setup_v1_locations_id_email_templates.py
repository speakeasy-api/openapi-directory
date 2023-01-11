import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1LocationsIDEmailTemplatesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1LocationsIDEmailTemplatesRequest:
    path_params: GetSetupV1LocationsIDEmailTemplatesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1LocationsIDEmailTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    email_template_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
