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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\VirtualMeterCalculateFormulaGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new VirtualMeterCalculateFormulaGetRequest();
    $request->formula = 'soluta';

    $response = $sdk->virtualMeterCalculateFormula->virtualMeterCalculateFormulaGet($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
