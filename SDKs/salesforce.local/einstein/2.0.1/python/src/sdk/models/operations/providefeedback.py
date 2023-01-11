import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import example as shared_example


@dataclasses.dataclass
class ProvideFeedbackRequestBody:
    document: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'document' }})
    expected_label: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'expectedLabel' }})
    model_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'modelId' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclasses.dataclass
class ProvideFeedbackSecurity:
    bearer_token: shared_security.SchemeBearerToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ProvideFeedbackRequest:
    security: ProvideFeedbackSecurity = dataclasses.field()
    request: Optional[ProvideFeedbackRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ProvideFeedbackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example: Optional[shared_example.Example] = dataclasses.field(default=None)
    
