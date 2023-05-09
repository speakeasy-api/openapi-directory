# configTemplates

### Available Operations

* [deleteOrganizationConfigTemplate](#deleteorganizationconfigtemplate) - Remove a configuration template
* [getOrganizationConfigTemplates](#getorganizationconfigtemplates) - List the configuration templates for this organization

## deleteOrganizationConfigTemplate

Remove a configuration template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigTemplateRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationConfigTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationConfigTemplateRequest req = new DeleteOrganizationConfigTemplateRequest("exercitationem", "nulla");            

            DeleteOrganizationConfigTemplateResponse res = sdk.configTemplates.deleteOrganizationConfigTemplate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationConfigTemplates

List the configuration templates for this organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplatesRequest;
import org.openapis.openapi.models.operations.GetOrganizationConfigTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationConfigTemplatesRequest req = new GetOrganizationConfigTemplatesRequest("porro");            

            GetOrganizationConfigTemplatesResponse res = sdk.configTemplates.getOrganizationConfigTemplates(req);

            if (res.getOrganizationConfigTemplates200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
