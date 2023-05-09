# overview

### Available Operations

* [getDeviceCameraAnalyticsOverview](#getdevicecameraanalyticsoverview) - Returns an overview of aggregate analytics data for a timespan
* [getNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [getNetworkSensorAlertsCurrentOverviewByMetric](#getnetworksensoralertscurrentoverviewbymetric) - Return an overview of currently alerting sensors by metric
* [getNetworkSensorAlertsOverviewByMetric](#getnetworksensoralertsoverviewbymetric) - Return an overview of alert occurrences over a timespan, by metric
* [getOrganizationAdaptivePolicyOverview](#getorganizationadaptivepolicyoverview) - Returns adaptive policy aggregate statistics for an organization
* [getOrganizationApiRequestsOverview](#getorganizationapirequestsoverview) - Return an aggregated overview of API requests data
* [getOrganizationApiRequestsOverviewResponseCodesByInterval](#getorganizationapirequestsoverviewresponsecodesbyinterval) - Tracks organizations' API requests by response code across a given time period
* [getOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [getOrganizationDevicesStatusesOverview](#getorganizationdevicesstatusesoverview) - Return an overview of current device statuses
* [getOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization

## getDeviceCameraAnalyticsOverview

Returns an overview of aggregate analytics data for a timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewObjectTypeEnum;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewRequest;
import org.openapis.openapi.models.operations.GetDeviceCameraAnalyticsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceCameraAnalyticsOverviewRequest req = new GetDeviceCameraAnalyticsOverviewRequest("nesciunt") {{
                objectType = GetDeviceCameraAnalyticsOverviewObjectTypeEnum.VEHICLE;
                t0 = "debitis";
                t1 = "rem";
                timespan = 5405.07;
            }};            

            GetDeviceCameraAnalyticsOverviewResponse res = sdk.overview.getDeviceCameraAnalyticsOverview(req);

            if (res.getDeviceCameraAnalyticsOverview200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkClientsOverview

Return overview statistics for network clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkClientsOverviewRequest;
import org.openapis.openapi.models.operations.GetNetworkClientsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkClientsOverviewRequest req = new GetNetworkClientsOverviewRequest("architecto") {{
                resolution = 873477L;
                t0 = "quod";
                t1 = "nihil";
                timespan = 6103.26;
            }};            

            GetNetworkClientsOverviewResponse res = sdk.overview.getNetworkClientsOverview(req);

            if (res.getNetworkClientsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsCurrentOverviewByMetric

Return an overview of currently alerting sensors by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsCurrentOverviewByMetricRequest req = new GetNetworkSensorAlertsCurrentOverviewByMetricRequest("quas");            

            GetNetworkSensorAlertsCurrentOverviewByMetricResponse res = sdk.overview.getNetworkSensorAlertsCurrentOverviewByMetric(req);

            if (res.getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSensorAlertsOverviewByMetric

Return an overview of alert occurrences over a timespan, by metric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricRequest;
import org.openapis.openapi.models.operations.GetNetworkSensorAlertsOverviewByMetricResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSensorAlertsOverviewByMetricRequest req = new GetNetworkSensorAlertsOverviewByMetricRequest("temporibus") {{
                interval = 338235L;
                t0 = "quae";
                t1 = "neque";
                timespan = 7977.84;
            }};            

            GetNetworkSensorAlertsOverviewByMetricResponse res = sdk.overview.getNetworkSensorAlertsOverviewByMetric(req);

            if (res.getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyOverview

Returns adaptive policy aggregate statistics for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyOverviewRequest req = new GetOrganizationAdaptivePolicyOverviewRequest("odit");            

            GetOrganizationAdaptivePolicyOverviewResponse res = sdk.overview.getOrganizationAdaptivePolicyOverview(req);

            if (res.getOrganizationAdaptivePolicyOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApiRequestsOverview

Return an aggregated overview of API requests data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewRequest req = new GetOrganizationApiRequestsOverviewRequest("eos") {{
                t0 = "ducimus";
                t1 = "deleniti";
                timespan = 5235.27;
            }};            

            GetOrganizationApiRequestsOverviewResponse res = sdk.overview.getOrganizationApiRequestsOverview(req);

            if (res.getOrganizationApiRequestsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApiRequestsOverviewResponseCodesByInterval

Tracks organizations' API requests by response code across a given time period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse;
import org.openapis.openapi.models.operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest req = new GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest("quo") {{
                adminIds = new String[]{{
                    add("ad"),
                    add("quisquam"),
                }};
                interval = 48957L;
                operationIds = new String[]{{
                    add("officia"),
                    add("aliquid"),
                }};
                sourceIps = new String[]{{
                    add("architecto"),
                    add("cupiditate"),
                    add("quibusdam"),
                    add("adipisci"),
                }};
                t0 = "corrupti";
                t1 = "modi";
                timespan = 3634.84;
                userAgent = "corporis";
                version = GetOrganizationApiRequestsOverviewResponseCodesByIntervalVersionEnum.ZERO;
            }};            

            GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse res = sdk.overview.getOrganizationApiRequestsOverviewResponseCodesByInterval(req);

            if (res.getOrganizationApiRequestsOverviewResponseCodesByInterval200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationClientsOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationClientsOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationClientsOverviewRequest req = new GetOrganizationClientsOverviewRequest("laudantium") {{
                t0 = "assumenda";
                t1 = "eos";
                timespan = 834.51;
            }};            

            GetOrganizationClientsOverviewResponse res = sdk.overview.getOrganizationClientsOverview(req);

            if (res.getOrganizationClientsOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationDevicesStatusesOverview

Return an overview of current device statuses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationDevicesStatusesOverviewRequest req = new GetOrganizationDevicesStatusesOverviewRequest("fugit") {{
                networkIds = new String[]{{
                    add("harum"),
                    add("pariatur"),
                    add("laborum"),
                }};
                productTypes = new org.openapis.openapi.models.operations.GetOrganizationDevicesStatusesOverviewProductTypesEnum[]{{
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.WIRELESS),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.SWITCH_),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.SENSOR),
                    add(GetOrganizationDevicesStatusesOverviewProductTypesEnum.CELLULAR_GATEWAY),
                }};
            }};            

            GetOrganizationDevicesStatusesOverviewResponse res = sdk.overview.getOrganizationDevicesStatusesOverview(req);

            if (res.getOrganizationDevicesStatusesOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationLicensesOverview

Return an overview of the license state for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationLicensesOverviewRequest;
import org.openapis.openapi.models.operations.GetOrganizationLicensesOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationLicensesOverviewRequest req = new GetOrganizationLicensesOverviewRequest("numquam");            

            GetOrganizationLicensesOverviewResponse res = sdk.overview.getOrganizationLicensesOverview(req);

            if (res.getOrganizationLicensesOverview200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
