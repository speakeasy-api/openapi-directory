# rootSnapshot

### Available Operations

* [getSnapshotStorageStatsV1](#getsnapshotstoragestatsv1) - Returns storage stats for a snapshot

## getSnapshotStorageStatsV1

Returns the storage statistics for a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSnapshotStorageStatsV1Request;
import org.openapis.openapi.models.operations.GetSnapshotStorageStatsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("doloremque", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSnapshotStorageStatsV1Request req = new GetSnapshotStorageStatsV1Request("laudantium");            

            GetSnapshotStorageStatsV1Response res = sdk.rootSnapshot.getSnapshotStorageStatsV1(req);

            if (res.snapshotStorageStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
