# projects

### Available Operations

* [bigqueryProjectsGetServiceAccount](#bigqueryprojectsgetserviceaccount) - Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
* [bigqueryProjectsList](#bigqueryprojectslist) - Lists all projects to which you have been granted any project role.

## bigqueryProjectsGetServiceAccount

Returns the email address of the service account for your project used for interactions with Google Cloud KMS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryProjectsGetServiceAccountRequest;
import org.openapis.openapi.models.operations.BigqueryProjectsGetServiceAccountResponse;
import org.openapis.openapi.models.operations.BigqueryProjectsGetServiceAccountSecurity;
import org.openapis.openapi.models.operations.BigqueryProjectsGetServiceAccountSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryProjectsGetServiceAccountSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryProjectsGetServiceAccountSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryProjectsGetServiceAccountRequest req = new BigqueryProjectsGetServiceAccountRequest("reiciendis") {{
                alt = AltEnum.JSON;
                fields = "ex";
                key = "sit";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "officiis";
                userIp = "praesentium";
            }};            

            BigqueryProjectsGetServiceAccountResponse res = sdk.projects.bigqueryProjectsGetServiceAccount(req, new BigqueryProjectsGetServiceAccountSecurity() {{
                option1 = new BigqueryProjectsGetServiceAccountSecurityOption1("facilis", "quaerat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getServiceAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryProjectsList

Lists all projects to which you have been granted any project role.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryProjectsListRequest;
import org.openapis.openapi.models.operations.BigqueryProjectsListResponse;
import org.openapis.openapi.models.operations.BigqueryProjectsListSecurity;
import org.openapis.openapi.models.operations.BigqueryProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryProjectsListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryProjectsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryProjectsListRequest req = new BigqueryProjectsListRequest() {{
                alt = AltEnum.JSON;
                fields = "incidunt";
                key = "ipsam";
                maxResults = 894864L;
                oauthToken = "rem";
                pageToken = "sit";
                prettyPrint = false;
                quotaUser = "nobis";
                userIp = "error";
            }};            

            BigqueryProjectsListResponse res = sdk.projects.bigqueryProjectsList(req, new BigqueryProjectsListSecurity() {{
                option1 = new BigqueryProjectsListSecurityOption1("veniam", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.projectList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
