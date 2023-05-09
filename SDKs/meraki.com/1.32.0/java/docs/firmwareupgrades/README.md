# firmwareUpgrades

### Available Operations

* [createNetworkFirmwareUpgradesRollback](#createnetworkfirmwareupgradesrollback) - Rollback a Firmware Upgrade For A Network
* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [getNetworkFirmwareUpgrades](#getnetworkfirmwareupgrades) - Get firmware upgrade information for a network
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgrades](#updatenetworkfirmwareupgrades) - Update firmware upgrade information for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

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
                .setSecurity(new Security("nesciunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesRollbackRequest req = new CreateNetworkFirmwareUpgradesRollbackRequest(                new CreateNetworkFirmwareUpgradesRollbackRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons[]{{
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.TESTING, "laborum") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.OTHER;
                                                    comment = "nostrum";
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons(CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.OTHER, "quod") {{
                                                    category = CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum.STABILITY;
                                                    comment = "consequuntur";
                                                }}),
                                            }}) {{
                                product = CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum.CAMERA;
                                time = OffsetDateTime.parse("2021-11-01T21:51:45.057Z");
                                toVersion = new CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion() {{
                                    id = "19ebd1cf-7795-438c-bbfc-df4ece96ac4f";
                                }};;
                            }};, "expedita");            

            CreateNetworkFirmwareUpgradesRollbackResponse res = sdk.firmwareUpgrades.createNetworkFirmwareUpgradesRollback(req);

            if (res.createNetworkFirmwareUpgradesRollback200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedEventRequest req = new CreateNetworkFirmwareUpgradesStagedEventRequest(                new CreateNetworkFirmwareUpgradesStagedEventRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages[]{{
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("necessitatibus") {{
                                                        id = "c3304961-7cb7-41dd-8250-b60c751d2aeb";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("tempore") {{
                                                        scheduledFor = "totam";
                                                    }};
                                                }}),
                                            }}) {{
                                products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts() {{
                                    switch_ = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch() {{
                                        nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade() {{
                                            toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion("provident");;
                                        }};;
                                    }};;
                                }};;
                            }};, "rem");            

            CreateNetworkFirmwareUpgradesStagedEventResponse res = sdk.firmwareUpgrades.createNetworkFirmwareUpgradesStagedEvent(req);

            if (res.createNetworkFirmwareUpgradesStagedEvent200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkFirmwareUpgradesStagedGroup

Create a Staged Upgrade Group for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;
import org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedGroupRequest req = new CreateNetworkFirmwareUpgradesStagedGroupRequest(                new CreateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "molestias") {{
                                assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("officiis") {{
                                            name = "Gina Haag MD";
                                            serial = "veniam";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("cupiditate") {{
                                            name = "Ed Little";
                                            serial = "quam";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("architecto") {{
                                            name = "Camille Beer";
                                            serial = "incidunt";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("ratione") {{
                                            name = "Anita Kassulke";
                                            serial = "occaecati";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("est") {{
                                            id = "3b100201-47cd-41b8-b160-b3e3e98960a0";
                                            name = "Angelo Wiza";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("beatae") {{
                                            id = "8678ba50-0a8f-44cb-b2ed-6cf6225d5561";
                                            name = "Mrs. Irma Lowe";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("corrupti") {{
                                            id = "2f7b59b7-1546-442b-9e37-c84c3d3ca491";
                                            name = "Stanley Krajcik";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("sunt") {{
                                            id = "88d156f0-1ae3-46bb-8d00-28e3e1dc9059";
                                            name = "Fernando Vandervort DVM";
                                        }}),
                                    }};
                                }};;
                                description = "adipisci";
                            }};, "atque");            

            CreateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.firmwareUpgrades.createNetworkFirmwareUpgradesStagedGroup(req);

            if (res.createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("nemo") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeferNetworkFirmwareUpgradesStagedEventsRequest req = new DeferNetworkFirmwareUpgradesStagedEventsRequest("harum");            

            DeferNetworkFirmwareUpgradesStagedEventsResponse res = sdk.firmwareUpgrades.deferNetworkFirmwareUpgradesStagedEvents(req);

            if (res.deferNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkFirmwareUpgradesStagedGroup

Delete a Staged Upgrade Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.DeleteNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFirmwareUpgradesStagedGroupRequest req = new DeleteNetworkFirmwareUpgradesStagedGroupRequest("quam", "quisquam");            

            DeleteNetworkFirmwareUpgradesStagedGroupResponse res = sdk.firmwareUpgrades.deleteNetworkFirmwareUpgradesStagedGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgrades

Get firmware upgrade information for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesRequest req = new GetNetworkFirmwareUpgradesRequest("quaerat");            

            GetNetworkFirmwareUpgradesResponse res = sdk.firmwareUpgrades.getNetworkFirmwareUpgrades(req);

            if (res.getNetworkFirmwareUpgrades200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("autem") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedEventsRequest req = new GetNetworkFirmwareUpgradesStagedEventsRequest("reprehenderit");            

            GetNetworkFirmwareUpgradesStagedEventsResponse res = sdk.firmwareUpgrades.getNetworkFirmwareUpgradesStagedEvents(req);

            if (res.getNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedGroup

Get a Staged Upgrade Group from a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupRequest req = new GetNetworkFirmwareUpgradesStagedGroupRequest("culpa", "maxime");            

            GetNetworkFirmwareUpgradesStagedGroupResponse res = sdk.firmwareUpgrades.getNetworkFirmwareUpgradesStagedGroup(req);

            if (res.getNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkFirmwareUpgradesStagedGroups

List of Staged Upgrade Groups in a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupsRequest;
import org.openapis.openapi.models.operations.GetNetworkFirmwareUpgradesStagedGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupsRequest req = new GetNetworkFirmwareUpgradesStagedGroupsRequest("atque");            

            GetNetworkFirmwareUpgradesStagedGroupsResponse res = sdk.firmwareUpgrades.getNetworkFirmwareUpgradesStagedGroups(req);

            if (res.getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                .setSecurity(new Security("reiciendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedStagesRequest req = new GetNetworkFirmwareUpgradesStagedStagesRequest("ea");            

            GetNetworkFirmwareUpgradesStagedStagesResponse res = sdk.firmwareUpgrades.getNetworkFirmwareUpgradesStagedStages(req);

            if (res.getNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("repellendus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RollbacksNetworkFirmwareUpgradesStagedEventsRequest req = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest(                new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("optio") {{
                                                        id = "68f92a6b-b086-4152-a25b-05728e7a201e";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("nobis") {{
                                                        scheduledFor = "reiciendis";
                                                    }};
                                                }}),
                                            }}) {{
                                reasons = new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons[]{{
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.TESTING, "maiores") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.OTHER;
                                        comment = "doloribus";
                                    }}),
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.UNIFYING_NETWORKS_VERSIONS, "repudiandae") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.UNIFYING_NETWORKS_VERSIONS;
                                        comment = "minima";
                                    }}),
                                }};
                            }};, "dolore");            

            RollbacksNetworkFirmwareUpgradesStagedEventsResponse res = sdk.firmwareUpgrades.rollbacksNetworkFirmwareUpgradesStagedEvents(req);

            if (res.rollbacksNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgrades

Update firmware upgrade information for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProducts;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesRequest req = new UpdateNetworkFirmwareUpgradesRequest("aspernatur") {{
                requestBody = new UpdateNetworkFirmwareUpgradesRequestBody() {{
                    products = new UpdateNetworkFirmwareUpgradesRequestBodyProducts() {{
                        appliance = new UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade() {{
                                time = "expedita";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgradeToVersion() {{
                                    id = "0a857bce-c81f-4f34-b519-003b234e83c6";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        camera = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCamera() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade() {{
                                time = "nobis";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion() {{
                                    id = "36a56b3a-d5bf-4794-8d46-d7039d489af6";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        cellularGateway = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade() {{
                                time = "voluptatem";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion() {{
                                    id = "05460b05-f01e-47bd-8643-968dd0d773a0";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        sensor = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensor() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade() {{
                                time = "quam";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion() {{
                                    id = "c3076c86-2de9-4692-b9ea-86c03ac3f23d";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        switch_ = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitch() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgrade() {{
                                time = "maxime";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsSwitchNextUpgradeToVersion() {{
                                    id = "8373c176-9864-4e59-aefe-bc18aaa3debd";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                        wireless = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWireless() {{
                            nextUpgrade = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade() {{
                                time = "sit";
                                toVersion = new UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion() {{
                                    id = "c90035e4-c1d0-4624-9e35-34f41e42dda7";
                                }};;
                            }};;
                            participateInNextBetaRelease = false;
                        }};;
                    }};;
                    timezone = "ab";
                    upgradeWindow = new UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindow() {{
                        dayOfWeek = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowDayOfWeekEnum.MONDAY;
                        hourOfDay = UpdateNetworkFirmwareUpgradesRequestBodyUpgradeWindowHourOfDayEnum.EIGHT00;
                    }};;
                }};;
            }};            

            UpdateNetworkFirmwareUpgradesResponse res = sdk.firmwareUpgrades.updateNetworkFirmwareUpgrades(req);

            if (res.updateNetworkFirmwareUpgrades200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("cupiditate") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedEventsRequest req = new UpdateNetworkFirmwareUpgradesStagedEventsRequest(                new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("minus") {{
                                                        id = "46899994-dc95-43b4-a66c-0e500fc742c9";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("inventore") {{
                                                        scheduledFor = "esse";
                                                    }};
                                                }}),
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("dolor") {{
                                                        id = "0891ef7b-31a8-44fe-97bc-e0fba2734d31";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("in") {{
                                                        scheduledFor = "dolore";
                                                    }};
                                                }}),
                                            }});, "ipsam");            

            UpdateNetworkFirmwareUpgradesStagedEventsResponse res = sdk.firmwareUpgrades.updateNetworkFirmwareUpgradesStagedEvents(req);

            if (res.updateNetworkFirmwareUpgradesStagedEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkFirmwareUpgradesStagedGroup

Update a Staged Upgrade Group for a network

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequest;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks;
import org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedGroupRequest req = new UpdateNetworkFirmwareUpgradesStagedGroupRequest(                new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "eveniet") {{
                                assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("in") {{
                                            name = "Mrs. Rosie Morissette II";
                                            serial = "culpa";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("omnis") {{
                                            name = "Naomi Von V";
                                            serial = "ipsa";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("exercitationem") {{
                                            name = "Angel Kozey";
                                            serial = "veniam";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("perferendis") {{
                                            name = "Mr. Sherri Rodriguez";
                                            serial = "veniam";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("hic") {{
                                            id = "73a8e26f-6d65-4fc9-9436-2533a8f8c1e6";
                                            name = "Katrina Volkman PhD";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("amet") {{
                                            id = "f2353545-dbfd-469d-854e-e4956d861c1f";
                                            name = "Jason Erdman";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("molestias") {{
                                            id = "81758654-6524-4756-bf82-499f41bb9dd5";
                                            name = "Mr. Marshall Parisian";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("odio") {{
                                            id = "3aa80e71-86e9-4e80-8966-689a74cc4e0e";
                                            name = "Colin Stracke";
                                        }}),
                                    }};
                                }};;
                                description = "doloremque";
                            }};, "soluta", "ex");            

            UpdateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.firmwareUpgrades.updateNetworkFirmwareUpgradesStagedGroup(req);

            if (res.updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
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
                .setSecurity(new Security("impedit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedStagesRequest req = new UpdateNetworkFirmwareUpgradesStagedStagesRequest("rem") {{
                requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody() {{
                    json = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson[]{{
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("est") {{
                                id = "30772d93-721e-44eb-8dd4-c7f22ce20aaa";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkFirmwareUpgradesStagedStagesResponse res = sdk.firmwareUpgrades.updateNetworkFirmwareUpgradesStagedStages(req);

            if (res.updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
