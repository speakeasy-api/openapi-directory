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
import org.openapis.openapi.models.operations.MergeTemplateRequest;
import org.openapis.openapi.models.operations.MergeTemplateResponse;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.FormatEnum;
import org.openapis.openapi.models.shared.OutputEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    jsonWebTokenAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            MergeTemplateRequest req = new MergeTemplateRequest(                new Data() {{
                                id = 12312L;
                                name = "Sample Data";
                            }};, 19375L) {{
                format = FormatEnum.PDF;
                name = "My document";
                output = OutputEnum.BASE64;
            }};            

            MergeTemplateResponse res = sdk.documents.mergeTemplate(req);

            if (res.mergeTemplate200ApplicationJSONObject != null) {
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


### [documents](docs/documents/README.md)

* [mergeTemplate](docs/documents/README.md#mergetemplate) - Generate document
* [mergeTemplates](docs/documents/README.md#mergetemplates) - Generate document (multiple templates)

### [templates](docs/templates/README.md)

* [copyTemplate](docs/templates/README.md#copytemplate) - Copy template
* [createTemplate](docs/templates/README.md#createtemplate) - Create template
* [deleteTemplate](docs/templates/README.md#deletetemplate) - Delete template
* [getEditorUrl](docs/templates/README.md#geteditorurl) - Open editor
* [getTemplate](docs/templates/README.md#gettemplate) - Get template
* [getTemplates](docs/templates/README.md#gettemplates) - Get templates
* [updateTemplate](docs/templates/README.md#updatetemplate) - Update template

### [workspaces](docs/workspaces/README.md)

* [deleteWorkspace](docs/workspaces/README.md#deleteworkspace) - Delete workspace
* [getWorkspace](docs/workspaces/README.md#getworkspace) - Get workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
