# projects

### Available Operations

* [policyanalyzerProjectsLocationsActivityTypesActivitiesQuery](#policyanalyzerprojectslocationsactivitytypesactivitiesquery) - Queries policy activities on Google Cloud resources.

## policyanalyzerProjectsLocationsActivityTypesActivitiesQuery

Queries policy activities on Google Cloud resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse;
import org.openapis.openapi.models.operations.PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest req = new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse res = sdk.projects.policyanalyzerProjectsLocationsActivityTypesActivitiesQuery(req, new PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudPolicyanalyzerV1QueryActivityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
