# rollbacks

### Available Operations

* [createNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network

## createNetworkFirmwareUpgradesRollback

Rollback a Firmware Upgrade For A Network

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequest;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesRollbackRequest req = new CreateNetworkFirmwareUpgradesRollbackRequest(                new CreateNetworkFirmwareUpgradesRollbackRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[]{{
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.PERFORMANCE, "id") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.PERFORMANCE;
                                                    comment = "velit";
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.PERFORMANCE, "delectus") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.STABILITY;
                                                    comment = "culpa";
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.TESTING, "id") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.TESTING;
                                                    comment = "distinctio";
                                                }}),
                                            }}) {{
                                product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum.SWITCH_;
                                time = OffsetDateTime.parse("2022-09-21T08:43:13.632Z");
                                toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion() {{
                                    id = "c7111d2a-9d31-4069-946a-c76d80b9671a";
                                }};;
                            }};, "magnam");            

            CreateNetworkFirmwareUpgradesRollbackResponse res = sdk.rollbacks.createNetworkFirmwareUpgradesRollback(req);

            if (res.createNetworkFirmwareUpgradesRollback200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
