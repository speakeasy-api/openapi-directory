import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class QueryADatabasePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabaseRequestBodyFilterOrSelect:
    equals: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equals') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabaseRequestBodyFilterOr:
    property: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    select: Optional[QueryADatabaseRequestBodyFilterOrSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabaseRequestBodyFilter:
    or_: Optional[list[QueryADatabaseRequestBodyFilterOr]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('or') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabaseRequestBodySorts:
    direction: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    property: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabaseRequestBody:
    filter: Optional[QueryADatabaseRequestBodyFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    sorts: Optional[list[QueryADatabaseRequestBodySorts]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sorts') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsParent:
    database_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesAuthor:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    multi_select: Optional[list[QueryADatabase200ApplicationJSONResultsPropertiesAuthorMultiSelect]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multi_select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesLink:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations:
    bold: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bold') }})
    code: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    italic: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italic') }})
    strikethrough: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethrough') }})
    underline: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underline') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText:
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    link: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesNameTitle:
    annotations: Optional[QueryADatabase200ApplicationJSONResultsPropertiesNameTitleAnnotations] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    href: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    plain_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plain_text') }})
    text: Optional[QueryADatabase200ApplicationJSONResultsPropertiesNameTitleText] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesName:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[list[QueryADatabase200ApplicationJSONResultsPropertiesNameTitle]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublisher:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublisherSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate:
    end: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate:
    date_: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDateDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesRead:
    checkbox: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkbox') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesScore5Select:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesScore5:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesScore5Select] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesStatus:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesStatusSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesSummary:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    text: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect:
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsPropertiesType:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    select: Optional[QueryADatabase200ApplicationJSONResultsPropertiesTypeSelect] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('select') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResultsProperties:
    author: Optional[QueryADatabase200ApplicationJSONResultsPropertiesAuthor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Author') }})
    link: Optional[QueryADatabase200ApplicationJSONResultsPropertiesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Link') }})
    name: Optional[QueryADatabase200ApplicationJSONResultsPropertiesName] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    publisher: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublisher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publisher') }})
    publishing_release_date: Optional[QueryADatabase200ApplicationJSONResultsPropertiesPublishingReleaseDate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Publishing/Release Date') }})
    read: Optional[QueryADatabase200ApplicationJSONResultsPropertiesRead] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Read') }})
    score_5: Optional[QueryADatabase200ApplicationJSONResultsPropertiesScore5] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score /5') }})
    status: Optional[QueryADatabase200ApplicationJSONResultsPropertiesStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    summary: Optional[QueryADatabase200ApplicationJSONResultsPropertiesSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    type: Optional[QueryADatabase200ApplicationJSONResultsPropertiesType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSONResults:
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    created_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_time') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_edited_time') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    parent: Optional[QueryADatabase200ApplicationJSONResultsParent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    properties: Optional[QueryADatabase200ApplicationJSONResultsProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryADatabase200ApplicationJSON:
    has_more: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_more') }})
    next_cursor: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_cursor') }})
    object: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    results: Optional[list[QueryADatabase200ApplicationJSONResults]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclasses.dataclass
class QueryADatabaseRequest:
    path_params: QueryADatabasePathParams = dataclasses.field()
    request: Optional[QueryADatabaseRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class QueryADatabaseResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    query_a_database_200_application_json_object: Optional[QueryADatabase200ApplicationJSON] = dataclasses.field(default=None)
    
