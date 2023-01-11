import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order_enum as shared_order_enum
from ..shared import _links_conversations_list as shared__links_conversations_list


@dataclasses.dataclass
class ListConversationsQueryParams:
    date_end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    record_index: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'record_index', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf:
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversations200ApplicationJSONEmbeddedConversationsLinks:
    self: Optional[ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversations200ApplicationJSONEmbeddedConversations:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    links: Optional[ListConversations200ApplicationJSONEmbeddedConversationsLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversations200ApplicationJSONEmbedded:
    r"""ListConversations200ApplicationJSONEmbedded
    A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
    """
    
    conversations: list[ListConversations200ApplicationJSONEmbeddedConversations] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConversations200ApplicationJSON:
    embedded: ListConversations200ApplicationJSONEmbedded = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: shared__links_conversations_list.LinksConversationsList = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_size: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    record_index: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_index') }})
    

@dataclasses.dataclass
class ListConversationsRequest:
    query_params: ListConversationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListConversationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_conversations_200_application_json_object: Optional[ListConversations200ApplicationJSON] = dataclasses.field(default=None)
    
