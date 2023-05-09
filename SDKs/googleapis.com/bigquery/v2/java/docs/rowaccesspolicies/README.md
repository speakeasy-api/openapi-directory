# rowAccessPolicies

### Available Operations

* [bigqueryRowAccessPoliciesList](#bigqueryrowaccesspolicieslist) - Lists all row access policies on the specified table.

## bigqueryRowAccessPoliciesList

Lists all row access policies on the specified table.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryRowAccessPoliciesListRequest;
import org.openapis.openapi.models.operations.BigqueryRowAccessPoliciesListResponse;
import org.openapis.openapi.models.operations.BigqueryRowAccessPoliciesListSecurity;
import org.openapis.openapi.models.operations.BigqueryRowAccessPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryRowAccessPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.BigqueryRowAccessPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryRowAccessPoliciesListRequest req = new BigqueryRowAccessPoliciesListRequest("esse", "magni", "ea") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "veritatis";
                oauthToken = "ad";
                pageSize = 242606L;
                pageToken = "quia";
                prettyPrint = false;
                quotaUser = "dicta";
                userIp = "nam";
            }};            

            BigqueryRowAccessPoliciesListResponse res = sdk.rowAccessPolicies.bigqueryRowAccessPoliciesList(req, new BigqueryRowAccessPoliciesListSecurity() {{
                option1 = new BigqueryRowAccessPoliciesListSecurityOption1("quos", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listRowAccessPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
