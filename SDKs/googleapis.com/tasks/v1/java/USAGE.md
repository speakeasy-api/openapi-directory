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

            TasksTasklistsDeleteRequest req = new TasksTasklistsDeleteRequest() {{
                security = new TasksTasklistsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new TasksTasklistsDeletePathParams() {{
                    tasklist = "praesentium";
                }};
                queryParams = new TasksTasklistsDeleteQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "aut";
                    alt = "proto";
                    callback = "veniam";
                    fields = "inventore";
                    key = "aut";
                    oauthToken = "nostrum";
                    prettyPrint = true;
                    quotaUser = "adipisci";
                    uploadType = "dicta";
                    uploadProtocol = "quisquam";
                }};
            }};

            TasksTasklistsDeleteResponse res = sdk.tasklists.tasksTasklistsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->