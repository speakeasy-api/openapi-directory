import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import listcourseworkmaterialresponse as shared_listcourseworkmaterialresponse


@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListPathParams:
    course_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'courseId', 'style': 'simple', 'explode': False }})
    
class ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum(str, Enum):
    COURSEWORK_MATERIAL_STATE_UNSPECIFIED = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
    PUBLISHED = "PUBLISHED"
    DRAFT = "DRAFT"
    DELETED = "DELETED"


@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    course_work_material_states: Optional[list[ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'courseWorkMaterialStates', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    material_drive_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'materialDriveId', 'style': 'form', 'explode': True }})
    material_link: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'materialLink', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListSecurity:
    option1: Optional[ClassroomCoursesCourseWorkMaterialsListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomCoursesCourseWorkMaterialsListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListRequest:
    path_params: ClassroomCoursesCourseWorkMaterialsListPathParams = dataclasses.field()
    query_params: ClassroomCoursesCourseWorkMaterialsListQueryParams = dataclasses.field()
    security: ClassroomCoursesCourseWorkMaterialsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkMaterialsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_course_work_material_response: Optional[shared_listcourseworkmaterialresponse.ListCourseWorkMaterialResponse] = dataclasses.field(default=None)
    
