import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error


@dataclasses.dataclass
class PostCoursesRootContentIDPermissionsUserEmailPathParams:
    root_content_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rootContentId', 'style': 'simple', 'explode': False }})
    user_email: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PostCoursesRootContentIDPermissionsUserEmailPermissionToBeGrantedToTheUser:
    is_builder: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBuilder') }})
    is_reviewer: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReviewer') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON:
    content_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentId') }})
    

@dataclasses.dataclass
class PostCoursesRootContentIDPermissionsUserEmailRequest:
    path_params: PostCoursesRootContentIDPermissionsUserEmailPathParams = dataclasses.field()
    request: PostCoursesRootContentIDPermissionsUserEmailPermissionToBeGrantedToTheUser = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostCoursesRootContentIDPermissionsUserEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    post_courses_root_content_id_permissions_user_email_201_application_json_object: Optional[PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSON] = dataclasses.field(default=None)
    
