import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import book as shared_book


@dataclass_json
@dataclasses.dataclass
class GetBooks200ApplicationJSON:
    data: Optional[list[shared_book.Book]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetBooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_books_200_application_json_object: Optional[GetBooks200ApplicationJSON] = dataclasses.field(default=None)
    
