# siteTypes

### Available Operations

* [siteTypesGetSitesForPublicFacingAPI](#sitetypesgetsitesforpublicfacingapi) - Returns the layer metadata for the LayerId specified.
* [siteTypesIndex](#sitetypesindex) - Return list of site types

## siteTypesGetSitesForPublicFacingAPI

Returns the layer metadata for the LayerId specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIRequest;
import org.openapis.openapi.models.operations.SiteTypesGetSitesForPublicFacingAPIResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteTypesGetSitesForPublicFacingAPIRequest req = new SiteTypesGetSitesForPublicFacingAPIRequest(71036, "quis");            

            SiteTypesGetSitesForPublicFacingAPIResponse res = sdk.siteTypes.siteTypesGetSitesForPublicFacingAPI(req);

            if (res.siteTypeLayer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## siteTypesIndex

Return list of site types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SiteTypesIndexRequest;
import org.openapis.openapi.models.operations.SiteTypesIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SiteTypesIndexRequest req = new SiteTypesIndexRequest("veritatis");            

            SiteTypesIndexResponse res = sdk.siteTypes.siteTypesIndex(req);

            if (res.siteTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
