# v1

### Available Operations

* [iapGetIamPolicy](#iapgetiampolicy) - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapGetIapSettings](#iapgetiapsettings) - Gets the IAP settings on a particular IAP protected resource.
* [iapSetIamPolicy](#iapsetiampolicy) - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapTestIamPermissions](#iaptestiampermissions) - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
* [iapUpdateIapSettings](#iapupdateiapsettings) - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

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

            IapGetIamPolicyRequest req = new IapGetIamPolicyRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                getIamPolicyRequest = new GetIamPolicyRequest() {{
                    options = new GetPolicyOptions() {{
                        requestedPolicyVersion = 667411;
                    }};;
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            IapGetIamPolicyResponse res = sdk.v1.iapGetIamPolicy(req, new IapGetIamPolicySecurity("cupiditate", "quos") {{
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

## iapGetIapSettings

Gets the IAP settings on a particular IAP protected resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapGetIapSettingsRequest;
import org.openapis.openapi.models.operations.IapGetIapSettingsResponse;
import org.openapis.openapi.models.operations.IapGetIapSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapGetIapSettingsRequest req = new IapGetIapSettingsRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "fugit";
                key = "dolorum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            IapGetIapSettingsResponse res = sdk.v1.iapGetIapSettings(req, new IapGetIapSettingsSecurity("labore", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.iapSettings != null) {
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

            IapSetIamPolicyRequest req = new IapSetIamPolicyRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sint";
                                    expression = "aliquid";
                                    location = "provident";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("officia"),
                                    add("dolor"),
                                    add("debitis"),
                                }};
                                role = "a";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "dolorum";
                                    expression = "in";
                                    location = "in";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                    add("cumque"),
                                }};
                                role = "facere";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ea";
                                    expression = "aliquid";
                                    location = "laborum";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("occaecati"),
                                }};
                                role = "enim";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "accusamus";
                                    expression = "delectus";
                                    location = "quidem";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("id"),
                                    add("blanditiis"),
                                    add("deleniti"),
                                }};
                                role = "sapiente";
                            }}),
                        }};
                        etag = "amet";
                        version = 643990;
                    }};;
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "omnis";
                key = "molestiae";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "magnam";
                uploadProtocol = "distinctio";
            }};            

            IapSetIamPolicyResponse res = sdk.v1.iapSetIamPolicy(req, new IapSetIamPolicySecurity("id", "labore") {{
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

Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api

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

            IapTestIamPermissionsRequest req = new IapTestIamPermissionsRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nobis"),
                        add("eum"),
                        add("vero"),
                    }};
                }};;
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

            IapTestIamPermissionsResponse res = sdk.v1.iapTestIamPermissions(req, new IapTestIamPermissionsSecurity("accusantium", "mollitia") {{
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

## iapUpdateIapSettings

Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IapUpdateIapSettingsRequest;
import org.openapis.openapi.models.operations.IapUpdateIapSettingsResponse;
import org.openapis.openapi.models.operations.IapUpdateIapSettingsSecurity;
import org.openapis.openapi.models.shared.AccessDeniedPageSettings;
import org.openapis.openapi.models.shared.AccessSettings;
import org.openapis.openapi.models.shared.AllowedDomainsSettings;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationSettings;
import org.openapis.openapi.models.shared.AttributePropagationSettings;
import org.openapis.openapi.models.shared.AttributePropagationSettingsOutputCredentialsEnum;
import org.openapis.openapi.models.shared.CorsSettings;
import org.openapis.openapi.models.shared.CsmSettings;
import org.openapis.openapi.models.shared.GcipSettings;
import org.openapis.openapi.models.shared.IapSettings;
import org.openapis.openapi.models.shared.OAuthSettings;
import org.openapis.openapi.models.shared.PolicyDelegationSettings;
import org.openapis.openapi.models.shared.PolicyName;
import org.openapis.openapi.models.shared.ReauthSettings;
import org.openapis.openapi.models.shared.ReauthSettingsMethodEnum;
import org.openapis.openapi.models.shared.ReauthSettingsPolicyTypeEnum;
import org.openapis.openapi.models.shared.Resource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IapUpdateIapSettingsRequest req = new IapUpdateIapSettingsRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                iapSettings = new IapSettings() {{
                    accessSettings = new AccessSettings() {{
                        allowedDomainsSettings = new AllowedDomainsSettings() {{
                            domains = new String[]{{
                                add("eum"),
                                add("dolor"),
                            }};
                            enable = false;
                        }};;
                        corsSettings = new CorsSettings() {{
                            allowHttpOptions = false;
                        }};;
                        gcipSettings = new GcipSettings() {{
                            loginPageUri = "necessitatibus";
                            tenantIds = new String[]{{
                                add("nemo"),
                            }};
                        }};;
                        oauthSettings = new OAuthSettings() {{
                            loginHint = "quasi";
                        }};;
                        policyDelegationSettings = new PolicyDelegationSettings() {{
                            iamPermission = "iure";
                            iamServiceName = "doloribus";
                            policyName = new PolicyName() {{
                                id = "e4c8b711-e5b7-4fd2-ad02-8921cddc6926";
                                region = "accusantium";
                                type = "ab";
                            }};;
                            resource = new Resource() {{
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quidem", "ipsam");
                                    put("voluptate", "autem");
                                    put("nam", "eaque");
                                    put("pariatur", "nemo");
                                }};
                                name = "Joseph Steuber DDS";
                                service = "corporis";
                                type = "hic";
                            }};;
                        }};;
                        reauthSettings = new ReauthSettings() {{
                            maxAge = "libero";
                            method = ReauthSettingsMethodEnum.SECURE_KEY;
                            policyType = ReauthSettingsPolicyTypeEnum.POLICY_TYPE_UNSPECIFIED;
                        }};;
                    }};;
                    applicationSettings = new ApplicationSettings() {{
                        accessDeniedPageSettings = new AccessDeniedPageSettings() {{
                            accessDeniedPageUri = "quis";
                            generateTroubleshootingUri = false;
                            remediationTokenGenerationEnabled = false;
                        }};;
                        attributePropagationSettings = new AttributePropagationSettings() {{
                            enable = false;
                            expression = "totam";
                            outputCredentials = new org.openapis.openapi.models.shared.AttributePropagationSettingsOutputCredentialsEnum[]{{
                                add(AttributePropagationSettingsOutputCredentialsEnum.OUTPUT_CREDENTIALS_UNSPECIFIED),
                                add(AttributePropagationSettingsOutputCredentialsEnum.HEADER),
                            }};
                        }};;
                        cookieDomain = "nesciunt";
                        csmSettings = new CsmSettings() {{
                            rctokenAud = "eos";
                        }};;
                    }};;
                    name = "Jacqueline Schimmel";
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "recusandae";
                key = "omnis";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                updateMask = "voluptatem";
                uploadType = "porro";
                uploadProtocol = "consequuntur";
            }};            

            IapUpdateIapSettingsResponse res = sdk.v1.iapUpdateIapSettings(req, new IapUpdateIapSettingsSecurity("blanditiis", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.iapSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
