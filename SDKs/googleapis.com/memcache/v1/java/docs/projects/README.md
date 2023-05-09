# projects

### Available Operations

* [memcacheProjectsLocationsInstancesApplyParameters](#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [memcacheProjectsLocationsInstancesCreate](#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [memcacheProjectsLocationsInstancesList](#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [memcacheProjectsLocationsInstancesPatch](#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [memcacheProjectsLocationsInstancesRescheduleMaintenance](#memcacheprojectslocationsinstancesreschedulemaintenance) - Reschedules upcoming maintenance event.
* [memcacheProjectsLocationsInstancesUpdateParameters](#memcacheprojectslocationsinstancesupdateparameters) - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
* [memcacheProjectsLocationsList](#memcacheprojectslocationslist) - Lists information about the supported locations for this service.
* [memcacheProjectsLocationsOperationsCancel](#memcacheprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [memcacheProjectsLocationsOperationsDelete](#memcacheprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [memcacheProjectsLocationsOperationsGet](#memcacheprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [memcacheProjectsLocationsOperationsList](#memcacheprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## memcacheProjectsLocationsInstancesApplyParameters

`ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplyParametersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesApplyParametersRequest req = new MemcacheProjectsLocationsInstancesApplyParametersRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                applyParametersRequest = new ApplyParametersRequest() {{
                    applyAll = false;
                    nodeIds = new String[]{{
                        add("minus"),
                        add("placeat"),
                    }};
                }};;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            MemcacheProjectsLocationsInstancesApplyParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req, new MemcacheProjectsLocationsInstancesApplyParametersSecurity("deserunt", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsInstancesCreate

Creates a new Instance in a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMemcacheV1MaintenancePolicyInput;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceMemcacheVersionEnum;
import org.openapis.openapi.models.shared.InstanceMessage;
import org.openapis.openapi.models.shared.InstanceMessageCodeEnum;
import org.openapis.openapi.models.shared.MemcacheParametersInput;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindow;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindowDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesCreateRequest req = new MemcacheProjectsLocationsInstancesCreateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    authorizedNetwork = "sapiente";
                    displayName = "quo";
                    instanceMessages = new org.openapis.openapi.models.shared.InstanceMessage[]{{
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.ZONE_DISTRIBUTION_UNBALANCED;
                            message = "at";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                        put("dolorum", "dicta");
                    }};
                    maintenancePolicy = new GoogleCloudMemcacheV1MaintenancePolicyInput() {{
                        description = "nam";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindow[]{{
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.THURSDAY;
                                duration = "fugit";
                                startTime = new TimeOfDay() {{
                                    hours = 537373;
                                    minutes = 944669;
                                    nanos = 758616;
                                    seconds = 521848;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                duration = "commodi";
                                startTime = new TimeOfDay() {{
                                    hours = 473600;
                                    minutes = 264555;
                                    nanos = 186332;
                                    seconds = 774234;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.FRIDAY;
                                duration = "esse";
                                startTime = new TimeOfDay() {{
                                    hours = 216550;
                                    minutes = 568434;
                                    nanos = 135218;
                                    seconds = 18789;
                                }};
                            }}),
                        }};
                    }};;
                    memcacheVersion = InstanceMemcacheVersionEnum.MEMCACHE_VERSION_UNSPECIFIED;
                    name = "Louis Moore";
                    nodeConfig = new NodeConfig() {{
                        cpuCount = 386489;
                        memorySizeMb = 943749;
                    }};;
                    nodeCount = 902599;
                    parameters = new MemcacheParametersInput() {{
                        params = new java.util.HashMap<String, String>() {{
                            put("in", "corporis");
                            put("iste", "iure");
                            put("saepe", "quidem");
                        }};
                    }};;
                    zones = new String[]{{
                        add("ipsa"),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                instanceId = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "nobis";
                uploadProtocol = "enim";
            }};            

            MemcacheProjectsLocationsInstancesCreateResponse res = sdk.projects.memcacheProjectsLocationsInstancesCreate(req, new MemcacheProjectsLocationsInstancesCreateSecurity("omnis", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsInstancesList

Lists Instances in a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesListRequest req = new MemcacheProjectsLocationsInstancesListRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "doloribus";
                filter = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                orderBy = "dolorem";
                pageSize = 635059L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            MemcacheProjectsLocationsInstancesListResponse res = sdk.projects.memcacheProjectsLocationsInstancesList(req, new MemcacheProjectsLocationsInstancesListSecurity("numquam", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsInstancesPatch

Updates an existing Instance in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesPatchRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesPatchResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudMemcacheV1MaintenancePolicyInput;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceMemcacheVersionEnum;
import org.openapis.openapi.models.shared.InstanceMessage;
import org.openapis.openapi.models.shared.InstanceMessageCodeEnum;
import org.openapis.openapi.models.shared.MemcacheParametersInput;
import org.openapis.openapi.models.shared.NodeConfig;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindow;
import org.openapis.openapi.models.shared.WeeklyMaintenanceWindowDayEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesPatchRequest req = new MemcacheProjectsLocationsInstancesPatchRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceInput = new InstanceInput() {{
                    authorizedNetwork = "velit";
                    displayName = "error";
                    instanceMessages = new org.openapis.openapi.models.shared.InstanceMessage[]{{
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.CODE_UNSPECIFIED;
                            message = "vitae";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("animi", "enim");
                        put("odit", "quo");
                        put("sequi", "tenetur");
                    }};
                    maintenancePolicy = new GoogleCloudMemcacheV1MaintenancePolicyInput() {{
                        description = "ipsam";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindow[]{{
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.SATURDAY;
                                duration = "aut";
                                startTime = new TimeOfDay() {{
                                    hours = 97101;
                                    minutes = 622846;
                                    nanos = 837945;
                                    seconds = 673660;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                duration = "reiciendis";
                                startTime = new TimeOfDay() {{
                                    hours = 976460;
                                    minutes = 878194;
                                    nanos = 468651;
                                    seconds = 509624;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.SUNDAY;
                                duration = "ipsa";
                                startTime = new TimeOfDay() {{
                                    hours = 604846;
                                    minutes = 451159;
                                    nanos = 739264;
                                    seconds = 19987;
                                }};
                            }}),
                        }};
                    }};;
                    memcacheVersion = InstanceMemcacheVersionEnum.MEMCACHE_VERSION_UNSPECIFIED;
                    name = "Mrs. April Wuckert";
                    nodeConfig = new NodeConfig() {{
                        cpuCount = 480894;
                        memorySizeMb = 118727;
                    }};;
                    nodeCount = 688661;
                    parameters = new MemcacheParametersInput() {{
                        params = new java.util.HashMap<String, String>() {{
                            put("accusamus", "commodi");
                            put("repudiandae", "quae");
                        }};
                    }};;
                    zones = new String[]{{
                        add("quidem"),
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "modi";
                key = "praesentium";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "voluptates";
                updateMask = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            MemcacheProjectsLocationsInstancesPatchResponse res = sdk.projects.memcacheProjectsLocationsInstancesPatch(req, new MemcacheProjectsLocationsInstancesPatchSecurity("veritatis", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsInstancesRescheduleMaintenance

Reschedules upcoming maintenance event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RescheduleMaintenanceRequest;
import org.openapis.openapi.models.shared.RescheduleMaintenanceRequestRescheduleTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest req = new MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                rescheduleMaintenanceRequest = new RescheduleMaintenanceRequest() {{
                    rescheduleType = RescheduleMaintenanceRequestRescheduleTypeEnum.RESCHEDULE_TYPE_UNSPECIFIED;
                    scheduleTime = "est";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse res = sdk.projects.memcacheProjectsLocationsInstancesRescheduleMaintenance(req, new MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity("cupiditate", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsInstancesUpdateParameters

Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesUpdateParametersRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesUpdateParametersResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesUpdateParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MemcacheParametersInput;
import org.openapis.openapi.models.shared.UpdateParametersRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesUpdateParametersRequest req = new MemcacheProjectsLocationsInstancesUpdateParametersRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                updateParametersRequestInput = new UpdateParametersRequestInput() {{
                    parameters = new MemcacheParametersInput() {{
                        params = new java.util.HashMap<String, String>() {{
                            put("ipsam", "alias");
                            put("fugit", "dolorum");
                            put("excepturi", "tempora");
                            put("facilis", "tempore");
                        }};
                    }};;
                    updateMask = "labore";
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "necessitatibus";
                uploadProtocol = "sint";
            }};            

            MemcacheProjectsLocationsInstancesUpdateParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesUpdateParameters(req, new MemcacheProjectsLocationsInstancesUpdateParametersSecurity("officia", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsListRequest req = new MemcacheProjectsLocationsListRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                filter = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                pageSize = 297437L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "ea";
                uploadProtocol = "aliquid";
            }};            

            MemcacheProjectsLocationsListResponse res = sdk.projects.memcacheProjectsLocationsList(req, new MemcacheProjectsLocationsListSecurity("laborum", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsOperationsCancelRequest req = new MemcacheProjectsLocationsOperationsCancelRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("accusamus", "delectus");
                    put("quidem", "provident");
                }};
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "deleniti";
                key = "sapiente";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            MemcacheProjectsLocationsOperationsCancelResponse res = sdk.projects.memcacheProjectsLocationsOperationsCancel(req, new MemcacheProjectsLocationsOperationsCancelSecurity("natus", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsOperationsDeleteRequest req = new MemcacheProjectsLocationsOperationsDeleteRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "labore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "natus";
                uploadProtocol = "nobis";
            }};            

            MemcacheProjectsLocationsOperationsDeleteResponse res = sdk.projects.memcacheProjectsLocationsOperationsDelete(req, new MemcacheProjectsLocationsOperationsDeleteSecurity("eum", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsOperationsGetRequest req = new MemcacheProjectsLocationsOperationsGetRequest("aspernatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusantium";
                uploadProtocol = "mollitia";
            }};            

            MemcacheProjectsLocationsOperationsGetResponse res = sdk.projects.memcacheProjectsLocationsOperationsGet(req, new MemcacheProjectsLocationsOperationsGetSecurity("reiciendis", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## memcacheProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsOperationsListRequest req = new MemcacheProjectsLocationsOperationsListRequest("ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "nemo";
                filter = "quasi";
                key = "iure";
                oauthToken = "doloribus";
                pageSize = 891924L;
                pageToken = "eius";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "deleniti";
                uploadProtocol = "facilis";
            }};            

            MemcacheProjectsLocationsOperationsListResponse res = sdk.projects.memcacheProjectsLocationsOperationsList(req, new MemcacheProjectsLocationsOperationsListSecurity("in", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
