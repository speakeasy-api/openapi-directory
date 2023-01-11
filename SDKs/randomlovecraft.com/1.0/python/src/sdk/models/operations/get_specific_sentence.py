import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sentence as shared_sentence


@dataclasses.dataclass
class GetSpecificSentencePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetSpecificSentence200ApplicationJSON:
    data: Optional[shared_sentence.Sentence] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetSpecificSentenceRequest:
    path_params: GetSpecificSentencePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpecificSentenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_specific_sentence_200_application_json_object: Optional[GetSpecificSentence200ApplicationJSON] = dataclasses.field(default=None)
    
