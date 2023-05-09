# VirtualMeterCalculateFormula

### Available Operations

* [VirtualMeterCalculateFormulaGet](#virtualmetercalculateformulaget) - Calculates a virtual meter from a formula. 
            A meter is coded as ID("METERID")

## VirtualMeterCalculateFormulaGet

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VirtualMeterCalculateFormula.VirtualMeterCalculateFormulaGet(ctx, operations.VirtualMeterCalculateFormulaGetRequest{
        Formula: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```
