# virtualTariffsForProperty

### Available Operations

* [virtualTariffsForPropertyGet](#virtualtariffsforpropertyget) - Gets all Virtual Tariffs for a property (folder)

## virtualTariffsForPropertyGet

Gets all Virtual Tariffs for a property (folder)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualTariffsForPropertyGetRequest;
import org.openapis.openapi.models.operations.VirtualTariffsForPropertyGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualTariffsForPropertyGetRequest req = new VirtualTariffsForPropertyGetRequest("amet");            

            VirtualTariffsForPropertyGetResponse res = sdk.virtualTariffsForProperty.virtualTariffsForPropertyGet(req);

            if (res.virtualTariffsOfFolders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
