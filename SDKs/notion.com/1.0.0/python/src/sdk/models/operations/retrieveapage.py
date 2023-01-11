import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RetrieveAPagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONParent:
    database_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesAuthor:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    multi_select: Optional[list[RetrieveAPage200ApplicationJSONPropertiesAuthorMultiSelect]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesLink:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations:
    bold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    code: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    italic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    strikethrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesNameTitleText:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    link: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesNameTitle:
    annotations: Optional[RetrieveAPage200ApplicationJSONPropertiesNameTitleAnnotations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    href: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    plain_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plain_text') }})
    text: Optional[RetrieveAPage200ApplicationJSONPropertiesNameTitleText] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesName:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[list[RetrieveAPage200ApplicationJSONPropertiesNameTitle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublisherSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublisher:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[RetrieveAPage200ApplicationJSONPropertiesPublisherSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate:
    end: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate:
    date_: Optional[RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDateDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesRead:
    checkbox: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkbox') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesStatusSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesStatus:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[RetrieveAPage200ApplicationJSONPropertiesStatusSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations:
    bold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    code: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    italic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    strikethrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummaryTextText:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    link: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummaryText:
    annotations: Optional[RetrieveAPage200ApplicationJSONPropertiesSummaryTextAnnotations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    href: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    plain_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plain_text') }})
    text: Optional[RetrieveAPage200ApplicationJSONPropertiesSummaryTextText] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesSummary:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    text: Optional[list[RetrieveAPage200ApplicationJSONPropertiesSummaryText]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesTypeSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONPropertiesType:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[RetrieveAPage200ApplicationJSONPropertiesTypeSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSONProperties:
    author: Optional[RetrieveAPage200ApplicationJSONPropertiesAuthor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Author') }})
    link: Optional[RetrieveAPage200ApplicationJSONPropertiesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    name: Optional[RetrieveAPage200ApplicationJSONPropertiesName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    publisher: Optional[RetrieveAPage200ApplicationJSONPropertiesPublisher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publisher') }})
    publishing_release_date: Optional[RetrieveAPage200ApplicationJSONPropertiesPublishingReleaseDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publishing/Release Date') }})
    read: Optional[RetrieveAPage200ApplicationJSONPropertiesRead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Read') }})
    status: Optional[RetrieveAPage200ApplicationJSONPropertiesStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    summary: Optional[RetrieveAPage200ApplicationJSONPropertiesSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    type: Optional[RetrieveAPage200ApplicationJSONPropertiesType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveAPage200ApplicationJSON:
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    created_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_edited_time') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    parent: Optional[RetrieveAPage200ApplicationJSONParent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    properties: Optional[RetrieveAPage200ApplicationJSONProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclasses.dataclass
class RetrieveAPageRequest:
    path_params: RetrieveAPagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAPageResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    retrieve_a_page_200_application_json_object: Optional[RetrieveAPage200ApplicationJSON] = dataclasses.field(default=None)
    
