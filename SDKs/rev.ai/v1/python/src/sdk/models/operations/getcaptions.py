import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acceptcaption_enum as shared_acceptcaption_enum


@dataclasses.dataclass
class GetCaptionsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCaptionsQueryParams:
    speaker_channel: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'speaker_channel', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCaptionsHeaders:
    accept: Optional[shared_acceptcaption_enum.AcceptCaptionEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCaptions404ApplicationProblemPlusJSON:
    r"""GetCaptions404ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCaptions405ApplicationProblemPlusJSON:
    r"""GetCaptions405ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCaptions406ApplicationProblemPlusJSON:
    r"""GetCaptions406ApplicationProblemPlusJSON
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
class GetCaptions409ApplicationProblemPlusJSON:
    r"""GetCaptions409ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    allowed_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_values') }})
    current_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_value') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class GetCaptionsRequest:
    headers: GetCaptionsHeaders = dataclasses.field()
    path_params: GetCaptionsPathParams = dataclasses.field()
    query_params: GetCaptionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCaptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_captions_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    get_captions_404_application_problem_plus_json_object: Optional[GetCaptions404ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    get_captions_405_application_problem_plus_json_object: Optional[GetCaptions405ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    get_captions_406_application_problem_plus_json_object: Optional[GetCaptions406ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    get_captions_409_application_problem_plus_json_object: Optional[GetCaptions409ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
