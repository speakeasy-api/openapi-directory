import dataclasses
from typing import Optional
from ..shared import pairwithspeakerrequest as shared_pairwithspeakerrequest


@dataclasses.dataclass
class PairwithSpeakerRequest:
    request: shared_pairwithspeakerrequest.PairwithSpeakerRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PairwithSpeakerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pairwith_speaker_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
