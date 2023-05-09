# tagValues

### Available Operations

* [cloudresourcemanagerTagValuesCreate](#cloudresourcemanagertagvaluescreate) - Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
* [cloudresourcemanagerTagValuesGet](#cloudresourcemanagertagvaluesget) - Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* [cloudresourcemanagerTagValuesGetIamPolicy](#cloudresourcemanagertagvaluesgetiampolicy) - Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
* [cloudresourcemanagerTagValuesGetNamespaced](#cloudresourcemanagertagvaluesgetnamespaced) - Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
* [cloudresourcemanagerTagValuesList](#cloudresourcemanagertagvalueslist) - Lists all TagValues for a specific TagKey.
* [cloudresourcemanagerTagValuesPatch](#cloudresourcemanagertagvaluespatch) - Updates the attributes of the TagValue resource.
* [cloudresourcemanagerTagValuesSetIamPolicy](#cloudresourcemanagertagvaluessetiampolicy) - Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
* [cloudresourcemanagerTagValuesTagHoldsCreate](#cloudresourcemanagertagvaluestagholdscreate) - Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
* [cloudresourcemanagerTagValuesTagHoldsDelete](#cloudresourcemanagertagvaluestagholdsdelete) - Deletes a TagHold.
* [cloudresourcemanagerTagValuesTagHoldsList](#cloudresourcemanagertagvaluestagholdslist) - Lists TagHolds under a TagValue.
* [cloudresourcemanagerTagValuesTestIamPermissions](#cloudresourcemanagertagvaluestestiampermissions) - Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

## cloudresourcemanagerTagValuesCreate

Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TagValueInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesCreateRequest req = new CloudresourcemanagerTagValuesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                tagValueInput = new TagValueInput() {{
                    description = "accusantium";
                    etag = "consequuntur";
                    name = "Miss Nick Cummerata";
                    parent = "pariatur";
                    shortName = "maxime";
                }};;
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
                validateOnly = false;
            }};            

            CloudresourcemanagerTagValuesCreateResponse res = sdk.tagValues.cloudresourcemanagerTagValuesCreate(req, new CloudresourcemanagerTagValuesCreateSecurity("voluptate", "autem") {{
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

## cloudresourcemanagerTagValuesGet

Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesGetRequest req = new CloudresourcemanagerTagValuesGetRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "perferendis";
                key = "fugiat";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "cumque";
                uploadProtocol = "corporis";
            }};            

            CloudresourcemanagerTagValuesGetResponse res = sdk.tagValues.cloudresourcemanagerTagValuesGet(req, new CloudresourcemanagerTagValuesGetSecurity() {{
                option1 = new CloudresourcemanagerTagValuesGetSecurityOption1("hic", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tagValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerTagValuesGetIamPolicy

Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesGetIamPolicyRequest req = new CloudresourcemanagerTagValuesGetIamPolicyRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 339404;
                    }};;
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                key = "nesciunt";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "dolores";
                uploadProtocol = "minus";
            }};            

            CloudresourcemanagerTagValuesGetIamPolicyResponse res = sdk.tagValues.cloudresourcemanagerTagValuesGetIamPolicy(req, new CloudresourcemanagerTagValuesGetIamPolicySecurity() {{
                option1 = new CloudresourcemanagerTagValuesGetIamPolicySecurityOption1("quam", "dolor") {{
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

## cloudresourcemanagerTagValuesGetNamespaced

Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetNamespacedRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetNamespacedResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetNamespacedSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetNamespacedSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesGetNamespacedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesGetNamespacedRequest req = new CloudresourcemanagerTagValuesGetNamespacedRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "omnis";
                key = "facilis";
                name = "George Sawayn";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "occaecati";
                uploadProtocol = "rerum";
            }};            

            CloudresourcemanagerTagValuesGetNamespacedResponse res = sdk.tagValues.cloudresourcemanagerTagValuesGetNamespaced(req, new CloudresourcemanagerTagValuesGetNamespacedSecurity() {{
                option1 = new CloudresourcemanagerTagValuesGetNamespacedSecurityOption1("adipisci", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tagValue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerTagValuesList

Lists all TagValues for a specific TagKey.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesListRequest req = new CloudresourcemanagerTagValuesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "pariatur";
                oauthToken = "provident";
                pageSize = 750844L;
                pageToken = "libero";
                parent = "delectus";
                prettyPrint = false;
                quotaUser = "quaerat";
                uploadType = "quos";
                uploadProtocol = "aliquid";
            }};            

            CloudresourcemanagerTagValuesListResponse res = sdk.tagValues.cloudresourcemanagerTagValuesList(req, new CloudresourcemanagerTagValuesListSecurity() {{
                option1 = new CloudresourcemanagerTagValuesListSecurityOption1("dolorem", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTagValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerTagValuesPatch

Updates the attributes of the TagValue resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesPatchRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesPatchResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TagValueInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesPatchRequest req = new CloudresourcemanagerTagValuesPatchRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                tagValueInput = new TagValueInput() {{
                    description = "ipsum";
                    etag = "hic";
                    name = "Felipe Klein";
                    parent = "amet";
                    shortName = "dolorum";
                }};;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "ipsa";
                key = "iure";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quaerat";
                updateMask = "accusamus";
                uploadType = "quidem";
                uploadProtocol = "voluptatibus";
                validateOnly = false;
            }};            

            CloudresourcemanagerTagValuesPatchResponse res = sdk.tagValues.cloudresourcemanagerTagValuesPatch(req, new CloudresourcemanagerTagValuesPatchSecurity("voluptas", "natus") {{
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

## cloudresourcemanagerTagValuesSetIamPolicy

Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesSetIamPolicySecurity;
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

            CloudresourcemanagerTagValuesSetIamPolicyRequest req = new CloudresourcemanagerTagValuesSetIamPolicyRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("soluta"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptate"),
                                            add("dolorum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("distinctio"),
                                            add("asperiores"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptate"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "saepe";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aspernatur";
                                    expression = "perferendis";
                                    location = "amet";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                    add("deserunt"),
                                }};
                                role = "provident";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "minima";
                                    expression = "repellendus";
                                    location = "totam";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("at"),
                                }};
                                role = "quaerat";
                            }}),
                        }};
                        etag = "tempora";
                        version = 425451;
                    }};;
                    updateMask = "quod";
                }};;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "a";
                key = "esse";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "ipsum";
                uploadProtocol = "quisquam";
            }};            

            CloudresourcemanagerTagValuesSetIamPolicyResponse res = sdk.tagValues.cloudresourcemanagerTagValuesSetIamPolicy(req, new CloudresourcemanagerTagValuesSetIamPolicySecurity("tenetur", "amet") {{
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

## cloudresourcemanagerTagValuesTagHoldsCreate

Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsCreateRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsCreateResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TagHoldInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesTagHoldsCreateRequest req = new CloudresourcemanagerTagValuesTagHoldsCreateRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                tagHoldInput = new TagHoldInput() {{
                    helpLink = "numquam";
                    holder = "enim";
                    origin = "dolorem";
                }};;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "nihil";
                fields = "sit";
                key = "expedita";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "vel";
                uploadProtocol = "libero";
                validateOnly = false;
            }};            

            CloudresourcemanagerTagValuesTagHoldsCreateResponse res = sdk.tagValues.cloudresourcemanagerTagValuesTagHoldsCreate(req, new CloudresourcemanagerTagValuesTagHoldsCreateSecurity("voluptas", "deserunt") {{
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

## cloudresourcemanagerTagValuesTagHoldsDelete

Deletes a TagHold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsDeleteRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsDeleteResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsDeleteSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesTagHoldsDeleteRequest req = new CloudresourcemanagerTagValuesTagHoldsDeleteRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "maxime";
                key = "pariatur";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "laborum";
                uploadProtocol = "totam";
                validateOnly = false;
            }};            

            CloudresourcemanagerTagValuesTagHoldsDeleteResponse res = sdk.tagValues.cloudresourcemanagerTagValuesTagHoldsDelete(req, new CloudresourcemanagerTagValuesTagHoldsDeleteSecurity() {{
                option1 = new CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1("incidunt", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## cloudresourcemanagerTagValuesTagHoldsList

Lists TagHolds under a TagValue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsListRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsListResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsListSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTagHoldsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesTagHoldsListRequest req = new CloudresourcemanagerTagValuesTagHoldsListRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "molestias";
                filter = "temporibus";
                key = "qui";
                oauthToken = "neque";
                pageSize = 144847L;
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "sunt";
                uploadProtocol = "ullam";
            }};            

            CloudresourcemanagerTagValuesTagHoldsListResponse res = sdk.tagValues.cloudresourcemanagerTagValuesTagHoldsList(req, new CloudresourcemanagerTagValuesTagHoldsListSecurity() {{
                option1 = new CloudresourcemanagerTagValuesTagHoldsListSecurityOption1("nam", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTagHoldsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudresourcemanagerTagValuesTestIamPermissions

Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudresourcemanagerTagValuesTestIamPermissionsRequest req = new CloudresourcemanagerTagValuesTestIamPermissionsRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nobis"),
                        add("et"),
                        add("saepe"),
                    }};
                }};;
                accessToken = "ipsum";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "quos";
                key = "tempore";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "delectus";
                uploadProtocol = "dolorem";
            }};            

            CloudresourcemanagerTagValuesTestIamPermissionsResponse res = sdk.tagValues.cloudresourcemanagerTagValuesTestIamPermissions(req, new CloudresourcemanagerTagValuesTestIamPermissionsSecurity() {{
                option1 = new CloudresourcemanagerTagValuesTestIamPermissionsSecurityOption1("dolore", "labore") {{
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
