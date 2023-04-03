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

import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption1;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurityOption2;
import org.openapis.openapi.models.operations.AnalyticsDataGetSecurity;
import org.openapis.openapi.models.operations.AnalyticsDataGetRequest;
import org.openapis.openapi.models.operations.AnalyticsDataGetResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AnalyticsDataGetRequest req = new AnalyticsDataGetRequest() {{
                alt = "atom";
                dimensions = "corrupti";
                endDate = "provident";
                fields = "distinctio";
                filters = "quibusdam";
                ids = "unde";
                key = "nulla";
                maxResults = 544883;
                metrics = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                segment = "deserunt";
                sort = "suscipit";
                startDate = "iure";
                startIndex = 297534;
                userIp = "debitis";
            }}            

            AnalyticsDataGetResponse res = sdk.data.analyticsDataGet(req, new AnalyticsDataGetSecurity() {{
                option1 = new AnalyticsDataGetSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### data

* `analyticsDataGet` - Returns Analytics report data for a view (profile).

### management

* `analyticsManagementAccountsList` - Lists all accounts to which the user has access.
* `analyticsManagementGoalsList` - Lists goals to which the user has access.
* `analyticsManagementProfilesList` - Lists views (profiles) to which the user has access.
* `analyticsManagementSegmentsList` - Lists advanced segments to which the user has access.
* `analyticsManagementWebpropertiesList` - Lists web properties to which the user has access.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
