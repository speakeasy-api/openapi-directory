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
import org.openapis.openapi.models.operations.PreviewsReadRequest;
import org.openapis.openapi.models.operations.PreviewsReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            PreviewsReadRequest req = new PreviewsReadRequest("provident");            

            PreviewsReadResponse res = sdk.previews.previewsRead(req);

            if (res.previewResponse != null) {
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


### [previews](docs/previews/README.md)

* [previewsRead](docs/previews/README.md#previewsread) - Get preview image of uploaded file

### [processes](docs/processes/README.md)

* [processesList](docs/processes/README.md#processeslist) - Get process list.

### [projects](docs/projects/README.md)

* [projectsCreate](docs/projects/README.md#projectscreate) - Create a new project.
* [projectsList](docs/projects/README.md#projectslist) - Get user project list.
* [projectsRead](docs/projects/README.md#projectsread) - Get project details.

### [reports](docs/reports/README.md)

* [reportsCreate](docs/reports/README.md#reportscreate) - Create a new report.
* [reportsList](docs/reports/README.md#reportslist) - Get user report list.
* [reportsRead](docs/reports/README.md#reportsread) - Get report details.

### [results](docs/results/README.md)

* [resultsRead](docs/results/README.md#resultsread) - Get the result from image processing

### [uploads](docs/uploads/README.md)

* [uploadsCreate](docs/uploads/README.md#uploadscreate) - Upload a new image
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
