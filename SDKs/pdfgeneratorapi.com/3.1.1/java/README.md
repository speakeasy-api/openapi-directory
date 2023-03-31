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
import org.openapis.openapi.models.operations.MergeTemplateQueryParams;
import org.openapis.openapi.models.operations.MergeTemplateRequest;
import org.openapis.openapi.models.operations.MergeTemplateResponse;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.OutputEnum;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    jsonWebTokenAuth = new SchemeJSONWebTokenAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            MergeTemplateRequest req = new MergeTemplateRequest() {{
                queryParams = new MergeTemplateQueryParams() {{
                    format = "pdf";
                    name = "My document";
                    output = "base64";
                    templateId = 19375;
                }};
                request = new Data() {{
                    id = 12312;
                    name = "Sample Data";
                }};
            }};            

            MergeTemplateResponse res = sdk.documents.mergeTemplate(req);

            if (res.mergeTemplate200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### documents

* `mergeTemplate` - Generate document
* `mergeTemplates` - Generate document (multiple templates)

### templates

* `copyTemplate` - Copy template
* `createTemplate` - Create template
* `deleteTemplate` - Delete template
* `getEditorUrl` - Open editor
* `getTemplate` - Get template
* `getTemplates` - Get templates
* `updateTemplate` - Update template

### workspaces

* `deleteWorkspace` - Delete workspace
* `getWorkspace` - Get workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
