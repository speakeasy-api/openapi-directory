import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class MergeDocumentsV1RequestBody:
    file: Optional[list[bytes]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    

@dataclass_json
@dataclasses.dataclass
class MergeDocumentsV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class MergeDocumentsV1Request:
    request: MergeDocumentsV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class MergeDocumentsV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    merge_documents_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    merge_documents_v1_4_xx_application_problem_plus_json_object: Optional[MergeDocumentsV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
