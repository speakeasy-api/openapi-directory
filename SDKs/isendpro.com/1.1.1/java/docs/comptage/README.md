# comptage

### Available Operations

* [comptage](#comptage) - Compter le nombre de caractère 

## comptage

Compte le nombre de SMS necessaire à un envoi

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComptageResponse;
import org.openapis.openapi.models.shared.ComptageRequest;
import org.openapis.openapi.models.shared.ComptageRequestComptageEnum;
import org.openapis.openapi.models.shared.ComptageRequestGmtZoneEnum;
import org.openapis.openapi.models.shared.ComptageRequestNumAzurEnum;
import org.openapis.openapi.models.shared.ComptageRequestSmslongEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ComptageRequest req = new ComptageRequest(ComptageRequestComptageEnum.ONE, "deserunt", "suscipit", "iure") {{
                dateEnvoi = "magnam";
                emetteur = "debitis";
                gmtZone = ComptageRequestGmtZoneEnum.AMERICA_ANCHORAGE;
                nostop = "delectus";
                numAzur = ComptageRequestNumAzurEnum.ONE;
                smslong = ComptageRequestSmslongEnum.NINE_HUNDRED_AND_NINETY_NINE;
                tracker = "tempora";
                ucs2 = "suscipit";
            }};            

            ComptageResponse res = sdk.comptage.comptage(req);

            if (res.comptageReponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
