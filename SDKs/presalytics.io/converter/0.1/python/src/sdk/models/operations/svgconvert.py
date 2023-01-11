import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SvgconvertFileToConvertFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class SvgconvertFileToConvert:
    file: Optional[SvgconvertFileToConvertFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass_json
@dataclasses.dataclass
class SvgconvertFileURL:
    blob_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_name') }})
    blob_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_url') }})
    

@dataclasses.dataclass
class SvgconvertRequest:
    request: SvgconvertFileToConvert = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SvgconvertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_url: Optional[SvgconvertFileURL] = dataclasses.field(default=None)
    
