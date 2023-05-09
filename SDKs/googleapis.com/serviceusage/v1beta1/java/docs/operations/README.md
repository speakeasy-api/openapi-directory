# operations

### Available Operations

* [serviceusageOperationsList](#serviceusageoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## serviceusageOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServiceusageOperationsListRequest;
import org.openapis.openapi.models.operations.ServiceusageOperationsListResponse;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurity;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.ServiceusageOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServiceusageOperationsListRequest req = new ServiceusageOperationsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                fields = "excepturi";
                filter = "nisi";
                key = "recusandae";
                name = "Miss Raymond Hauck III";
                oauthToken = "repellendus";
                pageSize = 957156L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            ServiceusageOperationsListResponse res = sdk.operations.serviceusageOperationsList(req, new ServiceusageOperationsListSecurity() {{
                option1 = new ServiceusageOperationsListSecurityOption1("maiores", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
