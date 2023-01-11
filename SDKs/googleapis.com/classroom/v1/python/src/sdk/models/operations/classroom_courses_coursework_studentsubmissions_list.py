import dataclasses
from typing import Optional
from enum import Enum
from ..shared import _xgafv_enum as shared__xgafv_enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import liststudentsubmissionsresponse as shared_liststudentsubmissionsresponse


@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListPathParams:
    course_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'courseId', 'style': 'simple', 'explode': False }})
    course_work_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'courseWorkId', 'style': 'simple', 'explode': False }})
    
class ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum(str, Enum):
    LATE_VALUES_UNSPECIFIED = "LATE_VALUES_UNSPECIFIED"
    LATE_ONLY = "LATE_ONLY"
    NOT_LATE_ONLY = "NOT_LATE_ONLY"

class ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum(str, Enum):
    SUBMISSION_STATE_UNSPECIFIED = "SUBMISSION_STATE_UNSPECIFIED"
    NEW = "NEW"
    CREATED = "CREATED"
    TURNED_IN = "TURNED_IN"
    RETURNED = "RETURNED"
    RECLAIMED_BY_STUDENT = "RECLAIMED_BY_STUDENT"


@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams:
    dollar_xgafv: Optional[shared__xgafv_enum.XgafvEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    late: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'late', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    states: Optional[list[ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'states', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6:
    oauth2: shared_security.SchemeOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared_security.SchemeOauth2c = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListSecurity:
    option1: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6] = dataclasses.field(default=None, metadata={'security': { 'option': True }})
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListRequest:
    path_params: ClassroomCoursesCourseWorkStudentSubmissionsListPathParams = dataclasses.field()
    query_params: ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams = dataclasses.field()
    security: ClassroomCoursesCourseWorkStudentSubmissionsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClassroomCoursesCourseWorkStudentSubmissionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_student_submissions_response: Optional[shared_liststudentsubmissionsresponse.ListStudentSubmissionsResponse] = dataclasses.field(default=None)
    
