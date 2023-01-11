import dataclasses
from typing import Optional


@dataclasses.dataclass
class ConvertRequestBody:
    hundreds_form: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'hundreds_form' }})
    the_number: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'the_number' }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'unit' }})
    

@dataclasses.dataclass
class ConvertRequest:
    request: Optional[ConvertRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class ConvertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
