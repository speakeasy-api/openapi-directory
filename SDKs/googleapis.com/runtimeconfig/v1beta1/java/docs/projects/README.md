# projects

### Available Operations

* [runtimeconfigProjectsConfigsCreate](#runtimeconfigprojectsconfigscreate) - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* [runtimeconfigProjectsConfigsGetIamPolicy](#runtimeconfigprojectsconfigsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [runtimeconfigProjectsConfigsList](#runtimeconfigprojectsconfigslist) - Lists all the RuntimeConfig resources within project.
* [runtimeconfigProjectsConfigsSetIamPolicy](#runtimeconfigprojectsconfigssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [runtimeconfigProjectsConfigsVariablesCreate](#runtimeconfigprojectsconfigsvariablescreate) - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* [runtimeconfigProjectsConfigsVariablesList](#runtimeconfigprojectsconfigsvariableslist) - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* [runtimeconfigProjectsConfigsVariablesUpdate](#runtimeconfigprojectsconfigsvariablesupdate) - Updates an existing variable with a new value.
* [runtimeconfigProjectsConfigsVariablesWatch](#runtimeconfigprojectsconfigsvariableswatch) - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* [runtimeconfigProjectsConfigsWaitersCreate](#runtimeconfigprojectsconfigswaiterscreate) - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* [runtimeconfigProjectsConfigsWaitersDelete](#runtimeconfigprojectsconfigswaitersdelete) - Deletes the waiter with the specified name.
* [runtimeconfigProjectsConfigsWaitersGet](#runtimeconfigprojectsconfigswaitersget) - Gets information about a single waiter.
* [runtimeconfigProjectsConfigsWaitersList](#runtimeconfigprojectsconfigswaiterslist) - List waiters within the given configuration.
* [runtimeconfigProjectsConfigsWaitersTestIamPermissions](#runtimeconfigprojectsconfigswaiterstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## runtimeconfigProjectsConfigsCreate

Creates a new RuntimeConfig resource. The configuration name must be unique within project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsCreateRequest req = new RuntimeconfigProjectsConfigsCreateRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                runtimeConfig = new RuntimeConfig() {{
                    description = "voluptatum";
                    name = "Miriam Huel";
                }};;
                accessToken = "ab";
                alt = AltEnum.MEDIA;
                callback = "veritatis";
                fields = "deserunt";
                key = "perferendis";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "repellendus";
                requestId = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            RuntimeconfigProjectsConfigsCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsCreate(req, new RuntimeconfigProjectsConfigsCreateSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1("at", "at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runtimeConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsGetIamPolicyRequest req = new RuntimeconfigProjectsConfigsGetIamPolicyRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "totam";
                key = "porro";
                oauthToken = "dolorum";
                optionsRequestedPolicyVersion = 118274L;
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            RuntimeconfigProjectsConfigsGetIamPolicyResponse res = sdk.projects.runtimeconfigProjectsConfigsGetIamPolicy(req, new RuntimeconfigProjectsConfigsGetIamPolicySecurity() {{
                option1 = new RuntimeconfigProjectsConfigsGetIamPolicySecurityOption1("fugit", "deleniti") {{
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

## runtimeconfigProjectsConfigsList

Lists all the RuntimeConfig resources within project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsListRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsListResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsListSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsListSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsListRequest req = new RuntimeconfigProjectsConfigsListRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                pageSize = 774234L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            RuntimeconfigProjectsConfigsListResponse res = sdk.projects.runtimeconfigProjectsConfigsList(req, new RuntimeconfigProjectsConfigsListSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsListSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
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

            RuntimeconfigProjectsConfigsSetIamPolicyRequest req = new RuntimeconfigProjectsConfigsSetIamPolicyRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "iste";
                                    expression = "dolor";
                                    location = "natus";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("saepe"),
                                    add("fuga"),
                                    add("in"),
                                    add("corporis"),
                                }};
                                role = "iste";
                            }}),
                        }};
                        etag = "iure";
                        version = 902349;
                    }};;
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "dolores";
                uploadProtocol = "dolorem";
            }};            

            RuntimeconfigProjectsConfigsSetIamPolicyResponse res = sdk.projects.runtimeconfigProjectsConfigsSetIamPolicy(req, new RuntimeconfigProjectsConfigsSetIamPolicySecurity() {{
                option1 = new RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1("corporis", "explicabo") {{
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

## runtimeconfigProjectsConfigsVariablesCreate

Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesCreateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesCreateResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesCreateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.VariableStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsVariablesCreateRequest req = new RuntimeconfigProjectsConfigsVariablesCreateRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                variable = new Variable() {{
                    name = "Corey Hane III";
                    state = VariableStateEnum.UPDATED;
                    text = "doloribus";
                    updateTime = "sapiente";
                    value = "architecto";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                requestId = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            RuntimeconfigProjectsConfigsVariablesCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsVariablesCreate(req, new RuntimeconfigProjectsConfigsVariablesCreateSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1("molestiae", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.variable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsVariablesList

Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesListRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesListResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesListSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesListSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsVariablesListRequest req = new RuntimeconfigProjectsConfigsVariablesListRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                filter = "enim";
                key = "odit";
                oauthToken = "quo";
                pageSize = 196582L;
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                returnValues = false;
                uploadType = "id";
                uploadProtocol = "possimus";
            }};            

            RuntimeconfigProjectsConfigsVariablesListResponse res = sdk.projects.runtimeconfigProjectsConfigsVariablesList(req, new RuntimeconfigProjectsConfigsVariablesListSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsVariablesListSecurityOption1("aut", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listVariablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsVariablesUpdate

Updates an existing variable with a new value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesUpdateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesUpdateResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesUpdateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Variable;
import org.openapis.openapi.models.shared.VariableStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsVariablesUpdateRequest req = new RuntimeconfigProjectsConfigsVariablesUpdateRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                variable = new Variable() {{
                    name = "Ryan Witting";
                    state = VariableStateEnum.UPDATED;
                    text = "praesentium";
                    updateTime = "voluptatibus";
                    value = "ipsa";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "maiores";
                uploadProtocol = "dicta";
            }};            

            RuntimeconfigProjectsConfigsVariablesUpdateResponse res = sdk.projects.runtimeconfigProjectsConfigsVariablesUpdate(req, new RuntimeconfigProjectsConfigsVariablesUpdateSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsVariablesUpdateSecurityOption1("corporis", "dolore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.variable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsVariablesWatch

Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesWatchRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesWatchResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesWatchSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsVariablesWatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WatchVariableRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsVariablesWatchRequest req = new RuntimeconfigProjectsConfigsVariablesWatchRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                watchVariableRequest = new WatchVariableRequest() {{
                    newerThan = "harum";
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "repudiandae";
                key = "quae";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "molestias";
                uploadProtocol = "excepturi";
            }};            

            RuntimeconfigProjectsConfigsVariablesWatchResponse res = sdk.projects.runtimeconfigProjectsConfigsVariablesWatch(req, new RuntimeconfigProjectsConfigsVariablesWatchSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsVariablesWatchSecurityOption1("pariatur", "modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.variable != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsWaitersCreate

Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersCreateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersCreateResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersCreateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Cardinality;
import org.openapis.openapi.models.shared.EndCondition;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.Waiter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsWaitersCreateRequest req = new RuntimeconfigProjectsConfigsWaitersCreateRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                waiter = new Waiter() {{
                    createTime = "voluptates";
                    done = false;
                    error = new Status() {{
                        code = 93940;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("veritatis", "itaque");
                                put("incidunt", "enim");
                                put("consequatur", "est");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("explicabo", "deserunt");
                                put("distinctio", "quibusdam");
                                put("labore", "modi");
                                put("qui", "aliquid");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("quos", "perferendis");
                                put("magni", "assumenda");
                                put("ipsam", "alias");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("dolorum", "excepturi");
                            }}),
                        }};
                        message = "tempora";
                    }};;
                    failure = new EndCondition() {{
                        cardinality = new Cardinality() {{
                            number = 703737;
                            path = "tempore";
                        }};;
                    }};;
                    name = "Lucia Kemmer";
                    success = new EndCondition() {{
                        cardinality = new Cardinality() {{
                            number = 576157;
                            path = "aliquid";
                        }};;
                    }};;
                    timeout = "provident";
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "dolor";
                key = "debitis";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "dolorum";
                requestId = "in";
                uploadType = "in";
                uploadProtocol = "illum";
            }};            

            RuntimeconfigProjectsConfigsWaitersCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsWaitersCreate(req, new RuntimeconfigProjectsConfigsWaitersCreateSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1("maiores", "rerum") {{
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

## runtimeconfigProjectsConfigsWaitersDelete

Deletes the waiter with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersDeleteRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersDeleteResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersDeleteSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsWaitersDeleteRequest req = new RuntimeconfigProjectsConfigsWaitersDeleteRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                recursive = false;
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            RuntimeconfigProjectsConfigsWaitersDeleteResponse res = sdk.projects.runtimeconfigProjectsConfigsWaitersDelete(req, new RuntimeconfigProjectsConfigsWaitersDeleteSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsWaitersDeleteSecurityOption1("accusamus", "delectus") {{
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

## runtimeconfigProjectsConfigsWaitersGet

Gets information about a single waiter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersGetRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersGetResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersGetSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersGetSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsWaitersGetRequest req = new RuntimeconfigProjectsConfigsWaitersGetRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
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

            RuntimeconfigProjectsConfigsWaitersGetResponse res = sdk.projects.runtimeconfigProjectsConfigsWaitersGet(req, new RuntimeconfigProjectsConfigsWaitersGetSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsWaitersGetSecurityOption1("natus", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.waiter != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsWaitersList

List waiters within the given configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersListRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersListResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersListSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersListSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsWaitersListRequest req = new RuntimeconfigProjectsConfigsWaitersListRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "id";
                key = "labore";
                oauthToken = "labore";
                pageSize = 383462L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "eum";
                uploadProtocol = "vero";
            }};            

            RuntimeconfigProjectsConfigsWaitersListResponse res = sdk.projects.runtimeconfigProjectsConfigsWaitersList(req, new RuntimeconfigProjectsConfigsWaitersListSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsWaitersListSecurityOption1("aspernatur", "architecto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listWaitersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runtimeconfigProjectsConfigsWaitersTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest req = new RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ullam"),
                        add("provident"),
                        add("quos"),
                    }};
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            RuntimeconfigProjectsConfigsWaitersTestIamPermissionsResponse res = sdk.projects.runtimeconfigProjectsConfigsWaitersTestIamPermissions(req, new RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsWaitersTestIamPermissionsSecurityOption1("odit", "nemo") {{
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
