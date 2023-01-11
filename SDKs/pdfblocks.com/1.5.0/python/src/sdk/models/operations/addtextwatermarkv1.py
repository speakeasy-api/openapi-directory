import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddTextWatermarkV1RequestBodyColorEnum(str, Enum):
    RED = "Red"
    BLUE = "Blue"
    GRAY = "Gray"
    BLACK = "Black"


@dataclasses.dataclass
class AddTextWatermarkV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class AddTextWatermarkV1RequestBody:
    file: AddTextWatermarkV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    line_1: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'line_1' }})
    color: Optional[AddTextWatermarkV1RequestBodyColorEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'color' }})
    line_2: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'line_2' }})
    line_3: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'line_3' }})
    margin: Optional[float] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'margin' }})
    template: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'template' }})
    transparency: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transparency' }})
    

@dataclass_json
@dataclasses.dataclass
class AddTextWatermarkV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddTextWatermarkV1Request:
    request: AddTextWatermarkV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddTextWatermarkV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_text_watermark_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    add_text_watermark_v1_4_xx_application_problem_plus_json_object: Optional[AddTextWatermarkV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
