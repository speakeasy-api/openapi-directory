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
* [secretmanagerProjectsSecretsVersionsAccess](#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* [secretmanagerProjectsSecretsVersionsDestroy](#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [secretmanagerProjectsSecretsVersionsDisable](#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [secretmanagerProjectsSecretsVersionsEnable](#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [secretmanagerProjectsSecretsVersionsGet](#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
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
                        dataCrc32c = "sapiente";
                    }};;
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }};            

            SecretmanagerProjectsSecretsAddVersionResponse res = sdk.projects.secretmanagerProjectsSecretsAddVersion(req, new SecretmanagerProjectsSecretsAddVersionSecurity("totam", "porro") {{
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
import org.openapis.openapi.models.shared.Automatic;
import org.openapis.openapi.models.shared.CustomerManagedEncryption;
import org.openapis.openapi.models.shared.Replica;
import org.openapis.openapi.models.shared.Replication;
import org.openapis.openapi.models.shared.Rotation;
import org.openapis.openapi.models.shared.SecretInput;
import org.openapis.openapi.models.shared.Topic;
import org.openapis.openapi.models.shared.UserManaged;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsCreateRequest req = new SecretmanagerProjectsSecretsCreateRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                secretInput = new SecretInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("officia", "occaecati");
                        put("fugit", "deleniti");
                        put("hic", "optio");
                    }};
                    etag = "totam";
                    expireTime = "beatae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "modi");
                        put("qui", "impedit");
                    }};
                    replication = new Replication() {{
                        automatic = new Automatic() {{
                            customerManagedEncryption = new CustomerManagedEncryption() {{
                                kmsKeyName = "cum";
                            }};;
                        }};;
                        userManaged = new UserManaged() {{
                            replicas = new org.openapis.openapi.models.shared.Replica[]{{
                                add(new Replica() {{
                                    customerManagedEncryption = new CustomerManagedEncryption() {{
                                        kmsKeyName = "ipsum";
                                    }};
                                    location = "excepturi";
                                }}),
                                add(new Replica() {{
                                    customerManagedEncryption = new CustomerManagedEncryption() {{
                                        kmsKeyName = "aspernatur";
                                    }};
                                    location = "perferendis";
                                }}),
                            }};
                        }};;
                    }};;
                    rotation = new Rotation() {{
                        nextRotationTime = "ad";
                        rotationPeriod = "natus";
                    }};;
                    topics = new org.openapis.openapi.models.shared.Topic[]{{
                        add(new Topic() {{
                            name = "Curtis Morissette";
                        }}),
                    }};
                    ttl = "saepe";
                    versionAliases = new java.util.HashMap<String, String>() {{
                        put("in", "corporis");
                        put("iste", "iure");
                        put("saepe", "quidem");
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "est";
                key = "mollitia";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                secretId = "dolorem";
                uploadType = "corporis";
                uploadProtocol = "explicabo";
            }};            

            SecretmanagerProjectsSecretsCreateResponse res = sdk.projects.secretmanagerProjectsSecretsCreate(req, new SecretmanagerProjectsSecretsCreateSecurity("nobis", "enim") {{
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

            SecretmanagerProjectsSecretsDeleteRequest req = new SecretmanagerProjectsSecretsDeleteRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                etag = "iure";
                fields = "culpa";
                key = "doloribus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "mollitia";
                uploadProtocol = "dolorem";
            }};            

            SecretmanagerProjectsSecretsDeleteResponse res = sdk.projects.secretmanagerProjectsSecretsDelete(req, new SecretmanagerProjectsSecretsDeleteSecurity("culpa", "consequuntur") {{
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

            SecretmanagerProjectsSecretsGetIamPolicyRequest req = new SecretmanagerProjectsSecretsGetIamPolicyRequest("repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                optionsRequestedPolicyVersion = 623510L;
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quis";
                uploadProtocol = "vitae";
            }};            

            SecretmanagerProjectsSecretsGetIamPolicyResponse res = sdk.projects.secretmanagerProjectsSecretsGetIamPolicy(req, new SecretmanagerProjectsSecretsGetIamPolicySecurity("laborum", "animi") {{
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

            SecretmanagerProjectsSecretsListRequest req = new SecretmanagerProjectsSecretsListRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "ipsam";
                filter = "id";
                key = "possimus";
                oauthToken = "aut";
                pageSize = 97101L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "laborum";
                uploadProtocol = "quasi";
            }};            

            SecretmanagerProjectsSecretsListResponse res = sdk.projects.secretmanagerProjectsSecretsList(req, new SecretmanagerProjectsSecretsListSecurity("reiciendis", "voluptatibus") {{
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
import org.openapis.openapi.models.shared.Automatic;
import org.openapis.openapi.models.shared.CustomerManagedEncryption;
import org.openapis.openapi.models.shared.Replica;
import org.openapis.openapi.models.shared.Replication;
import org.openapis.openapi.models.shared.Rotation;
import org.openapis.openapi.models.shared.SecretInput;
import org.openapis.openapi.models.shared.Topic;
import org.openapis.openapi.models.shared.UserManaged;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsPatchRequest req = new SecretmanagerProjectsSecretsPatchRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                secretInput = new SecretInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("voluptatibus", "ipsa");
                        put("omnis", "voluptate");
                        put("cum", "perferendis");
                    }};
                    etag = "doloremque";
                    expireTime = "reprehenderit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("maiores", "dicta");
                        put("corporis", "dolore");
                    }};
                    replication = new Replication() {{
                        automatic = new Automatic() {{
                            customerManagedEncryption = new CustomerManagedEncryption() {{
                                kmsKeyName = "iusto";
                            }};;
                        }};;
                        userManaged = new UserManaged() {{
                            replicas = new org.openapis.openapi.models.shared.Replica[]{{
                                add(new Replica() {{
                                    customerManagedEncryption = new CustomerManagedEncryption() {{
                                        kmsKeyName = "harum";
                                    }};
                                    location = "enim";
                                }}),
                            }};
                        }};;
                    }};;
                    rotation = new Rotation() {{
                        nextRotationTime = "accusamus";
                        rotationPeriod = "commodi";
                    }};;
                    topics = new org.openapis.openapi.models.shared.Topic[]{{
                        add(new Topic() {{
                            name = "Edna Pouros";
                        }}),
                        add(new Topic() {{
                            name = "Joel Lang";
                        }}),
                        add(new Topic() {{
                            name = "Dr. Casey Mayer";
                        }}),
                        add(new Topic() {{
                            name = "Elizabeth Orn";
                        }}),
                    }};
                    ttl = "deserunt";
                    versionAliases = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "labore");
                        put("modi", "qui");
                        put("aliquid", "cupiditate");
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                updateMask = "dolorum";
                uploadType = "excepturi";
                uploadProtocol = "tempora";
            }};            

            SecretmanagerProjectsSecretsPatchResponse res = sdk.projects.secretmanagerProjectsSecretsPatch(req, new SecretmanagerProjectsSecretsPatchSecurity("facilis", "tempore") {{
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

            SecretmanagerProjectsSecretsSetIamPolicyRequest req = new SecretmanagerProjectsSecretsSetIamPolicyRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sint"),
                                            add("aliquid"),
                                            add("provident"),
                                            add("necessitatibus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "officia";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("a"),
                                            add("dolorum"),
                                            add("in"),
                                            add("in"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "maiores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dicta";
                                    expression = "magnam";
                                    location = "cumque";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("aliquid"),
                                    add("laborum"),
                                }};
                                role = "accusamus";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "non";
                                    expression = "occaecati";
                                    location = "enim";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quidem"),
                                    add("provident"),
                                    add("nam"),
                                    add("id"),
                                }};
                                role = "blanditiis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "deleniti";
                                    expression = "sapiente";
                                    location = "amet";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("vel"),
                                    add("natus"),
                                }};
                                role = "omnis";
                            }}),
                        }};
                        etag = "molestiae";
                        version = 19193;
                    }};;
                    updateMask = "nihil";
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "labore";
                key = "labore";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "nobis";
                uploadProtocol = "eum";
            }};            

            SecretmanagerProjectsSecretsSetIamPolicyResponse res = sdk.projects.secretmanagerProjectsSecretsSetIamPolicy(req, new SecretmanagerProjectsSecretsSetIamPolicySecurity("vero", "aspernatur") {{
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

            SecretmanagerProjectsSecretsTestIamPermissionsRequest req = new SecretmanagerProjectsSecretsTestIamPermissionsRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("excepturi"),
                    }};
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

            SecretmanagerProjectsSecretsTestIamPermissionsResponse res = sdk.projects.secretmanagerProjectsSecretsTestIamPermissions(req, new SecretmanagerProjectsSecretsTestIamPermissionsSecurity("eum", "dolor") {{
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

Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

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

            SecretmanagerProjectsSecretsVersionsAccessRequest req = new SecretmanagerProjectsSecretsVersionsAccessRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.ONE;
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

            SecretmanagerProjectsSecretsVersionsAccessResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsAccess(req, new SecretmanagerProjectsSecretsVersionsAccessSecurity("in", "architecto") {{
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
import org.openapis.openapi.models.shared.DestroySecretVersionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsDestroyRequest req = new SecretmanagerProjectsSecretsVersionsDestroyRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                destroySecretVersionRequest = new DestroySecretVersionRequest() {{
                    etag = "ullam";
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "quibusdam";
                key = "sed";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "accusantium";
                uploadProtocol = "consequuntur";
            }};            

            SecretmanagerProjectsSecretsVersionsDestroyResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsDestroy(req, new SecretmanagerProjectsSecretsVersionsDestroySecurity("praesentium", "natus") {{
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
import org.openapis.openapi.models.shared.DisableSecretVersionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsDisableRequest req = new SecretmanagerProjectsSecretsVersionsDisableRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                disableSecretVersionRequest = new DisableSecretVersionRequest() {{
                    etag = "quo";
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "accusantium";
                uploadProtocol = "ab";
            }};            

            SecretmanagerProjectsSecretsVersionsDisableResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsDisable(req, new SecretmanagerProjectsSecretsVersionsDisableSecurity("maiores", "quidem") {{
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
import org.openapis.openapi.models.shared.EnableSecretVersionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsSecretsVersionsEnableRequest req = new SecretmanagerProjectsSecretsVersionsEnableRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                enableSecretVersionRequest = new EnableSecretVersionRequest() {{
                    etag = "autem";
                }};;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "nemo";
                key = "voluptatibus";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "amet";
                uploadProtocol = "aut";
            }};            

            SecretmanagerProjectsSecretsVersionsEnableResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsEnable(req, new SecretmanagerProjectsSecretsVersionsEnableSecurity("cumque", "corporis") {{
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

Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.

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

            SecretmanagerProjectsSecretsVersionsGetRequest req = new SecretmanagerProjectsSecretsVersionsGetRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "totam";
                key = "dignissimos";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "nesciunt";
                uploadProtocol = "eos";
            }};            

            SecretmanagerProjectsSecretsVersionsGetResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsGet(req, new SecretmanagerProjectsSecretsVersionsGetSecurity("perferendis", "dolores") {{
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

            SecretmanagerProjectsSecretsVersionsListRequest req = new SecretmanagerProjectsSecretsVersionsListRequest("minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "hic";
                filter = "recusandae";
                key = "omnis";
                oauthToken = "facilis";
                pageSize = 596656L;
                pageToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "consequuntur";
                uploadProtocol = "blanditiis";
            }};            

            SecretmanagerProjectsSecretsVersionsListResponse res = sdk.projects.secretmanagerProjectsSecretsVersionsList(req, new SecretmanagerProjectsSecretsVersionsListSecurity("error", "eaque") {{
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
