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

import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption1;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurityOption2;
import org.openapis.openapi.models.operations.DriveactivityActivityQuerySecurity;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryRequest;
import org.openapis.openapi.models.operations.DriveactivityActivityQueryResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryDriveActivityRequest;
import org.openapis.openapi.models.shared.ConsolidationStrategy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DriveactivityActivityQueryRequest req = new DriveactivityActivityQueryRequest() {{
                dollarXgafv = "2";
                queryDriveActivityRequest = new QueryDriveActivityRequest() {{
                    ancestorName = "provident";
                    consolidationStrategy = new ConsolidationStrategy() {{
                        legacy = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                            put("illum", "vel");
                        }};
                        none = new java.util.HashMap<String, Object>() {{
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                    }};
                    filter = "delectus";
                    itemName = "tempora";
                    pageSize = 383441;
                    pageToken = "molestiae";
                }};
                accessToken = "minus";
                alt = "proto";
                callback = "voluptatum";
                fields = "iusto";
                key = "excepturi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "temporibus";
                uploadProtocol = "ab";
            }}            

            DriveactivityActivityQueryResponse res = sdk.activity.driveactivityActivityQuery(req, new DriveactivityActivityQuerySecurity() {{
                option1 = new DriveactivityActivityQuerySecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.queryDriveActivityResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activity

* `driveactivityActivityQuery` - Query past activity in Google Drive.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
