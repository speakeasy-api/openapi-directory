import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AddImageWatermarkV1RequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class AddImageWatermarkV1RequestBodyImage:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'image' }})
    

@dataclasses.dataclass
class AddImageWatermarkV1RequestBody:
    file: AddImageWatermarkV1RequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    image: AddImageWatermarkV1RequestBodyImage = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    margin: Optional[float] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'margin' }})
    transparency: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'transparency' }})
    

@dataclass_json
@dataclasses.dataclass
class AddImageWatermarkV14XxApplicationProblemPlusJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AddImageWatermarkV1Request:
    request: AddImageWatermarkV1RequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class AddImageWatermarkV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_image_watermark_v1_200_application_pdf_binary_string: Optional[bytes] = dataclasses.field(default=None)
    add_image_watermark_v1_4_xx_application_problem_plus_json_object: Optional[AddImageWatermarkV14XxApplicationProblemPlusJSON] = dataclasses.field(default=None)
    
