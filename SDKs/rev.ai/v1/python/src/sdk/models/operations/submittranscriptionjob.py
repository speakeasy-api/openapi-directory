import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import submitjoboptions as shared_submitjoboptions
from ..shared import submitjobmediaurloptions as shared_submitjobmediaurloptions
from ..shared import job as shared_job


@dataclasses.dataclass
class SubmitTranscriptionJobMultipartFormDataMedia:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    media: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'media' }})
    

@dataclasses.dataclass
class SubmitTranscriptionJobMultipartFormData:
    media: Optional[SubmitTranscriptionJobMultipartFormDataMedia] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    options: Optional[shared_submitjoboptions.SubmitJobOptions] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'options', 'json': True }})
    

@dataclasses.dataclass
class SubmitTranscriptionJobRequests:
    submit_job_media_url_options: Optional[shared_submitjobmediaurloptions.SubmitJobMediaURLOptions] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[SubmitTranscriptionJobMultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclasses.dataclass
class SubmitTranscriptionJob400ApplicationProblemPlusJSON:
    r"""SubmitTranscriptionJob400ApplicationProblemPlusJSON
    Problem details object returned on errors
    """
    
    parameters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class SubmitTranscriptionJobRequest:
    request: SubmitTranscriptionJobRequests = dataclasses.field()
    

@dataclasses.dataclass
class SubmitTranscriptionJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    job: Optional[shared_job.Job] = dataclasses.field(default=None)
    submit_transcription_job_400_application_problem_plus_json_object: Optional[SubmitTranscriptionJob400ApplicationProblemPlusJSON] = dataclasses.field(default=None)
    submit_transcription_job_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    submit_transcription_job_413_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    
