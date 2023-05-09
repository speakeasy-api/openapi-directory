# delListeNoire

### Available Operations

* [delListeNoire](#dellistenoire) - Ajoute un numero en liste noire

## delListeNoire

Supprime un numero en liste noire

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DelListeNoireDelListeNoireEnum;
import org.openapis.openapi.models.operations.DelListeNoireRequest;
import org.openapis.openapi.models.operations.DelListeNoireResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DelListeNoireRequest req = new DelListeNoireRequest(DelListeNoireDelListeNoireEnum.ONE, "placeat", "voluptatum");            

            DelListeNoireResponse res = sdk.delListeNoire.delListeNoire(req);

            if (res.listenoireReponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
