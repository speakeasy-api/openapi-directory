# flags

### Available Operations

* [sqlFlagsList](#sqlflagslist) - Lists all available database flags for Cloud SQL instances.

## sqlFlagsList

Lists all available database flags for Cloud SQL instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlFlagsListRequest;
import org.openapis.openapi.models.operations.SqlFlagsListResponse;
import org.openapis.openapi.models.operations.SqlFlagsListSecurity;
import org.openapis.openapi.models.operations.SqlFlagsListSecurityOption1;
import org.openapis.openapi.models.operations.SqlFlagsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlFlagsListRequest req = new SqlFlagsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.PROTO;
                callback = "eum";
                databaseVersion = "vero";
                fields = "aspernatur";
                key = "architecto";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "excepturi";
                uploadProtocol = "ullam";
            }};            

            SqlFlagsListResponse res = sdk.flags.sqlFlagsList(req, new SqlFlagsListSecurity() {{
                option1 = new SqlFlagsListSecurityOption1("provident", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.flagsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
