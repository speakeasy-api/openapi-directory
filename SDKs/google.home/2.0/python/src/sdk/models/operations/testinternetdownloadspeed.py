import dataclasses
from typing import Optional
from ..shared import testinternetdownloadspeedrequest as shared_testinternetdownloadspeedrequest
from ..shared import example16 as shared_example16


@dataclasses.dataclass
class TestInternetDownloadSpeedRequest:
    request: shared_testinternetdownloadspeedrequest.TestInternetDownloadSpeedRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TestInternetDownloadSpeedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example16: Optional[shared_example16.Example16] = dataclasses.field(default=None)
    
