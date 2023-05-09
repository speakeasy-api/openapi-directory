# campagne

### Available Operations

* [getCampagne](#getcampagne) - Retourne les SMS envoyés sur une période donnée

## getCampagne

Retourne les SMS envoyés sur une période donnée en fonction d'une date de début et d'une date de fin. 

Les dates sont au format YYYY-MM-DD hh:mm. 

Le fichier rapport de campagne est sous la forme d'un fichier zip + contenant un fichier csv contenant le détail des envois.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampagneRapportCampagneEnum;
import org.openapis.openapi.models.operations.GetCampagneRequest;
import org.openapis.openapi.models.operations.GetCampagneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCampagneRequest req = new GetCampagneRequest("illum", "vel", "error", GetCampagneRapportCampagneEnum.ONE);            

            GetCampagneResponse res = sdk.campagne.getCampagne(req);

            if (res.getCampagne200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
