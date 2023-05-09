# availableProjects

### Available Operations

* [firebaseAvailableProjectsList](#firebaseavailableprojectslist) - Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

## firebaseAvailableProjectsList

Lists each [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added to it. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListRequest;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListResponse;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurity;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseAvailableProjectsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseAvailableProjectsListRequest req = new FirebaseAvailableProjectsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            FirebaseAvailableProjectsListResponse res = sdk.availableProjects.firebaseAvailableProjectsList(req, new FirebaseAvailableProjectsListSecurity() {{
                option1 = new FirebaseAvailableProjectsListSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAvailableProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
