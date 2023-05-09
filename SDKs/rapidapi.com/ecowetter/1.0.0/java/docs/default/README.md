# default_

### Available Operations

* [getPublicHistory](#getpublichistory) - Wetter 2021 für Berlin, Reichstag

## getPublicHistory

Abfrage der Wettervorhersage für einen Ort, der entweder durch Angabe eines Suchbegriffs mit dem Parameter `q` oder durch Geo-Koordinaten in den Parametern `lat` und `lon` spezifiziert wird.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicHistoryRequest;
import org.openapis.openapi.models.operations.GetPublicHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicHistoryRequest req = new GetPublicHistoryRequest() {{
                from = "quibusdam";
                q = "unde";
                to = "nulla";
            }};            

            GetPublicHistoryResponse res = sdk.default_.getPublicHistory(req);

            if (res.getPublicHistory200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
