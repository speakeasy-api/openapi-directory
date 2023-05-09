# connectivityMonitoringDestinations

### Available Operations

* [getNetworkApplianceConnectivityMonitoringDestinations](#getnetworkapplianceconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MX network
* [getNetworkCellularGatewayConnectivityMonitoringDestinations](#getnetworkcellulargatewayconnectivitymonitoringdestinations) - Return the connectivity testing destinations for an MG network
* [updateNetworkApplianceConnectivityMonitoringDestinations](#updatenetworkapplianceconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MX network
* [updateNetworkCellularGatewayConnectivityMonitoringDestinations](#updatenetworkcellulargatewayconnectivitymonitoringdestinations) - Update the connectivity testing destinations for an MG network

## getNetworkApplianceConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceConnectivityMonitoringDestinationsRequest req = new GetNetworkApplianceConnectivityMonitoringDestinationsRequest("vel");            

            GetNetworkApplianceConnectivityMonitoringDestinationsResponse res = sdk.connectivityMonitoringDestinations.getNetworkApplianceConnectivityMonitoringDestinations(req);

            if (res.getNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkCellularGatewayConnectivityMonitoringDestinations

Return the connectivity testing destinations for an MG network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest req = new GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest("dolor");            

            GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = sdk.connectivityMonitoringDestinations.getNetworkCellularGatewayConnectivityMonitoringDestinations(req);

            if (res.getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkApplianceConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MX network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest req = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest("optio") {{
                requestBody = new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody() {{
                    destinations = new org.openapis.openapi.models.operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations[]{{
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("deserunt") {{
                            default_ = false;
                            description = "soluta";
                            ip = "at";
                        }}),
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("vel") {{
                            default_ = false;
                            description = "rerum";
                            ip = "voluptate";
                        }}),
                        add(new UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations("magnam") {{
                            default_ = false;
                            description = "quam";
                            ip = "est";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse res = sdk.connectivityMonitoringDestinations.updateNetworkApplianceConnectivityMonitoringDestinations(req);

            if (res.updateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkCellularGatewayConnectivityMonitoringDestinations

Update the connectivity testing destinations for an MG network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations;
import org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest req = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest("modi") {{
                requestBody = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody() {{
                    destinations = new org.openapis.openapi.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations[]{{
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("nulla") {{
                            default_ = false;
                            description = "illum";
                            ip = "perferendis";
                        }}),
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("animi") {{
                            default_ = false;
                            description = "culpa";
                            ip = "aut";
                        }}),
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("veniam") {{
                            default_ = false;
                            description = "distinctio";
                            ip = "itaque";
                        }}),
                        add(new UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations("expedita") {{
                            default_ = false;
                            description = "totam";
                            ip = "repudiandae";
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = sdk.connectivityMonitoringDestinations.updateNetworkCellularGatewayConnectivityMonitoringDestinations(req);

            if (res.updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
