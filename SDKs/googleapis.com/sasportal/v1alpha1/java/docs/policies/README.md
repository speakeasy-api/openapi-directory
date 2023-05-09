# policies

### Available Operations

* [sasportalPoliciesGet](#sasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [sasportalPoliciesSet](#sasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [sasportalPoliciesTest](#sasportalpoliciestest) - Returns permissions that a caller has on the specified resource.

## sasportalPoliciesGet

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalPoliciesGetRequest;
import org.openapis.openapi.models.operations.SasportalPoliciesGetResponse;
import org.openapis.openapi.models.operations.SasportalPoliciesGetSecurity;
import org.openapis.openapi.models.operations.SasportalPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.SasportalPoliciesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalGetPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalPoliciesGetRequest req = new SasportalPoliciesGetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalGetPolicyRequest = new SasPortalGetPolicyRequest() {{
                    resource = "maiores";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                key = "voluptatibus";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quisquam";
                uploadProtocol = "saepe";
            }};            

            SasportalPoliciesGetResponse res = sdk.policies.sasportalPoliciesGet(req, new SasportalPoliciesGetSecurity() {{
                option1 = new SasportalPoliciesGetSecurityOption1("ea", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sasportalPoliciesSet

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalPoliciesSetRequest;
import org.openapis.openapi.models.operations.SasportalPoliciesSetResponse;
import org.openapis.openapi.models.operations.SasportalPoliciesSetSecurity;
import org.openapis.openapi.models.operations.SasportalPoliciesSetSecurityOption1;
import org.openapis.openapi.models.operations.SasportalPoliciesSetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalAssignment;
import org.openapis.openapi.models.shared.SasPortalPolicy;
import org.openapis.openapi.models.shared.SasPortalSetPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalPoliciesSetRequest req = new SasportalPoliciesSetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalSetPolicyRequest = new SasPortalSetPolicyRequest() {{
                    disableNotification = false;
                    policy = new SasPortalPolicy() {{
                        assignments = new org.openapis.openapi.models.shared.SasPortalAssignment[]{{
                            add(new SasPortalAssignment() {{
                                members = new String[]{{
                                    add("inventore"),
                                    add("magnam"),
                                }};
                                role = "ea";
                            }}),
                            add(new SasPortalAssignment() {{
                                members = new String[]{{
                                    add("consectetur"),
                                    add("recusandae"),
                                    add("aspernatur"),
                                    add("minima"),
                                }};
                                role = "eaque";
                            }}),
                        }};
                        etag = "a";
                    }};;
                    resource = "libero";
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "impedit";
                key = "aliquam";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "inventore";
                uploadProtocol = "non";
            }};            

            SasportalPoliciesSetResponse res = sdk.policies.sasportalPoliciesSet(req, new SasportalPoliciesSetSecurity() {{
                option1 = new SasportalPoliciesSetSecurityOption1("et", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sasportalPoliciesTest

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalPoliciesTestRequest;
import org.openapis.openapi.models.operations.SasportalPoliciesTestResponse;
import org.openapis.openapi.models.operations.SasportalPoliciesTestSecurity;
import org.openapis.openapi.models.operations.SasportalPoliciesTestSecurityOption1;
import org.openapis.openapi.models.operations.SasportalPoliciesTestSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalTestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalPoliciesTestRequest req = new SasportalPoliciesTestRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                sasPortalTestPermissionsRequest = new SasPortalTestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("velit"),
                        add("eum"),
                        add("autem"),
                        add("nobis"),
                    }};
                    resource = "quas";
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "libero";
                key = "quasi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "explicabo";
                uploadProtocol = "provident";
            }};            

            SasportalPoliciesTestResponse res = sdk.policies.sasportalPoliciesTest(req, new SasportalPoliciesTestSecurity() {{
                option1 = new SasportalPoliciesTestSecurityOption1("ipsa", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalTestPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
