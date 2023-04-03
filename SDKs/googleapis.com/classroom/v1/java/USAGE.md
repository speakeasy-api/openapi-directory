<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateSecurity;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateRequest;
import org.openapis.openapi.models.operations.ClassroomCoursesAliasesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CourseAlias;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClassroomCoursesAliasesCreateRequest req = new ClassroomCoursesAliasesCreateRequest() {{
                dollarXgafv = "2";
                courseAlias = new CourseAlias() {{
                    alias = "provident";
                }};
                accessToken = "distinctio";
                alt = "proto";
                callback = "unde";
                courseId = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            ClassroomCoursesAliasesCreateResponse res = sdk.courses.classroomCoursesAliasesCreate(req, new ClassroomCoursesAliasesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.courseAlias.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->