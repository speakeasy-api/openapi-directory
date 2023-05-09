# templates

### Available Operations

* [getTemplateModel](#gettemplatemodel) - Get the object template
* [getTemplates](#gettemplates) - Get a list of all available data object tempaltes

## getTemplateModel

Returns a template instance of the specified data type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplateModelRequest;
import org.openapis.openapi.models.operations.GetTemplateModelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTemplateModelRequest req = new GetTemplateModelRequest("ipsum", "alias", "doloremque");            

            GetTemplateModelResponse res = sdk.templates.getTemplateModel(req);

            if (res.getTemplateModel200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTemplates

Returns a collection of links to all the available data object templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTemplatesRequest;
import org.openapis.openapi.models.operations.GetTemplatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTemplatesRequest req = new GetTemplatesRequest("tempora", "perspiciatis");            

            GetTemplatesResponse res = sdk.templates.getTemplates(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
