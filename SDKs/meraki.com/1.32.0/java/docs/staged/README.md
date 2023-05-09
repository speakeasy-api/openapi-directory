# staged

### Available Operations

* [createNetworkFirmwareUpgradesStagedEvent](#createnetworkfirmwareupgradesstagedevent) - Create a Staged Upgrade Event for a network
* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [deferNetworkFirmwareUpgradesStagedEvents](#defernetworkfirmwareupgradesstagedevents) - Postpone by 1 week all pending staged upgrade stages for a network
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [getNetworkFirmwareUpgradesStagedEvents](#getnetworkfirmwareupgradesstagedevents) - Get the Staged Upgrade Event from a network
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getNetworkFirmwareUpgradesStagedStages](#getnetworkfirmwareupgradesstagedstages) - Order of Staged Upgrade Groups in a network
* [rollbacksNetworkFirmwareUpgradesStagedEvents](#rollbacksnetworkfirmwareupgradesstagedevents) - Rollback a Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedEvents](#updatenetworkfirmwareupgradesstagedevents) - Update the Staged Upgrade Event for a network
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateNetworkFirmwareUpgradesStagedStages](#updatenetworkfirmwareupgradesstagedstages) - Assign Staged Upgrade Group order in the sequence.

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
                .setSecurity(new Security("aliquid") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedEventRequest req = new CreateNetworkFirmwareUpgradesStagedEventRequest(                new CreateNetworkFirmwareUpgradesStagedEventRequestBody(                new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages[]{{
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("id") {{
                                                        id = "6eb14326-7423-4428-bc44-05d8eee91b2b";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("dolore") {{
                                                        scheduledFor = "nesciunt";
                                                    }};
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("inventore") {{
                                                        id = "370fc0dc-5b55-43f3-bd38-e31cbe94dc5e";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("numquam") {{
                                                        scheduledFor = "possimus";
                                                    }};
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("rerum") {{
                                                        id = "1f41ea15-e38a-4e62-8e60-a14bdfb38cd2";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("dolorem") {{
                                                        scheduledFor = "corporis";
                                                    }};
                                                }}),
                                                add(new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStages() {{
                                                    group = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesGroup("illo") {{
                                                        id = "46d7c169-1bf6-4e65-9a42-18e56a057044";
                                                    }};
                                                    milestones = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyStagesMilestones("harum") {{
                                                        scheduledFor = "beatae";
                                                    }};
                                                }}),
                                            }}) {{
                                products = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProducts() {{
                                    switch_ = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitch() {{
                                        nextUpgrade = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgrade() {{
                                            toVersion = new CreateNetworkFirmwareUpgradesStagedEventRequestBodyProductsSwitchNextUpgradeToVersion("voluptatibus");;
                                        }};;
                                    }};;
                                }};;
                            }};, "est");            

            CreateNetworkFirmwareUpgradesStagedEventResponse res = sdk.staged.createNetworkFirmwareUpgradesStagedEvent(req);

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
                .setSecurity(new Security("quod") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedGroupRequest req = new CreateNetworkFirmwareUpgradesStagedGroupRequest(                new CreateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "eveniet") {{
                                assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("itaque") {{
                                            name = "Jackie Hamill";
                                            serial = "eius";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("velit") {{
                                            name = "Ms. Alyssa D'Amore";
                                            serial = "libero";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("ratione") {{
                                            name = "Amos Skiles";
                                            serial = "explicabo";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("tempore") {{
                                            name = "Abel Medhurst";
                                            serial = "maxime";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("nemo") {{
                                            id = "e401a75d-1aaf-4dfd-a566-b027d3f6a014";
                                            name = "Dr. Francis Hilpert";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("rem") {{
                                            id = "ba7efbc2-daa5-484f-a101-b5a2a971e16c";
                                            name = "Alma Kuhic";
                                        }}),
                                    }};
                                }};;
                                description = "animi";
                            }};, "rem");            

            CreateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.staged.createNetworkFirmwareUpgradesStagedGroup(req);

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
                .setSecurity(new Security("blanditiis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeferNetworkFirmwareUpgradesStagedEventsRequest req = new DeferNetworkFirmwareUpgradesStagedEventsRequest("maiores");            

            DeferNetworkFirmwareUpgradesStagedEventsResponse res = sdk.staged.deferNetworkFirmwareUpgradesStagedEvents(req);

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
                .setSecurity(new Security("nulla") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFirmwareUpgradesStagedGroupRequest req = new DeleteNetworkFirmwareUpgradesStagedGroupRequest("perferendis", "illum");            

            DeleteNetworkFirmwareUpgradesStagedGroupResponse res = sdk.staged.deleteNetworkFirmwareUpgradesStagedGroup(req);

            if (res.statusCode == 200) {
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
                .setSecurity(new Security("laborum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedEventsRequest req = new GetNetworkFirmwareUpgradesStagedEventsRequest("facere");            

            GetNetworkFirmwareUpgradesStagedEventsResponse res = sdk.staged.getNetworkFirmwareUpgradesStagedEvents(req);

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
                .setSecurity(new Security("modi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupRequest req = new GetNetworkFirmwareUpgradesStagedGroupRequest("in", "nostrum");            

            GetNetworkFirmwareUpgradesStagedGroupResponse res = sdk.staged.getNetworkFirmwareUpgradesStagedGroup(req);

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
                .setSecurity(new Security("culpa") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupsRequest req = new GetNetworkFirmwareUpgradesStagedGroupsRequest("maiores");            

            GetNetworkFirmwareUpgradesStagedGroupsResponse res = sdk.staged.getNetworkFirmwareUpgradesStagedGroups(req);

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
                .setSecurity(new Security("placeat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedStagesRequest req = new GetNetworkFirmwareUpgradesStagedStagesRequest("quaerat");            

            GetNetworkFirmwareUpgradesStagedStagesResponse res = sdk.staged.getNetworkFirmwareUpgradesStagedStages(req);

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
                .setSecurity(new Security("ab") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RollbacksNetworkFirmwareUpgradesStagedEventsRequest req = new RollbacksNetworkFirmwareUpgradesStagedEventsRequest(                new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("error") {{
                                                        id = "1f790e7f-31b0-48ea-8674-f4c6659b73d5";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("odit") {{
                                                        scheduledFor = "perferendis";
                                                    }};
                                                }}),
                                                add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("amet") {{
                                                        id = "99f4c2f2-9f0b-41b4-9136-27b337456f2f";
                                                    }};
                                                    milestones = new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("doloremque") {{
                                                        scheduledFor = "facere";
                                                    }};
                                                }}),
                                            }}) {{
                                reasons = new org.openapis.openapi.models.operations.RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons[]{{
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.UNIFYING_NETWORKS_VERSIONS, "temporibus") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.BROKE_OLD_FEATURES;
                                        comment = "accusamus";
                                    }}),
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.PERFORMANCE, "doloremque") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.OTHER;
                                        comment = "eveniet";
                                    }}),
                                    add(new RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasons(RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.OTHER, "ratione") {{
                                        category = RollbacksNetworkFirmwareUpgradesStagedEventsRequestBodyReasonsCategoryEnum.TESTING;
                                        comment = "nam";
                                    }}),
                                }};
                            }};, "vero");            

            RollbacksNetworkFirmwareUpgradesStagedEventsResponse res = sdk.staged.rollbacksNetworkFirmwareUpgradesStagedEvents(req);

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
                .setSecurity(new Security("fugiat") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedEventsRequest req = new UpdateNetworkFirmwareUpgradesStagedEventsRequest(                new UpdateNetworkFirmwareUpgradesStagedEventsRequestBody(                new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages[]{{
                                                add(new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStages() {{
                                                    group = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesGroup("voluptas") {{
                                                        id = "a8432591-02c1-455c-a18f-6bec9da75549";
                                                    }};
                                                    milestones = new UpdateNetworkFirmwareUpgradesStagedEventsRequestBodyStagesMilestones("suscipit") {{
                                                        scheduledFor = "explicabo";
                                                    }};
                                                }}),
                                            }});, "pariatur");            

            UpdateNetworkFirmwareUpgradesStagedEventsResponse res = sdk.staged.updateNetworkFirmwareUpgradesStagedEvents(req);

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
                .setSecurity(new Security("quae") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedGroupRequest req = new UpdateNetworkFirmwareUpgradesStagedGroupRequest(                new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "eaque") {{
                                assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("asperiores") {{
                                            name = "Kristina Mohr";
                                            serial = "minus";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("dicta") {{
                                            name = "Gustavo Osinski";
                                            serial = "officiis";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("aperiam") {{
                                            name = "Tara Lind";
                                            serial = "cumque";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("in") {{
                                            id = "2a06860b-73ae-4f80-b78d-5f91919f6f23";
                                            name = "Gregory Lockman";
                                        }}),
                                    }};
                                }};;
                                description = "eveniet";
                            }};, "tempore", "nisi");            

            UpdateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.staged.updateNetworkFirmwareUpgradesStagedGroup(req);

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
                .setSecurity(new Security("rerum") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedStagesRequest req = new UpdateNetworkFirmwareUpgradesStagedStagesRequest("labore") {{
                requestBody = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBody() {{
                    json = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson[]{{
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("odit") {{
                                id = "4fa0b9f2-8c9d-46a7-962a-75ed34eef606";
                            }};
                        }}),
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("odio") {{
                                id = "a4c30b49-e227-4e7e-8abc-22226ba4c6f4";
                            }};
                        }}),
                        add(new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJson() {{
                            group = new UpdateNetworkFirmwareUpgradesStagedStagesRequestBodyJsonGroup("quas") {{
                                id = "af09aad5-f5b9-43dc-ac98-544e08f28b8d";
                            }};
                        }}),
                    }};
                }};;
            }};            

            UpdateNetworkFirmwareUpgradesStagedStagesResponse res = sdk.staged.updateNetworkFirmwareUpgradesStagedStages(req);

            if (res.updateNetworkFirmwareUpgradesStagedStages200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
