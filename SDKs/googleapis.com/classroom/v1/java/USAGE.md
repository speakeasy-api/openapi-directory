<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreatePathParams;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateQueryParams;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateResponse;
import org.openapis.openapi.models.shared.CourseAlias;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAliasesCreateRequest req = new ClassroomCoursesAliasesCreateRequest() {{
                security = new ClassroomCoursesAliasesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ClassroomCoursesAliasesCreatePathParams() {{
                    courseId = "corrupti";
                }};
                queryParams = new ClassroomCoursesAliasesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new CourseAlias() {{
                    alias = "suscipit";
                }};
            }};            

            ClassroomCoursesAliasesCreateResponse res = sdk.courses.classroomCoursesAliasesCreate(req);

            if (res.courseAlias.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->