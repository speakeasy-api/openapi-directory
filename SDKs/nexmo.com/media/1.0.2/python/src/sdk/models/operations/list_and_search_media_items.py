import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import media as shared_media

class ListAndSearchMediaItemsOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclasses.dataclass
class ListAndSearchMediaItemsQueryParams:
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    order: Optional[ListAndSearchMediaItemsOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_index', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListAndSearchMediaItems200ApplicationJSONEmbedded:
    r"""ListAndSearchMediaItems200ApplicationJSONEmbedded
    A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
    """
    
    media: Optional[list[shared_media.Media]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAndSearchMediaItems200ApplicationJSONLinksFirst:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAndSearchMediaItems200ApplicationJSONLinksLast:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAndSearchMediaItems200ApplicationJSONLinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAndSearchMediaItems200ApplicationJSONLinks:
    first: Optional[ListAndSearchMediaItems200ApplicationJSONLinksFirst] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[ListAndSearchMediaItems200ApplicationJSONLinksLast] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    self: Optional[ListAndSearchMediaItems200ApplicationJSONLinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ListAndSearchMediaItems200ApplicationJSON:
    embedded: Optional[ListAndSearchMediaItems200ApplicationJSONEmbedded] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: Optional[ListAndSearchMediaItems200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_index') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    

@dataclasses.dataclass
class ListAndSearchMediaItemsRequest:
    query_params: ListAndSearchMediaItemsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAndSearchMediaItemsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_and_search_media_items_200_application_json_object: Optional[ListAndSearchMediaItems200ApplicationJSON] = dataclasses.field(default=None)
    
