# events

### Available Operations

* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [getNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [getNetworkApplianceSecurityEvents](#getnetworkappliancesecurityevents) - List the security events for a network
* [getNetworkEvents](#getnetworkevents) - List the events for the network
* [getNetworkEventsEventTypes](#getnetworkeventseventtypes) - List the event type to human-readable description
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getOrganizationApplianceSecurityEvents](#getorganizationappliancesecurityevents) - List the security events for an organization
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network

## createNetworkFirmwareUpgradesStagedEvent

Create a Staged Upgrade Event for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequest;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedEventRequest req = new CreateNetworkFirmwareUpgradesStagedEventRequest(                new CreateNetworkFirmwareUpgradesStagedEventRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages[]{{
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("officia") {{
                                                        id = "315325b5-e022-4947-a5d8-8138dace6dd2";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("error") {{
                                                        scheduledFor = "consequatur";
                                                    }};
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("deserunt") {{
                                                        id = "91b6d176-0043-4c79-9a2a-18db129dc524";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("libero") {{
                                                        scheduledFor = "nam";
                                                    }};
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("excepturi") {{
                                                        id = "7b10caf2-44de-4103-9083-0ac4d070c4e3";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("voluptates") {{
                                                        scheduledFor = "laboriosam";
                                                    }};
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("nemo") {{
                                                        id = "562c5ccb-1637-4331-8dad-58b890542e5a";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("deserunt") {{
                                                        scheduledFor = "minima";
                                                    }};
                                                }}),
                                            }}) {{
                                products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts() {{
                                    switch_ = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch() {{
                                        nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade() {{
                                            toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion("veritatis");;
                                        }};;
                                    }};;
                                }};;
                            }};, "quae");            

            CreateNetworkFirmwareUpgradesStagedEventResponse res = sdk.events.createNetworkFirmwareUpgradesStagedEvent(req);

            if (res.createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deferNetworkFirmwareUpgradesStagedEvents

Postpone by 1 week all pending staged upgrade stages for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeferNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.DeferNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeferNetworkFirmwareUpgradesStagedEventsRequest req = new DeferNetworkFirmwareUpgradesStagedEventsRequest("pariatur");            

            DeferNetworkFirmwareUpgradesStagedEventsResponse res = sdk.events.deferNetworkFirmwareUpgradesStagedEvents(req);

            if (res.deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceClientSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceClientSecurityEventsRequest req = new GetNetworkApplianceClientSecurityEventsRequest("error", "maxime") {{
                endingBefore = "eaque";
                perPage = 947679L;
                sortOrder = GetNetworkApplianceClientSecurityEventsSortOrderEnum.ASCENDING;
                startingAfter = "blanditiis";
                t0 = "sed";
                t1 = "maiores";
                timespan = 5818.41;
            }};            

            GetNetworkApplianceClientSecurityEventsResponse res = sdk.events.getNetworkApplianceClientSecurityEvents(req);

            if (res.getNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkApplianceSecurityEvents

List the security events for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetNetworkApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkApplianceSecurityEventsRequest req = new GetNetworkApplianceSecurityEventsRequest("excepturi") {{
                endingBefore = "laborum";
                perPage = 364207L;
                sortOrder = GetNetworkApplianceSecurityEventsSortOrderEnum.ASCENDING;
                startingAfter = "optio";
                t0 = "ratione";
                t1 = "quae";
                timespan = 2506.38;
            }};            

            GetNetworkApplianceSecurityEventsResponse res = sdk.events.getNetworkApplianceSecurityEvents(req);

            if (res.getNetworkApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkEvents

List the events for the network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkEventsProductTypeEnum;
import org.openapis.openapi.models.operations.GetNetworkEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsRequest req = new GetNetworkEventsRequest("dolorum") {{
                clientIp = "officiis";
                clientMac = "sunt";
                clientName = "qui";
                deviceMac = "consequuntur";
                deviceName = "hic";
                deviceSerial = "ipsa";
                endingBefore = "tempore";
                excludedEventTypes = new String[]{{
                    add("debitis"),
                    add("quo"),
                    add("minus"),
                    add("quaerat"),
                }};
                includedEventTypes = new String[]{{
                    add("cupiditate"),
                }};
                perPage = 246893L;
                productType = GetNetworkEventsProductTypeEnum.APPLIANCE;
                smDeviceMac = "illum";
                smDeviceName = "voluptate";
                startingAfter = "aperiam";
            }};            

            GetNetworkEventsResponse res = sdk.events.getNetworkEvents(req);

            if (res.getNetworkEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkEventsEventTypes

List the event type to human-readable description

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkEventsEventTypesRequest;
import org.openapis.openapi.models.operations.GetNetworkEventsEventTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkEventsEventTypesRequest req = new GetNetworkEventsEventTypesRequest("expedita");            

            GetNetworkEventsEventTypesResponse res = sdk.events.getNetworkEventsEventTypes(req);

            if (res.getNetworkEventsEventTypes200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedEvents

Get the Staged Upgrade Event from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedEventsRequest req = new GetNetworkFirmwareUpgradesStagedEventsRequest("fuga");            

            GetNetworkFirmwareUpgradesStagedEventsResponse res = sdk.events.getNetworkFirmwareUpgradesStagedEvents(req);

            if (res.getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationApplianceSecurityEvents

List the security events for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsRequest;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsResponse;
import org.openapis.openapi.models.operations.GetOrganizationApplianceSecurityEventsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationApplianceSecurityEventsRequest req = new GetOrganizationApplianceSecurityEventsRequest("reprehenderit") {{
                endingBefore = "eaque";
                perPage = 574826L;
                sortOrder = GetOrganizationApplianceSecurityEventsSortOrderEnum.ASCENDING;
                startingAfter = "eius";
                t0 = "nulla";
                t1 = "provident";
                timespan = 9255.77;
            }};            

            GetOrganizationApplianceSecurityEventsResponse res = sdk.events.getOrganizationApplianceSecurityEvents(req);

            if (res.getOrganizationApplianceSecurityEvents200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rollbacksNetworkFirmwareUpgradesStagedEvents

Rollback a Staged Upgrade Event for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;
import org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RollbacksNetworkFirmwareUpgradesStagedEventsRequest req = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest(                new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("unde") {{
                                                        id = "6a28f6f7-1b06-452f-a653-6fb30a414aa2";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("nulla") {{
                                                        scheduledFor = "incidunt";
                                                    }};
                                                }}),
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("nesciunt") {{
                                                        id = "64c08a2e-c1a8-4071-91a3-54ba1a6d7ddc";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("sint") {{
                                                        scheduledFor = "provident";
                                                    }};
                                                }}),
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("facere") {{
                                                        id = "17b844c8-502a-499e-a2f4-946ca2d7266c";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("autem") {{
                                                        scheduledFor = "iure";
                                                    }};
                                                }}),
                                            }}) {{
                                reasons = new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons[]{{
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.OTHER, "odio") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.STABILITY;
                                        comment = "inventore";
                                    }}),
                                }};
                            }};, "odit");            

            RollbacksNetworkFirmwareUpgradesStagedEventsResponse res = sdk.events.rollbacksNetworkFirmwareUpgradesStagedEvents(req);

            if (res.rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgradesStagedEvents

Update the Staged Upgrade Event for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedEventsRequest req = new UpdateNetworkFirmwareUpgradesStagedEventsRequest(                new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("veritatis") {{
                                                        id = "a03f83a1-e1e7-4ab3-a07c-05e13db88f59";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("perspiciatis") {{
                                                        scheduledFor = "a";
                                                    }};
                                                }}),
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("sed") {{
                                                        id = "8329f919-22f7-4cad-87b6-545000a5b36a";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("sunt") {{
                                                        scheduledFor = "magni";
                                                    }};
                                                }}),
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("saepe") {{
                                                        id = "e3ff770a-2b42-4e5e-9f64-a2a875c6a710";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("numquam") {{
                                                        scheduledFor = "minima";
                                                    }};
                                                }}),
                                            }});, "soluta");            

            UpdateNetworkFirmwareUpgradesStagedEventsResponse res = sdk.events.updateNetworkFirmwareUpgradesStagedEvents(req);

            if (res.updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
