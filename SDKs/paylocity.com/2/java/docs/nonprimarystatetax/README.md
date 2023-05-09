# nonPrimaryStateTax

### Available Operations

* [addOrUpdateNonPrimaryStateTax](#addorupdatenonprimarystatetax) - Add/update non-primary state tax

## addOrUpdateNonPrimaryStateTax

Sends new or updated employee non-primary state tax information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateNonPrimaryStateTaxRequest;
import org.openapis.openapi.models.operations.AddOrUpdateNonPrimaryStateTaxResponse;
import org.openapis.openapi.models.operations.AddOrUpdateNonPrimaryStateTaxSecurity;
import org.openapis.openapi.models.shared.NonPrimaryStateTax;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateNonPrimaryStateTaxRequest req = new AddOrUpdateNonPrimaryStateTaxRequest("ex", "quo",                 new NonPrimaryStateTax() {{
                                amount = 4053.73;
                                deductionsAmount = 2811.53;
                                dependentsAmount = 3210.43;
                                exemptions = 7139.27;
                                exemptions2 = 299.5;
                                filingStatus = "molestias";
                                higherRate = false;
                                otherIncomeAmount = 7372.54;
                                percentage = 3996.6;
                                reciprocityCode = "beatae";
                                specialCheckCalc = "voluptatum";
                                taxCalculationCode = "omnis";
                                taxCode = "veritatis";
                                w4FormYear = 703218L;
                            }};);            

            AddOrUpdateNonPrimaryStateTaxResponse res = sdk.nonPrimaryStateTax.addOrUpdateNonPrimaryStateTax(req, new AddOrUpdateNonPrimaryStateTaxSecurity("est") {{
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
