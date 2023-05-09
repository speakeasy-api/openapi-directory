# credit

### Available Operations

* [getCredit](#getcredit) - Interrogation credit

## getCredit

Retourne le credit existant associe au compte.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreditCreditEnum;
import org.openapis.openapi.models.operations.GetCreditRequest;
import org.openapis.openapi.models.operations.GetCreditResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCreditRequest req = new GetCreditRequest(GetCreditCreditEnum.ONE, "minus");            

            GetCreditResponse res = sdk.credit.getCredit(req);

            if (res.creditResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
