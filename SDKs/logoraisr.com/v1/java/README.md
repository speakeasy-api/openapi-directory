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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.PreviewsReadRequest;
import org.openapis.openapi.models.operations.PreviewsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            PreviewsReadRequest req = new PreviewsReadRequest() {{
                fileId = "corrupti";
            }}            

            PreviewsReadResponse res = sdk.previews.previewsRead(req);

            if (res.previewResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### previews

* `previewsRead` - Get preview image of uploaded file

### processes

* `processesList` - Get process list.

### projects

* `projectsCreate` - Create a new project.
* `projectsList` - Get user project list.
* `projectsRead` - Get project details.

### reports

* `reportsCreate` - Create a new report.
* `reportsList` - Get user report list.
* `reportsRead` - Get report details.

### results

* `resultsRead` - Get the result from image processing

### uploads

* `uploadsCreate` - Upload a new image
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
