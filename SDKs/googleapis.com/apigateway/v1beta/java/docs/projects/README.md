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
import org.openapis.openapi.models.shared.ApigatewayBackendConfig;
import org.openapis.openapi.models.shared.ApigatewayGatewayConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApigatewayProjectsLocationsApisConfigsCreateRequest req = new ApigatewayProjectsLocationsApisConfigsCreateRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewayApiConfigInput = new ApigatewayApiConfigInput() {{
                    displayName = "saepe";
                    gatewayConfig = new ApigatewayGatewayConfig() {{
                        backendConfig = new ApigatewayBackendConfig() {{
                            googleServiceAccount = "fuga";
                        }};;
                    }};;
                    gatewayServiceAccount = "in";
                    grpcServices = new org.openapis.openapi.models.shared.ApigatewayApiConfigGrpcServiceDefinition[]{{
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "iste";
                                path = "iure";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "quidem";
                                    path = "architecto";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "ipsa";
                                    path = "reiciendis";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "est";
                                    path = "mollitia";
                                }}),
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "laborum";
                                    path = "dolores";
                                }}),
                            }};
                        }}),
                        add(new ApigatewayApiConfigGrpcServiceDefinition() {{
                            fileDescriptorSet = new ApigatewayApiConfigFile() {{
                                contents = "dolorem";
                                path = "corporis";
                            }};
                            source = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                                add(new ApigatewayApiConfigFile() {{
                                    contents = "nobis";
                                    path = "enim";
                                }}),
                            }};
                        }}),
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("nemo", "minima");
                        put("excepturi", "accusantium");
                        put("iure", "culpa");
                    }};
                    managedServiceConfigs = new org.openapis.openapi.models.shared.ApigatewayApiConfigFile[]{{
                        add(new ApigatewayApiConfigFile() {{
                            contents = "sapiente";
                            path = "architecto";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "mollitia";
                            path = "dolorem";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "culpa";
                            path = "consequuntur";
                        }}),
                        add(new ApigatewayApiConfigFile() {{
                            contents = "repellat";
                            path = "mollitia";
                        }}),
                    }};
                    openapiDocuments = new org.openapis.openapi.models.shared.ApigatewayApiConfigOpenApiDocument[]{{
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "numquam";
                                path = "commodi";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "quam";
                                path = "molestiae";
                            }};
                        }}),
                        add(new ApigatewayApiConfigOpenApiDocument() {{
                            document = new ApigatewayApiConfigFile() {{
                                contents = "velit";
                                path = "error";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                apiConfigId = "vitae";
                callback = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            ApigatewayProjectsLocationsApisConfigsCreateResponse res = sdk.projects.apigatewayProjectsLocationsApisConfigsCreate(req, new ApigatewayProjectsLocationsApisConfigsCreateSecurity("ipsam", "id") {{
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

            ApigatewayProjectsLocationsApisConfigsListRequest req = new ApigatewayProjectsLocationsApisConfigsListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                filter = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                orderBy = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            ApigatewayProjectsLocationsApisConfigsListResponse res = sdk.projects.apigatewayProjectsLocationsApisConfigsList(req, new ApigatewayProjectsLocationsApisConfigsListSecurity("voluptate", "cum") {{
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

            ApigatewayProjectsLocationsApisCreateRequest req = new ApigatewayProjectsLocationsApisCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewayApiInput = new ApigatewayApiInput() {{
                    displayName = "reprehenderit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("maiores", "dicta");
                        put("corporis", "dolore");
                    }};
                    managedService = "iusto";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                apiId = "enim";
                callback = "accusamus";
                fields = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            ApigatewayProjectsLocationsApisCreateResponse res = sdk.projects.apigatewayProjectsLocationsApisCreate(req, new ApigatewayProjectsLocationsApisCreateSecurity("excepturi", "pariatur") {{
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

            ApigatewayProjectsLocationsApisListRequest req = new ApigatewayProjectsLocationsApisListRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "repudiandae";
                filter = "sint";
                key = "veritatis";
                oauthToken = "itaque";
                orderBy = "incidunt";
                pageSize = 318569L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            ApigatewayProjectsLocationsApisListResponse res = sdk.projects.apigatewayProjectsLocationsApisList(req, new ApigatewayProjectsLocationsApisListSecurity("deserunt", "distinctio") {{
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

            ApigatewayProjectsLocationsGatewaysCreateRequest req = new ApigatewayProjectsLocationsGatewaysCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                apigatewayGatewayInput = new ApigatewayGatewayInput() {{
                    apiConfig = "modi";
                    displayName = "qui";
                    labels = new java.util.HashMap<String, String>() {{
                        put("cupiditate", "quos");
                        put("perferendis", "magni");
                    }};
                }};;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                gatewayId = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            ApigatewayProjectsLocationsGatewaysCreateResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysCreate(req, new ApigatewayProjectsLocationsGatewaysCreateSecurity("delectus", "eum") {{
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

            ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                optionsRequestedPolicyVersion = 223081L;
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "a";
                uploadProtocol = "dolorum";
            }};            

            ApigatewayProjectsLocationsGatewaysGetIamPolicyResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysGetIamPolicy(req, new ApigatewayProjectsLocationsGatewaysGetIamPolicySecurity("in", "in") {{
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

            ApigatewayProjectsLocationsGatewaysListRequest req = new ApigatewayProjectsLocationsGatewaysListRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "cumque";
                filter = "facere";
                key = "ea";
                oauthToken = "aliquid";
                orderBy = "laborum";
                pageSize = 881104L;
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            ApigatewayProjectsLocationsGatewaysListResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysList(req, new ApigatewayProjectsLocationsGatewaysListSecurity("delectus", "quidem") {{
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

            ApigatewayProjectsLocationsGatewaysPatchRequest req = new ApigatewayProjectsLocationsGatewaysPatchRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewayGatewayInput = new ApigatewayGatewayInput() {{
                    apiConfig = "id";
                    displayName = "blanditiis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "amet");
                        put("deserunt", "nisi");
                        put("vel", "natus");
                    }};
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "id";
                updateMask = "labore";
                uploadType = "labore";
                uploadProtocol = "suscipit";
            }};            

            ApigatewayProjectsLocationsGatewaysPatchResponse res = sdk.projects.apigatewayProjectsLocationsGatewaysPatch(req, new ApigatewayProjectsLocationsGatewaysPatchSecurity("natus", "nobis") {{
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

            ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest req = new ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                apigatewaySetIamPolicyRequest = new ApigatewaySetIamPolicyRequest() {{
                    policy = new ApigatewayPolicy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.ApigatewayAuditConfig[]{{
                            add(new ApigatewayAuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.ApigatewayAuditLogConfig[]{{
                                    add(new ApigatewayAuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("et"),
                                            add("excepturi"),
                                        }};
                                        logType = ApigatewayAuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "provident";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.ApigatewayBinding[]{{
                            add(new ApigatewayBinding() {{
                                condition = new ApigatewayExpr() {{
                                    description = "sint";
                                    expression = "accusantium";
                                    location = "mollitia";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ad"),
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
