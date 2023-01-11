import dataclasses
from typing import Optional
from ..shared import submitpodcastform as shared_submitpodcastform
from ..shared import submitpodcastresponse as shared_submitpodcastresponse


@dataclasses.dataclass
class SubmitPodcastHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubmitPodcastRequest:
    headers: SubmitPodcastHeaders = dataclasses.field()
    request: shared_submitpodcastform.SubmitPodcastForm = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class SubmitPodcastResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    submit_podcast_response: Optional[shared_submitpodcastresponse.SubmitPodcastResponse] = dataclasses.field(default=None)
    
