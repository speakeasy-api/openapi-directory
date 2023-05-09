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
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBody;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyImage;
import org.openapis.openapi.models.operations.AddImageWatermarkV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddImageWatermarkV1RequestBody req = new AddImageWatermarkV1RequestBody(                new AddImageWatermarkV1RequestBodyFile("provident".getBytes(), "distinctio");,                 new AddImageWatermarkV1RequestBodyImage("quibusdam".getBytes(), "unde");) {{
                margin = 1;
                transparency = 50;
            }};            

            AddImageWatermarkV1Response res = sdk.addImageWatermarkV1(req);

            if (res.addImageWatermarkV1200ApplicationPdfBinaryString != null) {
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

* [addImageWatermarkV1](docs/sdk/README.md#addimagewatermarkv1) - Add an image watermark to a PDF
* [addPasswordV1](docs/sdk/README.md#addpasswordv1) - Add a password to a PDF
* [addRestrictionsV1](docs/sdk/README.md#addrestrictionsv1) - Add restrictions to a PDF
* [addTextWatermarkV1](docs/sdk/README.md#addtextwatermarkv1) - Add a text watermark to a PDF
* [extractPagesV1](docs/sdk/README.md#extractpagesv1) - Extract pages from a PDF
* [mergeDocumentsV1](docs/sdk/README.md#mergedocumentsv1) - Merge PDF documents
* [removePagesV1](docs/sdk/README.md#removepagesv1) - Remove pages from a PDF
* [removePasswordV1](docs/sdk/README.md#removepasswordv1) - Remove the password from a PDF
* [removeRestrictionsV1](docs/sdk/README.md#removerestrictionsv1) - Remove the restrictions from a PDF
* [removeSignaturesV1](docs/sdk/README.md#removesignaturesv1) - Remove the signatures from a PDF
* [reversePagesV1](docs/sdk/README.md#reversepagesv1) - Reverse the pages of a PDF
* [rotatePagesV1](docs/sdk/README.md#rotatepagesv1) - Rotate pages in a PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
