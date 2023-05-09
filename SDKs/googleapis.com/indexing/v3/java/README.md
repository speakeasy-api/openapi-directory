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
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataRequest;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataResponse;
import org.openapis.openapi.models.operations.IndexingUrlNotificationsGetMetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IndexingUrlNotificationsGetMetadataRequest req = new IndexingUrlNotificationsGetMetadataRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "vel";
                uploadProtocol = "error";
                url = "deserunt";
            }};            

            IndexingUrlNotificationsGetMetadataResponse res = sdk.urlNotifications.indexingUrlNotificationsGetMetadata(req, new IndexingUrlNotificationsGetMetadataSecurity("suscipit", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.urlNotificationMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [urlNotifications](docs/urlnotifications/README.md)

* [indexingUrlNotificationsGetMetadata](docs/urlnotifications/README.md#indexingurlnotificationsgetmetadata) - Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.
* [indexingUrlNotificationsPublish](docs/urlnotifications/README.md#indexingurlnotificationspublish) - Notifies that a URL has been updated or deleted.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
