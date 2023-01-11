import dataclasses
from typing import Optional
from enum import Enum
from ..shared import apierror as shared_apierror
from ..shared import phoneplaybackresponse as shared_phoneplaybackresponse

class PhonePlaybackRequestBodyOutputCaseEnum(str, Enum):
    CAMEL = "camel"


@dataclasses.dataclass
class PhonePlaybackRequestBody:
    audio_url: str = dataclasses.field(metadata={'form': { 'field_name': 'audio-url' }})
    number: str = dataclasses.field(metadata={'form': { 'field_name': 'number' }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit' }})
    limit_ttl: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'limit-ttl' }})
    output_case: Optional[PhonePlaybackRequestBodyOutputCaseEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'output-case' }})
    

@dataclasses.dataclass
class PhonePlaybackRequest:
    request: Optional[PhonePlaybackRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class PhonePlaybackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    phone_playback_response: Optional[shared_phoneplaybackresponse.PhonePlaybackResponse] = dataclasses.field(default=None)
    
