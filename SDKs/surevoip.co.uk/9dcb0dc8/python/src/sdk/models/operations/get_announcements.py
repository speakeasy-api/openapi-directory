import dataclasses
from typing import Optional
from ..shared import one_get_responses_200_content_application_1json_schema as shared_one_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class GetAnnouncementsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    one_get_responses_200_content_application_1json_schema: Optional[shared_one_get_responses_200_content_application_1json_schema.OneGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
