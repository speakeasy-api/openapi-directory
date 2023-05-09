# projects

### Available Operations

* [secretmanagerProjectsLocationsList](#secretmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [secretmanagerProjectsSecretsAddVersion](#secretmanagerprojectssecretsaddversion) - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* [secretmanagerProjectsSecretsCreate](#secretmanagerprojectssecretscreate) - Creates a new Secret containing no SecretVersions.
* [secretmanagerProjectsSecretsDelete](#secretmanagerprojectssecretsdelete) - Deletes a Secret.
* [secretmanagerProjectsSecretsGetIamPolicy](#secretmanagerprojectssecretsgetiampolicy) - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* [secretmanagerProjectsSecretsList](#secretmanagerprojectssecretslist) - Lists Secrets.
* [secretmanagerProjectsSecretsPatch](#secretmanagerprojectssecretspatch) - Updates metadata of an existing Secret.
* [secretmanagerProjectsSecretsSetIamPolicy](#secretmanagerprojectssecretssetiampolicy) - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* [secretmanagerProjectsSecretsTestIamPermissions](#secretmanagerprojectssecretstestiampermissions) - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [secretmanagerProjectsSecretsVersionsAccess](#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.
* [secretmanagerProjectsSecretsVersionsDestroy](#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [secretmanagerProjectsSecretsVersionsDisable](#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [secretmanagerProjectsSecretsVersionsEnable](#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [secretmanagerProjectsSecretsVersionsGet](#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.
* [secretmanagerProjectsSecretsVersionsList](#secretmanagerprojectssecretsversionslist) - Lists SecretVersions. This call does not return secret data.

## secretmanagerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsLocationsListRequest req = new SecretmanagerProjectsLocationsListRequest("delectus") {{
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

            SecretmanagerProjectsLocationsListResponse res = sdk.projects.secretmanagerProjectsLocationsList(req, new SecretmanagerProjectsLocationsListSecurity("veritatis", "deserunt") {{
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

## secretmanagerProjectsSecretsAddVersion

Creates a new SecretVersion containing secret data and attaches it to an existing Secret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsAddVersionRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsAddVersionResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsAddVersionSecurity;
import org.openapis.openapi.models.shared.AddSecretVersionRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecretPayload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsAddVersionRequest req = new SecretmanagerProjectsSecretsAddVersionRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                addSecretVersionRequest = new AddSecretVersionRequest() {{
                    payload = new SecretPayload() {{
                        data = "repellendus";
                    }};;
                }};;
                accessToken = "sapiente";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            SecretmanagerProjectsSecretsAddVersionResponse res = sdk.projects.secretmanagerProjectsSecretsAddVersion(req, new SecretmanagerProjectsSecretsAddVersionSecurity("esse", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secretVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsCreate

Creates a new Secret containing no SecretVersions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsCreateRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsCreateResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Replica;
import org.openapis.openapi.models.shared.Replication;
import org.openapis.openapi.models.shared.SecretInput;
import org.openapis.openapi.models.shared.UserManaged;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsCreateRequest req = new SecretmanagerProjectsSecretsCreateRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                secretInput = new SecretInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("nam", "officia");
                    }};
                    replication = new Replication() {{
                        automatic = new java.util.HashMap<String, Object>() {{
                            put("fugit", "deleniti");
                            put("hic", "optio");
                            put("totam", "beatae");
                        }};
                        userManaged = new UserManaged() {{
                            replicas = new org.openapis.openapi.models.shared.Replica[]{{
                                add(new Replica() {{
                                    location = "molestiae";
                                }}),
                                add(new Replica() {{
                                    location = "modi";
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "esse";
                key = "ipsum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                secretId = "perferendis";
                uploadType = "ad";
                uploadProtocol = "natus";
            }};            

            SecretmanagerProjectsSecretsCreateResponse res = sdk.projects.secretmanagerProjectsSecretsCreate(req, new SecretmanagerProjectsSecretsCreateSecurity("sed", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsDelete

Deletes a Secret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsDeleteRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsDeleteResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsDeleteRequest req = new SecretmanagerProjectsSecretsDeleteRequest("dolor") {{
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

            SecretmanagerProjectsSecretsDeleteResponse res = sdk.projects.secretmanagerProjectsSecretsDelete(req, new SecretmanagerProjectsSecretsDeleteSecurity("quidem", "architecto") {{
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

## secretmanagerProjectsSecretsGetIamPolicy

Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsGetIamPolicyRequest req = new SecretmanagerProjectsSecretsGetIamPolicyRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "dolores";
                key = "dolorem";
                oauthToken = "corporis";
                optionsRequestedPolicyVersion = 128926L;
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            SecretmanagerProjectsSecretsGetIamPolicyResponse res = sdk.projects.secretmanagerProjectsSecretsGetIamPolicy(req, new SecretmanagerProjectsSecretsGetIamPolicySecurity("nemo", "minima") {{
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

## secretmanagerProjectsSecretsList

Lists Secrets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsListRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsListResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsListRequest req = new SecretmanagerProjectsSecretsListRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                fields = "sapiente";
                key = "architecto";
                oauthToken = "mollitia";
                pageSize = 208876L;
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            SecretmanagerProjectsSecretsListResponse res = sdk.projects.secretmanagerProjectsSecretsList(req, new SecretmanagerProjectsSecretsListSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSecretsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsPatch

Updates metadata of an existing Secret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsPatchRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsPatchResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Replica;
import org.openapis.openapi.models.shared.Replication;
import org.openapis.openapi.models.shared.SecretInput;
import org.openapis.openapi.models.shared.UserManaged;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsPatchRequest req = new SecretmanagerProjectsSecretsPatchRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                secretInput = new SecretInput() {{
                    labels = new java.util.HashMap<String, String>() {{
                        put("velit", "error");
                        put("quia", "quis");
                    }};
                    replication = new Replication() {{
                        automatic = new java.util.HashMap<String, Object>() {{
                            put("laborum", "animi");
                        }};
                        userManaged = new UserManaged() {{
                            replicas = new org.openapis.openapi.models.shared.Replica[]{{
                                add(new Replica() {{
                                    location = "odit";
                                }}),
                                add(new Replica() {{
                                    location = "quo";
                                }}),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "sequi";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                updateMask = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            SecretmanagerProjectsSecretsPatchResponse res = sdk.projects.secretmanagerProjectsSecretsPatch(req, new SecretmanagerProjectsSecretsPatchSecurity("quasi", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsSetIamPolicy

Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsSetIamPolicySecurity;
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

            SecretmanagerProjectsSecretsSetIamPolicyRequest req = new SecretmanagerProjectsSecretsSetIamPolicyRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsa"),
                                            add("omnis"),
                                            add("voluptate"),
                                            add("cum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reprehenderit"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dicta"),
                                            add("corporis"),
                                            add("dolore"),
                                            add("iusto"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "harum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("commodi"),
                                            add("repudiandae"),
                                            add("quae"),
                                            add("ipsum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                            add("pariatur"),
                                            add("modi"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "rem";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quasi";
                                    expression = "repudiandae";
                                    location = "sint";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("incidunt"),
                                    add("enim"),
                                    add("consequatur"),
                                    add("est"),
                                }};
                                role = "quibusdam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "explicabo";
                                    expression = "deserunt";
                                    location = "distinctio";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("modi"),
                                    add("qui"),
                                }};
                                role = "aliquid";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "cupiditate";
                                    expression = "quos";
                                    location = "perferendis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                role = "excepturi";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "tempora";
                                    expression = "facilis";
                                    location = "tempore";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("eum"),
                                    add("non"),
                                    add("eligendi"),
                                    add("sint"),
                                }};
                                role = "aliquid";
                            }}),
                        }};
                        etag = "provident";
                        version = 896039;
                    }};;
                    updateMask = "sint";
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "a";
                key = "dolorum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "illum";
                uploadProtocol = "maiores";
            }};            

            SecretmanagerProjectsSecretsSetIamPolicyResponse res = sdk.projects.secretmanagerProjectsSecretsSetIamPolicy(req, new SecretmanagerProjectsSecretsSetIamPolicySecurity("rerum", "dicta") {{
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

## secretmanagerProjectsSecretsTestIamPermissions

Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsTestIamPermissionsRequest req = new SecretmanagerProjectsSecretsTestIamPermissionsRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ea"),
                        add("aliquid"),
                        add("laborum"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "accusamus";
                key = "delectus";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nam";
                uploadProtocol = "id";
            }};            

            SecretmanagerProjectsSecretsTestIamPermissionsResponse res = sdk.projects.secretmanagerProjectsSecretsTestIamPermissions(req, new SecretmanagerProjectsSecretsTestIamPermissionsSecurity("blanditiis", "deleniti") {{
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

## secretmanagerProjectsSecretsVersionsAccess

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsAccessRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsAccessResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsAccessSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsAccessRequest req = new SecretmanagerProjectsSecretsVersionsAccessRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            SecretmanagerProjectsSecretsVersionsAccessResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsAccess(req, new SecretmanagerProjectsSecretsVersionsAccessSecurity("distinctio", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.accessSecretVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsVersionsDestroy

Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsDestroyRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsDestroyResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsDestroySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsDestroyRequest req = new SecretmanagerProjectsSecretsVersionsDestroyRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("natus", "nobis");
                    put("eum", "vero");
                }};
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            SecretmanagerProjectsSecretsVersionsDestroyResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsDestroy(req, new SecretmanagerProjectsSecretsVersionsDestroySecurity("accusantium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secretVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsVersionsDisable

Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsDisableRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsDisableResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsDisableSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsDisableRequest req = new SecretmanagerProjectsSecretsVersionsDisableRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eum", "dolor");
                    put("necessitatibus", "odit");
                }};
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "doloribus";
                key = "debitis";
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "deleniti";
                uploadProtocol = "facilis";
            }};            

            SecretmanagerProjectsSecretsVersionsDisableResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsDisable(req, new SecretmanagerProjectsSecretsVersionsDisableSecurity("in", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secretVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsVersionsEnable

Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsEnableRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsEnableResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsEnableSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsEnableRequest req = new SecretmanagerProjectsSecretsVersionsEnableRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("expedita", "nihil");
                    put("repellat", "quibusdam");
                }};
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            SecretmanagerProjectsSecretsVersionsEnableResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsEnable(req, new SecretmanagerProjectsSecretsVersionsEnableSecurity("quo", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secretVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsVersionsGet

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the `latest` SecretVersion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsGetRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsGetResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsGetRequest req = new SecretmanagerProjectsSecretsVersionsGetRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "ea";
                key = "accusantium";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "quidem";
                uploadProtocol = "ipsam";
            }};            

            SecretmanagerProjectsSecretsVersionsGetResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsGet(req, new SecretmanagerProjectsSecretsVersionsGetSecurity("voluptate", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.secretVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretmanagerProjectsSecretsVersionsList

Lists SecretVersions. This call does not return secret data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsListRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsListResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsSecretsVersionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsListRequest req = new SecretmanagerProjectsSecretsVersionsListRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                pageSize = 11714L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            SecretmanagerProjectsSecretsVersionsListResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsList(req, new SecretmanagerProjectsSecretsVersionsListSecurity("nobis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSecretVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
