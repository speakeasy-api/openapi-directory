# splunk

### Available Operations

* [splunkAssetSyncCreatedJSON](#splunkassetsynccreatedjson) - Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.
* [splunkAssetSyncUpdatedJSON](#splunkassetsyncupdatedjson) - Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

## splunkAssetSyncCreatedJSON

Exports the asset inventory in a sync-friendly manner using created_at as a checkpoint. Requires the Splunk entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SplunkAssetSyncCreatedJSONRequest;
import org.openapis.openapi.models.operations.SplunkAssetSyncCreatedJSONResponse;
import org.openapis.openapi.models.operations.SplunkAssetSyncCreatedJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SplunkAssetSyncCreatedJSONRequest req = new SplunkAssetSyncCreatedJSONRequest() {{
                fields = "laudantium";
                search = "corporis";
                since = 1576300370L;
            }};            

            SplunkAssetSyncCreatedJSONResponse res = sdk.splunk.splunkAssetSyncCreatedJSON(req, new SplunkAssetSyncCreatedJSONSecurity("officiis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.assetsWithCheckpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## splunkAssetSyncUpdatedJSON

Exports the asset inventory in a sync-friendly manner using updated_at as a checkpoint. Requires the Splunk entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SplunkAssetSyncUpdatedJSONRequest;
import org.openapis.openapi.models.operations.SplunkAssetSyncUpdatedJSONResponse;
import org.openapis.openapi.models.operations.SplunkAssetSyncUpdatedJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SplunkAssetSyncUpdatedJSONRequest req = new SplunkAssetSyncUpdatedJSONRequest() {{
                fields = "voluptatibus";
                search = "cum";
                since = 1576300370L;
            }};            

            SplunkAssetSyncUpdatedJSONResponse res = sdk.splunk.splunkAssetSyncUpdatedJSON(req, new SplunkAssetSyncUpdatedJSONSecurity("at") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.assetsWithCheckpoint != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
