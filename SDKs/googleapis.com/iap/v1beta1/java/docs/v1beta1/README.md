# v1beta1

### Available Operations

* [iapGetIamPolicy](#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapSetIamPolicy](#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapTestIamPermissions](#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. If the resource does not exist or the caller does not have Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED] will be returned. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

## iapGetIamPolicy

Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapGetIamPolicyRequest;
import org.openapis.openapi.models.operations.IapGetIamPolicyResponse;
import org.openapis.openapi.models.operations.IapGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GetIamPolicyRequest;
import org.openapis.openapi.models.shared.GetPolicyOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapGetIamPolicyRequest req = new IapGetIamPolicyRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 963663;
                    }};;
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            IapGetIamPolicyResponse res = sdk.v1beta1.iapGetIamPolicy(req, new IapGetIamPolicySecurity("recusandae", "temporibus") {{
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

## iapSetIamPolicy

Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapSetIamPolicyRequest;
import org.openapis.openapi.models.operations.IapSetIamPolicyResponse;
import org.openapis.openapi.models.operations.IapSetIamPolicySecurity;
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

            IapSetIamPolicyRequest req = new IapSetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
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

            IapSetIamPolicyResponse res = sdk.v1beta1.iapSetIamPolicy(req, new IapSetIamPolicySecurity("fugit", "deleniti") {{
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

## iapTestIamPermissions

Returns permissions that a caller has on the Identity-Aware Proxy protected resource. If the resource does not exist or the caller does not have Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED] will be returned. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.IapTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.IapTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapTestIamPermissionsRequest req = new IapTestIamPermissionsRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
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

            IapTestIamPermissionsResponse res = sdk.v1beta1.iapTestIamPermissions(req, new IapTestIamPermissionsSecurity("ad", "natus") {{
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
