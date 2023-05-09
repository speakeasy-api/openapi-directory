# v1

### Available Operations

* [servicebrokerGetIamPolicy](#servicebrokergetiampolicy) - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* [servicebrokerSetIamPolicy](#servicebrokersetiampolicy) - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* [servicebrokerTestIamPermissions](#servicebrokertestiampermissions) - Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

## servicebrokerGetIamPolicy

Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerGetIamPolicyRequest req = new ServicebrokerGetIamPolicyRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "delectus";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "molestiae";
                key = "minus";
                oauthToken = "placeat";
                optionsRequestedPolicyVersion = 528895L;
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            ServicebrokerGetIamPolicyResponse res = sdk.v1.servicebrokerGetIamPolicy(req, new ServicebrokerGetIamPolicySecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerSetIamPolicy

Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicebrokerSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ServicebrokerSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerSetIamPolicyRequest req = new ServicebrokerSetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "deserunt";
                                    expression = "perferendis";
                                    location = "ipsam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("quo"),
                                    add("odit"),
                                    add("at"),
                                    add("at"),
                                }};
                                role = "maiores";
                            }}),
                        }};
                        etag = "molestiae";
                        version = 799159;
                    }};;
                }};;
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

            ServicebrokerSetIamPolicyResponse res = sdk.v1.servicebrokerSetIamPolicy(req, new ServicebrokerSetIamPolicySecurity("fugit", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## servicebrokerTestIamPermissions

Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ServicebrokerTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ServicebrokerTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ServicebrokerTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerTestIamPermissionsRequest req = new ServicebrokerTestIamPermissionsRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("beatae"),
                        add("commodi"),
                        add("molestiae"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            ServicebrokerTestIamPermissionsResponse res = sdk.v1.servicebrokerTestIamPermissions(req, new ServicebrokerTestIamPermissionsSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
