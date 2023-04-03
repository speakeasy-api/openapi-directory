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

import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurityOption5;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubeAnalyticsGroupItemsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeAnalyticsGroupItemsDeleteRequest req = new YoutubeAnalyticsGroupItemsDeleteRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                id = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                onBehalfOfContentOwner = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            YoutubeAnalyticsGroupItemsDeleteResponse res = sdk.groupItems.youtubeAnalyticsGroupItemsDelete(req, new YoutubeAnalyticsGroupItemsDeleteSecurity() {{
                option1 = new YoutubeAnalyticsGroupItemsDeleteSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.emptyResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### groupItems

* `youtubeAnalyticsGroupItemsDelete` - Removes an item from a group.
* `youtubeAnalyticsGroupItemsInsert` - Creates a group item.
* `youtubeAnalyticsGroupItemsList` - Returns a collection of group items that match the API request parameters.

### groups

* `youtubeAnalyticsGroupsDelete` - Deletes a group.
* `youtubeAnalyticsGroupsInsert` - Creates a group.
* `youtubeAnalyticsGroupsList` - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* `youtubeAnalyticsGroupsUpdate` - Modifies a group. For example, you could change a group's title.

### reports

* `youtubeAnalyticsReportsQuery` - Retrieve your YouTube Analytics reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
