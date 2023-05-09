# coverageParameters

### Available Operations

* [getCoverageParameters](#getcoverageparameters) - /coverage_parameters

## getCoverageParameters

### Get coverage parameters

Get a list of [coverage parameters](https://www.heraldapi.com/docs/risk-and-coverage-parameters).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCoverageParametersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetCoverageParametersResponse res = sdk.coverageParameters.getCoverageParameters();

            if (res.getCoverageParameters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
