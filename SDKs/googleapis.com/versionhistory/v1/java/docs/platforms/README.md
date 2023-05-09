# platforms

### Available Operations

* [versionhistoryPlatformsChannelsList](#versionhistoryplatformschannelslist) - Returns list of channels that are available for a given platform.
* [versionhistoryPlatformsChannelsVersionsList](#versionhistoryplatformschannelsversionslist) - Returns list of version for the given platform/channel.
* [versionhistoryPlatformsChannelsVersionsReleasesList](#versionhistoryplatformschannelsversionsreleaseslist) - Returns list of releases of the given version.
* [versionhistoryPlatformsList](#versionhistoryplatformslist) - Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

## versionhistoryPlatformsChannelsList

Returns list of channels that are available for a given platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListRequest;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionhistoryPlatformsChannelsListRequest req = new VersionhistoryPlatformsChannelsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            VersionhistoryPlatformsChannelsListResponse res = sdk.platforms.versionhistoryPlatformsChannelsList(req);

            if (res.listChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## versionhistoryPlatformsChannelsVersionsList

Returns list of version for the given platform/channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsVersionsListRequest;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsVersionsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionhistoryPlatformsChannelsVersionsListRequest req = new VersionhistoryPlatformsChannelsVersionsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                filter = "perferendis";
                key = "ipsam";
                oauthToken = "repellendus";
                orderBy = "sapiente";
                pageSize = 778157L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            VersionhistoryPlatformsChannelsVersionsListResponse res = sdk.platforms.versionhistoryPlatformsChannelsVersionsList(req);

            if (res.listVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## versionhistoryPlatformsChannelsVersionsReleasesList

Returns list of releases of the given version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsVersionsReleasesListRequest;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsVersionsReleasesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionhistoryPlatformsChannelsVersionsReleasesListRequest req = new VersionhistoryPlatformsChannelsVersionsReleasesListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                filter = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                orderBy = "officia";
                pageSize = 582020L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "hic";
                uploadProtocol = "optio";
            }};            

            VersionhistoryPlatformsChannelsVersionsReleasesListResponse res = sdk.platforms.versionhistoryPlatformsChannelsVersionsReleasesList(req);

            if (res.listReleasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## versionhistoryPlatformsList

Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsListRequest;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionhistoryPlatformsListRequest req = new VersionhistoryPlatformsListRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                pageSize = 456150L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            VersionhistoryPlatformsListResponse res = sdk.platforms.versionhistoryPlatformsList(req);

            if (res.listPlatformsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
