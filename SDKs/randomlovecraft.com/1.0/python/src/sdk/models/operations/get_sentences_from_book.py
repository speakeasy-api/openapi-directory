import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentence as shared_sentence


@dataclasses.dataclass
class GetSentencesFromBookPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSentencesFromBookQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetSentencesFromBook200ApplicationJSON:
    data: Optional[list[shared_sentence.Sentence]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetSentencesFromBookRequest:
    path_params: GetSentencesFromBookPathParams = dataclasses.field()
    query_params: GetSentencesFromBookQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSentencesFromBookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_sentences_from_book_200_application_json_object: Optional[GetSentencesFromBook200ApplicationJSON] = dataclasses.field(default=None)
    
