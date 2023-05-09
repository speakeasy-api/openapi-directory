# byUsage

### Available Operations

* [getOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range

## getOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsByUsageRequest req = new GetOrganizationSummaryTopClientsByUsageRequest("ipsa") {{
                t0 = "quos";
                t1 = "quo";
                timespan = 3538.06;
            }};            

            GetOrganizationSummaryTopClientsByUsageResponse res = sdk.byUsage.getOrganizationSummaryTopClientsByUsage(req);

            if (res.getOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsManufacturersByUsageRequest req = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest("doloribus") {{
                t0 = "id";
                t1 = "eum";
                timespan = 7646.33;
            }};            

            GetOrganizationSummaryTopClientsManufacturersByUsageResponse res = sdk.byUsage.getOrganizationSummaryTopClientsManufacturersByUsage(req);

            if (res.getOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopDevicesByUsage

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesByUsageRequest req = new GetOrganizationSummaryTopDevicesByUsageRequest("atque") {{
                t0 = "similique";
                t1 = "quia";
                timespan = 991.6;
            }};            

            GetOrganizationSummaryTopDevicesByUsageResponse res = sdk.byUsage.getOrganizationSummaryTopDevicesByUsage(req);

            if (res.getOrganizationSummaryTopDevicesByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopDevicesModelsByUsage

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesModelsByUsageRequest req = new GetOrganizationSummaryTopDevicesModelsByUsageRequest("accusamus") {{
                t0 = "illo";
                t1 = "excepturi";
                timespan = 6893.01;
            }};            

            GetOrganizationSummaryTopDevicesModelsByUsageResponse res = sdk.byUsage.getOrganizationSummaryTopDevicesModelsByUsage(req);

            if (res.getOrganizationSummaryTopDevicesModelsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSsidsByUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSsidsByUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSsidsByUsageRequest req = new GetOrganizationSummaryTopSsidsByUsageRequest("a") {{
                t0 = "repudiandae";
                t1 = "minus";
                timespan = 6423.41;
            }};            

            GetOrganizationSummaryTopSsidsByUsageResponse res = sdk.byUsage.getOrganizationSummaryTopSsidsByUsage(req);

            if (res.getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
