# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListPathParams;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListQueryParams;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListRequest;
import org.openapis.openapi.models.operations.VersionhistoryPlatformsChannelsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VersionhistoryPlatformsChannelsListRequest req = new VersionhistoryPlatformsChannelsListRequest() {{
                pathParams = new VersionhistoryPlatformsChannelsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new VersionhistoryPlatformsChannelsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            VersionhistoryPlatformsChannelsListResponse res = sdk.platforms.versionhistoryPlatformsChannelsList(req);

            if (res.listChannelsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### platforms

* `versionhistoryPlatformsChannelsList` - Returns list of channels that are available for a given platform.
* `versionhistoryPlatformsChannelsVersionsList` - Returns list of version for the given platform/channel.
* `versionhistoryPlatformsChannelsVersionsReleasesList` - Returns list of releases of the given version.
* `versionhistoryPlatformsList` - Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
