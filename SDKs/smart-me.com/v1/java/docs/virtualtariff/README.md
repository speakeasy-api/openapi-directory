# virtualTariff

### Available Operations

* [virtualTariffGet](#virtualtariffget) - Gets all Virtual Tariffs of a user
* [getApiVirtualTariffId](#getapivirtualtariffid) - Gets all virtual tariffs of a folder

## virtualTariffGet

Gets all Virtual Tariffs of a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualTariffGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualTariffGetResponse res = sdk.virtualTariff.virtualTariffGet();

            if (res.virtualTariffsOfFolders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiVirtualTariffId

Gets all virtual tariffs of a folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiVirtualTariffIdRequest;
import org.openapis.openapi.models.operations.GetApiVirtualTariffIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiVirtualTariffIdRequest req = new GetApiVirtualTariffIdRequest("atque");            

            GetApiVirtualTariffIdResponse res = sdk.virtualTariff.getApiVirtualTariffId(req);

            if (res.virtualTariffsOfFolder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
