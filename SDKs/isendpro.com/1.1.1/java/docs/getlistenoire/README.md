# getListeNoire

### Available Operations

* [getListeNoire](#getlistenoire) - Retourne le liste noire

## getListeNoire

Retourne un fichier csv zippé contenant la liste noire

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListeNoireGetListeNoireEnum;
import org.openapis.openapi.models.operations.GetListeNoireRequest;
import org.openapis.openapi.models.operations.GetListeNoireResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListeNoireRequest req = new GetListeNoireRequest(GetListeNoireGetListeNoireEnum.ONE, "deserunt");            

            GetListeNoireResponse res = sdk.getListeNoire.getListeNoire(req);

            if (res.getListeNoire200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
