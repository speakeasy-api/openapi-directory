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
import org.openapis.openapi.models.operations.CreateExportCustomJobCreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobRequest;
import org.openapis.openapi.models.operations.CreateExportCustomJobResponse;
import org.openapis.openapi.models.operations.CreateExportCustomJobSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateExportCustomJobRequest req = new CreateExportCustomJobRequest("corrupti") {{
                requestBody = new CreateExportCustomJobCreateExportCustomJobRequest("provident", "distinctio", "quibusdam") {{
                    email = "Ryan.Little62@yahoo.com";
                    webhookMethod = "deserunt";
                    webhookUrl = "suscipit";
                }};;
            }};            

            CreateExportCustomJobResponse res = sdk.createExportCustomJob(req, new CreateExportCustomJobSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkexportsV1ExportExportCustomJob != null) {
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

### [SDK](docs/sdk/README.md)

* [createExportCustomJob](docs/sdk/README.md#createexportcustomjob)
* [deleteJob](docs/sdk/README.md#deletejob)
* [fetchDay](docs/sdk/README.md#fetchday) - Fetch a specific Day.
* [fetchExport](docs/sdk/README.md#fetchexport) - Fetch a specific Export.
* [fetchExportConfiguration](docs/sdk/README.md#fetchexportconfiguration) - Fetch a specific Export Configuration.
* [fetchJob](docs/sdk/README.md#fetchjob)
* [listDay](docs/sdk/README.md#listday) - Retrieve a list of all Days for a resource.
* [listExportCustomJob](docs/sdk/README.md#listexportcustomjob)
* [updateExportConfiguration](docs/sdk/README.md#updateexportconfiguration) - Update a specific Export Configuration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
