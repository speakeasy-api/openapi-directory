# asset

### Available Operations

* [getAsset](#getasset) - Asset Detail
* [getAssetContributors](#getassetcontributors) - Asset Contributors
* [listAssets](#listassets) - Asset Collection

## getAsset

Return the content of the selected asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetRequest;
import org.openapis.openapi.models.operations.GetAssetResponse;
import org.openapis.openapi.models.operations.GetAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetRequest req = new GetAssetRequest("distinctio") {{
                aliases = false;
            }};            

            GetAssetResponse res = sdk.asset.getAsset(req, new GetAssetSecurity("quibusdam") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAsset200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetContributors

Return the contributors of the selected asset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetContributorsRequest;
import org.openapis.openapi.models.operations.GetAssetContributorsResponse;
import org.openapis.openapi.models.operations.GetAssetContributorsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetContributorsRequest req = new GetAssetContributorsRequest("unde") {{
                aliases = false;
            }};            

            GetAssetContributorsResponse res = sdk.asset.getAssetContributors(req, new GetAssetContributorsSecurity("nulla") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAssetContributors200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssets

Return a collection of Assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetsRequest;
import org.openapis.openapi.models.operations.ListAssetsResponse;
import org.openapis.openapi.models.operations.ListAssetsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAssetsRequest req = new ListAssetsRequest() {{
                aliases = false;
                limit = 544883;
                updatedAfter = "illum";
            }};            

            ListAssetsResponse res = sdk.asset.listAssets(req, new ListAssetsSecurity("vel") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.listAssets200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
