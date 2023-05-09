# virtualMeterCalculateFormula

### Available Operations

* [virtualMeterCalculateFormulaGet](#virtualmetercalculateformulaget) - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

## virtualMeterCalculateFormulaGet

Calculates a virtual meter from a formula.
            
            A meter is coded as ID("METERID")
            Ariphmetical operators:
             ()  parentheses;  
             +   plus (a + b); 
             -  minus (a - b); 
             *  multiplycation symbol (a * b); 
             /  divide symbol (a / b); 
            Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VirtualMeterCalculateFormulaGetRequest;
import org.openapis.openapi.models.operations.VirtualMeterCalculateFormulaGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VirtualMeterCalculateFormulaGetRequest req = new VirtualMeterCalculateFormulaGetRequest("quidem");            

            VirtualMeterCalculateFormulaGetResponse res = sdk.virtualMeterCalculateFormula.virtualMeterCalculateFormulaGet(req);

            if (res.device != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
