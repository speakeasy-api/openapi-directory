# projects

### Available Operations

* [apigatewayProjectsLocationsApisConfigsCreate](#apigatewayprojectslocationsapisconfigscreate) - Creates a new ApiConfig in a given project and location.
* [apigatewayProjectsLocationsApisConfigsList](#apigatewayprojectslocationsapisconfigslist) - Lists ApiConfigs in a given project and location.
* [apigatewayProjectsLocationsApisCreate](#apigatewayprojectslocationsapiscreate) - Creates a new Api in a given project and location.
* [apigatewayProjectsLocationsApisList](#apigatewayprojectslocationsapislist) - Lists Apis in a given project and location.
* [apigatewayProjectsLocationsGatewaysCreate](#apigatewayprojectslocationsgatewayscreate) - Creates a new Gateway in a given project and location.
* [apigatewayProjectsLocationsGatewaysGetIamPolicy](#apigatewayprojectslocationsgatewaysgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [apigatewayProjectsLocationsGatewaysList](#apigatewayprojectslocationsgatewayslist) - Lists Gateways in a given project and location.
* [apigatewayProjectsLocationsGatewaysPatch](#apigatewayprojectslocationsgatewayspatch) - Updates the parameters of a single Gateway.
* [apigatewayProjectsLocationsGatewaysSetIamPolicy](#apigatewayprojectslocationsgatewayssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [apigatewayProjectsLocationsGatewaysTestIamPermissions](#apigatewayprojectslocationsgatewaystestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [apigatewayProjectsLocationsList](#apigatewayprojectslocationslist) - Lists information about the supported locations for this service.
* [apigatewayProjectsLocationsOperationsCancel](#apigatewayprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [apigatewayProjectsLocationsOperationsDelete](#apigatewayprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [apigatewayProjectsLocationsOperationsGet](#apigatewayprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [apigatewayProjectsLocationsOperationsList](#apigatewayprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## apigatewayProjectsLocationsApisConfigsCreate

Creates a new ApiConfig in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayApiConfigFile;
import org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition;
import org.openapis.openapi.models.shared.ApigatewayApiConfigInput;
import org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsApisConfigsCreateRequest req = new ApigatewayProjectsLocationsApisConfigsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewayApiConfigInput = new ApigatewayApiConfigInput() {{
                    displayName = "qui";
                    gatewayServiceAccount = "impedit";
                    grpcServices = new org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]{{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "esse";
                                path = "ipsum";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "aspernatur";
                                    path = "perferendis";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "ad";
                                    path = "natus";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "sed";
                                    path = "iste";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "dolor";
                                path = "natus";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "hic";
                                    path = "saepe";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "fuga";
                                    path = "in";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "corporis";
                                path = "iste";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "saepe";
                                    path = "quidem";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "architecto";
                                    path = "ipsa";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("est", "mollitia");
                        put("laborum", "dolores");
                        put("dolorem", "corporis");
                        put("explicabo", "nobis");
                    }};
                    managedServiceConfigs = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "omnis";
                            path = "nemo";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "minima";
                            path = "excepturi";
                        }}),
                    }};
                    openapiDocuments = new org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument[]{{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "iure";
                                path = "culpa";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                apiConfigId = "architecto";
                callback = "mollitia";
                fields = "dolorem";
                key = "culpa";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            ApigatewayProjectsLocationsApisConfigsCreateResponse res = sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req, new ApigatewayProjectsLocationsApisConfigsCreateSecurity("numquam", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsApisConfigsList

Lists ApiConfigs in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsApisConfigsListRequest req = new ApigatewayProjectsLocationsApisConfigsListRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                filter = "vitae";
                key = "laborum";
                oauthToken = "animi";
                orderBy = "enim";
                pageSize = 138183L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "sequi";
                uploadType = "tenetur";
                uploadProtocol = "ipsam";
            }};            

            ApigatewayProjectsLocationsApisConfigsListResponse res = sdk.projects.apigatewayProjectsLocationsApisConfigsList(req, new ApigatewayProjectsLocationsApisConfigsListSecurity("id", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListApiConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsApisCreate

Creates a new Api in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisCreateRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisCreateResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayApiInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsApisCreateRequest req = new ApigatewayProjectsLocationsApisCreateRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewayApiInput = new ApigatewayApiInput() {{
                    displayName = "error";
                    labels = new java.util.HashMap<String, String>() {{
                        put("laborum", "quasi");
                        put("reiciendis", "voluptatibus");
                        put("vero", "nihil");
                        put("praesentium", "voluptatibus");
                    }};
                    managedService = "ipsa";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                apiId = "cum";
                callback = "perferendis";
                fields = "doloremque";
                key = "reprehenderit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "dicta";
                uploadProtocol = "corporis";
            }};            

            ApigatewayProjectsLocationsApisCreateResponse res = sdk.projects.apigatewayProjectsLocationsApisCreate(req, new ApigatewayProjectsLocationsApisCreateSecurity("dolore", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsApisList

Lists Apis in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsApisListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsApisListRequest req = new ApigatewayProjectsLocationsApisListRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                filter = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                orderBy = "molestias";
                pageSize = 566602L;
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            ApigatewayProjectsLocationsApisListResponse res = sdk.projects.apigatewayProjectsLocationsApisList(req, new ApigatewayProjectsLocationsApisListSecurity("voluptates", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListApisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysCreate

Creates a new Gateway in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysCreateRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysCreateResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayGatewayInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysCreateRequest req = new ApigatewayProjectsLocationsGatewaysCreateRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewayGatewayInput = new ApigatewayGatewayInput() {{
                    apiConfig = "veritatis";
                    displayName = "itaque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("enim", "consequatur");
                        put("est", "quibusdam");
                    }};
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "distinctio";
                fields = "quibusdam";
                gatewayId = "labore";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "cupiditate";
                uploadProtocol = "quos";
            }};            

            ApigatewayProjectsLocationsGatewaysCreateResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysCreate(req, new ApigatewayProjectsLocationsGatewaysCreateSecurity("perferendis", "magni") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "excepturi";
                key = "tempora";
                oauthToken = "facilis";
                optionsRequestedPolicyVersion = 735194L;
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "delectus";
                uploadProtocol = "eum";
            }};            

            ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysGetIamPolicy(req, new ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity("non", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysList

Lists Gateways in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysListRequest req = new ApigatewayProjectsLocationsGatewaysListRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "officia";
                filter = "dolor";
                key = "debitis";
                oauthToken = "a";
                orderBy = "dolorum";
                pageSize = 447125L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "maiores";
                uploadProtocol = "rerum";
            }};            

            ApigatewayProjectsLocationsGatewaysListResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysList(req, new ApigatewayProjectsLocationsGatewaysListSecurity("dicta", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListGatewaysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysPatch

Updates the parameters of a single Gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysPatchRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysPatchResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayGatewayInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysPatchRequest req = new ApigatewayProjectsLocationsGatewaysPatchRequest("cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewayGatewayInput = new ApigatewayGatewayInput() {{
                    apiConfig = "ea";
                    displayName = "aliquid";
                    labels = new java.util.HashMap<String, String>() {{
                        put("accusamus", "non");
                        put("occaecati", "enim");
                        put("accusamus", "delectus");
                    }};
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "sapiente";
                updateMask = "amet";
                uploadType = "deserunt";
                uploadProtocol = "nisi";
            }};            

            ApigatewayProjectsLocationsGatewaysPatchResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysPatch(req, new ApigatewayProjectsLocationsGatewaysPatchSecurity("vel", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayAuditConfig;
import org.openapis.openapi.models.shared.ApigatewayAuditLogConfig;
import org.openapis.openapi.models.shared.ApigatewayAuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.ApigatewayBinding;
import org.openapis.openapi.models.shared.ApigatewayExpr;
import org.openapis.openapi.models.shared.ApigatewayPolicy;
import org.openapis.openapi.models.shared.ApigatewaySetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewaySetIamPolicyRequest = new ApigatewaySetIamPolicyRequest() {{
                    policy = new ApigatewayPolicy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.ApigatewayAuditConfig[]{{
                            add(new ApigatewayAuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.ApigatewayAuditLogConfig[]{{
                                    add(new ApigatewayAuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("distinctio"),
                                            add("id"),
                                        }};
                                        logType = ApigatewayAuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new ApigatewayAuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("suscipit"),
                                            add("natus"),
                                        }};
                                        logType = ApigatewayAuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "eum";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.ApigatewayBinding[]{{
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "aspernatur";
                                    expression = "architecto";
                                    location = "magnam";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ullam"),
                                    add("provident"),
                                    add("quos"),
                                }};
                                role = "sint";
                            }}),
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "accusantium";
                                    expression = "mollitia";
                                    location = "reiciendis";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("dolor"),
                                }};
                                role = "necessitatibus";
                            }}),
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "odit";
                                    expression = "nemo";
                                    location = "quasi";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("debitis"),
                                    add("eius"),
                                    add("maxime"),
                                    add("deleniti"),
                                }};
                                role = "facilis";
                            }}),
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "in";
                                    expression = "architecto";
                                    location = "architecto";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("expedita"),
                                    add("nihil"),
                                }};
                                role = "repellat";
                            }}),
                        }};
                        etag = "quibusdam";
                        version = 149448;
                    }};;
                    updateMask = "saepe";
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                key = "natus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            ApigatewayProjectsLocationsGatewaysSetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysSetIamPolicy(req, new ApigatewayProjectsLocationsGatewaysSetIamPolicySecurity("pariatur", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsGatewaysTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApigatewayTestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest req = new ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewayTestIamPermissionsRequest = new ApigatewayTestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ea"),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quidem";
                key = "ipsam";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nam";
                uploadProtocol = "eaque";
            }};            

            ApigatewayProjectsLocationsGatewaysTestIamPermissionsResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysTestIamPermissions(req, new ApigatewayProjectsLocationsGatewaysTestIamPermissionsSecurity("pariatur", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayTestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsListRequest req = new ApigatewayProjectsLocationsListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "aut";
                fields = "cumque";
                filter = "corporis";
                key = "hic";
                oauthToken = "libero";
                pageSize = 749999L;
                pageToken = "dolores";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "totam";
                uploadProtocol = "dignissimos";
            }};            

            ApigatewayProjectsLocationsListResponse res = sdk.projects.apigatewayProjectsLocationsList(req, new ApigatewayProjectsLocationsListSecurity("eaque", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsCancelRequest req = new ApigatewayProjectsLocationsOperationsCancelRequest("nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolores", "minus");
                }};
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "nostrum";
                key = "hic";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "facilis";
                uploadProtocol = "perspiciatis";
            }};            

            ApigatewayProjectsLocationsOperationsCancelResponse res = sdk.projects.apigatewayProjectsLocationsOperationsCancel(req, new ApigatewayProjectsLocationsOperationsCancelSecurity("voluptatem", "porro") {{
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

## apigatewayProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsDeleteRequest req = new ApigatewayProjectsLocationsOperationsDeleteRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "rerum";
                key = "adipisci";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "modi";
                uploadProtocol = "iste";
            }};            

            ApigatewayProjectsLocationsOperationsDeleteResponse res = sdk.projects.apigatewayProjectsLocationsOperationsDelete(req, new ApigatewayProjectsLocationsOperationsDeleteSecurity("dolorum", "deleniti") {{
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

## apigatewayProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsGetRequest req = new ApigatewayProjectsLocationsOperationsGetRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "delectus";
                fields = "quaerat";
                key = "quos";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "dolorem";
                uploadProtocol = "dolor";
                view = ApigatewayProjectsLocationsOperationsGetViewEnum.CONFIG_VIEW_UNSPECIFIED;
            }};            

            ApigatewayProjectsLocationsOperationsGetResponse res = sdk.projects.apigatewayProjectsLocationsOperationsGet(req, new ApigatewayProjectsLocationsOperationsGetSecurity("ipsum", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apigatewayProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ApigatewayProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsOperationsListRequest req = new ApigatewayProjectsLocationsOperationsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                filter = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                pageSize = 58029L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            ApigatewayProjectsLocationsOperationsListResponse res = sdk.projects.apigatewayProjectsLocationsOperationsList(req, new ApigatewayProjectsLocationsOperationsListSecurity("accusamus", "quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apigatewayListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
