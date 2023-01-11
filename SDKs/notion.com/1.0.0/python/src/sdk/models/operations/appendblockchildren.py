import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class AppendBlockChildrenPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildrenRequestBodyChildrenHeading2TextText:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildrenRequestBodyChildrenHeading2Text:
    text: Optional[AppendBlockChildrenRequestBodyChildrenHeading2TextText] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildrenRequestBodyChildrenHeading2:
    text: Optional[list[AppendBlockChildrenRequestBodyChildrenHeading2Text]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildrenRequestBodyChildren:
    heading_2: Optional[AppendBlockChildrenRequestBodyChildrenHeading2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading_2') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildrenRequestBody:
    children: Optional[list[AppendBlockChildrenRequestBodyChildren]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildren200ApplicationJSONChildPage:
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclasses.dataclass
class AppendBlockChildren200ApplicationJSON:
    child_page: Optional[AppendBlockChildren200ApplicationJSONChildPage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_page') }})
    created_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    has_children: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_children') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_edited_time') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclasses.dataclass
class AppendBlockChildrenRequest:
    path_params: AppendBlockChildrenPathParams = dataclasses.field()
    request: Optional[AppendBlockChildrenRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppendBlockChildrenResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    append_block_children_200_application_json_object: Optional[AppendBlockChildren200ApplicationJSON] = dataclasses.field(default=None)
    
