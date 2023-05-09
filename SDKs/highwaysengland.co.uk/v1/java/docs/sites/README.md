# sites

### Available Operations

* [sitesIndex](#sitesindex) - Get a list of sites
* [getVVersionSitesSiteIds](#getvversionsitessiteids) - Get selected sites

## sitesIndex

Get a list of sites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SitesIndexRequest;
import org.openapis.openapi.models.operations.SitesIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SitesIndexRequest req = new SitesIndexRequest("deserunt");            

            SitesIndexResponse res = sdk.sites.sitesIndex(req);

            if (res.siteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVVersionSitesSiteIds

Get selected sites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVVersionSitesSiteIdsRequest;
import org.openapis.openapi.models.operations.GetVVersionSitesSiteIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVVersionSitesSiteIdsRequest req = new GetVVersionSitesSiteIdsRequest("perferendis", "ipsam");            

            GetVVersionSitesSiteIdsResponse res = sdk.sites.getVVersionSitesSiteIds(req);

            if (res.siteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
