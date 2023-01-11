import dataclasses
from typing import Optional


@dataclasses.dataclass
class ImprovementProgramMultipartImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'image_file' }})
    

@dataclasses.dataclass
class ImprovementProgramMultipart:
    image_file: Optional[ImprovementProgramMultipartImageFile] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    image_file_b64: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'image_file_b64' }})
    image_filename: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'image_filename' }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'image_url' }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tag' }})
    
