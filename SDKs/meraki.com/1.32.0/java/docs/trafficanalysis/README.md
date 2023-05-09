# trafficAnalysis

### Available Operations

* [getNetworkTrafficAnalysis](#getnetworktrafficanalysis) - Return the traffic analysis settings for a network
* [updateNetworkTrafficAnalysis](#updatenetworktrafficanalysis) - Update the traffic analysis settings for a network

## getNetworkTrafficAnalysis

Return the traffic analysis settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkTrafficAnalysisRequest;
import org.openapis.openapi.models.operations.GetNetworkTrafficAnalysisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkTrafficAnalysisRequest req = new GetNetworkTrafficAnalysisRequest("blanditiis");            

            GetNetworkTrafficAnalysisResponse res = sdk.trafficAnalysis.getNetworkTrafficAnalysis(req);

            if (res.getNetworkTrafficAnalysis200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkTrafficAnalysis

Update the traffic analysis settings for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequest;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkTrafficAnalysisRequest req = new UpdateNetworkTrafficAnalysisRequest("nulla") {{
                requestBody = new UpdateNetworkTrafficAnalysisRequestBody() {{
                    customPieChartItems = new org.openapis.openapi.models.operations.UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[]{{
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("repudiandae", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.HOST, "fugiat") {{
                            name = "Morris Bernhard";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.PORT;
                            value = "error";
                        }}),
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("accusamus", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.PORT, "repellat") {{
                            name = "Betsy McDermott IV";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.IP_RANGE;
                            value = "sequi";
                        }}),
                        add(new UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems("corporis", UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.HOST, "qui") {{
                            name = "Jack Grimes PhD";
                            type = UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum.PORT;
                            value = "at";
                        }}),
                    }};
                    mode = UpdateNetworkTrafficAnalysisRequestBodyModeEnum.DISABLED;
                }};;
            }};            

            UpdateNetworkTrafficAnalysisResponse res = sdk.trafficAnalysis.updateNetworkTrafficAnalysis(req);

            if (res.updateNetworkTrafficAnalysis200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
