# archive

### Available Operations

* [groupsmigrationArchiveInsert](#groupsmigrationarchiveinsert) - Inserts a new mail into the archive of the Google group.

## groupsmigrationArchiveInsert

Inserts a new mail into the archive of the Google group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertRequest;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertResponse;
import org.openapis.openapi.models.operations.GroupsmigrationArchiveInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsmigrationArchiveInsertRequest req = new GroupsmigrationArchiveInsertRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            GroupsmigrationArchiveInsertResponse res = sdk.archive.groupsmigrationArchiveInsert(req, new GroupsmigrationArchiveInsertSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
