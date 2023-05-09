# stages

### Available Operations

* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

## getNetworkFirmwareUpgradesStagedStages

Order of Staged Upgrade Groups in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedStagesRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedStagesRequest req = new GetNetworkFirmwareUpgradesStagedStagesRequest("dolores");            

            GetNetworkFirmwareUpgradesStagedStagesResponse res = sdk.stages.getNetworkFirmwareUpgradesStagedStages(req);

            if (res.getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgradesStagedStages

Assign Staged Upgrade Group order in the sequence.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedStagesRequest req = new UpdateNetworkFirmwareUpgradesStagedStagesRequest("dolores") {{
                requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody() {{
                    json = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson[]{{
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("maxime") {{
                                id = "097647f1-1315-40be-b224-14af40c8805b";
                            }};
                        }}),
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("adipisci") {{
                                id = "715e2b78-00e0-4b8c-b9fe-ef2b4c6fa0fd";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkFirmwareUpgradesStagedStagesResponse res = sdk.stages.updateNetworkFirmwareUpgradesStagedStages(req);

            if (res.updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
