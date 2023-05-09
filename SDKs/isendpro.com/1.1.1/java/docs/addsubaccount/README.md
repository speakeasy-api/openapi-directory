# addSubaccount

### Available Operations

* [subaccountAdd](#subaccountadd) - Ajoute un sous compte

## subaccountAdd

Ajoute un sous compte

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubaccountAddResponse;
import org.openapis.openapi.models.shared.SubaccountAddRequest;
import org.openapis.openapi.models.shared.SubaccountAddRequestSubAccountEditEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubaccountAddRequest req = new SubaccountAddRequest("unde", SubaccountAddRequestSubAccountEditEnum.ADD_ACCOUNT, "nulla", "corrupti");            

            SubaccountAddResponse res = sdk.addSubaccount.subaccountAdd(req);

            if (res.subaccountAddResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
