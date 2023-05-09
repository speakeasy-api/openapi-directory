# projects

### Available Operations

* [orgpolicyProjectsConstraintsList](#orgpolicyprojectsconstraintslist) - Lists constraints that could be applied on the specified resource.
* [orgpolicyProjectsPoliciesCreate](#orgpolicyprojectspoliciescreate) - Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.
* [orgpolicyProjectsPoliciesDelete](#orgpolicyprojectspoliciesdelete) - Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.
* [orgpolicyProjectsPoliciesGet](#orgpolicyprojectspoliciesget) - Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.
* [orgpolicyProjectsPoliciesGetEffectivePolicy](#orgpolicyprojectspoliciesgeteffectivepolicy) - Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
* [orgpolicyProjectsPoliciesList](#orgpolicyprojectspolicieslist) - Retrieves all of the policies that exist on a particular resource.
* [orgpolicyProjectsPoliciesPatch](#orgpolicyprojectspoliciespatch) - Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

## orgpolicyProjectsConstraintsList

Lists constraints that could be applied on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsConstraintsListRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsConstraintsListResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsConstraintsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsConstraintsListRequest req = new OrgpolicyProjectsConstraintsListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "fuga";
                key = "in";
                oauthToken = "corporis";
                pageSize = 613064L;
                pageToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            OrgpolicyProjectsConstraintsListResponse res = sdk.projects.orgpolicyProjectsConstraintsList(req, new OrgpolicyProjectsConstraintsListSecurity("ipsa", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2ListConstraintsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgpolicyProjectsPoliciesCreate

Creates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Google Cloud resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesCreateRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesCreateResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2AlternatePolicySpecInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicyInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsPoliciesCreateRequest req = new OrgpolicyProjectsPoliciesCreateRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudOrgpolicyV2PolicyInput = new GoogleCloudOrgpolicyV2PolicyInput() {{
                    alternate = new GoogleCloudOrgpolicyV2AlternatePolicySpecInput() {{
                        launch = "laborum";
                        spec = new GoogleCloudOrgpolicyV2PolicySpecInput() {{
                            etag = "dolores";
                            inheritFromParent = false;
                            reset = false;
                            rules = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule[]{{
                                add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                    allowAll = false;
                                    condition = new GoogleTypeExpr() {{
                                        description = "corporis";
                                        expression = "explicabo";
                                        location = "nobis";
                                        title = "Mrs.";
                                    }};
                                    denyAll = false;
                                    enforce = false;
                                    values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                        allowedValues = new String[]{{
                                            add("nemo"),
                                            add("minima"),
                                            add("excepturi"),
                                        }};
                                        deniedValues = new String[]{{
                                            add("iure"),
                                        }};
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    dryRunSpec = new GoogleCloudOrgpolicyV2PolicySpecInput() {{
                        etag = "culpa";
                        inheritFromParent = false;
                        reset = false;
                        rules = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule[]{{
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "sapiente";
                                    expression = "architecto";
                                    location = "mollitia";
                                    title = "Mrs.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("consequuntur"),
                                        add("repellat"),
                                        add("mollitia"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("numquam"),
                                        add("commodi"),
                                        add("quam"),
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "molestiae";
                                    expression = "velit";
                                    location = "error";
                                    title = "Mr.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("vitae"),
                                        add("laborum"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("enim"),
                                        add("odit"),
                                        add("quo"),
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "sequi";
                                    expression = "tenetur";
                                    location = "ipsam";
                                    title = "Miss";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("aut"),
                                        add("quasi"),
                                        add("error"),
                                        add("temporibus"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("quasi"),
                                        add("reiciendis"),
                                        add("voluptatibus"),
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "vero";
                                    expression = "nihil";
                                    location = "praesentium";
                                    title = "Dr.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("omnis"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                }};
                            }}),
                        }};
                    }};;
                    name = "Bessie Grady II";
                    spec = new GoogleCloudOrgpolicyV2PolicySpecInput() {{
                        etag = "dolore";
                        inheritFromParent = false;
                        reset = false;
                        rules = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule[]{{
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "dicta";
                                    expression = "harum";
                                    location = "enim";
                                    title = "Dr.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("repudiandae"),
                                        add("quae"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("quidem"),
                                    }};
                                }};
                            }}),
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "molestias";
                                    expression = "excepturi";
                                    location = "pariatur";
                                    title = "Mrs.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("rem"),
                                        add("voluptates"),
                                        add("quasi"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("sint"),
                                        add("veritatis"),
                                        add("itaque"),
                                        add("incidunt"),
                                    }};
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quibusdam";
                key = "explicabo";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quibusdam";
                uploadProtocol = "labore";
            }};            

            OrgpolicyProjectsPoliciesCreateResponse res = sdk.projects.orgpolicyProjectsPoliciesCreate(req, new OrgpolicyProjectsPoliciesCreateSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgpolicyProjectsPoliciesDelete

Deletes a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or organization policy does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsPoliciesDeleteRequest req = new OrgpolicyProjectsPoliciesDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "dolorum";
                uploadProtocol = "excepturi";
            }};            

            OrgpolicyProjectsPoliciesDeleteResponse res = sdk.projects.orgpolicyProjectsPoliciesDelete(req, new OrgpolicyProjectsPoliciesDeleteSecurity("tempora", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgpolicyProjectsPoliciesGet

Gets a policy on a resource. If no policy is set on the resource, `NOT_FOUND` is returned. The `etag` value can be used with `UpdatePolicy()` to update a policy during read-modify-write.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesGetRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesGetResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsPoliciesGetRequest req = new OrgpolicyProjectsPoliciesGetRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
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

            OrgpolicyProjectsPoliciesGetResponse res = sdk.projects.orgpolicyProjectsPoliciesGet(req, new OrgpolicyProjectsPoliciesGetSecurity("officia", "dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgpolicyProjectsPoliciesGetEffectivePolicy

Gets the effective policy on a resource. This is the result of merging policies in the resource hierarchy and evaluating conditions. The returned policy will not have an `etag` or `condition` set because it is an evaluated policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesGetEffectivePolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsPoliciesGetEffectivePolicyRequest req = new OrgpolicyProjectsPoliciesGetEffectivePolicyRequest("debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            OrgpolicyProjectsPoliciesGetEffectivePolicyResponse res = sdk.projects.orgpolicyProjectsPoliciesGetEffectivePolicy(req, new OrgpolicyProjectsPoliciesGetEffectivePolicySecurity("facere", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgpolicyProjectsPoliciesList

Retrieves all of the policies that exist on a particular resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesListRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesListResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsPoliciesListRequest req = new OrgpolicyProjectsPoliciesListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                pageSize = 692532L;
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "id";
                uploadProtocol = "blanditiis";
            }};            

            OrgpolicyProjectsPoliciesListResponse res = sdk.projects.orgpolicyProjectsPoliciesList(req, new OrgpolicyProjectsPoliciesListSecurity("deleniti", "sapiente") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2ListPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgpolicyProjectsPoliciesPatch

Updates a policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesPatchRequest;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesPatchResponse;
import org.openapis.openapi.models.operations.OrgpolicyProjectsPoliciesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2AlternatePolicySpecInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicyInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecInput;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule;
import org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgpolicyProjectsPoliciesPatchRequest req = new OrgpolicyProjectsPoliciesPatchRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudOrgpolicyV2PolicyInput = new GoogleCloudOrgpolicyV2PolicyInput() {{
                    alternate = new GoogleCloudOrgpolicyV2AlternatePolicySpecInput() {{
                        launch = "nisi";
                        spec = new GoogleCloudOrgpolicyV2PolicySpecInput() {{
                            etag = "vel";
                            inheritFromParent = false;
                            reset = false;
                            rules = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule[]{{
                                add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                    allowAll = false;
                                    condition = new GoogleTypeExpr() {{
                                        description = "omnis";
                                        expression = "molestiae";
                                        location = "perferendis";
                                        title = "Ms.";
                                    }};
                                    denyAll = false;
                                    enforce = false;
                                    values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                        allowedValues = new String[]{{
                                            add("distinctio"),
                                            add("id"),
                                        }};
                                        deniedValues = new String[]{{
                                            add("labore"),
                                            add("suscipit"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                    allowAll = false;
                                    condition = new GoogleTypeExpr() {{
                                        description = "natus";
                                        expression = "nobis";
                                        location = "eum";
                                        title = "Dr.";
                                    }};
                                    denyAll = false;
                                    enforce = false;
                                    values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                        allowedValues = new String[]{{
                                            add("architecto"),
                                        }};
                                        deniedValues = new String[]{{
                                            add("et"),
                                            add("excepturi"),
                                        }};
                                    }};
                                }}),
                                add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                    allowAll = false;
                                    condition = new GoogleTypeExpr() {{
                                        description = "ullam";
                                        expression = "provident";
                                        location = "quos";
                                        title = "Ms.";
                                    }};
                                    denyAll = false;
                                    enforce = false;
                                    values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                        allowedValues = new String[]{{
                                            add("mollitia"),
                                        }};
                                        deniedValues = new String[]{{
                                            add("mollitia"),
                                            add("ad"),
                                            add("eum"),
                                            add("dolor"),
                                        }};
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    dryRunSpec = new GoogleCloudOrgpolicyV2PolicySpecInput() {{
                        etag = "necessitatibus";
                        inheritFromParent = false;
                        reset = false;
                        rules = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule[]{{
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "nemo";
                                    expression = "quasi";
                                    location = "iure";
                                    title = "Dr.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("eius"),
                                        add("maxime"),
                                        add("deleniti"),
                                        add("facilis"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                }};
                            }}),
                        }};
                    }};;
                    name = "Pedro Ratke";
                    spec = new GoogleCloudOrgpolicyV2PolicySpecInput() {{
                        etag = "quibusdam";
                        inheritFromParent = false;
                        reset = false;
                        rules = new org.openapis.openapi.models.shared.GoogleCloudOrgpolicyV2PolicySpecPolicyRule[]{{
                            add(new GoogleCloudOrgpolicyV2PolicySpecPolicyRule() {{
                                allowAll = false;
                                condition = new GoogleTypeExpr() {{
                                    description = "saepe";
                                    expression = "pariatur";
                                    location = "accusantium";
                                    title = "Mr.";
                                }};
                                denyAll = false;
                                enforce = false;
                                values = new GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues() {{
                                    allowedValues = new String[]{{
                                        add("natus"),
                                        add("magni"),
                                        add("sunt"),
                                    }};
                                    deniedValues = new String[]{{
                                        add("illum"),
                                        add("pariatur"),
                                        add("maxime"),
                                        add("ea"),
                                    }};
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quidem";
                updateMask = "ipsam";
                uploadType = "voluptate";
                uploadProtocol = "autem";
            }};            

            OrgpolicyProjectsPoliciesPatchResponse res = sdk.projects.orgpolicyProjectsPoliciesPatch(req, new OrgpolicyProjectsPoliciesPatchSecurity("nam", "eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudOrgpolicyV2Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
