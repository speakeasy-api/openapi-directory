import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetUserContentUserJSONQueryParams:
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userID', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserContentUserJSONSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONDebug:
    version: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels:
    label_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelID') }})
    label_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelName') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff:
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    taxonomy_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyID') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc:
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    taxonomy_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyID') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn:
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    taxonomy_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomyID') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties:
    automoderation_off: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automoderation-off') }})
    comment_list_sort_approvedate_desc: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment-list-sort-approvedate-desc') }})
    reached_max_com_on: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reached-max-com-on') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset:
    all_properties: Optional[list[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all-properties') }})
    asset_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetID') }})
    asset_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTitle') }})
    asset_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetURL') }})
    create_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate') }})
    labels: Optional[list[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    properties: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    taxonomy: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomy') }})
    text: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    update_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDate') }})
    vendor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendorID') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResultsComments:
    approve_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approveDate') }})
    asset: Optional[GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    comment_body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentBody') }})
    comment_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentID') }})
    comment_sequence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentSequence') }})
    comment_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentTitle') }})
    comment_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentType') }})
    create_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate') }})
    editors_selection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorsSelection') }})
    labels: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    parent_id: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentID') }})
    permid: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permid') }})
    pic_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('picURL') }})
    recommendations: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendations') }})
    replies: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    reply_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyCount') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    update_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDate') }})
    user_display_name: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDisplayName') }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userID') }})
    user_location: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLocation') }})
    user_submitted_display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSubmittedDisplayName') }})
    user_submitted_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSubmittedLocation') }})
    user_submitted_title: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSubmittedTitle') }})
    user_submitted_url: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userSubmittedURL') }})
    user_title: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userTitle') }})
    user_url: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userURL') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSONResults:
    api_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_timestamp') }})
    comments: Optional[list[GetUserContentUserJSON200ApplicationJSONResultsComments]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    total_comments_found: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCommentsFound') }})
    total_comments_returned: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCommentsReturned') }})
    

@dataclass_json
@dataclasses.dataclass
class GetUserContentUserJSON200ApplicationJSON:
    copyright: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    debug: Optional[GetUserContentUserJSON200ApplicationJSONDebug] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug') }})
    results: Optional[GetUserContentUserJSON200ApplicationJSONResults] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclasses.dataclass
class GetUserContentUserJSONRequest:
    query_params: GetUserContentUserJSONQueryParams = dataclasses.field()
    security: GetUserContentUserJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserContentUserJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_user_content_user_json_200_application_json_object: Optional[GetUserContentUserJSON200ApplicationJSON] = dataclasses.field(default=None)
    
