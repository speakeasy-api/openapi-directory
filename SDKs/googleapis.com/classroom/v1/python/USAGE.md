<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ClassroomCoursesAliasesCreateRequest(
    security=operations.ClassroomCoursesAliasesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ClassroomCoursesAliasesCreatePathParams(
        course_id="eveniet",
    ),
    query_params=operations.ClassroomCoursesAliasesCreateQueryParams(
        dollar_xgafv="2",
        access_token="magni",
        alt="media",
        callback="quo",
        fields="minima",
        key="qui",
        oauth_token="dolores",
        pretty_print=True,
        quota_user="cumque",
        upload_type="ad",
        upload_protocol="facilis",
    ),
    request=shared.CourseAlias(
        alias="magnam",
    ),
)
    
res = s.courses.classroom_courses_aliases_create(req)

if res.course_alias is not None:
    # handle response
```
<!-- End SDK Example Usage -->