# firewallPolicies

### Available Operations

* [computeFirewallPoliciesAddAssociation](#computefirewallpoliciesaddassociation) - Inserts an association for the specified firewall policy.
* [computeFirewallPoliciesAddRule](#computefirewallpoliciesaddrule) - Inserts a rule into a firewall policy.
* [computeFirewallPoliciesCloneRules](#computefirewallpoliciesclonerules) - Copies rules to the specified firewall policy.
* [computeFirewallPoliciesDelete](#computefirewallpoliciesdelete) - Deletes the specified policy.
* [computeFirewallPoliciesGet](#computefirewallpoliciesget) - Returns the specified firewall policy.
* [computeFirewallPoliciesGetAssociation](#computefirewallpoliciesgetassociation) - Gets an association with the specified name.
* [computeFirewallPoliciesGetIamPolicy](#computefirewallpoliciesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeFirewallPoliciesGetRule](#computefirewallpoliciesgetrule) - Gets a rule of the specified priority.
* [computeFirewallPoliciesInsert](#computefirewallpoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeFirewallPoliciesList](#computefirewallpolicieslist) - Lists all the policies that have been configured for the specified folder or organization.
* [computeFirewallPoliciesListAssociations](#computefirewallpolicieslistassociations) - Lists associations of a specified target, i.e., organization or folder.
* [computeFirewallPoliciesMove](#computefirewallpoliciesmove) - Moves the specified firewall policy.
* [computeFirewallPoliciesPatch](#computefirewallpoliciespatch) - Patches the specified policy with the data included in the request.
* [computeFirewallPoliciesPatchRule](#computefirewallpoliciespatchrule) - Patches a rule of the specified priority.
* [computeFirewallPoliciesRemoveAssociation](#computefirewallpoliciesremoveassociation) - Removes an association for the specified firewall policy.
* [computeFirewallPoliciesRemoveRule](#computefirewallpoliciesremoverule) - Deletes a rule of the specified priority.
* [computeFirewallPoliciesSetIamPolicy](#computefirewallpoliciessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeFirewallPoliciesTestIamPermissions](#computefirewallpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeFirewallPoliciesAddAssociation

Inserts an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesAddAssociationRequest req = new ComputeFirewallPoliciesAddAssociationRequest("inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "nobis";
                    displayName = "recusandae";
                    firewallPolicyId = "commodi";
                    name = "Mr. Rene Harris";
                    priority = 7913;
                    shortName = "vero";
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "perferendis";
                key = "distinctio";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "sint";
                replaceExistingAssociation = false;
                requestId = "maiores";
                uploadType = "nihil";
                uploadProtocol = "fuga";
                userIp = "cumque";
            }};            

            ComputeFirewallPoliciesAddAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesAddAssociation(req, new ComputeFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesAddAssociationSecurityOption1("consequuntur", "maiores") {{
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

## computeFirewallPoliciesAddRule

Inserts a rule into a firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesAddRuleSecurityOption2;
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

            ComputeFirewallPoliciesAddRuleRequest req = new ComputeFirewallPoliciesAddRuleRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "delectus";
                    description = "quos";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "enim";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("voluptatem"),
                        }};
                        destFqdns = new String[]{{
                            add("voluptatem"),
                            add("tempora"),
                            add("occaecati"),
                        }};
                        destIpRanges = new String[]{{
                            add("veritatis"),
                        }};
                        destRegionCodes = new String[]{{
                            add("doloremque"),
                            add("quas"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("perferendis"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quas";
                                ports = new String[]{{
                                    add("laudantium"),
                                    add("voluptates"),
                                    add("minus"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "autem";
                                ports = new String[]{{
                                    add("beatae"),
                                    add("quos"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("soluta"),
                        }};
                        srcFqdns = new String[]{{
                            add("necessitatibus"),
                            add("perspiciatis"),
                            add("suscipit"),
                            add("ullam"),
                        }};
                        srcIpRanges = new String[]{{
                            add("debitis"),
                            add("quidem"),
                            add("magnam"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("accusamus"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Loretta Wehner";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Olivia Auer";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Alberta Gleason";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Marianne Rippin";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("eius"),
                            add("ad"),
                        }};
                    }};;
                    priority = 154277;
                    ruleName = "quod";
                    ruleTupleCount = 312121;
                    securityProfileGroup = "voluptatum";
                    targetResources = new String[]{{
                        add("explicabo"),
                        add("eligendi"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Adam Ortiz";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Ernesto Will";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Bob Kutch";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("ut"),
                        add("enim"),
                    }};
                    tlsInspect = false;
                }};;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "saepe";
                key = "quod";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "quam";
                uploadType = "consectetur";
                uploadProtocol = "nemo";
                userIp = "nesciunt";
            }};            

            ComputeFirewallPoliciesAddRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesAddRule(req, new ComputeFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesAddRuleSecurityOption1("earum", "eum") {{
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

## computeFirewallPoliciesCloneRules

Copies rules to the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesCloneRulesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesCloneRulesRequest req = new ComputeFirewallPoliciesCloneRulesRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "natus";
                key = "ratione";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "unde";
                requestId = "deserunt";
                sourceFirewallPolicy = "id";
                uploadType = "ex";
                uploadProtocol = "occaecati";
                userIp = "optio";
            }};            

            ComputeFirewallPoliciesCloneRulesResponse res = sdk.firewallPolicies.computeFirewallPoliciesCloneRules(req, new ComputeFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeFirewallPoliciesCloneRulesSecurityOption1("at", "ad") {{
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

## computeFirewallPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesDeleteRequest req = new ComputeFirewallPoliciesDeleteRequest("asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "occaecati";
                key = "repellendus";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "dicta";
                requestId = "rem";
                uploadType = "fuga";
                uploadProtocol = "odio";
                userIp = "totam";
            }};            

            ComputeFirewallPoliciesDeleteResponse res = sdk.firewallPolicies.computeFirewallPoliciesDelete(req, new ComputeFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeFirewallPoliciesDeleteSecurityOption1("magni", "eos") {{
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

## computeFirewallPoliciesGet

Returns the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetRequest req = new ComputeFirewallPoliciesGetRequest("harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "natus";
                key = "aliquam";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "praesentium";
                uploadProtocol = "eum";
                userIp = "vitae";
            }};            

            ComputeFirewallPoliciesGetResponse res = sdk.firewallPolicies.computeFirewallPoliciesGet(req, new ComputeFirewallPoliciesGetSecurity() {{
                option1 = new ComputeFirewallPoliciesGetSecurityOption1("animi", "possimus") {{
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

## computeFirewallPoliciesGetAssociation

Gets an association with the specified name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetAssociationSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetAssociationRequest req = new ComputeFirewallPoliciesGetAssociationRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "accusamus";
                key = "ipsam";
                name = "Miss Darren Hermiston";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "rem";
                uploadProtocol = "a";
                userIp = "nihil";
            }};            

            ComputeFirewallPoliciesGetAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetAssociation(req, new ComputeFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesGetAssociationSecurityOption1("veniam", "aut") {{
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

## computeFirewallPoliciesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetIamPolicyRequest req = new ComputeFirewallPoliciesGetIamPolicyRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "non";
                key = "dolore";
                oauthToken = "enim";
                optionsRequestedPolicyVersion = 4490L;
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "modi";
                uploadProtocol = "illo";
                userIp = "a";
            }};            

            ComputeFirewallPoliciesGetIamPolicyResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetIamPolicy(req, new ComputeFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeFirewallPoliciesGetIamPolicySecurityOption1("et", "molestiae") {{
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

## computeFirewallPoliciesGetRule

Gets a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesGetRuleRequest req = new ComputeFirewallPoliciesGetRuleRequest("autem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "amet";
                key = "voluptate";
                oauthToken = "molestias";
                prettyPrint = false;
                priority = 976274L;
                quotaUser = "ipsum";
                uploadType = "hic";
                uploadProtocol = "quidem";
                userIp = "odit";
            }};            

            ComputeFirewallPoliciesGetRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetRule(req, new ComputeFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesGetRuleSecurityOption1("molestiae", "accusamus") {{
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

## computeFirewallPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.FirewallPolicyVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesInsertRequest req = new ComputeFirewallPoliciesInsertRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "doloribus";
                            displayName = "praesentium";
                            firewallPolicyId = "aliquid";
                            name = "Vanessa Hilll";
                            priority = 217571;
                            shortName = "vel";
                        }}),
                    }};
                    creationTimestamp = "delectus";
                    description = "maxime";
                    displayName = "vel";
                    fingerprint = "distinctio";
                    id = "cupiditate";
                    kind = "hic";
                    name = "Nina Kshlerin";
                    parent = "ad";
                    region = "magni";
                    ruleTupleCount = 345746;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "aliquid";
                            description = "quam";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "numquam";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("fuga"),
                                }};
                                destFqdns = new String[]{{
                                    add("velit"),
                                    add("quasi"),
                                    add("sed"),
                                }};
                                destIpRanges = new String[]{{
                                    add("veniam"),
                                    add("quae"),
                                    add("dolore"),
                                    add("in"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("ut"),
                                    add("cumque"),
                                    add("quia"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("porro"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "distinctio";
                                        ports = new String[]{{
                                            add("fugit"),
                                            add("amet"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "culpa";
                                        ports = new String[]{{
                                            add("minus"),
                                            add("vero"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "omnis";
                                        ports = new String[]{{
                                            add("earum"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "fuga";
                                        ports = new String[]{{
                                            add("distinctio"),
                                            add("fugiat"),
                                            add("nulla"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("praesentium"),
                                    add("officiis"),
                                    add("esse"),
                                }};
                                srcFqdns = new String[]{{
                                    add("delectus"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("minus"),
                                    add("labore"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("sed"),
                                    add("veniam"),
                                    add("sed"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Dr. Allison Kihn";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Thomas Kirlin Jr.";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Emanuel Lemke";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Noah Bernier";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("provident"),
                                }};
                            }};
                            priority = 454890;
                            ruleName = "tempore";
                            ruleTupleCount = 353967;
                            securityProfileGroup = "illum";
                            targetResources = new String[]{{
                                add("ipsa"),
                                add("quos"),
                                add("quo"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Ora Olson";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Ms. Donnie Crona";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("harum"),
                                add("laborum"),
                                add("a"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "repudiandae";
                            description = "minus";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "laboriosam";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("cupiditate"),
                                }};
                                destFqdns = new String[]{{
                                    add("aliquam"),
                                }};
                                destIpRanges = new String[]{{
                                    add("atque"),
                                    add("dicta"),
                                    add("magnam"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("cum"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("eius"),
                                    add("maiores"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quos";
                                        ports = new String[]{{
                                            add("officiis"),
                                            add("ab"),
                                            add("voluptate"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "consequatur";
                                        ports = new String[]{{
                                            add("repellat"),
                                            add("voluptatem"),
                                            add("dolor"),
                                            add("distinctio"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quaerat";
                                        ports = new String[]{{
                                            add("neque"),
                                            add("nihil"),
                                            add("recusandae"),
                                            add("numquam"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "mollitia";
                                        ports = new String[]{{
                                            add("blanditiis"),
                                            add("suscipit"),
                                            add("quas"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("enim"),
                                    add("corporis"),
                                }};
                                srcFqdns = new String[]{{
                                    add("ea"),
                                    add("autem"),
                                    add("voluptate"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("magni"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("dolorum"),
                                    add("voluptas"),
                                    add("temporibus"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Leslie Johnston";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Arnold Bechtelar";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Kristopher Herman";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Tracy Buckridge";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("a"),
                                    add("dignissimos"),
                                    add("labore"),
                                }};
                            }};
                            priority = 511054;
                            ruleName = "dolore";
                            ruleTupleCount = 398788;
                            securityProfileGroup = "repudiandae";
                            targetResources = new String[]{{
                                add("quod"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Angela Marks";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("amet"),
                                add("iure"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "quibusdam";
                            description = "sint";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "nihil";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("eligendi"),
                                    add("fuga"),
                                }};
                                destFqdns = new String[]{{
                                    add("sit"),
                                }};
                                destIpRanges = new String[]{{
                                    add("earum"),
                                    add("quis"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("omnis"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("quo"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "illo";
                                        ports = new String[]{{
                                            add("quia"),
                                            add("veniam"),
                                            add("est"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("cum"),
                                    add("maiores"),
                                    add("provident"),
                                }};
                                srcFqdns = new String[]{{
                                    add("maiores"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("ducimus"),
                                    add("dolore"),
                                    add("aspernatur"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("fuga"),
                                    add("at"),
                                    add("unde"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Terrell Lockman";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Christina Bins";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Sherri Schuster";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("dignissimos"),
                                    add("repellat"),
                                    add("iusto"),
                                }};
                            }};
                            priority = 633956;
                            ruleName = "voluptate";
                            ruleTupleCount = 583142;
                            securityProfileGroup = "maxime";
                            targetResources = new String[]{{
                                add("nihil"),
                                add("sed"),
                                add("optio"),
                                add("nulla"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Nora Greenfelder";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("quam"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "eos";
                            description = "omnis";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "qui";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("eligendi"),
                                    add("numquam"),
                                    add("inventore"),
                                }};
                                destFqdns = new String[]{{
                                    add("tenetur"),
                                    add("exercitationem"),
                                    add("nihil"),
                                    add("quia"),
                                }};
                                destIpRanges = new String[]{{
                                    add("maiores"),
                                    add("dicta"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("eum"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("id"),
                                    add("nobis"),
                                    add("quasi"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "aliquam";
                                        ports = new String[]{{
                                            add("temporibus"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "voluptatum";
                                        ports = new String[]{{
                                            add("aspernatur"),
                                            add("neque"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "consequuntur";
                                        ports = new String[]{{
                                            add("saepe"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "amet";
                                        ports = new String[]{{
                                            add("repellat"),
                                            add("eos"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("repellat"),
                                    add("mollitia"),
                                    add("quaerat"),
                                    add("officia"),
                                }};
                                srcFqdns = new String[]{{
                                    add("perspiciatis"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("a"),
                                    add("iure"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("recusandae"),
                                    add("iste"),
                                    add("aspernatur"),
                                    add("aspernatur"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Frances Willms III";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("voluptatem"),
                                }};
                            }};
                            priority = 593830;
                            ruleName = "error";
                            ruleTupleCount = 537623;
                            securityProfileGroup = "enim";
                            targetResources = new String[]{{
                                add("saepe"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Wesley Gleason";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Jamie Fritsch";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Randy Collier";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("tempora"),
                            }};
                            tlsInspect = false;
                        }}),
                    }};
                    selfLink = "aliquam";
                    selfLinkWithId = "dolorem";
                    shortName = "expedita";
                    vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum.REGIONAL_VPC_NETWORK;
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "vitae";
                key = "quos";
                oauthToken = "atque";
                parentId = "quisquam";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "asperiores";
                uploadType = "corporis";
                uploadProtocol = "vel";
                userIp = "accusamus";
            }};            

            ComputeFirewallPoliciesInsertResponse res = sdk.firewallPolicies.computeFirewallPoliciesInsert(req, new ComputeFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeFirewallPoliciesInsertSecurityOption1("totam", "ipsam") {{
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

## computeFirewallPoliciesList

Lists all the policies that have been configured for the specified folder or organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesListRequest req = new ComputeFirewallPoliciesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "dolorem";
                filter = "odit";
                key = "officiis";
                maxResults = 649070L;
                oauthToken = "libero";
                orderBy = "fugiat";
                pageToken = "voluptas";
                parentId = "et";
                prettyPrint = false;
                quotaUser = "odio";
                returnPartialSuccess = false;
                uploadType = "eligendi";
                uploadProtocol = "nesciunt";
                userIp = "harum";
            }};            

            ComputeFirewallPoliciesListResponse res = sdk.firewallPolicies.computeFirewallPoliciesList(req, new ComputeFirewallPoliciesListSecurity() {{
                option1 = new ComputeFirewallPoliciesListSecurityOption1("aperiam", "pariatur") {{
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

## computeFirewallPoliciesListAssociations

Lists associations of a specified target, i.e., organization or folder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesListAssociationsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesListAssociationsRequest req = new ComputeFirewallPoliciesListAssociationsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "ut";
                key = "quidem";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sit";
                targetResource = "architecto";
                uploadType = "tempore";
                uploadProtocol = "deserunt";
                userIp = "nulla";
            }};            

            ComputeFirewallPoliciesListAssociationsResponse res = sdk.firewallPolicies.computeFirewallPoliciesListAssociations(req, new ComputeFirewallPoliciesListAssociationsSecurity() {{
                option1 = new ComputeFirewallPoliciesListAssociationsSecurityOption1("corrupti", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.firewallPoliciesListAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeFirewallPoliciesMove

Moves the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesMoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesMoveRequest req = new ComputeFirewallPoliciesMoveRequest("alias") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "alias";
                key = "laudantium";
                oauthToken = "qui";
                parentId = "libero";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "nam";
                uploadType = "pariatur";
                uploadProtocol = "quod";
                userIp = "modi";
            }};            

            ComputeFirewallPoliciesMoveResponse res = sdk.firewallPolicies.computeFirewallPoliciesMove(req, new ComputeFirewallPoliciesMoveSecurity() {{
                option1 = new ComputeFirewallPoliciesMoveSecurityOption1("vitae", "delectus") {{
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

## computeFirewallPoliciesPatch

Patches the specified policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.FirewallPolicyAssociation;
import org.openapis.openapi.models.shared.FirewallPolicyRule;
import org.openapis.openapi.models.shared.FirewallPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcher;
import org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag;
import org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTagStateEnum;
import org.openapis.openapi.models.shared.FirewallPolicyVpcNetworkScopeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesPatchRequest req = new ComputeFirewallPoliciesPatchRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "magnam";
                            displayName = "officiis";
                            firewallPolicyId = "sed";
                            name = "Alonzo Green";
                            priority = 327411;
                            shortName = "impedit";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "facilis";
                            displayName = "amet";
                            firewallPolicyId = "quis";
                            name = "Jack Kulas";
                            priority = 551570;
                            shortName = "delectus";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "sunt";
                            displayName = "repudiandae";
                            firewallPolicyId = "facere";
                            name = "Kurt Lindgren";
                            priority = 592760;
                            shortName = "accusamus";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "minus";
                            displayName = "impedit";
                            firewallPolicyId = "minima";
                            name = "Ira Lakin DVM";
                            priority = 558201;
                            shortName = "impedit";
                        }}),
                    }};
                    creationTimestamp = "illum";
                    description = "ullam";
                    displayName = "praesentium";
                    fingerprint = "perferendis";
                    id = "soluta";
                    kind = "animi";
                    name = "Mr. Emily Macejkovic";
                    parent = "quaerat";
                    region = "repellat";
                    ruleTupleCount = 898186;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "quaerat";
                            description = "magnam";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "magni";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("esse"),
                                    add("cumque"),
                                    add("pariatur"),
                                }};
                                destFqdns = new String[]{{
                                    add("rerum"),
                                }};
                                destIpRanges = new String[]{{
                                    add("illum"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("amet"),
                                    add("expedita"),
                                    add("libero"),
                                    add("impedit"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("dolores"),
                                    add("ut"),
                                    add("nihil"),
                                    add("harum"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "aliquid";
                                        ports = new String[]{{
                                            add("labore"),
                                            add("repudiandae"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "asperiores";
                                        ports = new String[]{{
                                            add("voluptatem"),
                                            add("beatae"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("laboriosam"),
                                }};
                                srcFqdns = new String[]{{
                                    add("in"),
                                    add("veritatis"),
                                    add("nobis"),
                                    add("voluptatibus"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("facilis"),
                                    add("facere"),
                                    add("aut"),
                                    add("itaque"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("molestiae"),
                                    add("quaerat"),
                                    add("distinctio"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Christina Bernhard";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Bernard Goodwin";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mrs. Francisco Dickinson";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("velit"),
                                }};
                            }};
                            priority = 881549;
                            ruleName = "veniam";
                            ruleTupleCount = 591367;
                            securityProfileGroup = "nostrum";
                            targetResources = new String[]{{
                                add("quod"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Cheryl Bins";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("sequi"),
                                add("culpa"),
                            }};
                            tlsInspect = false;
                        }}),
                        add(new FirewallPolicyRule() {{
                            action = "fuga";
                            description = "modi";
                            direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "eveniet";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("optio"),
                                    add("adipisci"),
                                }};
                                destFqdns = new String[]{{
                                    add("maxime"),
                                }};
                                destIpRanges = new String[]{{
                                    add("explicabo"),
                                    add("reiciendis"),
                                    add("dicta"),
                                    add("hic"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("tempore"),
                                    add("ullam"),
                                    add("sunt"),
                                    add("quisquam"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("id"),
                                    add("ut"),
                                    add("et"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "reiciendis";
                                        ports = new String[]{{
                                            add("itaque"),
                                            add("iste"),
                                            add("quod"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "quidem";
                                        ports = new String[]{{
                                            add("iure"),
                                            add("natus"),
                                            add("ipsam"),
                                            add("repudiandae"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "earum";
                                        ports = new String[]{{
                                            add("veniam"),
                                            add("debitis"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "doloremque";
                                        ports = new String[]{{
                                            add("aliquid"),
                                            add("porro"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("molestiae"),
                                    add("mollitia"),
                                    add("quidem"),
                                    add("delectus"),
                                }};
                                srcFqdns = new String[]{{
                                    add("beatae"),
                                    add("suscipit"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("mollitia"),
                                    add("ipsam"),
                                    add("porro"),
                                    add("molestiae"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("vel"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Daisy Franey";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Ollie Collier V";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("natus"),
                                }};
                            }};
                            priority = 822862;
                            ruleName = "magni";
                            ruleTupleCount = 951633;
                            securityProfileGroup = "cumque";
                            targetResources = new String[]{{
                                add("delectus"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mr. Louis Waelchi";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Carrie Rippin";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Aaron Fisher";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("asperiores"),
                            }};
                            tlsInspect = false;
                        }}),
                    }};
                    selfLink = "occaecati";
                    selfLinkWithId = "doloremque";
                    shortName = "blanditiis";
                    vpcNetworkScope = FirewallPolicyVpcNetworkScopeEnum.GLOBAL_VPC_NETWORK;
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "id";
                key = "itaque";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "quaerat";
                requestId = "id";
                uploadType = "eveniet";
                uploadProtocol = "optio";
                userIp = "soluta";
            }};            

            ComputeFirewallPoliciesPatchResponse res = sdk.firewallPolicies.computeFirewallPoliciesPatch(req, new ComputeFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeFirewallPoliciesPatchSecurityOption1("dignissimos", "nemo") {{
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

## computeFirewallPoliciesPatchRule

Patches a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesPatchRuleSecurityOption2;
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

            ComputeFirewallPoliciesPatchRuleRequest req = new ComputeFirewallPoliciesPatchRuleRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "placeat";
                    description = "at";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "eos";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("quia"),
                        }};
                        destFqdns = new String[]{{
                            add("excepturi"),
                            add("sapiente"),
                            add("maiores"),
                            add("exercitationem"),
                        }};
                        destIpRanges = new String[]{{
                            add("dolore"),
                            add("iste"),
                        }};
                        destRegionCodes = new String[]{{
                            add("error"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("harum"),
                            add("sapiente"),
                            add("laborum"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "vero";
                                ports = new String[]{{
                                    add("eum"),
                                    add("quasi"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("accusantium"),
                            add("quo"),
                            add("id"),
                            add("tempora"),
                        }};
                        srcFqdns = new String[]{{
                            add("labore"),
                            add("quis"),
                            add("aliquid"),
                            add("vero"),
                        }};
                        srcIpRanges = new String[]{{
                            add("dicta"),
                            add("sit"),
                            add("adipisci"),
                            add("inventore"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("iure"),
                            add("praesentium"),
                            add("perspiciatis"),
                            add("omnis"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Mr. Bethany Champlin PhD";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Sadie Stanton";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Robert Hickle";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Lena Goyette";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("omnis"),
                            add("voluptate"),
                            add("vitae"),
                            add("reiciendis"),
                        }};
                    }};;
                    priority = 766501;
                    ruleName = "atque";
                    ruleTupleCount = 126733;
                    securityProfileGroup = "sit";
                    targetResources = new String[]{{
                        add("commodi"),
                        add("enim"),
                        add("harum"),
                        add("aut"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Luz Rau";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("impedit"),
                        add("corrupti"),
                        add("quas"),
                        add("ullam"),
                    }};
                    tlsInspect = false;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "officiis";
                key = "labore";
                oauthToken = "nulla";
                prettyPrint = false;
                priority = 879682L;
                quotaUser = "consequatur";
                requestId = "ut";
                uploadType = "laborum";
                uploadProtocol = "hic";
                userIp = "sed";
            }};            

            ComputeFirewallPoliciesPatchRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesPatchRule(req, new ComputeFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesPatchRuleSecurityOption1("corrupti", "maxime") {{
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

## computeFirewallPoliciesRemoveAssociation

Removes an association for the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveAssociationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesRemoveAssociationRequest req = new ComputeFirewallPoliciesRemoveAssociationRequest("ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "labore";
                key = "commodi";
                name = "Donnie Boyer";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "facere";
                uploadType = "corrupti";
                uploadProtocol = "magni";
                userIp = "blanditiis";
            }};            

            ComputeFirewallPoliciesRemoveAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesRemoveAssociation(req, new ComputeFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesRemoveAssociationSecurityOption1("assumenda", "culpa") {{
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

## computeFirewallPoliciesRemoveRule

Deletes a rule of the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesRemoveRuleRequest req = new ComputeFirewallPoliciesRemoveRuleRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "inventore";
                key = "vitae";
                oauthToken = "qui";
                prettyPrint = false;
                priority = 603348L;
                quotaUser = "ex";
                requestId = "quaerat";
                uploadType = "aliquid";
                uploadProtocol = "eum";
                userIp = "quaerat";
            }};            

            ComputeFirewallPoliciesRemoveRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesRemoveRule(req, new ComputeFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesRemoveRuleSecurityOption1("enim", "cumque") {{
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

## computeFirewallPoliciesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.GlobalOrganizationSetPolicyRequest;
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

            ComputeFirewallPoliciesSetIamPolicyRequest req = new ComputeFirewallPoliciesSetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                globalOrganizationSetPolicyRequest = new GlobalOrganizationSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "et";
                            condition = new Expr() {{
                                description = "delectus";
                                expression = "explicabo";
                                location = "iste";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("aspernatur"),
                                add("sapiente"),
                            }};
                            role = "nemo";
                        }}),
                        add(new Binding() {{
                            bindingId = "laboriosam";
                            condition = new Expr() {{
                                description = "iste";
                                expression = "quidem";
                                location = "iusto";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("a"),
                                add("consequatur"),
                                add("voluptates"),
                                add("dolorum"),
                            }};
                            role = "fugit";
                        }}),
                        add(new Binding() {{
                            bindingId = "eos";
                            condition = new Expr() {{
                                description = "veritatis";
                                expression = "vel";
                                location = "placeat";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("ipsa"),
                                add("dignissimos"),
                                add("veritatis"),
                                add("harum"),
                            }};
                            role = "cumque";
                        }}),
                    }};
                    etag = "ab";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("quam"),
                                            add("unde"),
                                            add("harum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("ipsa"),
                                    add("blanditiis"),
                                    add("aliquam"),
                                }};
                                service = "vero";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("occaecati"),
                                            add("consequuntur"),
                                            add("veniam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eaque"),
                                            add("incidunt"),
                                            add("asperiores"),
                                            add("eius"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("incidunt"),
                                            add("iusto"),
                                            add("laborum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quia"),
                                    add("repellendus"),
                                }};
                                service = "blanditiis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "eius";
                                condition = new Expr() {{
                                    description = "cupiditate";
                                    expression = "nisi";
                                    location = "placeat";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("earum"),
                                    add("debitis"),
                                    add("impedit"),
                                    add("reiciendis"),
                                }};
                                role = "ex";
                            }}),
                            add(new Binding() {{
                                bindingId = "tempore";
                                condition = new Expr() {{
                                    description = "provident";
                                    expression = "provident";
                                    location = "soluta";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("consectetur"),
                                    add("corporis"),
                                }};
                                role = "nisi";
                            }}),
                        }};
                        etag = "aspernatur";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "enim";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("dolores"),
                                            add("iste"),
                                            add("labore"),
                                            add("porro"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "consequatur";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("ea"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "fugit";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("voluptate"),
                                            add("autem"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "debitis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("assumenda"),
                                            add("doloremque"),
                                        }};
                                    }}),
                                }};
                                description = "porro";
                                ins = new String[]{{
                                    add("temporibus"),
                                    add("vel"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Robin Smith";
                                                    value = "non";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Dolores Kulas V";
                                                    value = "dolorum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lamar Lesch PhD";
                                                    value = "adipisci";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Jerome O'Reilly";
                                                    value = "quod";
                                                }}),
                                            }};
                                            field = "magni";
                                            metric = "incidunt";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Jeanne Nienow";
                                                    value = "doloremque";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cody Franey";
                                                    value = "exercitationem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Angel Kreiger";
                                                    value = "iste";
                                                }}),
                                            }};
                                            field = "eaque";
                                            metric = "reiciendis";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Malcolm Gleichner";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Greg Renner";
                                                    value = "aperiam";
                                                }}),
                                            }};
                                            field = "minima";
                                            metric = "perspiciatis";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Silvia Dietrich";
                                                    value = "quae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Becky Schiller";
                                                    value = "nesciunt";
                                                }}),
                                            }};
                                            field = "maiores";
                                            metric = "veniam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("officiis"),
                                    add("aperiam"),
                                }};
                                permissions = new String[]{{
                                    add("sed"),
                                    add("corporis"),
                                    add("consequuntur"),
                                    add("odio"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "repellendus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("delectus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "laborum";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("architecto"),
                                            add("reiciendis"),
                                            add("consequatur"),
                                            add("sunt"),
                                        }};
                                    }}),
                                }};
                                description = "odit";
                                ins = new String[]{{
                                    add("laboriosam"),
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
                                                    name = "Becky Tillman";
                                                    value = "consequuntur";
                                                }}),
                                            }};
                                            field = "enim";
                                            metric = "minus";
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
                                                    name = "Ellis Mann";
                                                    value = "doloribus";
                                                }}),
                                            }};
                                            field = "magnam";
                                            metric = "adipisci";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Sue Jerde";
                                                    value = "temporibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jon Wintheiser";
                                                    value = "laborum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Luz Crooks Sr.";
                                                    value = "ratione";
                                                }}),
                                            }};
                                            field = "nisi";
                                            metric = "perspiciatis";
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
                                                    name = "Vicki Marquardt";
                                                    value = "placeat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jon Harris";
                                                    value = "dolores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Minnie Schneider";
                                                    value = "quam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Beth Klocko";
                                                    value = "velit";
                                                }}),
                                            }};
                                            field = "tempora";
                                            metric = "aspernatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("alias"),
                                    add("adipisci"),
                                }};
                                permissions = new String[]{{
                                    add("tempore"),
                                    add("asperiores"),
                                    add("distinctio"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "accusamus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("inventore"),
                                            add("perspiciatis"),
                                            add("perferendis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.IN;
                                        svc = "molestiae";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("perspiciatis"),
                                            add("optio"),
                                            add("itaque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "id";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("a"),
                                            add("quibusdam"),
                                        }};
                                    }}),
                                }};
                                description = "culpa";
                                ins = new String[]{{
                                    add("occaecati"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Vanessa Rodriguez";
                                                    value = "mollitia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Jim Macejkovic";
                                                    value = "explicabo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joey McClure";
                                                    value = "libero";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tami Olson Jr.";
                                                    value = "eum";
                                                }}),
                                            }};
                                            field = "nesciunt";
                                            metric = "commodi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Vivian Dietrich";
                                                    value = "ab";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Carol Batz";
                                                    value = "necessitatibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Randall McLaughlin DVM";
                                                    value = "quod";
                                                }}),
                                            }};
                                            field = "magni";
                                            metric = "sit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("libero"),
                                }};
                                permissions = new String[]{{
                                    add("eius"),
                                    add("perspiciatis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quisquam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("eveniet"),
                                            add("voluptatem"),
                                            add("repellat"),
                                            add("magni"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "veritatis";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("quos"),
                                            add("totam"),
                                        }};
                                    }}),
                                }};
                                description = "facere";
                                ins = new String[]{{
                                    add("doloremque"),
                                    add("vero"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Bert Rogahn";
                                                    value = "natus";
                                                }}),
                                            }};
                                            field = "molestiae";
                                            metric = "facilis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("itaque"),
                                }};
                                permissions = new String[]{{
                                    add("consequatur"),
                                    add("harum"),
                                    add("nobis"),
                                }};
                            }}),
                        }};
                        version = 256325;
                    }};;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "quos";
                key = "commodi";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "nulla";
                uploadProtocol = "nemo";
                userIp = "ratione";
            }};            

            ComputeFirewallPoliciesSetIamPolicyResponse res = sdk.firewallPolicies.computeFirewallPoliciesSetIamPolicy(req, new ComputeFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeFirewallPoliciesSetIamPolicySecurityOption1("dolore", "perferendis") {{
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

## computeFirewallPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeFirewallPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesTestIamPermissionsRequest req = new ComputeFirewallPoliciesTestIamPermissionsRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dolor"),
                        add("nesciunt"),
                        add("vitae"),
                    }};
                }};;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "provident";
                fields = "quia";
                key = "reiciendis";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "et";
                uploadProtocol = "qui";
                userIp = "iusto";
            }};            

            ComputeFirewallPoliciesTestIamPermissionsResponse res = sdk.firewallPolicies.computeFirewallPoliciesTestIamPermissions(req, new ComputeFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeFirewallPoliciesTestIamPermissionsSecurityOption1("a", "quidem") {{
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
