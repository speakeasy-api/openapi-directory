# setListeNoire

### Available Operations

* [setListeNoire](#setlistenoire) - Ajoute un numero en liste noire

## setListeNoire

Ajoute un numero en liste noire. Une fois ajouté, les requêtes d'envoi de SMS marketing vers ce numéro seront refusées.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetListeNoireRequest;
import org.openapis.openapi.models.operations.SetListeNoireResponse;
import org.openapis.openapi.models.operations.SetListeNoireSetlisteNoireEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetListeNoireRequest req = new SetListeNoireRequest("reiciendis", "voluptatibus", SetListeNoireSetlisteNoireEnum.ONE);            

            SetListeNoireResponse res = sdk.setListeNoire.setListeNoire(req);

            if (res.listenoireReponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
