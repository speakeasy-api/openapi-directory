# networkFirewallPolicies

### Available Operations

* [computeNetworkFirewallPoliciesAddAssociation](#computenetworkfirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesAddRule](#computenetworkfirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeNetworkFirewallPoliciesCloneRules](#computenetworkfirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeNetworkFirewallPoliciesDelete](#computenetworkfirewallpoliciesdelete) - Deletes the specified policy.
* [computeNetworkFirewallPoliciesGet](#computenetworkfirewallpoliciesget) - Returns the specified network firewall policy.
* [computeNetworkFirewallPoliciesGetAssociation](#computenetworkfirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeNetworkFirewallPoliciesGetIamPolicy](#computenetworkfirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNetworkFirewallPoliciesGetRule](#computenetworkfirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeNetworkFirewallPoliciesInsert](#computenetworkfirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeNetworkFirewallPoliciesList](#computenetworkfirewallpolicieslist) - Lists all the policies that have been configured for the specified project.
* [computeNetworkFirewallPoliciesPatch](#computenetworkfirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeNetworkFirewallPoliciesPatchRule](#computenetworkfirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeNetworkFirewallPoliciesRemoveAssociation](#computenetworkfirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeNetworkFirewallPoliciesRemoveRule](#computenetworkfirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeNetworkFirewallPoliciesSetIamPolicy](#computenetworkfirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNetworkFirewallPoliciesTestIamPermissions](#computenetworkfirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNetworkFirewallPoliciesAddAssociation

Inserts an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesAddAssociationRequest req = new ComputeNetworkFirewallPoliciesAddAssociationRequest("facilis", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "molestiae";
                    displayName = "nisi";
                    firewallPolicyId = "veniam";
                    name = "Armando Hyatt";
                    shortName = "similique";
                }};;
                accessToken = "officiis";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "nulla";
                key = "dolore";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "ipsum";
                replaceExistingAssociation = false;
                requestId = "perspiciatis";
                uploadType = "voluptatibus";
                uploadProtocol = "totam";
                userIp = "mollitia";
            }};            

            ComputeNetworkFirewallPoliciesAddAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesAddAssociation(req, new ComputeNetworkFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1("veritatis", "eius") {{
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

## computeNetworkFirewallPoliciesAddRule

Inserts a rule into a firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesAddRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesAddRuleRequest req = new ComputeNetworkFirewallPoliciesAddRuleRequest("provident", "perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "in";
                    description = "quos";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "sunt";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("quisquam"),
                        }};
                        destFqdns = new String[]{{
                            add("laudantium"),
                            add("laboriosam"),
                        }};
                        destIpRanges = new String[]{{
                            add("quos"),
                            add("neque"),
                            add("omnis"),
                            add("earum"),
                        }};
                        destRegionCodes = new String[]{{
                            add("occaecati"),
                            add("saepe"),
                            add("illo"),
                            add("esse"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("reiciendis"),
                            add("maiores"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "iste";
                                ports = new String[]{{
                                    add("autem"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "similique";
                                ports = new String[]{{
                                    add("enim"),
                                    add("corporis"),
                                    add("error"),
                                    add("soluta"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "nihil";
                                ports = new String[]{{
                                    add("debitis"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("vel"),
                            add("dignissimos"),
                            add("magnam"),
                        }};
                        srcFqdns = new String[]{{
                            add("accusantium"),
                            add("consectetur"),
                        }};
                        srcIpRanges = new String[]{{
                            add("doloribus"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("sunt"),
                            add("molestias"),
                            add("neque"),
                            add("reprehenderit"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Benjamin Rath";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Gabriel Jacobs";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("temporibus"),
                            add("doloremque"),
                            add("porro"),
                            add("inventore"),
                        }};
                    }};;
                    priority = 393289;
                    ruleName = "laborum";
                    ruleTupleCount = 477087;
                    targetResources = new String[]{{
                        add("id"),
                        add("dolore"),
                        add("quam"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Mary Gulgowski";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Hector Kuhn DVM";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Ms. Suzanne Lang MD";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("culpa"),
                        add("fugit"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "minus";
                key = "odio";
                maxPriority = 320837L;
                minPriority = 661941L;
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "voluptatum";
                requestId = "est";
                uploadType = "autem";
                uploadProtocol = "perferendis";
                userIp = "laborum";
            }};            

            ComputeNetworkFirewallPoliciesAddRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesAddRule(req, new ComputeNetworkFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesAddRuleSecurityOption1("quam", "laborum") {{
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

## computeNetworkFirewallPoliciesCloneRules

Copies rules to the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesCloneRulesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesCloneRulesRequest req = new ComputeNetworkFirewallPoliciesCloneRulesRequest("eveniet", "dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "iste";
                key = "esse";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "nemo";
                sourceFirewallPolicy = "officia";
                uploadType = "sapiente";
                uploadProtocol = "debitis";
                userIp = "eum";
            }};            

            ComputeNetworkFirewallPoliciesCloneRulesResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesCloneRules(req, new ComputeNetworkFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1("consequatur", "culpa") {{
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

## computeNetworkFirewallPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesDeleteRequest req = new ComputeNetworkFirewallPoliciesDeleteRequest("impedit", "culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "nemo";
                key = "pariatur";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "atque";
                uploadType = "laboriosam";
                uploadProtocol = "voluptate";
                userIp = "ad";
            }};            

            ComputeNetworkFirewallPoliciesDeleteResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesDelete(req, new ComputeNetworkFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesDeleteSecurityOption1("veniam", "vitae") {{
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

## computeNetworkFirewallPoliciesGet

Returns the specified network firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetRequest req = new ComputeNetworkFirewallPoliciesGetRequest("deserunt", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "quae";
                key = "voluptates";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "optio";
                uploadProtocol = "odio";
                userIp = "occaecati";
            }};            

            ComputeNetworkFirewallPoliciesGetResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGet(req, new ComputeNetworkFirewallPoliciesGetSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetSecurityOption1("officia", "consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetAssociationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetAssociationRequest req = new ComputeNetworkFirewallPoliciesGetAssociationRequest("excepturi", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "assumenda";
                key = "nemo";
                name = "Lester Heathcote";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "veniam";
                uploadProtocol = "ea";
                userIp = "aspernatur";
            }};            

            ComputeNetworkFirewallPoliciesGetAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetAssociation(req, new ComputeNetworkFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1("assumenda", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicyAssociation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetIamPolicyRequest req = new ComputeNetworkFirewallPoliciesGetIamPolicyRequest("expedita", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "facere";
                key = "iure";
                oauthToken = "delectus";
                optionsRequestedPolicyVersion = 798905L;
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "veniam";
                uploadProtocol = "ad";
                userIp = "esse";
            }};            

            ComputeNetworkFirewallPoliciesGetIamPolicyResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetIamPolicy(req, new ComputeNetworkFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1("nisi", "dolores") {{
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

## computeNetworkFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesGetRuleRequest req = new ComputeNetworkFirewallPoliciesGetRuleRequest("sint", "nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "quisquam";
                key = "sequi";
                oauthToken = "culpa";
                prettyPrint = false;
                priority = 501402L;
                quotaUser = "perspiciatis";
                uploadType = "sit";
                uploadProtocol = "fugit";
                userIp = "deleniti";
            }};            

            ComputeNetworkFirewallPoliciesGetRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetRule(req, new ComputeNetworkFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetRuleSecurityOption1("dolores", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicyRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkFirewallPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesInsertRequest req = new ComputeNetworkFirewallPoliciesInsertRequest("enim") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "magnam";
                            displayName = "illo";
                            firewallPolicyId = "optio";
                            name = "Elmer Kreiger";
                            shortName = "necessitatibus";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "illum";
                            displayName = "dolor";
                            firewallPolicyId = "repellendus";
                            name = "Kelly Funk IV";
                            shortName = "repellat";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "ad";
                            displayName = "rem";
                            firewallPolicyId = "beatae";
                            name = "Terrence Langworth";
                            shortName = "officiis";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "consectetur";
                            displayName = "reiciendis";
                            firewallPolicyId = "esse";
                            name = "Mr. Ella Hyatt";
                            shortName = "culpa";
                        }}),
                    }};
                    creationTimestamp = "doloremque";
                    description = "officiis";
                    displayName = "dolor";
                    fingerprint = "harum";
                    id = "deserunt";
                    kind = "laboriosam";
                    name = "Marianne Jakubowski";
                    parent = "alias";
                    region = "sint";
                    ruleTupleCount = 828056;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "minima";
                            description = "explicabo";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "ad";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("rerum"),
                                }};
                                destFqdns = new String[]{{
                                    add("eos"),
                                }};
                                destIpRanges = new String[]{{
                                    add("blanditiis"),
                                    add("cumque"),
                                    add("dignissimos"),
                                    add("placeat"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("eligendi"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("quasi"),
                                    add("alias"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "inventore";
                                        ports = new String[]{{
                                            add("molestiae"),
                                            add("ipsum"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "at";
                                        ports = new String[]{{
                                            add("perferendis"),
                                            add("nostrum"),
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "expedita";
                                        ports = new String[]{{
                                            add("quidem"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "illum";
                                        ports = new String[]{{
                                            add("asperiores"),
                                            add("amet"),
                                            add("quod"),
                                            add("inventore"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("in"),
                                }};
                                srcFqdns = new String[]{{
                                    add("ipsum"),
                                    add("excepturi"),
                                    add("aperiam"),
                                    add("molestias"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("quis"),
                                    add("veniam"),
                                    add("consequuntur"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("dolores"),
                                    add("ipsam"),
                                    add("ipsa"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Robin Roberts";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Miss Juan Cummings";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Jonathan Towne";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Marguerite Baumbach I";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("placeat"),
                                }};
                            }};
                            priority = 806000;
                            ruleName = "laudantium";
                            ruleTupleCount = 966754;
                            targetResources = new String[]{{
                                add("aut"),
                                add("soluta"),
                                add("iusto"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jo Johnson";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Flora Auer";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Reginald Rutherford";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Donnie Quitzon";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("tempore"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "error";
                            description = "cupiditate";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "velit";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("illo"),
                                    add("amet"),
                                    add("enim"),
                                }};
                                destFqdns = new String[]{{
                                    add("nulla"),
                                    add("nisi"),
                                    add("deserunt"),
                                }};
                                destIpRanges = new String[]{{
                                    add("reprehenderit"),
                                    add("nam"),
                                    add("soluta"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("est"),
                                    add("voluptates"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("harum"),
                                    add("recusandae"),
                                    add("ullam"),
                                    add("eum"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "at";
                                        ports = new String[]{{
                                            add("alias"),
                                            add("minus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "expedita";
                                        ports = new String[]{{
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "cupiditate";
                                        ports = new String[]{{
                                            add("sit"),
                                            add("dignissimos"),
                                            add("maiores"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("praesentium"),
                                    add("omnis"),
                                    add("incidunt"),
                                }};
                                srcFqdns = new String[]{{
                                    add("vitae"),
                                    add("incidunt"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("explicabo"),
                                    add("culpa"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptatibus"),
                                    add("ipsa"),
                                    add("quasi"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Bertha Gorczany";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mrs. Yvette Tremblay";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Lucas Stokes";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Candice Jast";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("praesentium"),
                                    add("suscipit"),
                                    add("explicabo"),
                                    add("quos"),
                                }};
                            }};
                            priority = 358724;
                            ruleName = "dolorem";
                            ruleTupleCount = 940490;
                            targetResources = new String[]{{
                                add("eos"),
                                add("laudantium"),
                                add("enim"),
                                add("provident"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Alfred Cummerata";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Melba Watsica";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Dr. Sheri Gerhold";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Rex Hammes";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("eum"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "provident";
                            description = "tempore";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "at";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("cupiditate"),
                                }};
                                destFqdns = new String[]{{
                                    add("libero"),
                                }};
                                destIpRanges = new String[]{{
                                    add("libero"),
                                    add("blanditiis"),
                                    add("quae"),
                                    add("eaque"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("sed"),
                                    add("dolorum"),
                                    add("laborum"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("molestiae"),
                                    add("aliquam"),
                                    add("perspiciatis"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "esse";
                                        ports = new String[]{{
                                            add("recusandae"),
                                            add("quibusdam"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "modi";
                                        ports = new String[]{{
                                            add("cumque"),
                                            add("earum"),
                                            add("ducimus"),
                                            add("libero"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("eaque"),
                                    add("optio"),
                                }};
                                srcFqdns = new String[]{{
                                    add("blanditiis"),
                                    add("molestiae"),
                                    add("a"),
                                    add("quae"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("asperiores"),
                                    add("dolor"),
                                    add("excepturi"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("esse"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Melinda Keebler";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("incidunt"),
                                    add("consequatur"),
                                    add("porro"),
                                }};
                            }};
                            priority = 533036;
                            ruleName = "maiores";
                            ruleTupleCount = 43716;
                            targetResources = new String[]{{
                                add("distinctio"),
                                add("sapiente"),
                                add("a"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Leona Brakus";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("blanditiis"),
                                add("ea"),
                                add("occaecati"),
                                add("natus"),
                            }};
                        }}),
                    }};
                    selfLink = "voluptas";
                    selfLinkWithId = "optio";
                    shortName = "totam";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "eos";
                fields = "libero";
                key = "eveniet";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "similique";
                requestId = "ipsum";
                uploadType = "maxime";
                uploadProtocol = "tenetur";
                userIp = "dolore";
            }};            

            ComputeNetworkFirewallPoliciesInsertResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesInsert(req, new ComputeNetworkFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesInsertSecurityOption1("voluptate", "blanditiis") {{
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

## computeNetworkFirewallPoliciesList

Lists all the policies that have been configured for the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesListRequest req = new ComputeNetworkFirewallPoliciesListRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "neque";
                filter = "asperiores";
                key = "corrupti";
                maxResults = 422209L;
                oauthToken = "autem";
                orderBy = "alias";
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "minus";
                returnPartialSuccess = false;
                uploadType = "commodi";
                uploadProtocol = "inventore";
                userIp = "porro";
            }};            

            ComputeNetworkFirewallPoliciesListResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesList(req, new ComputeNetworkFirewallPoliciesListSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesListSecurityOption1("nihil", "voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPolicyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeNetworkFirewallPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesPatchRequest req = new ComputeNetworkFirewallPoliciesPatchRequest("consectetur", "aliquam") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "ipsum";
                            displayName = "impedit";
                            firewallPolicyId = "est";
                            name = "Ms. Terrence Brown";
                            shortName = "nesciunt";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "atque";
                            displayName = "maiores";
                            firewallPolicyId = "veritatis";
                            name = "Nathaniel Bode";
                            shortName = "ratione";
                        }}),
                    }};
                    creationTimestamp = "inventore";
                    description = "dolorum";
                    displayName = "ipsam";
                    fingerprint = "modi";
                    id = "possimus";
                    kind = "cumque";
                    name = "Sandra Cummerata";
                    parent = "reiciendis";
                    region = "error";
                    ruleTupleCount = 175850;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "debitis";
                            description = "possimus";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "nesciunt";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("expedita"),
                                    add("mollitia"),
                                    add("quas"),
                                }};
                                destFqdns = new String[]{{
                                    add("dignissimos"),
                                    add("et"),
                                    add("eveniet"),
                                    add("consequuntur"),
                                }};
                                destIpRanges = new String[]{{
                                    add("iste"),
                                    add("aspernatur"),
                                    add("placeat"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("doloremque"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("officiis"),
                                    add("inventore"),
                                    add("quia"),
                                    add("odit"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "mollitia";
                                        ports = new String[]{{
                                            add("dolor"),
                                            add("id"),
                                            add("assumenda"),
                                            add("optio"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "commodi";
                                        ports = new String[]{{
                                            add("iusto"),
                                            add("nulla"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "explicabo";
                                        ports = new String[]{{
                                            add("voluptatem"),
                                            add("expedita"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("beatae"),
                                    add("illo"),
                                    add("itaque"),
                                    add("officia"),
                                }};
                                srcFqdns = new String[]{{
                                    add("deleniti"),
                                    add("explicabo"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("sunt"),
                                    add("magnam"),
                                    add("quisquam"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("porro"),
                                    add("aliquid"),
                                    add("laborum"),
                                    add("sed"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Johanna Heathcote";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Roxanne Roberts";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Cassandra Kuhn";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mary Tromp";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("sint"),
                                    add("soluta"),
                                    add("voluptatem"),
                                }};
                            }};
                            priority = 833856;
                            ruleName = "dignissimos";
                            ruleTupleCount = 311838;
                            targetResources = new String[]{{
                                add("possimus"),
                                add("quia"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Adrienne Kreiger PhD";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Alexis Koepp";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Robin Rau";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("dignissimos"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "sint";
                            description = "hic";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "corporis";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("libero"),
                                }};
                                destFqdns = new String[]{{
                                    add("earum"),
                                }};
                                destIpRanges = new String[]{{
                                    add("aut"),
                                    add("ducimus"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("ducimus"),
                                    add("officiis"),
                                    add("dolore"),
                                    add("neque"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("ea"),
                                    add("odio"),
                                    add("sunt"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "soluta";
                                        ports = new String[]{{
                                            add("quo"),
                                            add("optio"),
                                            add("accusamus"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("reprehenderit"),
                                }};
                                srcFqdns = new String[]{{
                                    add("similique"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("quibusdam"),
                                    add("ex"),
                                    add("et"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("dicta"),
                                    add("rem"),
                                    add("facere"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Guadalupe Schmitt";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("ipsam"),
                                    add("ab"),
                                    add("aliquid"),
                                }};
                            }};
                            priority = 986792;
                            ruleName = "repellendus";
                            ruleTupleCount = 450454;
                            targetResources = new String[]{{
                                add("rerum"),
                                add("repudiandae"),
                                add("fugit"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Rebecca Crist";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Carole Yost";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("natus"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "vel";
                            description = "aspernatur";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "eum";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("debitis"),
                                    add("esse"),
                                }};
                                destFqdns = new String[]{{
                                    add("nam"),
                                }};
                                destIpRanges = new String[]{{
                                    add("laborum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("minima"),
                                    add("ipsa"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("labore"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "inventore";
                                        ports = new String[]{{
                                            add("molestiae"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "sint";
                                        ports = new String[]{{
                                            add("nobis"),
                                            add("laboriosam"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "repellat";
                                        ports = new String[]{{
                                            add("aspernatur"),
                                            add("similique"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("ipsa"),
                                    add("voluptatum"),
                                }};
                                srcFqdns = new String[]{{
                                    add("sunt"),
                                    add("at"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("provident"),
                                    add("nam"),
                                    add("voluptas"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("et"),
                                    add("officia"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ms. Phil Williamson";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Myra Rowe";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("dolores"),
                                }};
                            }};
                            priority = 716005;
                            ruleName = "modi";
                            ruleTupleCount = 679958;
                            targetResources = new String[]{{
                                add("totam"),
                                add("ipsam"),
                                add("alias"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Victor Yundt";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Andy Rosenbaum";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Samantha Block PhD";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Joy Daniel";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("nesciunt"),
                            }};
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "porro";
                            description = "aspernatur";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "aut";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("natus"),
                                }};
                                destFqdns = new String[]{{
                                    add("architecto"),
                                    add("excepturi"),
                                }};
                                destIpRanges = new String[]{{
                                    add("enim"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("atque"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("saepe"),
                                    add("accusamus"),
                                    add("incidunt"),
                                    add("dicta"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "natus";
                                        ports = new String[]{{
                                            add("natus"),
                                            add("hic"),
                                            add("ut"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nisi";
                                        ports = new String[]{{
                                            add("delectus"),
                                            add("eum"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "beatae";
                                        ports = new String[]{{
                                            add("sapiente"),
                                            add("quasi"),
                                            add("dolorum"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "a";
                                        ports = new String[]{{
                                            add("sed"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("minus"),
                                }};
                                srcFqdns = new String[]{{
                                    add("autem"),
                                    add("omnis"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("laboriosam"),
                                    add("harum"),
                                    add("commodi"),
                                    add("fugit"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("voluptatem"),
                                    add("ab"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mrs. Damon Okuneva";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("rem"),
                                    add("placeat"),
                                    add("suscipit"),
                                }};
                            }};
                            priority = 446595;
                            ruleName = "odit";
                            ruleTupleCount = 5486;
                            targetResources = new String[]{{
                                add("ipsum"),
                                add("illo"),
                                add("aperiam"),
                                add("sequi"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Miss Brandi Graham DVM";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Cedric Leuschke";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Josh Labadie";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Lucas Adams Sr.";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("alias"),
                                add("officia"),
                                add("mollitia"),
                                add("animi"),
                            }};
                        }}),
                    }};
                    selfLink = "officiis";
                    selfLinkWithId = "vero";
                    shortName = "repudiandae";
                }};;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "accusamus";
                key = "distinctio";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "soluta";
                uploadType = "hic";
                uploadProtocol = "quos";
                userIp = "voluptate";
            }};            

            ComputeNetworkFirewallPoliciesPatchResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesPatch(req, new ComputeNetworkFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesPatchSecurityOption1("neque", "explicabo") {{
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

## computeNetworkFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesPatchRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesPatchRuleRequest req = new ComputeNetworkFirewallPoliciesPatchRuleRequest("harum", "eveniet") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "alias";
                    description = "provident";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "exercitationem";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("atque"),
                        }};
                        destFqdns = new String[]{{
                            add("sunt"),
                            add("neque"),
                        }};
                        destIpRanges = new String[]{{
                            add("a"),
                        }};
                        destRegionCodes = new String[]{{
                            add("aliquid"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("voluptatem"),
                            add("tempore"),
                            add("quo"),
                            add("voluptates"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "enim";
                                ports = new String[]{{
                                    add("quas"),
                                    add("ex"),
                                    add("voluptatum"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "iure";
                                ports = new String[]{{
                                    add("modi"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("quisquam"),
                        }};
                        srcFqdns = new String[]{{
                            add("quam"),
                            add("iste"),
                            add("doloremque"),
                        }};
                        srcIpRanges = new String[]{{
                            add("hic"),
                            add("asperiores"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("sint"),
                            add("odio"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Kari Nicolas";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Roland Terry";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Neil Grimes";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("odit"),
                            add("laudantium"),
                            add("dolor"),
                        }};
                    }};;
                    priority = 159846;
                    ruleName = "libero";
                    ruleTupleCount = 725310;
                    targetResources = new String[]{{
                        add("ad"),
                        add("totam"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Antonia Connelly";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Mrs. Virgil Raynor";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("harum"),
                        add("placeat"),
                    }};
                }};;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "reprehenderit";
                fields = "repellat";
                key = "eius";
                oauthToken = "magnam";
                prettyPrint = false;
                priority = 294009L;
                quotaUser = "dolores";
                requestId = "ratione";
                uploadType = "qui";
                uploadProtocol = "voluptates";
                userIp = "unde";
            }};            

            ComputeNetworkFirewallPoliciesPatchRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesPatchRule(req, new ComputeNetworkFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1("mollitia", "veniam") {{
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

## computeNetworkFirewallPoliciesRemoveAssociation

Removes an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesRemoveAssociationRequest req = new ComputeNetworkFirewallPoliciesRemoveAssociationRequest("at", "eveniet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "repellendus";
                key = "dignissimos";
                name = "Kristi Lemke";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "rerum";
                uploadType = "quis";
                uploadProtocol = "corrupti";
                userIp = "tenetur";
            }};            

            ComputeNetworkFirewallPoliciesRemoveAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesRemoveAssociation(req, new ComputeNetworkFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1("repudiandae", "ex") {{
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

## computeNetworkFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesRemoveRuleRequest req = new ComputeNetworkFirewallPoliciesRemoveRuleRequest("quos", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "illum";
                key = "facilis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                priority = 148997L;
                quotaUser = "nesciunt";
                requestId = "pariatur";
                uploadType = "nostrum";
                uploadProtocol = "voluptatum";
                userIp = "necessitatibus";
            }};            

            ComputeNetworkFirewallPoliciesRemoveRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesRemoveRule(req, new ComputeNetworkFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1("deleniti", "sed") {{
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

## computeNetworkFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesSetIamPolicyRequest req = new ComputeNetworkFirewallPoliciesSetIamPolicyRequest("magnam", "dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "consequuntur";
                            condition = new Expr() {{
                                description = "sed";
                                expression = "minus";
                                location = "provident";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("iusto"),
                                add("vel"),
                            }};
                            role = "nihil";
                        }}),
                    }};
                    etag = "praesentium";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ducimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("atque"),
                                            add("sequi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolor"),
                                            add("voluptas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("est"),
                                    add("aut"),
                                    add("iusto"),
                                    add("excepturi"),
                                }};
                                service = "doloremque";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloribus"),
                                            add("deserunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                            add("ex"),
                                            add("labore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reprehenderit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("illum"),
                                }};
                                service = "laudantium";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rerum"),
                                            add("rem"),
                                            add("unde"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("mollitia"),
                                            add("nisi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("commodi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptatibus"),
                                            add("quo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("cum"),
                                    add("earum"),
                                    add("ex"),
                                    add("iusto"),
                                }};
                                service = "quae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("debitis"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("autem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sit"),
                                }};
                                service = "in";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "nulla";
                                condition = new Expr() {{
                                    description = "vel";
                                    expression = "earum";
                                    location = "explicabo";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("hic"),
                                    add("nemo"),
                                }};
                                role = "totam";
                            }}),
                        }};
                        etag = "architecto";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "deserunt";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("laudantium"),
                                            add("consequatur"),
                                            add("et"),
                                            add("voluptatem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "eaque";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("asperiores"),
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "laboriosam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("quia"),
                                            add("error"),
                                            add("laudantium"),
                                            add("ab"),
                                        }};
                                    }}),
                                }};
                                description = "numquam";
                                ins = new String[]{{
                                    add("quos"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Charlie Murphy DDS";
                                                    value = "perferendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lionel Lubowitz";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darla Zieme";
                                                    value = "quibusdam";
                                                }}),
                                            }};
                                            field = "et";
                                            metric = "officiis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ismael Schaefer";
                                                    value = "doloremque";
                                                }}),
                                            }};
                                            field = "sequi";
                                            metric = "deleniti";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Neil Powlowski PhD";
                                                    value = "tempore";
                                                }}),
                                            }};
                                            field = "enim";
                                            metric = "doloribus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("alias"),
                                }};
                                permissions = new String[]{{
                                    add("tenetur"),
                                    add("earum"),
                                    add("eaque"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "minus";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("eaque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "aliquam";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ad"),
                                            add("unde"),
                                            add("consequatur"),
                                        }};
                                    }}),
                                }};
                                description = "quaerat";
                                ins = new String[]{{
                                    add("maxime"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tyler Ritchie";
                                                    value = "cupiditate";
                                                }}),
                                            }};
                                            field = "quasi";
                                            metric = "dignissimos";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marian Mills";
                                                    value = "cupiditate";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Katrina Nitzsche I";
                                                    value = "vero";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lee Leffler";
                                                    value = "vitae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Christy Douglas";
                                                    value = "rem";
                                                }}),
                                            }};
                                            field = "iure";
                                            metric = "architecto";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Israel Sanford";
                                                    value = "excepturi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marvin Leannon Sr.";
                                                    value = "praesentium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eula Spencer";
                                                    value = "minus";
                                                }}),
                                            }};
                                            field = "eaque";
                                            metric = "consequatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("est"),
                                    add("cumque"),
                                    add("harum"),
                                    add("dicta"),
                                }};
                                permissions = new String[]{{
                                    add("dolorum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "quas";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("sequi"),
                                            add("quidem"),
                                        }};
                                    }}),
                                }};
                                description = "corrupti";
                                ins = new String[]{{
                                    add("suscipit"),
                                    add("optio"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kate Crona";
                                                    value = "quos";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Paula Bashirian";
                                                    value = "dolorem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Maryann Bailey";
                                                    value = "hic";
                                                }}),
                                            }};
                                            field = "nam";
                                            metric = "quod";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cory Torp";
                                                    value = "rerum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Rita Hauck";
                                                    value = "consequatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sarah Cartwright";
                                                    value = "porro";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Douglas Balistreri";
                                                    value = "laudantium";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "quaerat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("impedit"),
                                    add("consectetur"),
                                }};
                                permissions = new String[]{{
                                    add("debitis"),
                                    add("perspiciatis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "eos";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("magni"),
                                            add("assumenda"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "sit";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("maiores"),
                                            add("quo"),
                                            add("eaque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "natus";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("iure"),
                                            add("tempore"),
                                        }};
                                    }}),
                                }};
                                description = "unde";
                                ins = new String[]{{
                                    add("excepturi"),
                                    add("rem"),
                                    add("odit"),
                                    add("eaque"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kevin Lueilwitz";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Terrance Tremblay";
                                                    value = "esse";
                                                }}),
                                            }};
                                            field = "sit";
                                            metric = "adipisci";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ebony Goldner";
                                                    value = "saepe";
                                                }}),
                                            }};
                                            field = "cum";
                                            metric = "ad";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Shawna Kihn";
                                                    value = "eveniet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Brendan Russel";
                                                    value = "vel";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gustavo Harber MD";
                                                    value = "eius";
                                                }}),
                                            }};
                                            field = "tempore";
                                            metric = "sequi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptatibus"),
                                }};
                                permissions = new String[]{{
                                    add("ad"),
                                }};
                            }}),
                        }};
                        version = 430547;
                    }};;
                }};;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "quis";
                key = "expedita";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "nesciunt";
                uploadProtocol = "magni";
                userIp = "consequuntur";
            }};            

            ComputeNetworkFirewallPoliciesSetIamPolicyResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesSetIamPolicy(req, new ComputeNetworkFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1("quae", "illo") {{
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

## computeNetworkFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeNetworkFirewallPoliciesTestIamPermissionsRequest req = new ComputeNetworkFirewallPoliciesTestIamPermissionsRequest("temporibus", "recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("reprehenderit"),
                    }};
                }};;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "error";
                key = "quas";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "illo";
                uploadProtocol = "temporibus";
                userIp = "ut";
            }};            

            ComputeNetworkFirewallPoliciesTestIamPermissionsResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesTestIamPermissions(req, new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1("praesentium", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
