# v1beta1

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

            ServicebrokerGetIamPolicyRequest req = new ServicebrokerGetIamPolicyRequest("eum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "et";
                key = "excepturi";
                oauthToken = "ullam";
                optionsRequestedPolicyVersion = 590873L;
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "sint";
                uploadProtocol = "accusantium";
            }};            

            ServicebrokerGetIamPolicyResponse res = sdk.v1beta1.servicebrokerGetIamPolicy(req, new ServicebrokerGetIamPolicySecurity("mollitia", "reiciendis") {{
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

            ServicebrokerSetIamPolicyRequest req = new ServicebrokerSetIamPolicyRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "dolor";
                                    expression = "necessitatibus";
                                    location = "odit";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("iure"),
                                }};
                                role = "doloribus";
                            }}),
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "debitis";
                                    expression = "eius";
                                    location = "maxime";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("in"),
                                    add("architecto"),
                                    add("architecto"),
                                }};
                                role = "repudiandae";
                            }}),
                        }};
                        etag = "ullam";
                        version = 714242;
                    }};;
                }};;
                accessToken = "nihil";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "sed";
                key = "saepe";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "accusantium";
                uploadType = "consequuntur";
                uploadProtocol = "praesentium";
            }};            

            ServicebrokerSetIamPolicyResponse res = sdk.v1beta1.servicebrokerSetIamPolicy(req, new ServicebrokerSetIamPolicySecurity("natus", "magni") {{
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

            ServicebrokerTestIamPermissionsRequest req = new ServicebrokerTestIamPermissionsRequest("sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("pariatur"),
                        add("maxime"),
                        add("ea"),
                        add("excepturi"),
                    }};
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "ab";
                key = "maiores";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "voluptate";
                uploadProtocol = "autem";
            }};            

            ServicebrokerTestIamPermissionsResponse res = sdk.v1beta1.servicebrokerTestIamPermissions(req, new ServicebrokerTestIamPermissionsSecurity("nam", "eaque") {{
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
