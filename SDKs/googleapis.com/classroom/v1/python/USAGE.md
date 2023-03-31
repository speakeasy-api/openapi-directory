<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ClassroomCoursesAliasesCreateRequest(
    dollar_xgafv="2",
    course_alias=shared.CourseAlias(
        alias="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    course_id="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.courses.classroom_courses_aliases_create(req, operations.ClassroomCoursesAliasesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.course_alias is not None:
    # handle response
```
<!-- End SDK Example Usage -->