# projects

### Available Operations

* [memcacheProjectsLocationsInstancesApplyParameters](#memcacheprojectslocationsinstancesapplyparameters) - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
* [memcacheProjectsLocationsInstancesApplySoftwareUpdate](#memcacheprojectslocationsinstancesapplysoftwareupdate) - Updates software on the selected nodes of the Instance.
* [memcacheProjectsLocationsInstancesCreate](#memcacheprojectslocationsinstancescreate) - Creates a new Instance in a given location.
* [memcacheProjectsLocationsInstancesList](#memcacheprojectslocationsinstanceslist) - Lists Instances in a given location.
* [memcacheProjectsLocationsInstancesPatch](#memcacheprojectslocationsinstancespatch) - Updates an existing Instance in a given project and location.
* [memcacheProjectsLocationsInstancesRescheduleMaintenance](#memcacheprojectslocationsinstancesreschedulemaintenance) - Performs the apply phase of the RescheduleMaintenance verb.
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

## memcacheProjectsLocationsInstancesApplySoftwareUpdate

Updates software on the selected nodes of the Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplySoftwareUpdateResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplySoftwareUpdateRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest req = new MemcacheProjectsLocationsInstancesApplySoftwareUpdateRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                applySoftwareUpdateRequest = new ApplySoftwareUpdateRequest() {{
                    applyAll = false;
                    nodeIds = new String[]{{
                        add("quo"),
                        add("odit"),
                        add("at"),
                        add("at"),
                    }};
                }};;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                fields = "quod";
                key = "esse";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "dolorum";
                uploadProtocol = "dicta";
            }};            

            MemcacheProjectsLocationsInstancesApplySoftwareUpdateResponse res = sdk.projects.memcacheProjectsLocationsInstancesApplySoftwareUpdate(req, new MemcacheProjectsLocationsInstancesApplySoftwareUpdateSecurity("nam", "officia") {{
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
import org.openapis.openapi.models.shared.GoogleCloudMemcacheV1beta2MaintenancePolicyInput;
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

            MemcacheProjectsLocationsInstancesCreateRequest req = new MemcacheProjectsLocationsInstancesCreateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.ONE;
                instanceInput = new InstanceInput() {{
                    authorizedNetwork = "deleniti";
                    displayName = "hic";
                    instanceMessages = new org.openapis.openapi.models.shared.InstanceMessage[]{{
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.ZONE_DISTRIBUTION_UNBALANCED;
                            message = "beatae";
                        }}),
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.CODE_UNSPECIFIED;
                            message = "molestiae";
                        }}),
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.CODE_UNSPECIFIED;
                            message = "qui";
                        }}),
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.ZONE_DISTRIBUTION_UNBALANCED;
                            message = "cum";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsum", "excepturi");
                        put("aspernatur", "perferendis");
                    }};
                    maintenancePolicy = new GoogleCloudMemcacheV1beta2MaintenancePolicyInput() {{
                        description = "ad";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindow[]{{
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.MONDAY;
                                duration = "iste";
                                startTime = new TimeOfDay() {{
                                    hours = 222321;
                                    minutes = 616934;
                                    nanos = 386489;
                                    seconds = 943749;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.SUNDAY;
                                duration = "fuga";
                                startTime = new TimeOfDay() {{
                                    hours = 449950;
                                    minutes = 359508;
                                    nanos = 613064;
                                    seconds = 437032;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.SUNDAY;
                                duration = "quidem";
                                startTime = new TimeOfDay() {{
                                    hours = 99280;
                                    minutes = 60225;
                                    nanos = 969810;
                                    seconds = 666767;
                                }};
                            }}),
                        }};
                    }};;
                    memcacheVersion = InstanceMemcacheVersionEnum.MEMCACHE15;
                    name = "Ernest Ebert";
                    nodeConfig = new NodeConfig() {{
                        cpuCount = 750686;
                        memorySizeMb = 315428;
                    }};;
                    nodeCount = 607831;
                    parameters = new MemcacheParametersInput() {{
                        params = new java.util.HashMap<String, String>() {{
                            put("minima", "excepturi");
                            put("accusantium", "iure");
                        }};
                    }};;
                    zones = new String[]{{
                        add("doloribus"),
                        add("sapiente"),
                        add("architecto"),
                    }};
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                instanceId = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            MemcacheProjectsLocationsInstancesCreateResponse res = sdk.projects.memcacheProjectsLocationsInstancesCreate(req, new MemcacheProjectsLocationsInstancesCreateSecurity("molestiae", "velit") {{
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

            MemcacheProjectsLocationsInstancesListRequest req = new MemcacheProjectsLocationsInstancesListRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                filter = "enim";
                key = "odit";
                oauthToken = "quo";
                orderBy = "sequi";
                pageSize = 949572L;
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            MemcacheProjectsLocationsInstancesListResponse res = sdk.projects.memcacheProjectsLocationsInstancesList(req, new MemcacheProjectsLocationsInstancesListSecurity("quasi", "error") {{
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
import org.openapis.openapi.models.shared.GoogleCloudMemcacheV1beta2MaintenancePolicyInput;
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

            MemcacheProjectsLocationsInstancesPatchRequest req = new MemcacheProjectsLocationsInstancesPatchRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    authorizedNetwork = "quasi";
                    displayName = "reiciendis";
                    instanceMessages = new org.openapis.openapi.models.shared.InstanceMessage[]{{
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.ZONE_DISTRIBUTION_UNBALANCED;
                            message = "nihil";
                        }}),
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.ZONE_DISTRIBUTION_UNBALANCED;
                            message = "voluptatibus";
                        }}),
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.CODE_UNSPECIFIED;
                            message = "omnis";
                        }}),
                        add(new InstanceMessage() {{
                            code = InstanceMessageCodeEnum.CODE_UNSPECIFIED;
                            message = "cum";
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("doloremque", "reprehenderit");
                    }};
                    maintenancePolicy = new GoogleCloudMemcacheV1beta2MaintenancePolicyInput() {{
                        description = "ut";
                        weeklyMaintenanceWindow = new org.openapis.openapi.models.shared.WeeklyMaintenanceWindow[]{{
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.DAY_OF_WEEK_UNSPECIFIED;
                                duration = "corporis";
                                startTime = new TimeOfDay() {{
                                    hours = 296140;
                                    minutes = 480894;
                                    nanos = 118727;
                                    seconds = 688661;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.TUESDAY;
                                duration = "accusamus";
                                startTime = new TimeOfDay() {{
                                    hours = 414263;
                                    minutes = 918236;
                                    nanos = 64147;
                                    seconds = 216822;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.FRIDAY;
                                duration = "molestias";
                                startTime = new TimeOfDay() {{
                                    hours = 566602;
                                    minutes = 865103;
                                    nanos = 265389;
                                    seconds = 508969;
                                }};
                            }}),
                            add(new WeeklyMaintenanceWindow() {{
                                day = WeeklyMaintenanceWindowDayEnum.THURSDAY;
                                duration = "voluptates";
                                startTime = new TimeOfDay() {{
                                    hours = 93940;
                                    minutes = 921158;
                                    nanos = 575947;
                                    seconds = 83112;
                                }};
                            }}),
                        }};
                    }};;
                    memcacheVersion = InstanceMemcacheVersionEnum.MEMCACHE15;
                    name = "Erin Altenwerth";
                    nodeConfig = new NodeConfig() {{
                        cpuCount = 131797;
                        memorySizeMb = 647174;
                    }};;
                    nodeCount = 716327;
                    parameters = new MemcacheParametersInput() {{
                        params = new java.util.HashMap<String, String>() {{
                            put("labore", "modi");
                            put("qui", "aliquid");
                            put("cupiditate", "quos");
                            put("perferendis", "magni");
                        }};
                    }};;
                    zones = new String[]{{
                        add("ipsam"),
                        add("alias"),
                        add("fugit"),
                        add("dolorum"),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                updateMask = "non";
                uploadType = "eligendi";
                uploadProtocol = "sint";
            }};            

            MemcacheProjectsLocationsInstancesPatchResponse res = sdk.projects.memcacheProjectsLocationsInstancesPatch(req, new MemcacheProjectsLocationsInstancesPatchSecurity("aliquid", "provident") {{
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

Performs the apply phase of the RescheduleMaintenance verb.

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

            MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest req = new MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                rescheduleMaintenanceRequest = new RescheduleMaintenanceRequest() {{
                    rescheduleType = RescheduleMaintenanceRequestRescheduleTypeEnum.NEXT_AVAILABLE_WINDOW;
                    scheduleTime = "dolor";
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "in";
                key = "in";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "rerum";
                uploadProtocol = "dicta";
            }};            

            MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse res = sdk.projects.memcacheProjectsLocationsInstancesRescheduleMaintenance(req, new MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity("magnam", "cumque") {{
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

            MemcacheProjectsLocationsInstancesUpdateParametersRequest req = new MemcacheProjectsLocationsInstancesUpdateParametersRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                updateParametersRequestInput = new UpdateParametersRequestInput() {{
                    parameters = new MemcacheParametersInput() {{
                        params = new java.util.HashMap<String, String>() {{
                            put("laborum", "accusamus");
                            put("non", "occaecati");
                        }};
                    }};;
                    updateMask = "enim";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "provident";
                key = "nam";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "deleniti";
                uploadProtocol = "sapiente";
            }};            

            MemcacheProjectsLocationsInstancesUpdateParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesUpdateParameters(req, new MemcacheProjectsLocationsInstancesUpdateParametersSecurity("amet", "deserunt") {{
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

            MemcacheProjectsLocationsListRequest req = new MemcacheProjectsLocationsListRequest("nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "perferendis";
                filter = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                pageSize = 660174L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "suscipit";
                uploadProtocol = "natus";
            }};            

            MemcacheProjectsLocationsListResponse res = sdk.projects.memcacheProjectsLocationsList(req, new MemcacheProjectsLocationsListSecurity("nobis", "eum") {{
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

            MemcacheProjectsLocationsOperationsCancelRequest req = new MemcacheProjectsLocationsOperationsCancelRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("magnam", "et");
                }};
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "quos";
                key = "sint";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "reiciendis";
                uploadProtocol = "mollitia";
            }};            

            MemcacheProjectsLocationsOperationsCancelResponse res = sdk.projects.memcacheProjectsLocationsOperationsCancel(req, new MemcacheProjectsLocationsOperationsCancelSecurity("ad", "eum") {{
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

            MemcacheProjectsLocationsOperationsDeleteRequest req = new MemcacheProjectsLocationsOperationsDeleteRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "maxime";
                uploadProtocol = "deleniti";
            }};            

            MemcacheProjectsLocationsOperationsDeleteResponse res = sdk.projects.memcacheProjectsLocationsOperationsDelete(req, new MemcacheProjectsLocationsOperationsDeleteSecurity("facilis", "in") {{
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

            MemcacheProjectsLocationsOperationsGetRequest req = new MemcacheProjectsLocationsOperationsGetRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "nihil";
                key = "repellat";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "saepe";
                uploadProtocol = "pariatur";
            }};            

            MemcacheProjectsLocationsOperationsGetResponse res = sdk.projects.memcacheProjectsLocationsOperationsGet(req, new MemcacheProjectsLocationsOperationsGetSecurity("accusantium", "consequuntur") {{
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

            MemcacheProjectsLocationsOperationsListRequest req = new MemcacheProjectsLocationsOperationsListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "illum";
                filter = "pariatur";
                key = "maxime";
                oauthToken = "ea";
                pageSize = 569101L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "accusantium";
                uploadProtocol = "ab";
            }};            

            MemcacheProjectsLocationsOperationsListResponse res = sdk.projects.memcacheProjectsLocationsOperationsList(req, new MemcacheProjectsLocationsOperationsListSecurity("maiores", "quidem") {{
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
