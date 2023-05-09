# summary

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
                .setSecurity(new Security("natus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopAppliancesByUtilizationRequest req = new GetOrganizationSummaryTopAppliancesByUtilizationRequest("dicta") {{
                t0 = "qui";
                t1 = "nisi";
                timespan = 8352;
            }};            

            GetOrganizationSummaryTopAppliancesByUtilizationResponse res = sdk.summary.getOrganizationSummaryTopAppliancesByUtilization(req);

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
                .setSecurity(new Security("dolore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsByUsageRequest req = new GetOrganizationSummaryTopClientsByUsageRequest("fugiat") {{
                t0 = "voluptate";
                t1 = "modi";
                timespan = 525.5;
            }};            

            GetOrganizationSummaryTopClientsByUsageResponse res = sdk.summary.getOrganizationSummaryTopClientsByUsage(req);

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
                .setSecurity(new Security("atque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopClientsManufacturersByUsageRequest req = new GetOrganizationSummaryTopClientsManufacturersByUsageRequest("nihil") {{
                t0 = "quam";
                t1 = "fuga";
                timespan = 3070.47;
            }};            

            GetOrganizationSummaryTopClientsManufacturersByUsageResponse res = sdk.summary.getOrganizationSummaryTopClientsManufacturersByUsage(req);

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
                .setSecurity(new Security("molestiae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesByUsageRequest req = new GetOrganizationSummaryTopDevicesByUsageRequest("sunt") {{
                t0 = "ullam";
                t1 = "provident";
                timespan = 5757.2;
            }};            

            GetOrganizationSummaryTopDevicesByUsageResponse res = sdk.summary.getOrganizationSummaryTopDevicesByUsage(req);

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
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopDevicesModelsByUsageRequest req = new GetOrganizationSummaryTopDevicesModelsByUsageRequest("aut") {{
                t0 = "dignissimos";
                t1 = "laboriosam";
                timespan = 4835.68;
            }};            

            GetOrganizationSummaryTopDevicesModelsByUsageResponse res = sdk.summary.getOrganizationSummaryTopDevicesModelsByUsage(req);

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
                .setSecurity(new Security("repudiandae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSsidsByUsageRequest req = new GetOrganizationSummaryTopSsidsByUsageRequest("modi") {{
                t0 = "aperiam";
                t1 = "adipisci";
                timespan = 5159.94;
            }};            

            GetOrganizationSummaryTopSsidsByUsageResponse res = sdk.summary.getOrganizationSummaryTopSsidsByUsage(req);

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
                .setSecurity(new Security("similique") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationSummaryTopSwitchesByEnergyUsageRequest req = new GetOrganizationSummaryTopSwitchesByEnergyUsageRequest("praesentium") {{
                t0 = "commodi";
                t1 = "quia";
                timespan = 9198.35;
            }};            

            GetOrganizationSummaryTopSwitchesByEnergyUsageResponse res = sdk.summary.getOrganizationSummaryTopSwitchesByEnergyUsage(req);

            if (res.getOrganizationSummaryTopSwitchesByEnergyUsage200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
