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

            ComputeFirewallPoliciesAddAssociationRequest req = new ComputeFirewallPoliciesAddAssociationRequest("sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicyAssociation = new FirewallPolicyAssociation() {{
                    attachmentTarget = "labore";
                    displayName = "expedita";
                    firewallPolicyId = "in";
                    name = "Ralph Hamill";
                    shortName = "distinctio";
                }};;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "et";
                key = "quas";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "cum";
                replaceExistingAssociation = false;
                requestId = "dicta";
                uploadType = "impedit";
                uploadProtocol = "tempora";
                userIp = "eveniet";
            }};            

            ComputeFirewallPoliciesAddAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesAddAssociation(req, new ComputeFirewallPoliciesAddAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesAddAssociationSecurityOption1("repudiandae", "sed") {{
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

            ComputeFirewallPoliciesAddRuleRequest req = new ComputeFirewallPoliciesAddRuleRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "impedit";
                    description = "vel";
                    direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "recusandae";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("beatae"),
                            add("veritatis"),
                        }};
                        destFqdns = new String[]{{
                            add("itaque"),
                            add("vero"),
                            add("quidem"),
                            add("illo"),
                        }};
                        destIpRanges = new String[]{{
                            add("dignissimos"),
                            add("minus"),
                            add("distinctio"),
                            add("possimus"),
                        }};
                        destRegionCodes = new String[]{{
                            add("suscipit"),
                            add("saepe"),
                            add("earum"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("nihil"),
                            add("quaerat"),
                            add("ipsum"),
                            add("ducimus"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "rerum";
                                ports = new String[]{{
                                    add("odit"),
                                    add("ad"),
                                    add("sequi"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "beatae";
                                ports = new String[]{{
                                    add("esse"),
                                    add("magnam"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "odio";
                                ports = new String[]{{
                                    add("impedit"),
                                    add("cupiditate"),
                                    add("illo"),
                                    add("exercitationem"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("illum"),
                            add("fugit"),
                            add("maxime"),
                        }};
                        srcFqdns = new String[]{{
                            add("repellat"),
                            add("nostrum"),
                            add("illum"),
                        }};
                        srcIpRanges = new String[]{{
                            add("commodi"),
                            add("esse"),
                            add("explicabo"),
                            add("consectetur"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("optio"),
                            add("ipsa"),
                            add("maiores"),
                            add("exercitationem"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Brandon Willms";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Ms. Kurt Baumbach";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Mrs. Dolores Kertzmann";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("est"),
                            add("iure"),
                        }};
                    }};;
                    priority = 787629;
                    ruleName = "provident";
                    ruleTupleCount = 515595;
                    targetResources = new String[]{{
                        add("nemo"),
                        add("enim"),
                        add("ipsam"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Dr. Dorothy Lockman";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Loren Murphy";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("soluta"),
                        add("fugiat"),
                        add("laboriosam"),
                        add("nam"),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "necessitatibus";
                key = "maxime";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "voluptatem";
                requestId = "provident";
                uploadType = "adipisci";
                uploadProtocol = "accusantium";
                userIp = "magnam";
            }};            

            ComputeFirewallPoliciesAddRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesAddRule(req, new ComputeFirewallPoliciesAddRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesAddRuleSecurityOption1("repellat", "omnis") {{
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

            ComputeFirewallPoliciesCloneRulesRequest req = new ComputeFirewallPoliciesCloneRulesRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "fugit";
                key = "ipsam";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "voluptatum";
                sourceFirewallPolicy = "quasi";
                uploadType = "error";
                uploadProtocol = "nobis";
                userIp = "tempora";
            }};            

            ComputeFirewallPoliciesCloneRulesResponse res = sdk.firewallPolicies.computeFirewallPoliciesCloneRules(req, new ComputeFirewallPoliciesCloneRulesSecurity() {{
                option1 = new ComputeFirewallPoliciesCloneRulesSecurityOption1("voluptate", "eius") {{
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

            ComputeFirewallPoliciesDeleteRequest req = new ComputeFirewallPoliciesDeleteRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "voluptatem";
                key = "repudiandae";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "eos";
                uploadType = "aliquam";
                uploadProtocol = "blanditiis";
                userIp = "hic";
            }};            

            ComputeFirewallPoliciesDeleteResponse res = sdk.firewallPolicies.computeFirewallPoliciesDelete(req, new ComputeFirewallPoliciesDeleteSecurity() {{
                option1 = new ComputeFirewallPoliciesDeleteSecurityOption1("maiores", "asperiores") {{
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

            ComputeFirewallPoliciesGetRequest req = new ComputeFirewallPoliciesGetRequest("autem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "beatae";
                key = "ipsa";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "assumenda";
                uploadProtocol = "quo";
                userIp = "fuga";
            }};            

            ComputeFirewallPoliciesGetResponse res = sdk.firewallPolicies.computeFirewallPoliciesGet(req, new ComputeFirewallPoliciesGetSecurity() {{
                option1 = new ComputeFirewallPoliciesGetSecurityOption1("tempore", "commodi") {{
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

            ComputeFirewallPoliciesGetAssociationRequest req = new ComputeFirewallPoliciesGetAssociationRequest("fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "provident";
                key = "laboriosam";
                name = "Andrew Ward Jr.";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "vitae";
                uploadProtocol = "quidem";
                userIp = "sequi";
            }};            

            ComputeFirewallPoliciesGetAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetAssociation(req, new ComputeFirewallPoliciesGetAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesGetAssociationSecurityOption1("amet", "exercitationem") {{
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

            ComputeFirewallPoliciesGetIamPolicyRequest req = new ComputeFirewallPoliciesGetIamPolicyRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "tempore";
                key = "amet";
                oauthToken = "debitis";
                optionsRequestedPolicyVersion = 751381L;
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "temporibus";
                uploadProtocol = "id";
                userIp = "atque";
            }};            

            ComputeFirewallPoliciesGetIamPolicyResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetIamPolicy(req, new ComputeFirewallPoliciesGetIamPolicySecurity() {{
                option1 = new ComputeFirewallPoliciesGetIamPolicySecurityOption1("quibusdam", "sit") {{
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

            ComputeFirewallPoliciesGetRuleRequest req = new ComputeFirewallPoliciesGetRuleRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquam";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "earum";
                key = "doloremque";
                oauthToken = "ipsum";
                prettyPrint = false;
                priority = 367L;
                quotaUser = "doloremque";
                uploadType = "tempora";
                uploadProtocol = "perspiciatis";
                userIp = "quam";
            }};            

            ComputeFirewallPoliciesGetRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesGetRule(req, new ComputeFirewallPoliciesGetRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesGetRuleSecurityOption1("atque", "officia") {{
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
                            attachmentTarget = "a";
                            displayName = "laborum";
                            firewallPolicyId = "veritatis";
                            name = "Ms. Darnell Denesik";
                            shortName = "totam";
                        }}),
                    }};
                    creationTimestamp = "tenetur";
                    description = "voluptate";
                    displayName = "quam";
                    fingerprint = "quod";
                    id = "vitae";
                    kind = "sapiente";
                    name = "Dr. Jermaine Klein";
                    parent = "fuga";
                    region = "ab";
                    ruleTupleCount = 405789;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "maiores";
                            description = "sed";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "sequi";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("voluptatum"),
                                    add("perferendis"),
                                    add("laborum"),
                                    add("omnis"),
                                }};
                                destFqdns = new String[]{{
                                    add("tenetur"),
                                    add("sapiente"),
                                }};
                                destIpRanges = new String[]{{
                                    add("adipisci"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("optio"),
                                    add("illum"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("tenetur"),
                                    add("molestias"),
                                    add("ipsam"),
                                    add("esse"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "perspiciatis";
                                        ports = new String[]{{
                                            add("eum"),
                                            add("quasi"),
                                            add("quas"),
                                            add("odio"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "commodi";
                                        ports = new String[]{{
                                            add("aliquid"),
                                            add("mollitia"),
                                            add("quidem"),
                                            add("explicabo"),
                                        }};
                                    }}),
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "et";
                                        ports = new String[]{{
                                            add("magni"),
                                            add("natus"),
                                            add("illum"),
                                            add("a"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("unde"),
                                    add("ut"),
                                    add("facere"),
                                    add("voluptas"),
                                }};
                                srcFqdns = new String[]{{
                                    add("recusandae"),
                                    add("quisquam"),
                                    add("facere"),
                                    add("dignissimos"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("provident"),
                                    add("dolor"),
                                    add("sint"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("eaque"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Maggie Jones";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Donna Abshire";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("ratione"),
                                }};
                            }};
                            priority = 555386;
                            ruleName = "maxime";
                            ruleTupleCount = 923935;
                            targetResources = new String[]{{
                                add("doloremque"),
                                add("totam"),
                                add("iure"),
                                add("maiores"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Christine Tromp III";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Mr. Rickey Franey";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Caroline Rempel";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("quos"),
                                add("illum"),
                                add("distinctio"),
                                add("voluptatem"),
                            }};
                        }}),
                    }};
                    selfLink = "non";
                    selfLinkWithId = "quaerat";
                    shortName = "consequatur";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "quibusdam";
                key = "consectetur";
                oauthToken = "voluptas";
                parentId = "quaerat";
                prettyPrint = false;
                quotaUser = "earum";
                requestId = "tenetur";
                uploadType = "assumenda";
                uploadProtocol = "dolore";
                userIp = "enim";
            }};            

            ComputeFirewallPoliciesInsertResponse res = sdk.firewallPolicies.computeFirewallPoliciesInsert(req, new ComputeFirewallPoliciesInsertSecurity() {{
                option1 = new ComputeFirewallPoliciesInsertSecurityOption1("ullam", "perspiciatis") {{
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
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "quia";
                filter = "commodi";
                key = "neque";
                maxResults = 843659L;
                oauthToken = "numquam";
                orderBy = "rem";
                pageToken = "officiis";
                parentId = "omnis";
                prettyPrint = false;
                quotaUser = "neque";
                returnPartialSuccess = false;
                uploadType = "corporis";
                uploadProtocol = "quod";
                userIp = "dolores";
            }};            

            ComputeFirewallPoliciesListResponse res = sdk.firewallPolicies.computeFirewallPoliciesList(req, new ComputeFirewallPoliciesListSecurity() {{
                option1 = new ComputeFirewallPoliciesListSecurityOption1("placeat", "excepturi") {{
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
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "ipsum";
                key = "consequatur";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                targetResource = "sequi";
                uploadType = "recusandae";
                uploadProtocol = "labore";
                userIp = "adipisci";
            }};            

            ComputeFirewallPoliciesListAssociationsResponse res = sdk.firewallPolicies.computeFirewallPoliciesListAssociations(req, new ComputeFirewallPoliciesListAssociationsSecurity() {{
                option1 = new ComputeFirewallPoliciesListAssociationsSecurityOption1("magni", "aperiam") {{
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

            ComputeFirewallPoliciesMoveRequest req = new ComputeFirewallPoliciesMoveRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "aliquid";
                key = "ad";
                oauthToken = "voluptate";
                parentId = "vel";
                prettyPrint = false;
                quotaUser = "minima";
                requestId = "sit";
                uploadType = "vel";
                uploadProtocol = "laboriosam";
                userIp = "quaerat";
            }};            

            ComputeFirewallPoliciesMoveResponse res = sdk.firewallPolicies.computeFirewallPoliciesMove(req, new ComputeFirewallPoliciesMoveSecurity() {{
                option1 = new ComputeFirewallPoliciesMoveSecurityOption1("quasi", "rem") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeFirewallPoliciesPatchRequest req = new ComputeFirewallPoliciesPatchRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                firewallPolicy1 = new FirewallPolicy() {{
                    associations = new org.openapis.openapi.models.shared.FirewallPolicyAssociation[]{{
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "provident";
                            displayName = "facere";
                            firewallPolicyId = "sed";
                            name = "Tami Mills";
                            shortName = "consequatur";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "adipisci";
                            displayName = "doloremque";
                            firewallPolicyId = "optio";
                            name = "Raquel Runolfsdottir Sr.";
                            shortName = "id";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "consequatur";
                            displayName = "quos";
                            firewallPolicyId = "ratione";
                            name = "Anita Dare III";
                            shortName = "laudantium";
                        }}),
                        add(new FirewallPolicyAssociation() {{
                            attachmentTarget = "facilis";
                            displayName = "laudantium";
                            firewallPolicyId = "ullam";
                            name = "Lori Nitzsche";
                            shortName = "accusamus";
                        }}),
                    }};
                    creationTimestamp = "iusto";
                    description = "sapiente";
                    displayName = "esse";
                    fingerprint = "neque";
                    id = "quidem";
                    kind = "quisquam";
                    name = "Ricky Hilpert";
                    parent = "magni";
                    region = "voluptatem";
                    ruleTupleCount = 665960;
                    rules = new org.openapis.openapi.models.shared.FirewallPolicyRule[]{{
                        add(new FirewallPolicyRule() {{
                            action = "veritatis";
                            description = "error";
                            direction = FirewallPolicyRuleDirectionEnum.INGRESS;
                            disabled = false;
                            enableLogging = false;
                            kind = "numquam";
                            match = new FirewallPolicyRuleMatcher() {{
                                destAddressGroups = new String[]{{
                                    add("dolorum"),
                                    add("quibusdam"),
                                    add("earum"),
                                }};
                                destFqdns = new String[]{{
                                    add("numquam"),
                                    add("molestiae"),
                                    add("impedit"),
                                }};
                                destIpRanges = new String[]{{
                                    add("animi"),
                                    add("voluptatum"),
                                    add("aliquid"),
                                }};
                                destRegionCodes = new String[]{{
                                    add("facilis"),
                                    add("optio"),
                                }};
                                destThreatIntelligences = new String[]{{
                                    add("eos"),
                                    add("magnam"),
                                }};
                                layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                                    add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                        ipProtocol = "aliquid";
                                        ports = new String[]{{
                                            add("vel"),
                                            add("ad"),
                                        }};
                                    }}),
                                }};
                                srcAddressGroups = new String[]{{
                                    add("illo"),
                                    add("suscipit"),
                                    add("quibusdam"),
                                }};
                                srcFqdns = new String[]{{
                                    add("impedit"),
                                    add("culpa"),
                                    add("atque"),
                                    add("voluptates"),
                                }};
                                srcIpRanges = new String[]{{
                                    add("nemo"),
                                    add("illo"),
                                    add("doloribus"),
                                    add("cumque"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("modi"),
                                    add("cumque"),
                                    add("ipsam"),
                                }};
                                srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Mr. Meghan Schamberger";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Dr. Alfonso Spencer";
                                        state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                    }}),
                                    add(new FirewallPolicyRuleSecureTag() {{
                                        name = "Brendan Ullrich";
                                        state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                    }}),
                                }};
                                srcThreatIntelligences = new String[]{{
                                    add("aut"),
                                    add("temporibus"),
                                    add("tenetur"),
                                }};
                            }};
                            priority = 278050;
                            ruleName = "numquam";
                            ruleTupleCount = 546950;
                            targetResources = new String[]{{
                                add("dolore"),
                                add("esse"),
                                add("reiciendis"),
                            }};
                            targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Toni Armstrong";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Willard Barrows";
                                    state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                                }}),
                                add(new FirewallPolicyRuleSecureTag() {{
                                    name = "Blake Purdy";
                                    state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                                }}),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("consectetur"),
                                add("sapiente"),
                                add("voluptatibus"),
                                add("assumenda"),
                            }};
                        }}),
                    }};
                    selfLink = "repellendus";
                    selfLinkWithId = "omnis";
                    shortName = "delectus";
                }};;
                accessToken = "odio";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quam";
                key = "omnis";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "asperiores";
                requestId = "modi";
                uploadType = "facere";
                uploadProtocol = "neque";
                userIp = "quis";
            }};            

            ComputeFirewallPoliciesPatchResponse res = sdk.firewallPolicies.computeFirewallPoliciesPatch(req, new ComputeFirewallPoliciesPatchSecurity() {{
                option1 = new ComputeFirewallPoliciesPatchSecurityOption1("in", "sed") {{
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

            ComputeFirewallPoliciesPatchRuleRequest req = new ComputeFirewallPoliciesPatchRuleRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                firewallPolicyRule = new FirewallPolicyRule() {{
                    action = "fugiat";
                    description = "soluta";
                    direction = FirewallPolicyRuleDirectionEnum.EGRESS;
                    disabled = false;
                    enableLogging = false;
                    kind = "reiciendis";
                    match = new FirewallPolicyRuleMatcher() {{
                        destAddressGroups = new String[]{{
                            add("vero"),
                            add("eos"),
                        }};
                        destFqdns = new String[]{{
                            add("quasi"),
                            add("architecto"),
                            add("praesentium"),
                        }};
                        destIpRanges = new String[]{{
                            add("fugiat"),
                            add("enim"),
                        }};
                        destRegionCodes = new String[]{{
                            add("laudantium"),
                            add("modi"),
                        }};
                        destThreatIntelligences = new String[]{{
                            add("accusamus"),
                            add("nulla"),
                        }};
                        layer4Configs = new org.openapis.openapi.models.shared.FirewallPolicyRuleMatcherLayer4Config[]{{
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quibusdam";
                                ports = new String[]{{
                                    add("enim"),
                                    add("animi"),
                                    add("unde"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quae";
                                ports = new String[]{{
                                    add("nostrum"),
                                    add("eveniet"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "laboriosam";
                                ports = new String[]{{
                                    add("blanditiis"),
                                }};
                            }}),
                            add(new FirewallPolicyRuleMatcherLayer4Config() {{
                                ipProtocol = "quidem";
                                ports = new String[]{{
                                    add("reiciendis"),
                                    add("placeat"),
                                    add("dolores"),
                                    add("consequatur"),
                                }};
                            }}),
                        }};
                        srcAddressGroups = new String[]{{
                            add("quia"),
                        }};
                        srcFqdns = new String[]{{
                            add("voluptas"),
                            add("quo"),
                            add("laudantium"),
                        }};
                        srcIpRanges = new String[]{{
                            add("omnis"),
                            add("omnis"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("dolorem"),
                        }};
                        srcSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Raquel Bruen";
                                state = FirewallPolicyRuleSecureTagStateEnum.INEFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Nettie Kilback";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                            add(new FirewallPolicyRuleSecureTag() {{
                                name = "Pat Jacobs";
                                state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                            }}),
                        }};
                        srcThreatIntelligences = new String[]{{
                            add("laudantium"),
                            add("aspernatur"),
                            add("eligendi"),
                            add("repudiandae"),
                        }};
                    }};;
                    priority = 117142;
                    ruleName = "inventore";
                    ruleTupleCount = 356256;
                    targetResources = new String[]{{
                        add("inventore"),
                        add("voluptate"),
                    }};
                    targetSecureTags = new org.openapis.openapi.models.shared.FirewallPolicyRuleSecureTag[]{{
                        add(new FirewallPolicyRuleSecureTag() {{
                            name = "Shirley Heidenreich";
                            state = FirewallPolicyRuleSecureTagStateEnum.EFFECTIVE;
                        }}),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("minus"),
                        add("a"),
                        add("fuga"),
                        add("totam"),
                    }};
                }};;
                accessToken = "cupiditate";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "omnis";
                key = "quam";
                oauthToken = "exercitationem";
                prettyPrint = false;
                priority = 915145L;
                quotaUser = "sequi";
                requestId = "quis";
                uploadType = "commodi";
                uploadProtocol = "vel";
                userIp = "rem";
            }};            

            ComputeFirewallPoliciesPatchRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesPatchRule(req, new ComputeFirewallPoliciesPatchRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesPatchRuleSecurityOption1("aliquid", "aperiam") {{
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

            ComputeFirewallPoliciesRemoveAssociationRequest req = new ComputeFirewallPoliciesRemoveAssociationRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "cumque";
                fields = "dolor";
                key = "repellendus";
                name = "Kim Hansen Sr.";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "facere";
                requestId = "earum";
                uploadType = "laborum";
                uploadProtocol = "dicta";
                userIp = "voluptatem";
            }};            

            ComputeFirewallPoliciesRemoveAssociationResponse res = sdk.firewallPolicies.computeFirewallPoliciesRemoveAssociation(req, new ComputeFirewallPoliciesRemoveAssociationSecurity() {{
                option1 = new ComputeFirewallPoliciesRemoveAssociationSecurityOption1("odit", "aliquid") {{
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

            ComputeFirewallPoliciesRemoveRuleRequest req = new ComputeFirewallPoliciesRemoveRuleRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "est";
                fields = "quaerat";
                key = "facere";
                oauthToken = "vitae";
                prettyPrint = false;
                priority = 607181L;
                quotaUser = "alias";
                requestId = "sapiente";
                uploadType = "officiis";
                uploadProtocol = "expedita";
                userIp = "quia";
            }};            

            ComputeFirewallPoliciesRemoveRuleResponse res = sdk.firewallPolicies.computeFirewallPoliciesRemoveRule(req, new ComputeFirewallPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeFirewallPoliciesRemoveRuleSecurityOption1("vitae", "odio") {{
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

            ComputeFirewallPoliciesSetIamPolicyRequest req = new ComputeFirewallPoliciesSetIamPolicyRequest("quas") {{
                dollarXgafv = XgafvEnum.ONE;
                globalOrganizationSetPolicyRequest = new GlobalOrganizationSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "placeat";
                            condition = new Expr() {{
                                description = "quod";
                                expression = "eligendi";
                                location = "sit";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("distinctio"),
                                add("assumenda"),
                                add("illum"),
                            }};
                            role = "soluta";
                        }}),
                        add(new Binding() {{
                            bindingId = "magnam";
                            condition = new Expr() {{
                                description = "laudantium";
                                expression = "tempora";
                                location = "esse";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("reiciendis"),
                                add("facilis"),
                                add("aliquam"),
                            }};
                            role = "repudiandae";
                        }}),
                        add(new Binding() {{
                            bindingId = "amet";
                            condition = new Expr() {{
                                description = "natus";
                                expression = "ab";
                                location = "officiis";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("placeat"),
                                add("ab"),
                                add("ad"),
                            }};
                            role = "blanditiis";
                        }}),
                    }};
                    etag = "porro";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("earum"),
                                            add("ullam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cupiditate"),
                                            add("occaecati"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                            add("modi"),
                                            add("aspernatur"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsa"),
                                            add("eveniet"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("qui"),
                                    add("accusantium"),
                                    add("consequatur"),
                                }};
                                service = "impedit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deleniti"),
                                            add("est"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quibusdam"),
                                            add("quos"),
                                            add("maiores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("culpa"),
                                            add("doloremque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("architecto"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("officiis"),
                                    add("dignissimos"),
                                    add("fugit"),
                                    add("ratione"),
                                }};
                                service = "possimus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "aut";
                                condition = new Expr() {{
                                    description = "natus";
                                    expression = "esse";
                                    location = "delectus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("ipsa"),
                                }};
                                role = "debitis";
                            }}),
                            add(new Binding() {{
                                bindingId = "iste";
                                condition = new Expr() {{
                                    description = "deserunt";
                                    expression = "hic";
                                    location = "ducimus";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("libero"),
                                    add("quia"),
                                }};
                                role = "omnis";
                            }}),
                        }};
                        etag = "dicta";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "fugiat";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("hic"),
                                        }};
                                    }}),
                                }};
                                description = "ullam";
                                ins = new String[]{{
                                    add("itaque"),
                                    add("distinctio"),
                                    add("iusto"),
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
                                                    name = "Theresa Terry";
                                                    value = "quasi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ivan Gulgowski";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ida Wintheiser";
                                                    value = "quaerat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jacquelyn Lueilwitz";
                                                    value = "maxime";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "minus";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheri Weissnat DDS";
                                                    value = "esse";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Rose Donnelly";
                                                    value = "numquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Elisa Reichert";
                                                    value = "eos";
                                                }}),
                                            }};
                                            field = "dolorem";
                                            metric = "hic";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("ab"),
                                    add("magnam"),
                                    add("pariatur"),
                                }};
                                permissions = new String[]{{
                                    add("autem"),
                                    add("tempore"),
                                    add("recusandae"),
                                }};
                            }}),
                        }};
                        version = 342226;
                    }};;
                }};;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "corporis";
                key = "excepturi";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "necessitatibus";
                uploadProtocol = "aspernatur";
                userIp = "dolores";
            }};            

            ComputeFirewallPoliciesSetIamPolicyResponse res = sdk.firewallPolicies.computeFirewallPoliciesSetIamPolicy(req, new ComputeFirewallPoliciesSetIamPolicySecurity() {{
                option1 = new ComputeFirewallPoliciesSetIamPolicySecurityOption1("laborum", "vero") {{
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

            ComputeFirewallPoliciesTestIamPermissionsRequest req = new ComputeFirewallPoliciesTestIamPermissionsRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("id"),
                        add("quae"),
                        add("commodi"),
                        add("a"),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "quia";
                key = "iusto";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "sed";
                uploadProtocol = "blanditiis";
                userIp = "sint";
            }};            

            ComputeFirewallPoliciesTestIamPermissionsResponse res = sdk.firewallPolicies.computeFirewallPoliciesTestIamPermissions(req, new ComputeFirewallPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeFirewallPoliciesTestIamPermissionsSecurityOption1("placeat", "ullam") {{
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
