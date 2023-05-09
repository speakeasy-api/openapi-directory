# projects

### Available Operations

* [eventarcProjectsLocationsList](#eventarcprojectslocationslist) - Lists information about the supported locations for this service.
* [eventarcProjectsLocationsOperationsCancel](#eventarcprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [eventarcProjectsLocationsOperationsList](#eventarcprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [eventarcProjectsLocationsTriggersCreate](#eventarcprojectslocationstriggerscreate) - Create a new trigger in a particular project and location.
* [eventarcProjectsLocationsTriggersDelete](#eventarcprojectslocationstriggersdelete) - Delete a single trigger.
* [eventarcProjectsLocationsTriggersGet](#eventarcprojectslocationstriggersget) - Get a single trigger.
* [eventarcProjectsLocationsTriggersGetIamPolicy](#eventarcprojectslocationstriggersgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [eventarcProjectsLocationsTriggersList](#eventarcprojectslocationstriggerslist) - List triggers.
* [eventarcProjectsLocationsTriggersPatch](#eventarcprojectslocationstriggerspatch) - Update a single trigger.
* [eventarcProjectsLocationsTriggersSetIamPolicy](#eventarcprojectslocationstriggerssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [eventarcProjectsLocationsTriggersTestIamPermissions](#eventarcprojectslocationstriggerstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## eventarcProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsListRequest req = new EventarcProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            EventarcProjectsLocationsListResponse res = sdk.projects.eventarcProjectsLocationsList(req, new EventarcProjectsLocationsListSecurity("veritatis", "deserunt") {{
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

## eventarcProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsOperationsCancelRequest req = new EventarcProjectsLocationsOperationsCancelRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sapiente", "quo");
                    put("odit", "at");
                    put("at", "maiores");
                    put("molestiae", "quod");
                }};
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            EventarcProjectsLocationsOperationsCancelResponse res = sdk.projects.eventarcProjectsLocationsOperationsCancel(req, new EventarcProjectsLocationsOperationsCancelSecurity("fugit", "deleniti") {{
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

## eventarcProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsOperationsListRequest req = new EventarcProjectsLocationsOperationsListRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                filter = "modi";
                key = "qui";
                oauthToken = "impedit";
                pageSize = 736918L;
                pageToken = "esse";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "excepturi";
                uploadProtocol = "aspernatur";
            }};            

            EventarcProjectsLocationsOperationsListResponse res = sdk.projects.eventarcProjectsLocationsOperationsList(req, new EventarcProjectsLocationsOperationsListSecurity("perferendis", "ad") {{
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

## eventarcProjectsLocationsTriggersCreate

Create a new trigger in a particular project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersCreateRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersCreateResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunService;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.MatchingCriteria;
import org.openapis.openapi.models.shared.PubsubInput;
import org.openapis.openapi.models.shared.TransportInput;
import org.openapis.openapi.models.shared.TriggerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersCreateRequest req = new EventarcProjectsLocationsTriggersCreateRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                triggerInput = new TriggerInput() {{
                    destination = new Destination() {{
                        cloudRunService = new CloudRunService() {{
                            path = "iste";
                            region = "dolor";
                            service = "natus";
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "saepe");
                        put("fuga", "in");
                    }};
                    matchingCriteria = new org.openapis.openapi.models.shared.MatchingCriteria[]{{
                        add(new MatchingCriteria() {{
                            attribute = "iste";
                            value = "iure";
                        }}),
                        add(new MatchingCriteria() {{
                            attribute = "saepe";
                            value = "quidem";
                        }}),
                    }};
                    name = "Brenda Wisozk";
                    serviceAccount = "laborum";
                    transport = new TransportInput() {{
                        pubsub = new PubsubInput() {{
                            topic = "dolores";
                        }};;
                    }};;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "nobis";
                key = "enim";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "nemo";
                triggerId = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsTriggersCreateResponse res = sdk.projects.eventarcProjectsLocationsTriggersCreate(req, new EventarcProjectsLocationsTriggersCreateSecurity("iure", "culpa") {{
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

## eventarcProjectsLocationsTriggersDelete

Delete a single trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersDeleteRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersDeleteResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersDeleteRequest req = new EventarcProjectsLocationsTriggersDeleteRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                allowMissing = false;
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                etag = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsTriggersDeleteResponse res = sdk.projects.eventarcProjectsLocationsTriggersDelete(req, new EventarcProjectsLocationsTriggersDeleteSecurity("quam", "molestiae") {{
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

## eventarcProjectsLocationsTriggersGet

Get a single trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersGetRequest req = new EventarcProjectsLocationsTriggersGetRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            EventarcProjectsLocationsTriggersGetResponse res = sdk.projects.eventarcProjectsLocationsTriggersGet(req, new EventarcProjectsLocationsTriggersGetSecurity("tenetur", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetIamPolicyResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersGetIamPolicyRequest req = new EventarcProjectsLocationsTriggersGetIamPolicyRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                optionsRequestedPolicyVersion = 971945L;
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "vero";
                uploadProtocol = "nihil";
            }};            

            EventarcProjectsLocationsTriggersGetIamPolicyResponse res = sdk.projects.eventarcProjectsLocationsTriggersGetIamPolicy(req, new EventarcProjectsLocationsTriggersGetIamPolicySecurity("praesentium", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersList

List triggers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersListRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersListResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersListRequest req = new EventarcProjectsLocationsTriggersListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "doloremque";
                key = "reprehenderit";
                oauthToken = "ut";
                orderBy = "maiores";
                pageSize = 120196L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "dolore";
                uploadType = "iusto";
                uploadProtocol = "dicta";
            }};            

            EventarcProjectsLocationsTriggersListResponse res = sdk.projects.eventarcProjectsLocationsTriggersList(req, new EventarcProjectsLocationsTriggersListSecurity("harum", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTriggersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersPatch

Update a single trigger.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersPatchRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersPatchResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudRunService;
import org.openapis.openapi.models.shared.Destination;
import org.openapis.openapi.models.shared.MatchingCriteria;
import org.openapis.openapi.models.shared.PubsubInput;
import org.openapis.openapi.models.shared.TransportInput;
import org.openapis.openapi.models.shared.TriggerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersPatchRequest req = new EventarcProjectsLocationsTriggersPatchRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                triggerInput = new TriggerInput() {{
                    destination = new Destination() {{
                        cloudRunService = new CloudRunService() {{
                            path = "repudiandae";
                            region = "quae";
                            service = "ipsum";
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestias", "excepturi");
                        put("pariatur", "modi");
                        put("praesentium", "rem");
                    }};
                    matchingCriteria = new org.openapis.openapi.models.shared.MatchingCriteria[]{{
                        add(new MatchingCriteria() {{
                            attribute = "quasi";
                            value = "repudiandae";
                        }}),
                        add(new MatchingCriteria() {{
                            attribute = "sint";
                            value = "veritatis";
                        }}),
                        add(new MatchingCriteria() {{
                            attribute = "itaque";
                            value = "incidunt";
                        }}),
                        add(new MatchingCriteria() {{
                            attribute = "enim";
                            value = "consequatur";
                        }}),
                    }};
                    name = "Taylor Cole";
                    serviceAccount = "quibusdam";
                    transport = new TransportInput() {{
                        pubsub = new PubsubInput() {{
                            topic = "labore";
                        }};;
                    }};;
                }};;
                accessToken = "modi";
                allowMissing = false;
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                updateMask = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
                validateOnly = false;
            }};            

            EventarcProjectsLocationsTriggersPatchResponse res = sdk.projects.eventarcProjectsLocationsTriggersPatch(req, new EventarcProjectsLocationsTriggersPatchSecurity("fugit", "dolorum") {{
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

## eventarcProjectsLocationsTriggersSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersSetIamPolicyResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersSetIamPolicyRequest req = new EventarcProjectsLocationsTriggersSetIamPolicyRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                            add("eum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                            add("aliquid"),
                                            add("provident"),
                                            add("necessitatibus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                            add("debitis"),
                                            add("a"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "in";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maiores"),
                                            add("rerum"),
                                            add("dicta"),
                                            add("magnam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ea"),
                                            add("aliquid"),
                                            add("laborum"),
                                            add("accusamus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "occaecati";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                            add("quidem"),
                                            add("provident"),
                                            add("nam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("sapiente"),
                                            add("amet"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "nisi";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "natus";
                                    expression = "omnis";
                                    location = "molestiae";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("magnam"),
                                    add("distinctio"),
                                }};
                                role = "id";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "labore";
                                    expression = "labore";
                                    location = "suscipit";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("vero"),
                                    add("aspernatur"),
                                }};
                                role = "architecto";
                            }}),
                        }};
                        etag = "magnam";
                        version = 92373;
                    }};;
                    updateMask = "excepturi";
                }};;
                accessToken = "ullam";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "sint";
                key = "accusantium";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "mollitia";
                uploadProtocol = "ad";
            }};            

            EventarcProjectsLocationsTriggersSetIamPolicyResponse res = sdk.projects.eventarcProjectsLocationsTriggersSetIamPolicy(req, new EventarcProjectsLocationsTriggersSetIamPolicySecurity("eum", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eventarcProjectsLocationsTriggersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.EventarcProjectsLocationsTriggersTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EventarcProjectsLocationsTriggersTestIamPermissionsRequest req = new EventarcProjectsLocationsTriggersTestIamPermissionsRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quasi"),
                        add("iure"),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            EventarcProjectsLocationsTriggersTestIamPermissionsResponse res = sdk.projects.eventarcProjectsLocationsTriggersTestIamPermissions(req, new EventarcProjectsLocationsTriggersTestIamPermissionsSecurity("repudiandae", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
