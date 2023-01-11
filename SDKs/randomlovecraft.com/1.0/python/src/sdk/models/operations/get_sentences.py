import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentence as shared_sentence


@dataclasses.dataclass
class GetSentencesQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSentences200ApplicationJSON:
    data: Optional[list[shared_sentence.Sentence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetSentencesRequest:
    query_params: GetSentencesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSentencesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sentences_200_application_json_object: Optional[GetSentences200ApplicationJSON] = dataclasses.field(default=None)
    
