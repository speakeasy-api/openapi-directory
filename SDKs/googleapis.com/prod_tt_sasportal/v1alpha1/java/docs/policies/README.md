# policies

### Available Operations

* [prodTtSasportalPoliciesGet](#prodttsasportalpoliciesget) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [prodTtSasportalPoliciesSet](#prodttsasportalpoliciesset) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [prodTtSasportalPoliciesTest](#prodttsasportalpoliciestest) - Returns permissions that a caller has on the specified resource.

## prodTtSasportalPoliciesGet

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesGetRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesGetResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalGetPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalPoliciesGetRequest req = new ProdTtSasportalPoliciesGetRequest() {{
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

            ProdTtSasportalPoliciesGetResponse res = sdk.policies.prodTtSasportalPoliciesGet(req, new ProdTtSasportalPoliciesGetSecurity() {{
                option1 = new ProdTtSasportalPoliciesGetSecurityOption1("ea", "impedit") {{
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

## prodTtSasportalPoliciesSet

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesSetRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesSetResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesSetSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesSetSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesSetSecurityOption2;
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

            ProdTtSasportalPoliciesSetRequest req = new ProdTtSasportalPoliciesSetRequest() {{
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

            ProdTtSasportalPoliciesSetResponse res = sdk.policies.prodTtSasportalPoliciesSet(req, new ProdTtSasportalPoliciesSetSecurity() {{
                option1 = new ProdTtSasportalPoliciesSetSecurityOption1("et", "dolorum") {{
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

## prodTtSasportalPoliciesTest

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesTestRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesTestResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesTestSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesTestSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalPoliciesTestSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalTestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalPoliciesTestRequest req = new ProdTtSasportalPoliciesTestRequest() {{
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

            ProdTtSasportalPoliciesTestResponse res = sdk.policies.prodTtSasportalPoliciesTest(req, new ProdTtSasportalPoliciesTestSecurity() {{
                option1 = new ProdTtSasportalPoliciesTestSecurityOption1("ipsa", "molestiae") {{
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
