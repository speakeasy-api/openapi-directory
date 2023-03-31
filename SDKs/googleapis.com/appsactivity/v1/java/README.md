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

import org.openapis.openapi.models.operations.AppsactivityActivitiesListSecurity;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListGroupingStrategyEnum;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListQueryParams;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListRequest;
import org.openapis.openapi.models.operations.AppsactivityActivitiesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsactivityActivitiesListRequest req = new AppsactivityActivitiesListRequest() {{
                security = new AppsactivityActivitiesListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new AppsactivityActivitiesListQueryParams() {{
                    alt = "json";
                    driveAncestorId = "corrupti";
                    driveFileId = "provident";
                    fields = "distinctio";
                    groupingStrategy = "none";
                    key = "unde";
                    oauthToken = "nulla";
                    pageSize = 544883;
                    pageToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    source = "error";
                    userId = "deserunt";
                    userIp = "suscipit";
                }};
            }};            

            AppsactivityActivitiesListResponse res = sdk.activities.appsactivityActivitiesList(req);

            if (res.listActivitiesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### activities

* `appsactivityActivitiesList` - Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
