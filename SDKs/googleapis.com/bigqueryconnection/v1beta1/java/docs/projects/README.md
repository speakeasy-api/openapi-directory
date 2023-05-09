# projects

### Available Operations

* [bigqueryconnectionProjectsLocationsConnectionsCreate](#bigqueryconnectionprojectslocationsconnectionscreate) - Creates a new connection.
* [bigqueryconnectionProjectsLocationsConnectionsDelete](#bigqueryconnectionprojectslocationsconnectionsdelete) - Deletes connection and associated credential.
* [bigqueryconnectionProjectsLocationsConnectionsGet](#bigqueryconnectionprojectslocationsconnectionsget) - Returns specified connection.
* [bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy](#bigqueryconnectionprojectslocationsconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryconnectionProjectsLocationsConnectionsList](#bigqueryconnectionprojectslocationsconnectionslist) - Returns a list of connections in the given project.
* [bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy](#bigqueryconnectionprojectslocationsconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions](#bigqueryconnectionprojectslocationsconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryconnectionProjectsLocationsConnectionsUpdateCredential](#bigqueryconnectionprojectslocationsconnectionsupdatecredential) - Sets the credential for the specified connection.

## bigqueryconnectionProjectsLocationsConnectionsCreate

Creates a new connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlCredential;
import org.openapis.openapi.models.shared.CloudSqlPropertiesInput;
import org.openapis.openapi.models.shared.CloudSqlPropertiesTypeEnum;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsCreateRequest req = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionInput = new ConnectionInput() {{
                    cloudSql = new CloudSqlPropertiesInput() {{
                        credential = new CloudSqlCredential() {{
                            password = "perferendis";
                            username = "Freeda_Sipes14";
                        }};;
                        database = "at";
                        instanceId = "at";
                        type = CloudSqlPropertiesTypeEnum.MYSQL;
                    }};;
                    description = "molestiae";
                    friendlyName = "quod";
                    name = "Erik Lebsack";
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "officia";
                connectionId = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "optio";
                uploadType = "totam";
                uploadProtocol = "beatae";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsCreateResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsCreate(req, new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1("commodi", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryconnectionProjectsLocationsConnectionsDelete

Deletes connection and associated credential.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsDeleteRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsDeleteResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsDeleteRequest req = new BigqueryconnectionProjectsLocationsConnectionsDeleteRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "ipsum";
                key = "excepturi";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsDeleteResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsDelete(req, new BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsDeleteSecurityOption1("sed", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## bigqueryconnectionProjectsLocationsConnectionsGet

Returns specified connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsGetRequest req = new BigqueryconnectionProjectsLocationsConnectionsGetRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsGetResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsGet(req, new BigqueryconnectionProjectsLocationsConnectionsGetSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsGetSecurityOption1("quidem", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest req = new BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 666767;
                    }};;
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy(req, new BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1("nemo", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## bigqueryconnectionProjectsLocationsConnectionsList

Returns a list of connections in the given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsListRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsListResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsListSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsListRequest req = new BigqueryconnectionProjectsLocationsConnectionsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                key = "architecto";
                maxResults = 652790L;
                oauthToken = "dolorem";
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsListResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsList(req, new BigqueryconnectionProjectsLocationsConnectionsListSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1("occaecati", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption2;
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

            BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest req = new BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quia"),
                                            add("quis"),
                                            add("vitae"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "animi";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("id"),
                                            add("possimus"),
                                            add("aut"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "error";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "laborum";
                                    expression = "quasi";
                                    location = "reiciendis";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("nihil"),
                                    add("praesentium"),
                                    add("voluptatibus"),
                                    add("ipsa"),
                                }};
                                role = "omnis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "voluptate";
                                    expression = "cum";
                                    location = "perferendis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ut"),
                                    add("maiores"),
                                }};
                                role = "dicta";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "corporis";
                                    expression = "dolore";
                                    location = "iusto";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("enim"),
                                    add("accusamus"),
                                    add("commodi"),
                                }};
                                role = "repudiandae";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quae";
                                    expression = "ipsum";
                                    location = "quidem";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("pariatur"),
                                    add("modi"),
                                    add("praesentium"),
                                }};
                                role = "rem";
                            }}),
                        }};
                        etag = "voluptates";
                        version = 93940;
                    }};;
                    updateMask = "repudiandae";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy(req, new BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurityOption1("deserunt", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest req = new BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("qui"),
                        add("aliquid"),
                    }};
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "magni";
                key = "assumenda";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "fugit";
                uploadProtocol = "dolorum";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions(req, new BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurityOption1("excepturi", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## bigqueryconnectionProjectsLocationsConnectionsUpdateCredential

Sets the credential for the specified connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlCredential;
import org.openapis.openapi.models.shared.ConnectionCredential;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest req = new BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionCredential = new ConnectionCredential() {{
                    cloudSql = new CloudSqlCredential() {{
                        password = "labore";
                        username = "Vilma75";
                    }};;
                }};;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "necessitatibus";
                key = "sint";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "debitis";
                uploadProtocol = "a";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsUpdateCredential(req, new BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurityOption1("dolorum", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
