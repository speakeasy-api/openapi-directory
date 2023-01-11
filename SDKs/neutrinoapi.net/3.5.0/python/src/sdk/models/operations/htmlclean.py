import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class HTMLCleanRequestBody:
    content: str = dataclasses.field(metadata={'form': { 'field_name': 'content' }})
    output_type: str = dataclasses.field(metadata={'form': { 'field_name': 'output-type' }})
    

@dataclasses.dataclass
class HTMLCleanRequest:
    request: HTMLCleanRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class HTMLCleanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    html_clean_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
