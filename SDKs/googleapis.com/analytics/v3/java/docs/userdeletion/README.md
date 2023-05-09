# userDeletion

### Available Operations

* [analyticsUserDeletionUserDeletionRequestUpsert](#analyticsuserdeletionuserdeletionrequestupsert) - Insert or update a user deletion requests.

## analyticsUserDeletionUserDeletionRequestUpsert

Insert or update a user deletion requests.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyticsUserDeletionUserDeletionRequestUpsertRequest;
import org.openapis.openapi.models.operations.AnalyticsUserDeletionUserDeletionRequestUpsertResponse;
import org.openapis.openapi.models.operations.AnalyticsUserDeletionUserDeletionRequestUpsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UserDeletionRequestId;
import org.openapis.openapi.models.shared.UserDeletionRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsUserDeletionUserDeletionRequestUpsertRequest req = new AnalyticsUserDeletionUserDeletionRequestUpsertRequest() {{
                userDeletionRequestInput = new UserDeletionRequestInput() {{
                    firebaseProjectId = "sunt";
                    id = new UserDeletionRequestId() {{
                        type = "blanditiis";
                        userId = "iste";
                    }};;
                    kind = "accusamus";
                    propertyId = "distinctio";
                    webPropertyId = "incidunt";
                }};;
                alt = AltEnum.JSON;
                fields = "labore";
                key = "blanditiis";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "consectetur";
                userIp = "sapiente";
            }};            

            AnalyticsUserDeletionUserDeletionRequestUpsertResponse res = sdk.userDeletion.analyticsUserDeletionUserDeletionRequestUpsert(req, new AnalyticsUserDeletionUserDeletionRequestUpsertSecurity("quis", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDeletionRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
