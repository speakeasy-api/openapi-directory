# primaryStateTax

### Available Operations

* [addOrUpdatePrimaryStateTax](#addorupdateprimarystatetax) - Add/update primary state tax

## addOrUpdatePrimaryStateTax

Sends new or updated employee primary state tax information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdatePrimaryStateTaxRequest;
import org.openapis.openapi.models.operations.AddOrUpdatePrimaryStateTaxResponse;
import org.openapis.openapi.models.operations.AddOrUpdatePrimaryStateTaxSecurity;
import org.openapis.openapi.models.shared.StateTax;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdatePrimaryStateTaxRequest req = new AddOrUpdatePrimaryStateTaxRequest("inventore", "deleniti",                 new StateTax() {{
                                amount = 853.11;
                                deductionsAmount = 2745.75;
                                dependentsAmount = 2213.96;
                                exemptions = 86.89;
                                exemptions2 = 1000.14;
                                filingStatus = "sit";
                                higherRate = false;
                                otherIncomeAmount = 2650.39;
                                percentage = 1442.86;
                                specialCheckCalc = "ab";
                                taxCalculationCode = "laudantium";
                                taxCode = "quae";
                                w4FormYear = 222658L;
                            }};);            

            AddOrUpdatePrimaryStateTaxResponse res = sdk.primaryStateTax.addOrUpdatePrimaryStateTax(req, new AddOrUpdatePrimaryStateTaxSecurity("fugiat") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
