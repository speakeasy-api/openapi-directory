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

            ComputeNetworkFirewallPoliciesAddAssociationRequest req = new ComputeNetworkFirewallPoliciesAddAssociationRequest("expedita", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "fugiat";
                    displayName = "eos";
                    firewallPolicyId = "omnis";
                    name = "Lana Kuhn";
                    shortName = "nemo";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "ipsam";
                key = "enim";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "nostrum";
                replaceExistingAssociation = false;
                requestId = "perferendis";
                uploadType = "rem";
                uploadProtocol = "quos";
                userIp = "maxime";
            }};            

            ComputeNetworkFirewallPoliciesAddAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesAddAssociation(req, new ComputeNetworkFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesAddAssociationSecurityOption1("praesentium", "id") {{
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

            ComputeNetworkFirewallPoliciesAddRuleRequest req = new ComputeNetworkFirewallPoliciesAddRuleRequest("ratione", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "dolorem";
                    description = "magnam";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "laborum";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("eligendi"),
                            add("quod"),
                            add("impedit"),
                            add("culpa"),
                        }};
                        destFqdns = new String[]{{
                            add("nisi"),
                            add("ratione"),
                        }};
                        destIpRanges = new String[]{{
                            add("dolore"),
                            add("officia"),
                            add("deleniti"),
                            add("ad"),
                        }};
                        destRegionCodes = new String[]{{
                            add("corporis"),
                            add("minus"),
                            add("dicta"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("amet"),
                            add("dolores"),
                            add("quidem"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "magni";
                                ports = new String[]{{
                                    add("consectetur"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "repudiandae";
                                ports = new String[]{{
                                    add("harum"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "dolor";
                                ports = new String[]{{
                                    add("porro"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("ea"),
                            add("dolorum"),
                            add("exercitationem"),
                            add("expedita"),
                        }};
                        srcFqdns = new String[]{{
                            add("odio"),
                            add("incidunt"),
                            add("omnis"),
                            add("doloremque"),
                        }};
                        srcIpRanges = new String[]{{
                            add("expedita"),
                            add("excepturi"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("quisquam"),
                            add("iure"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Eula Kling";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("culpa"),
                            add("quaerat"),
                            add("rem"),
                        }};
                    }};;
                    priority = 92055;
                    ruleName = "dolore";
                    ruleTupleCount = 570480;
                    targetResources = new String[]{{
                        add("quae"),
                        add("distinctio"),
                        add("rem"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Cheryl Miller";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Cathy Langworth";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("aut"),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "sunt";
                key = "velit";
                maxPriority = 853228L;
                minPriority = 924676L;
                oauthToken = "eius";
                prettyPrint = false;
                quotaUser = "aut";
                requestId = "ex";
                uploadType = "inventore";
                uploadProtocol = "aperiam";
                userIp = "corrupti";
            }};            

            ComputeNetworkFirewallPoliciesAddRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesAddRule(req, new ComputeNetworkFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesAddRuleSecurityOption1("sed", "nulla") {{
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

            ComputeNetworkFirewallPoliciesCloneRulesRequest req = new ComputeNetworkFirewallPoliciesCloneRulesRequest("alias", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "sint";
                key = "nobis";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "dolores";
                sourceFirewallPolicy = "odio";
                uploadType = "dolorum";
                uploadProtocol = "ad";
                userIp = "soluta";
            }};            

            ComputeNetworkFirewallPoliciesCloneRulesResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesCloneRules(req, new ComputeNetworkFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesCloneRulesSecurityOption1("officia", "nostrum") {{
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

            ComputeNetworkFirewallPoliciesDeleteRequest req = new ComputeNetworkFirewallPoliciesDeleteRequest("exercitationem", "vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "ipsum";
                key = "nihil";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "iste";
                uploadType = "dignissimos";
                uploadProtocol = "rem";
                userIp = "dolore";
            }};            

            ComputeNetworkFirewallPoliciesDeleteResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesDelete(req, new ComputeNetworkFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesDeleteSecurityOption1("voluptatibus", "nobis") {{
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

            ComputeNetworkFirewallPoliciesGetRequest req = new ComputeNetworkFirewallPoliciesGetRequest("architecto", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "neque";
                fields = "sequi";
                key = "architecto";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "minima";
                uploadProtocol = "rerum";
                userIp = "voluptates";
            }};            

            ComputeNetworkFirewallPoliciesGetResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGet(req, new ComputeNetworkFirewallPoliciesGetSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetSecurityOption1("suscipit", "veritatis") {{
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

            ComputeNetworkFirewallPoliciesGetAssociationRequest req = new ComputeNetworkFirewallPoliciesGetAssociationRequest("nam", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "odio";
                key = "dolores";
                name = "Roland Gleichner";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "placeat";
                uploadProtocol = "blanditiis";
                userIp = "possimus";
            }};            

            ComputeNetworkFirewallPoliciesGetAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetAssociation(req, new ComputeNetworkFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetAssociationSecurityOption1("labore", "consectetur") {{
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

            ComputeNetworkFirewallPoliciesGetIamPolicyRequest req = new ComputeNetworkFirewallPoliciesGetIamPolicyRequest("occaecati", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "fugit";
                key = "placeat";
                oauthToken = "officia";
                optionsRequestedPolicyVersion = 848473L;
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "aperiam";
                uploadProtocol = "nisi";
                userIp = "quibusdam";
            }};            

            ComputeNetworkFirewallPoliciesGetIamPolicyResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetIamPolicy(req, new ComputeNetworkFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetIamPolicySecurityOption1("esse", "esse") {{
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

            ComputeNetworkFirewallPoliciesGetRuleRequest req = new ComputeNetworkFirewallPoliciesGetRuleRequest("minus", "iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "quo";
                key = "iste";
                oauthToken = "itaque";
                prettyPrint = false;
                priority = 590239L;
                quotaUser = "odio";
                uploadType = "aliquam";
                uploadProtocol = "incidunt";
                userIp = "eligendi";
            }};            

            ComputeNetworkFirewallPoliciesGetRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesGetRule(req, new ComputeNetworkFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesGetRuleSecurityOption1("ipsam", "quidem") {{
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

            ComputeNetworkFirewallPoliciesInsertRequest req = new ComputeNetworkFirewallPoliciesInsertRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "fuga";
                            displayName = "aliquam";
                            firewallPolicyId = "est";
                            name = "Randy Zemlak";
                            shortName = "distinctio";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "placeat";
                            displayName = "quisquam";
                            firewallPolicyId = "nam";
                            name = "Blake Dooley";
                            shortName = "aspernatur";
                        }}),
                    }};
                    creationTimestamp = "quis";
                    description = "officiis";
                    displayName = "cum";
                    fingerprint = "aut";
                    id = "ex";
                    kind = "dolorum";
                    name = "Kendra Orn";
                    parent = "fugit";
                    region = "explicabo";
                    ruleTupleCount = 640504;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "sunt";
                            description = "asperiores";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "iusto";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("nihil"),
                                    add("ipsam"),
                                    add("quibusdam"),
                                }};
                                destFqdns = new String[]{{
                                    add("maiores"),
                                    add("tenetur"),
                                    add("tempora"),
                                }};
                                destIpRanges = new String[]{{
                                    add("quis"),
                                    add("dolores"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("eveniet"),
                                    add("fugiat"),
                                    add("iusto"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("ducimus"),
                                    add("aut"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "impedit";
                                        ports = new String[]{{
                                            add("blanditiis"),
                                            add("minus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "odit";
                                        ports = new String[]{{
                                            add("dolores"),
                                            add("harum"),
                                            add("praesentium"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "nihil";
                                        ports = new String[]{{
                                            add("suscipit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "porro";
                                        ports = new String[]{{
                                            add("iure"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("aliquid"),
                                    add("libero"),
                                    add("et"),
                                    add("voluptate"),
                                }};
                                srcFqdns = new String[]{{
                                    add("dignissimos"),
                                    add("atque"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("ratione"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("incidunt"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Kimberly Murazik";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Jan Smith";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Shari Stokes";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Bonnie Gottlieb";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("at"),
                                    add("deleniti"),
                                    add("nemo"),
                                    add("dolorum"),
                                }};
                            }};
                            priority = 485820;
                            ruleName = "delectus";
                            ruleTupleCount = 526453;
                            targetResources = new String[]{{
                                add("minus"),
                                add("consequuntur"),
                                add("iste"),
                                add("veritatis"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Hector Powlowski";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("porro"),
                                add("commodi"),
                                add("alias"),
                                add("doloremque"),
                            }};
                        }}),
                    }};
                    selfLink = "perspiciatis";
                    selfLinkWithId = "sapiente";
                    shortName = "voluptatem";
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "adipisci";
                key = "atque";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "sed";
                requestId = "consectetur";
                uploadType = "quo";
                uploadProtocol = "pariatur";
                userIp = "animi";
            }};            

            ComputeNetworkFirewallPoliciesInsertResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesInsert(req, new ComputeNetworkFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesInsertSecurityOption1("magnam", "officiis") {{
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

            ComputeNetworkFirewallPoliciesListRequest req = new ComputeNetworkFirewallPoliciesListRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "laudantium";
                filter = "sequi";
                key = "repellat";
                maxResults = 517222L;
                oauthToken = "neque";
                orderBy = "repellendus";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "iste";
                returnPartialSuccess = false;
                uploadType = "quidem";
                uploadProtocol = "aut";
                userIp = "minus";
            }};            

            ComputeNetworkFirewallPoliciesListResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesList(req, new ComputeNetworkFirewallPoliciesListSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesListSecurityOption1("numquam", "vel") {{
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

            ComputeNetworkFirewallPoliciesPatchRequest req = new ComputeNetworkFirewallPoliciesPatchRequest("fuga", "eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "necessitatibus";
                            displayName = "fugit";
                            firewallPolicyId = "recusandae";
                            name = "Forrest Christiansen III";
                            shortName = "nulla";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "delectus";
                            displayName = "saepe";
                            firewallPolicyId = "odio";
                            name = "Sally Reinger";
                            shortName = "rerum";
                        }}),
                    }};
                    creationTimestamp = "eligendi";
                    description = "quidem";
                    displayName = "rem";
                    fingerprint = "commodi";
                    id = "aperiam";
                    kind = "quasi";
                    name = "Mrs. Ebony Dach";
                    parent = "fuga";
                    region = "eaque";
                    ruleTupleCount = 298470;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "esse";
                            description = "consequatur";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "hic";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("quam"),
                                    add("amet"),
                                    add("unde"),
                                }};
                                destFqdns = new String[]{{
                                    add("odit"),
                                    add("modi"),
                                    add("odio"),
                                }};
                                destIpRanges = new String[]{{
                                    add("totam"),
                                    add("esse"),
                                    add("sed"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("esse"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("officiis"),
                                    add("illum"),
                                    add("sint"),
                                    add("commodi"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "possimus";
                                        ports = new String[]{{
                                            add("consectetur"),
                                            add("debitis"),
                                            add("itaque"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("porro"),
                                    add("consectetur"),
                                }};
                                srcFqdns = new String[]{{
                                    add("nostrum"),
                                    add("quo"),
                                    add("in"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("in"),
                                    add("consequatur"),
                                    add("officiis"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("harum"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Isaac Smitham";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("saepe"),
                                    add("et"),
                                }};
                            }};
                            priority = 597835;
                            ruleName = "cum";
                            ruleTupleCount = 571214;
                            targetResources = new String[]{{
                                add("ab"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Alexander Gleason";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("dicta"),
                            }};
                        }}),
                    }};
                    selfLink = "quidem";
                    selfLinkWithId = "deserunt";
                    shortName = "vitae";
                }};;
                accessToken = "magnam";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "sed";
                key = "iusto";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "eveniet";
                requestId = "iste";
                uploadType = "ullam";
                uploadProtocol = "voluptatibus";
                userIp = "esse";
            }};            

            ComputeNetworkFirewallPoliciesPatchResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesPatch(req, new ComputeNetworkFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesPatchSecurityOption1("odit", "fuga") {{
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

            ComputeNetworkFirewallPoliciesPatchRuleRequest req = new ComputeNetworkFirewallPoliciesPatchRuleRequest("fugiat", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "hic";
                    description = "laboriosam";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "perferendis";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("tempore"),
                        }};
                        destFqdns = new String[]{{
                            add("quasi"),
                        }};
                        destIpRanges = new String[]{{
                            add("placeat"),
                            add("tempore"),
                            add("quod"),
                        }};
                        destRegionCodes = new String[]{{
                            add("ipsum"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("delectus"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "minus";
                                ports = new String[]{{
                                    add("omnis"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("tempore"),
                            add("asperiores"),
                            add("nihil"),
                            add("architecto"),
                        }};
                        srcFqdns = new String[]{{
                            add("architecto"),
                        }};
                        srcIpRanges = new String[]{{
                            add("molestias"),
                            add("commodi"),
                            add("assumenda"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("quia"),
                            add("quae"),
                            add("ullam"),
                            add("consequuntur"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Mr. Vincent Kuhlman";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("illo"),
                        }};
                    }};;
                    priority = 441661;
                    ruleName = "culpa";
                    ruleTupleCount = 389282;
                    targetResources = new String[]{{
                        add("ad"),
                        add("excepturi"),
                        add("suscipit"),
                        add("officia"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Mildred Quitzon";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Bernice Emmerich";
                            state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Danny Bernier";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("expedita"),
                        add("ad"),
                    }};
                }};;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "dolores";
                key = "iste";
                oauthToken = "ut";
                prettyPrint = false;
                priority = 483167L;
                quotaUser = "sed";
                requestId = "voluptas";
                uploadType = "assumenda";
                uploadProtocol = "voluptatum";
                userIp = "totam";
            }};            

            ComputeNetworkFirewallPoliciesPatchRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesPatchRule(req, new ComputeNetworkFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesPatchRuleSecurityOption1("sunt", "dolor") {{
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

            ComputeNetworkFirewallPoliciesRemoveAssociationRequest req = new ComputeNetworkFirewallPoliciesRemoveAssociationRequest("atque", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "optio";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "vero";
                key = "quibusdam";
                name = "Kristi Altenwerth";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "ea";
                uploadType = "fugiat";
                uploadProtocol = "ab";
                userIp = "reprehenderit";
            }};            

            ComputeNetworkFirewallPoliciesRemoveAssociationResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesRemoveAssociation(req, new ComputeNetworkFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesRemoveAssociationSecurityOption1("aliquid", "ipsa") {{
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

            ComputeNetworkFirewallPoliciesRemoveRuleRequest req = new ComputeNetworkFirewallPoliciesRemoveRuleRequest("ipsa", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "natus";
                key = "animi";
                oauthToken = "eos";
                prettyPrint = false;
                priority = 661500L;
                quotaUser = "inventore";
                requestId = "praesentium";
                uploadType = "vero";
                uploadProtocol = "distinctio";
                userIp = "veritatis";
            }};            

            ComputeNetworkFirewallPoliciesRemoveRuleResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesRemoveRule(req, new ComputeNetworkFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesRemoveRuleSecurityOption1("sunt", "excepturi") {{
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

            ComputeNetworkFirewallPoliciesSetIamPolicyRequest req = new ComputeNetworkFirewallPoliciesSetIamPolicyRequest("assumenda", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "labore";
                            condition = new Expr() {{
                                description = "deserunt";
                                expression = "nam";
                                location = "libero";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("inventore"),
                                add("eaque"),
                                add("impedit"),
                            }};
                            role = "officia";
                        }}),
                    }};
                    etag = "asperiores";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("illum"),
                                            add("itaque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quos"),
                                }};
                                service = "ratione";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "id";
                                condition = new Expr() {{
                                    description = "eligendi";
                                    expression = "dolore";
                                    location = "nulla";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("aut"),
                                    add("minus"),
                                }};
                                role = "aliquam";
                            }}),
                        }};
                        etag = "eveniet";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.IN;
                                        svc = "commodi";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quis"),
                                            add("porro"),
                                            add("impedit"),
                                            add("distinctio"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "dolor";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("dolorem"),
                                        }};
                                    }}),
                                }};
                                description = "inventore";
                                ins = new String[]{{
                                    add("illum"),
                                    add("fuga"),
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
                                                    name = "Julius Abbott";
                                                    value = "magni";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lloyd Osinski";
                                                    value = "deserunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Brenda Welch";
                                                    value = "error";
                                                }}),
                                            }};
                                            field = "maxime";
                                            metric = "eaque";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
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
                                                    name = "Tracy Thompson";
                                                    value = "nemo";
                                                }}),
                                            }};
                                            field = "neque";
                                            metric = "optio";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Stewart Cartwright";
                                                    value = "hic";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Hannah Weissnat";
                                                    value = "minus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rebecca McGlynn";
                                                    value = "illum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Deborah Gibson";
                                                    value = "fuga";
                                                }}),
                                            }};
                                            field = "eveniet";
                                            metric = "reprehenderit";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eduardo Walsh";
                                                    value = "laboriosam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Louis Lemke";
                                                    value = "asperiores";
                                                }}),
                                            }};
                                            field = "iure";
                                            metric = "ab";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("laboriosam"),
                                }};
                                permissions = new String[]{{
                                    add("consequuntur"),
                                    add("earum"),
                                }};
                            }}),
                        }};
                        version = 882995;
                    }};;
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "amet";
                fields = "vel";
                key = "voluptatibus";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "eaque";
                uploadProtocol = "fuga";
                userIp = "modi";
            }};            

            ComputeNetworkFirewallPoliciesSetIamPolicyResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesSetIamPolicy(req, new ComputeNetworkFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesSetIamPolicySecurityOption1("vitae", "aliquam") {{
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

            ComputeNetworkFirewallPoliciesTestIamPermissionsRequest req = new ComputeNetworkFirewallPoliciesTestIamPermissionsRequest("culpa", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("incidunt"),
                        add("nulla"),
                        add("iure"),
                    }};
                }};;
                accessToken = "dolore";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "quas";
                key = "officia";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "eligendi";
                uploadProtocol = "inventore";
                userIp = "officia";
            }};            

            ComputeNetworkFirewallPoliciesTestIamPermissionsResponse res = sdk.networkFirewallPolicies.computeNetworkFirewallPoliciesTestIamPermissions(req, new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeNetworkFirewallPoliciesTestIamPermissionsSecurityOption1("laudantium", "perferendis") {{
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
