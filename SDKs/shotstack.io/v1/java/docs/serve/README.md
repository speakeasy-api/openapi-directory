# serve

### Available Operations

* [deleteAsset](#deleteasset) - Delete Asset
* [getAsset](#getasset) - Get Asset
* [getAssetByRenderId](#getassetbyrenderid) - Get Asset by Render ID

## deleteAsset

Delete an asset by its asset id. If a render creates multiple assets, such as thumbnail and poster images, each asset must be deleted individually by the asset id.

**base URL:** https://api.shotstack.io/serve/{version}

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAssetRequest;
import org.openapis.openapi.models.operations.DeleteAssetResponse;
import org.openapis.openapi.models.operations.DeleteAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAssetRequest req = new DeleteAssetRequest("totam");            

            DeleteAssetResponse res = sdk.serve.deleteAsset(req, new DeleteAssetSecurity("dignissimos") {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAsset

The Serve API is used to interact with, and delete hosted assets including videos, images, audio files,  thumbnails and poster images. Use this endpoint to fetch an asset by asset id. Note that an asset id is unique for each asset and different from the render id.

**base URL:** https://api.shotstack.io/serve/{version}

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

            GetAssetRequest req = new GetAssetRequest("eaque");            

            GetAssetResponse res = sdk.serve.getAsset(req, new GetAssetSecurity("quis") {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.assetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAssetByRenderId

A render may generate more than one file, such as a video, thumbnail and poster image. When the assets are created the only known id is the render id returned by the original [render request](#render-video), status  request or webhook. This endpoint lets you look up one or more assets by the render id.

**base URL:** https://api.shotstack.io/serve/{version}

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAssetByRenderIdRequest;
import org.openapis.openapi.models.operations.GetAssetByRenderIdResponse;
import org.openapis.openapi.models.operations.GetAssetByRenderIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetByRenderIdRequest req = new GetAssetByRenderIdRequest("nesciunt");            

            GetAssetByRenderIdResponse res = sdk.serve.getAssetByRenderId(req, new GetAssetByRenderIdSecurity("eos") {{
                developerKey = "YOUR_API_KEY_HERE";
            }});

            if (res.assetRenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
