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

import org.openapis.openapi.models.operations.CreateExportCustomJobSecurity;
import org.openapis.openapi.models.operations.CreateExportCustomJobPathParams;
import org.openapis.openapi.models.operations.CreateExportCustomJobCreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest() {{
                security = new CreateExportCustomJobSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateExportCustomJobPathParams() {{
                    resourceType = "corrupti";
                }};
                request = new CreateExportCustomJobCreateExportCustomJobRequest() {{
                    email = "Micheal_Sporer@yahoo.com";
                    endDay = "corrupti";
                    friendlyName = "illum";
                    startDay = "vel";
                    webhookMethod = "error";
                    webhookUrl = "deserunt";
                }};
            }};            

            CreateExportCustomJobResponse res = sdk.createExportCustomJob(req);

            if (res.bulkexportsV1ExportExportCustomJob.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createExportCustomJob`
* `deleteJob`
* `fetchDay` - Fetch a specific Day.
* `fetchExport` - Fetch a specific Export.
* `fetchExportConfiguration` - Fetch a specific Export Configuration.
* `fetchJob`
* `listDay` - Retrieve a list of all Days for a resource.
* `listExportCustomJob`
* `updateExportConfiguration` - Update a specific Export Configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
