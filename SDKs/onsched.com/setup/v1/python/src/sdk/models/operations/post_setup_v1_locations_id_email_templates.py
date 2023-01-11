import dataclasses
from typing import Any,Optional
from ..shared import contentresult as shared_contentresult


@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesRequests:
    email_template_input_model: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    email_template_input_model1: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    email_template_input_model2: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    email_template_input_model3: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesRequest:
    path_params: PostSetupV1LocationsIDEmailTemplatesPathParams = dataclasses.field()
    request: Optional[PostSetupV1LocationsIDEmailTemplatesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1LocationsIDEmailTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    content_result: Optional[shared_contentresult.ContentResult] = dataclasses.field(default=None)
    
