<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CalcSigmaRsvExchangePathParams;
import org.openapis.openapi.models.operations.CalcSigmaRsvExchangeRequest;
import org.openapis.openapi.models.operations.CalcSigmaRsvExchangeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CalcSigmaRsvExchangeRequest req = new CalcSigmaRsvExchangeRequest() {{
                pathParams = new CalcSigmaRsvExchangePathParams() {{
                    amount = 548814;
                }};
            }};            

            CalcSigmaRsvExchangeResponse res = sdk.ageUsd.calcSigmaRsvExchange(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->