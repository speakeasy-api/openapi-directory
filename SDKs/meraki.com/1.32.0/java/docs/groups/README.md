# groups

### Available Operations

* [createNetworkFirmwareUpgradesStagedGroup](#createnetworkfirmwareupgradesstagedgroup) - Create a Staged Upgrade Group for a network
* [createOrganizationAdaptivePolicyGroup](#createorganizationadaptivepolicygroup) - Creates a new adaptive policy group
* [createOrganizationPolicyObjectsGroup](#createorganizationpolicyobjectsgroup) - Creates a new Policy Object Group.
* [deleteNetworkFirmwareUpgradesStagedGroup](#deletenetworkfirmwareupgradesstagedgroup) - Delete a Staged Upgrade Group
* [deleteOrganizationAdaptivePolicyGroup](#deleteorganizationadaptivepolicygroup) - Deletes the specified adaptive policy group and any associated policies and references
* [deleteOrganizationPolicyObjectsGroup](#deleteorganizationpolicyobjectsgroup) - Deletes a Policy Object Group.
* [getNetworkFirmwareUpgradesStagedGroup](#getnetworkfirmwareupgradesstagedgroup) - Get a Staged Upgrade Group from a network
* [getNetworkFirmwareUpgradesStagedGroups](#getnetworkfirmwareupgradesstagedgroups) - List of Staged Upgrade Groups in a network
* [getOrganizationAdaptivePolicyGroup](#getorganizationadaptivepolicygroup) - Returns an adaptive policy group
* [getOrganizationAdaptivePolicyGroups](#getorganizationadaptivepolicygroups) - List adaptive policy groups in a organization
* [getOrganizationPolicyObjectsGroup](#getorganizationpolicyobjectsgroup) - Shows details of a Policy Object Group.
* [getOrganizationPolicyObjectsGroups](#getorganizationpolicyobjectsgroups) - Lists Policy Object Groups belonging to the organization.
* [updateNetworkFirmwareUpgradesStagedGroup](#updatenetworkfirmwareupgradesstagedgroup) - Update a Staged Upgrade Group for a network
* [updateOrganizationAdaptivePolicyGroup](#updateorganizationadaptivepolicygroup) - Updates an adaptive policy group
* [updateOrganizationPolicyObjectsGroup](#updateorganizationpolicyobjectsgroup) - Updates a Policy Object Group.

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
                .setSecurity(new Security("eligendi") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkFirmwareUpgradesStagedGroupRequest req = new CreateNetworkFirmwareUpgradesStagedGroupRequest(                new CreateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "quaerat") {{
                                assignedDevices = new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("facere") {{
                                            name = "Glenn Swaniawski";
                                            serial = "illum";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("repellendus") {{
                                            name = "David Smitham IV";
                                            serial = "tempora";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("nihil") {{
                                            name = "Cindy Botsford";
                                            serial = "quidem";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("dicta") {{
                                            id = "67dd78bf-be36-49f0-8781-f0b63f1a45bb";
                                            name = "Willard Hyatt";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("voluptate") {{
                                            id = "07dcb62f-690f-409f-b745-93dc3b805cd1";
                                            name = "Roman Bauch";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("necessitatibus") {{
                                            id = "90dd94e8-7eb2-45d1-8ce5-d774140cd070";
                                            name = "Mrs. Dana Tillman";
                                        }}),
                                        add(new CreateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("eligendi") {{
                                            id = "20749c3d-9f14-48c9-b08f-4107c2206849";
                                            name = "Sylvia Ullrich";
                                        }}),
                                    }};
                                }};;
                                description = "voluptates";
                            }};, "officiis");            

            CreateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.groups.createNetworkFirmwareUpgradesStagedGroup(req);

            if (res.createNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationAdaptivePolicyGroup

Creates a new adaptive policy group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;
import org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationAdaptivePolicyGroupRequest req = new CreateOrganizationAdaptivePolicyGroupRequest(                new CreateOrganizationAdaptivePolicyGroupRequestBody("totam", 288378L) {{
                                description = "deleniti";
                                policyObjects = new org.openapis.openapi.models.operations.CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects[]{{
                                    add(new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                                        id = "75890a9f-aef9-440e-8d66-8c08f1014414";
                                        name = "Fernando Herman";
                                    }}),
                                    add(new CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                                        id = "3caef294-0751-4462-82e3-39b43fa19375";
                                        name = "Peter Fadel";
                                    }}),
                                }};
                            }};, "labore");            

            CreateOrganizationAdaptivePolicyGroupResponse res = sdk.groups.createOrganizationAdaptivePolicyGroup(req);

            if (res.createOrganizationAdaptivePolicyGroup201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationPolicyObjectsGroup

Creates a new Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectsGroupRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationPolicyObjectsGroupRequest req = new CreateOrganizationPolicyObjectsGroupRequest(                new CreateOrganizationPolicyObjectsGroupRequestBody("ea") {{
                                category = "qui";
                                objectIds = new Long[]{{
                                    add(545432L),
                                    add(866138L),
                                    add(293106L),
                                    add(299323L),
                                }};
                            }};, "sunt");            

            CreateOrganizationPolicyObjectsGroupResponse res = sdk.groups.createOrganizationPolicyObjectsGroup(req);

            if (res.createOrganizationPolicyObjectsGroup201ApplicationJSONObject != null) {
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
                .setSecurity(new Security("perferendis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkFirmwareUpgradesStagedGroupRequest req = new DeleteNetworkFirmwareUpgradesStagedGroupRequest("illum", "illo");            

            DeleteNetworkFirmwareUpgradesStagedGroupResponse res = sdk.groups.deleteNetworkFirmwareUpgradesStagedGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationAdaptivePolicyGroup

Deletes the specified adaptive policy group and any associated policies and references

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationAdaptivePolicyGroupRequest req = new DeleteOrganizationAdaptivePolicyGroupRequest("similique", "occaecati");            

            DeleteOrganizationAdaptivePolicyGroupResponse res = sdk.groups.deleteOrganizationAdaptivePolicyGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOrganizationPolicyObjectsGroup

Deletes a Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.DeleteOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOrganizationPolicyObjectsGroupRequest req = new DeleteOrganizationPolicyObjectsGroupRequest("corrupti", "iure");            

            DeleteOrganizationPolicyObjectsGroupResponse res = sdk.groups.deleteOrganizationPolicyObjectsGroup(req);

            if (res.statusCode == 200) {
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
                .setSecurity(new Security("qui") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupRequest req = new GetNetworkFirmwareUpgradesStagedGroupRequest("qui", "excepturi");            

            GetNetworkFirmwareUpgradesStagedGroupResponse res = sdk.groups.getNetworkFirmwareUpgradesStagedGroup(req);

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
                .setSecurity(new Security("quos") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkFirmwareUpgradesStagedGroupsRequest req = new GetNetworkFirmwareUpgradesStagedGroupsRequest("et");            

            GetNetworkFirmwareUpgradesStagedGroupsResponse res = sdk.groups.getNetworkFirmwareUpgradesStagedGroups(req);

            if (res.getNetworkFirmwareUpgradesStagedGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyGroup

Returns an adaptive policy group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyGroupRequest req = new GetOrganizationAdaptivePolicyGroupRequest("fuga", "officiis");            

            GetOrganizationAdaptivePolicyGroupResponse res = sdk.groups.getOrganizationAdaptivePolicyGroup(req);

            if (res.getOrganizationAdaptivePolicyGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationAdaptivePolicyGroups

List adaptive policy groups in a organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupsRequest;
import org.openapis.openapi.models.operations.GetOrganizationAdaptivePolicyGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationAdaptivePolicyGroupsRequest req = new GetOrganizationAdaptivePolicyGroupsRequest("qui");            

            GetOrganizationAdaptivePolicyGroupsResponse res = sdk.groups.getOrganizationAdaptivePolicyGroups(req);

            if (res.getOrganizationAdaptivePolicyGroups200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationPolicyObjectsGroup

Shows details of a Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationPolicyObjectsGroupRequest req = new GetOrganizationPolicyObjectsGroupRequest("magni", "dolore");            

            GetOrganizationPolicyObjectsGroupResponse res = sdk.groups.getOrganizationPolicyObjectsGroup(req);

            if (res.getOrganizationPolicyObjectsGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganizationPolicyObjectsGroups

Lists Policy Object Groups belonging to the organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupsRequest;
import org.openapis.openapi.models.operations.GetOrganizationPolicyObjectsGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationPolicyObjectsGroupsRequest req = new GetOrganizationPolicyObjectsGroupsRequest("incidunt") {{
                endingBefore = "aliquam";
                perPage = 812103L;
                startingAfter = "explicabo";
            }};            

            GetOrganizationPolicyObjectsGroupsResponse res = sdk.groups.getOrganizationPolicyObjectsGroups(req);

            if (res.getOrganizationPolicyObjectsGroups200ApplicationJSONObjects != null) {
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
                .setSecurity(new Security("labore") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkFirmwareUpgradesStagedGroupRequest req = new UpdateNetworkFirmwareUpgradesStagedGroupRequest(                new UpdateNetworkFirmwareUpgradesStagedGroupRequestBody(false, "nobis") {{
                                assignedDevices = new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevices() {{
                                    devices = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesDevices("sequi") {{
                                            name = "Stephen Padberg III";
                                            serial = "incidunt";
                                        }}),
                                    }};
                                    switchStacks = new org.openapis.openapi.models.operations.UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks[]{{
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("temporibus") {{
                                            id = "31274488-f0cb-42dc-9b2e-961d2ba4161d";
                                            name = "Jasmine Bins";
                                        }}),
                                        add(new UpdateNetworkFirmwareUpgradesStagedGroupRequestBodyAssignedDevicesSwitchStacks("natus") {{
                                            id = "9f7e76c8-ad6b-4bbf-809e-034d3e6dbc43";
                                            name = "Brenda Spinka";
                                        }}),
                                    }};
                                }};;
                                description = "in";
                            }};, "eligendi", "velit");            

            UpdateNetworkFirmwareUpgradesStagedGroupResponse res = sdk.groups.updateNetworkFirmwareUpgradesStagedGroup(req);

            if (res.updateNetworkFirmwareUpgradesStagedGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationAdaptivePolicyGroup

Updates an adaptive policy group. If updating "Infrastructure", only the SGT is allowed. Cannot update "Unknown".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects;
import org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationAdaptivePolicyGroupRequest req = new UpdateOrganizationAdaptivePolicyGroupRequest("non", "delectus") {{
                requestBody = new UpdateOrganizationAdaptivePolicyGroupRequestBody() {{
                    description = "commodi";
                    name = "Wilbert Ward";
                    policyObjects = new org.openapis.openapi.models.operations.UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects[]{{
                        add(new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                            id = "1f817767-d862-412f-af9d-4f73f7007a7c";
                            name = "Malcolm Gleichner";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                            id = "16c12aa0-ebd0-429e-9db5-946c5758608d";
                            name = "Dianna Tillman";
                        }}),
                        add(new UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects() {{
                            id = "95cf1d99-45c5-4c14-973f-90bd4a88c7a0";
                            name = "Spencer Erdman";
                        }}),
                    }};
                    sgt = 807797L;
                }};;
            }};            

            UpdateOrganizationAdaptivePolicyGroupResponse res = sdk.groups.updateOrganizationAdaptivePolicyGroup(req);

            if (res.updateOrganizationAdaptivePolicyGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationPolicyObjectsGroup

Updates a Policy Object Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectsGroupRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectsGroupRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationPolicyObjectsGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationPolicyObjectsGroupRequest req = new UpdateOrganizationPolicyObjectsGroupRequest("quam", "amet") {{
                requestBody = new UpdateOrganizationPolicyObjectsGroupRequestBody() {{
                    name = "Eddie Batz";
                    objectIds = new Long[]{{
                        add(731098L),
                        add(229261L),
                    }};
                }};;
            }};            

            UpdateOrganizationPolicyObjectsGroupResponse res = sdk.groups.updateOrganizationPolicyObjectsGroup(req);

            if (res.updateOrganizationPolicyObjectsGroup200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
