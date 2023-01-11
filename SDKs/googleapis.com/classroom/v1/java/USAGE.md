<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    courseId = "sit";
                }};
                queryParams = new ClassroomCoursesAliasesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "est";
                    alt = "json";
                    callback = "magni";
                    fields = "quis";
                    key = "sed";
                    oauthToken = "ratione";
                    prettyPrint = false;
                    quotaUser = "quaerat";
                    uploadType = "soluta";
                    uploadProtocol = "vel";
                }};
                request = new CourseAlias() {{
                    alias = "fuga";
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