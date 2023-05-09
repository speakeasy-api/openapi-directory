# billing

### Available Operations

* [getNetworkWirelessBilling](#getnetworkwirelessbilling) - Return the billing settings of this network
* [updateNetworkWirelessBilling](#updatenetworkwirelessbilling) - Update the billing settings

## getNetworkWirelessBilling

Return the billing settings of this network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessBillingRequest;
import org.openapis.openapi.models.operations.GetNetworkWirelessBillingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessBillingRequest req = new GetNetworkWirelessBillingRequest("quod");            

            GetNetworkWirelessBillingResponse res = sdk.billing.getNetworkWirelessBilling(req);

            if (res.getNetworkWirelessBilling200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessBilling

Update the billing settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequest;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlans;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessBillingRequest req = new UpdateNetworkWirelessBillingRequest("architecto") {{
                requestBody = new UpdateNetworkWirelessBillingRequestBody() {{
                    currency = "voluptatem";
                    plans = new org.openapis.openapi.models.operations.UpdateNetworkWirelessBillingRequestBodyPlans[]{{
                        add(new UpdateNetworkWirelessBillingRequestBodyPlans(                new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                            limitDown = 548473L;
                                            limitUp = 933847L;
                                        }};, 9380.15, UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.THIRTY_DAYS) {{
                            bandwidthLimits = new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                limitDown = 406946L;
                                limitUp = 262231L;
                            }};
                            id = "00313b3e-5044-4f65-be72-dc4077d0cc3f";
                            price = 2527.17;
                            timeLimit = UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_DAY;
                        }}),
                        add(new UpdateNetworkWirelessBillingRequestBodyPlans(                new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                            limitDown = 381522L;
                                            limitUp = 814593L;
                                        }};, 8675.81, UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_WEEK) {{
                            bandwidthLimits = new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                limitDown = 119928L;
                                limitUp = 358861L;
                            }};
                            id = "ceb4d6e1-eae0-4f75-aedf-2acab58b991c";
                            price = 6004.71;
                            timeLimit = UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_DAY;
                        }}),
                        add(new UpdateNetworkWirelessBillingRequestBodyPlans(                new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                            limitDown = 981067L;
                                            limitUp = 460597L;
                                        }};, 1285.94, UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.THIRTY_DAYS) {{
                            bandwidthLimits = new UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits() {{
                                limitDown = 313099L;
                                limitUp = 545945L;
                            }};
                            id = "9461e742-1cbe-46d9-902f-0ea930b69f7a";
                            price = 7675.4;
                            timeLimit = UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum.ONE_DAY;
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkWirelessBillingResponse res = sdk.billing.updateNetworkWirelessBilling(req);

            if (res.updateNetworkWirelessBilling200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
