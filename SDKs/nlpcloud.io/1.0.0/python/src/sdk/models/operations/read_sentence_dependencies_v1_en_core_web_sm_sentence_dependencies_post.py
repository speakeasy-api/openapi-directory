import dataclasses
from typing import Optional
from ..shared import userrequestin as shared_userrequestin
from ..shared import httpvalidationerror as shared_httpvalidationerror
from ..shared import sentencedependenciesout as shared_sentencedependenciesout


@dataclasses.dataclass
class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest:
    request: shared_userrequestin.UserRequestIn = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    http_validation_error: Optional[shared_httpvalidationerror.HTTPValidationError] = dataclasses.field(default=None)
    sentence_dependencies_out: Optional[shared_sentencedependenciesout.SentenceDependenciesOut] = dataclasses.field(default=None)
    
