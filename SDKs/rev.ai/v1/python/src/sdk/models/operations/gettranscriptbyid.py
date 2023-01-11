import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accepttranscript_enum as shared_accepttranscript_enum
from ..shared import transcript as shared_transcript


@dataclasses.dataclass
class GetTranscriptByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTranscriptByIDHeaders:
    accept: Optional[shared_accepttranscript_enum.AcceptTranscriptEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetTranscriptByID404ApplicationProblemPlusJSON:
    r"""GetTranscriptByID404ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTranscriptByID406ApplicationProblemPlusJSON:
    r"""GetTranscriptByID406ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    current_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_value') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetTranscriptByID409ApplicationProblemPlusJSON:
    r"""GetTranscriptByID409ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    current_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_value') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class GetTranscriptByIDRequest:
    headers: GetTranscriptByIDHeaders = dataclasses.field()
    path_params: GetTranscriptByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTranscriptByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_transcript_by_id_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    get_transcript_by_id_404_application_problem_plus_json_object: Optional[GetTranscriptByID404ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    get_transcript_by_id_406_application_problem_plus_json_object: Optional[GetTranscriptByID406ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    get_transcript_by_id_409_application_problem_plus_json_object: Optional[GetTranscriptByID409ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    transcript: Optional[shared_transcript.Transcript] = dataclasses.field(default=None)
    transcript_text: Optional[str] = dataclasses.field(default=None)
    
