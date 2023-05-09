<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChartRequest;
import org.openapis.openapi.models.operations.GetChartResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChartRequest req = new GetChartRequest() {{
                backgroundColor = "corrupti";
                chart = "provident";
                format = "distinctio";
                height = 844266L;
                width = 602763L;
            }};            

            GetChartResponse res = sdk.getChart(req);

            if (res.getChart200ImageJpegBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->