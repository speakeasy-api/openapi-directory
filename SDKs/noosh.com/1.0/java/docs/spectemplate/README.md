# specTemplate

### Available Operations

* [getSpecTemplate](#getspectemplate) - Get a specific Spec Template
* [getSpecTemplateList](#getspectemplatelist) - List Spec Templates of Workgroup Level 

## getSpecTemplate

Get a specific Spec Template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecTemplateRequest;
import org.openapis.openapi.models.operations.GetSpecTemplateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecTemplateRequest req = new GetSpecTemplateRequest("incidunt", "qui");            

            GetSpecTemplateResponse res = sdk.specTemplate.getSpecTemplate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpecTemplateList

List Spec Templates of Workgroup Level 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecTemplateListRequest;
import org.openapis.openapi.models.operations.GetSpecTemplateListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecTemplateListRequest req = new GetSpecTemplateListRequest("cupiditate");            

            GetSpecTemplateListResponse res = sdk.specTemplate.getSpecTemplateList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
