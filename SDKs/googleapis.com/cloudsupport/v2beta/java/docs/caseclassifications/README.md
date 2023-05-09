# caseClassifications

### Available Operations

* [cloudsupportCaseClassificationsSearch](#cloudsupportcaseclassificationssearch) - Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

## cloudsupportCaseClassificationsSearch

Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchRequest;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchResponse;
import org.openapis.openapi.models.operations.CloudsupportCaseClassificationsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsupportCaseClassificationsSearchRequest req = new CloudsupportCaseClassificationsSearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                pageSize = 528895L;
                pageToken = "iusto";
                prettyPrint = false;
                query = "excepturi";
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            CloudsupportCaseClassificationsSearchResponse res = sdk.caseClassifications.cloudsupportCaseClassificationsSearch(req, new CloudsupportCaseClassificationsSearchSecurity("ab", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchCaseClassificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
