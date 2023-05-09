# top

### Available Operations

* [getOrganizationSummaryTopAppliancesByUtilization](#getorganizationsummarytopappliancesbyutilization) - Return the top 10 appliances sorted by utilization over given time range.
* [getOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [getOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [getOrganizationSummaryTopDevicesByUsage](#getorganizationsummarytopdevicesbyusage) - Return metrics for organization's top 10 devices sorted by data usage over given time range
* [getOrganizationSummaryTopDevicesModelsByUsage](#getorganizationsummarytopdevicesmodelsbyusage) - Return metrics for organization's top 10 device models sorted by data usage over given time range
* [getOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [getOrganizationSummaryTopSwitchesByEnergyUsage](#getorganizationsummarytopswitchesbyenergyusage) - Return metrics for organization's top 10 switches by energy usage over given time range

## getOrganizationSummaryTopAppliancesByUtilization

Return the top 10 appliances sorted by utilization over given time range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopAppliancesByUtilizationRequest req = new GetOrganizationSummaryTopAppliancesByUtilizationRequest("debitis") {{
                t0 = "quae";
                t1 = "labore";
                timespan = 126.55;
            }};            

            GetOrganizationSummaryTopAppliancesByUtilizationResponse res = sdk.top.getOrganizationSummaryTopAppliancesByUtilization(req);

            if (res.getOrganizationSummaryTopAppliancesByUtilization200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsByUsageRequest req = new GetOrganizationSummaryTopClientsByUsageRequest("at") {{
                t0 = "delectus";
                t1 = "voluptate";
                timespan = 4318.83;
            }};            

            GetOrganizationSummaryTopClientsByUsageResponse res = sdk.top.getOrganizationSummaryTopClientsByUsage(req);

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
                .setSecurity(new Security("ad") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsManufacturersByUsageRequest req = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest("quasi") {{
                t0 = "ducimus";
                t1 = "blanditiis";
                timespan = 7827.93;
            }};            

            GetOrganizationSummaryTopClientsManufacturersByUsageResponse res = sdk.top.getOrganizationSummaryTopClientsManufacturersByUsage(req);

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
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesByUsageRequest req = new GetOrganizationSummaryTopDevicesByUsageRequest("maiores") {{
                t0 = "iure";
                t1 = "dolor";
                timespan = 950.6;
            }};            

            GetOrganizationSummaryTopDevicesByUsageResponse res = sdk.top.getOrganizationSummaryTopDevicesByUsage(req);

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
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesModelsByUsageRequest req = new GetOrganizationSummaryTopDevicesModelsByUsageRequest("porro") {{
                t0 = "laborum";
                t1 = "eligendi";
                timespan = 1979.13;
            }};            

            GetOrganizationSummaryTopDevicesModelsByUsageResponse res = sdk.top.getOrganizationSummaryTopDevicesModelsByUsage(req);

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
                .setSecurity(new Security("voluptas") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSsidsByUsageRequest req = new GetOrganizationSummaryTopSsidsByUsageRequest("laboriosam") {{
                t0 = "aperiam";
                t1 = "ducimus";
                timespan = 4707.4;
            }};            

            GetOrganizationSummaryTopSsidsByUsageResponse res = sdk.top.getOrganizationSummaryTopSsidsByUsage(req);

            if (res.getOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationSummaryTopSwitchesByEnergyUsage

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest;
import org.openapis.openapi.models.operations.GetOrganizationSummaryTopSwitchesByEnergyUsageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSwitchesByEnergyUsageRequest req = new GetOrganizationSummaryTopSwitchesByEnergyUsageRequest("consequatur") {{
                t0 = "iste";
                t1 = "ipsum";
                timespan = 4131.41;
            }};            

            GetOrganizationSummaryTopSwitchesByEnergyUsageResponse res = sdk.top.getOrganizationSummaryTopSwitchesByEnergyUsage(req);

            if (res.getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
