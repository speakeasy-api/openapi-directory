# riskParameters

### Available Operations

* [getRiskParameters](#getriskparameters) - /risk_parameters

## getRiskParameters

### Get risk parameters

Get a list of [risk parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRiskParametersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetRiskParametersResponse res = sdk.riskParameters.getRiskParameters();

            if (res.getRiskParameters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
