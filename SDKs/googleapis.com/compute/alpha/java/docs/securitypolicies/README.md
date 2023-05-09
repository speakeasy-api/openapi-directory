# securityPolicies

### Available Operations

* [computeSecurityPoliciesAddRule](#computesecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeSecurityPoliciesAggregatedList](#computesecuritypoliciesaggregatedlist) - Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.
* [computeSecurityPoliciesDelete](#computesecuritypoliciesdelete) - Deletes the specified policy.
* [computeSecurityPoliciesGet](#computesecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeSecurityPoliciesGetRule](#computesecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeSecurityPoliciesInsert](#computesecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeSecurityPoliciesList](#computesecuritypolicieslist) - List all the policies that have been configured for the specified project.
* [computeSecurityPoliciesListPreconfiguredExpressionSets](#computesecuritypolicieslistpreconfiguredexpressionsets) - Gets the current list of preconfigured Web Application Firewall (WAF) expressions.
* [computeSecurityPoliciesPatch](#computesecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeSecurityPoliciesPatchRule](#computesecuritypoliciespatchrule) - Patches a rule at the specified priority.
* [computeSecurityPoliciesRemoveRule](#computesecuritypoliciesremoverule) - Deletes a rule at the specified priority.
* [computeSecurityPoliciesSetLabels](#computesecuritypoliciessetlabels) - Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.
* [computeSecurityPoliciesTestIamPermissions](#computesecuritypoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAddRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesAddRuleRequest req = new ComputeSecurityPoliciesAddRuleRequest("assumenda", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "sit";
                    description = "deserunt";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "eius";
                                headerValue = "provident";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "officiis";
                                headerValue = "harum";
                            }}),
                        }};
                    }};;
                    kind = "eligendi";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("voluptas"),
                                add("nobis"),
                                add("alias"),
                                add("rem"),
                            }};
                            destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "necessitatibus";
                                    ports = new String[]{{
                                        add("quaerat"),
                                    }};
                                }}),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "doloremque";
                                    ports = new String[]{{
                                        add("iure"),
                                        add("libero"),
                                        add("voluptate"),
                                        add("cum"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "nulla";
                                    ports = new String[]{{
                                        add("ut"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "unde";
                                    ports = new String[]{{
                                        add("veniam"),
                                        add("in"),
                                        add("ipsa"),
                                        add("accusamus"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "sint";
                                    ports = new String[]{{
                                        add("provident"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("quod"),
                                add("praesentium"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "ex";
                            expression = "esse";
                            location = "fuga";
                            title = "Miss";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                        destIpRanges = new String[]{{
                            add("quisquam"),
                        }};
                        destPorts = new String[]{{
                            add("iure"),
                            add("fugiat"),
                            add("rem"),
                            add("sit"),
                        }};
                        ipProtocols = new String[]{{
                            add("accusantium"),
                            add("libero"),
                        }};
                        srcAsns = new Long[]{{
                            add(285118L),
                            add(398351L),
                            add(364261L),
                            add(449115L),
                        }};
                        srcIpRanges = new String[]{{
                            add("sunt"),
                        }};
                        srcPorts = new String[]{{
                            add("beatae"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("placeat"),
                        }};
                        userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Wendy White";
                                values = new String[]{{
                                    add("consequatur"),
                                    add("officia"),
                                }};
                            }}),
                        }};
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "harum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "nulla";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "beatae";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "exercitationem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "voluptatem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "aut";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "facere";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "illum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "fuga";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "odit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "provident";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("autem"),
                                    add("ipsum"),
                                    add("neque"),
                                }};
                                targetRuleSet = "aperiam";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "culpa";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "nostrum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "vitae";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "doloremque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "odit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "porro";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "delectus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "molestias";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "aliquam";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("facilis"),
                                    add("repellendus"),
                                    add("non"),
                                }};
                                targetRuleSet = "reiciendis";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 975060;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 664235;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 829163;
                            intervalSec = 790131;
                        }};;
                        conformAction = "earum";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "aliquam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                            }}),
                        }};
                        enforceOnKeyName = "impedit";
                        exceedAction = "maiores";
                        exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                            code = 729015;
                            message = "officiis";
                        }};;
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "dolores";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 977368;
                            intervalSec = 132202;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "quae";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                    redirectTarget = "occaecati";
                    ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                    ruleNumber = "quas";
                    ruleTupleCount = 469493;
                    targetResources = new String[]{{
                        add("saepe"),
                        add("commodi"),
                        add("tenetur"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("iusto"),
                        add("natus"),
                        add("maxime"),
                        add("eaque"),
                    }};
                }};;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "porro";
                fields = "molestiae";
                key = "officiis";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "temporibus";
                uploadProtocol = "totam";
                userIp = "sunt";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesAddRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesAddRule(req, new ComputeSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesAddRuleSecurityOption1("possimus", "minus") {{
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

## computeSecurityPoliciesAggregatedList

Retrieves the list of all SecurityPolicy resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesAggregatedListRequest req = new ComputeSecurityPoliciesAggregatedListRequest("laudantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "odio";
                filter = "ea";
                includeAllScopes = false;
                key = "error";
                maxResults = 917564L;
                oauthToken = "eum";
                orderBy = "ex";
                pageToken = "ipsam";
                prettyPrint = false;
                quotaUser = "libero";
                returnPartialSuccess = false;
                uploadType = "soluta";
                uploadProtocol = "amet";
                userIp = "eaque";
            }};            

            ComputeSecurityPoliciesAggregatedListResponse res = sdk.securityPolicies.computeSecurityPoliciesAggregatedList(req, new ComputeSecurityPoliciesAggregatedListSecurity() {{
                option1 = new ComputeSecurityPoliciesAggregatedListSecurityOption1("quis", "ducimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPoliciesAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesDeleteRequest req = new ComputeSecurityPoliciesDeleteRequest("aut", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "sequi";
                key = "fugit";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "officiis";
                requestId = "libero";
                uploadType = "dolore";
                uploadProtocol = "id";
                userIp = "autem";
            }};            

            ComputeSecurityPoliciesDeleteResponse res = sdk.securityPolicies.computeSecurityPoliciesDelete(req, new ComputeSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeSecurityPoliciesDeleteSecurityOption1("odio", "blanditiis") {{
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

## computeSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesGetRequest req = new ComputeSecurityPoliciesGetRequest("ratione", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "modi";
                key = "fugiat";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "exercitationem";
                uploadProtocol = "ad";
                userIp = "labore";
            }};            

            ComputeSecurityPoliciesGetResponse res = sdk.securityPolicies.computeSecurityPoliciesGet(req, new ComputeSecurityPoliciesGetSecurity() {{
                option1 = new ComputeSecurityPoliciesGetSecurityOption1("explicabo", "repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesGetRuleRequest req = new ComputeSecurityPoliciesGetRuleRequest("unde", "quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "recusandae";
                key = "inventore";
                oauthToken = "veniam";
                prettyPrint = false;
                priority = 988102L;
                quotaUser = "laudantium";
                uploadType = "quaerat";
                uploadProtocol = "commodi";
                userIp = "similique";
            }};            

            ComputeSecurityPoliciesGetRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesGetRule(req, new ComputeSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesGetRuleSecurityOption1("quis", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicyRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicy;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAssociation;
import org.openapis.openapi.models.shared.SecurityPolicyCloudArmorConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedFieldBaseEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesInsertRequest req = new ComputeSecurityPoliciesInsertRequest("corrupti") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 9843.67;
                            expirationSec = 588041;
                            impactedBaselineThreshold = 2672.93;
                            loadThreshold = 8202.38;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.PREMIUM;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("praesentium"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("accusamus"),
                            add("animi"),
                            add("eligendi"),
                            add("corporis"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "ea";
                            displayName = "sint";
                            name = "Clay Bailey";
                            securityPolicyId = "odit";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "nulla";
                            displayName = "quibusdam";
                            name = "Patti Ernser Jr.";
                            securityPolicyId = "perspiciatis";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "ipsum";
                            displayName = "repudiandae";
                            name = "Kelly Lind";
                            securityPolicyId = "saepe";
                        }}),
                    }};
                    cloudArmorConfig = new SecurityPolicyCloudArmorConfig() {{
                        enableMl = false;
                    }};;
                    creationTimestamp = "necessitatibus";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED;
                    }};;
                    description = "officiis";
                    displayName = "aliquid";
                    fingerprint = "provident";
                    id = "esse";
                    kind = "labore";
                    labelFingerprint = "architecto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "error");
                        put("facere", "architecto");
                    }};
                    name = "Malcolm Johnson";
                    parent = "voluptates";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "unde";
                    }};;
                    region = "illo";
                    ruleTupleCount = 623634;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "libero";
                            description = "minus";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "quos";
                                        headerValue = "illum";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "quia";
                                        headerValue = "voluptas";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "aliquam";
                                        headerValue = "cum";
                                    }}),
                                }};
                            }};
                            kind = "neque";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("quasi"),
                                        add("debitis"),
                                        add("facere"),
                                        add("dolorum"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "ab";
                                            ports = new String[]{{
                                                add("nulla"),
                                                add("eveniet"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "ab";
                                            ports = new String[]{{
                                                add("voluptatem"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "id";
                                            ports = new String[]{{
                                                add("ullam"),
                                                add("cupiditate"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "laudantium";
                                            ports = new String[]{{
                                                add("quia"),
                                                add("totam"),
                                                add("unde"),
                                                add("necessitatibus"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quod";
                                            ports = new String[]{{
                                                add("iusto"),
                                                add("molestiae"),
                                                add("numquam"),
                                                add("quam"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "rem";
                                            ports = new String[]{{
                                                add("laudantium"),
                                                add("dolor"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("sit"),
                                        add("laborum"),
                                        add("harum"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "quam";
                                    expression = "nobis";
                                    location = "aut";
                                    title = "Mr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("beatae"),
                                    add("officiis"),
                                    add("praesentium"),
                                    add("deserunt"),
                                }};
                                destPorts = new String[]{{
                                    add("beatae"),
                                    add("ut"),
                                    add("sapiente"),
                                }};
                                ipProtocols = new String[]{{
                                    add("beatae"),
                                    add("suscipit"),
                                    add("enim"),
                                }};
                                srcAsns = new Long[]{{
                                    add(931537L),
                                    add(732074L),
                                    add(545277L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("ea"),
                                }};
                                srcPorts = new String[]{{
                                    add("iste"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("quibusdam"),
                                    add("labore"),
                                    add("tempora"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Leona Koch";
                                        values = new String[]{{
                                            add("sunt"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "porro";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "rem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "laboriosam";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "earum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ipsum";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quaerat";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nihil";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolores";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("laboriosam"),
                                            add("possimus"),
                                        }};
                                        targetRuleSet = "nostrum";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 463812;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 952779;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 990588;
                                    intervalSec = 677691;
                                }};
                                conformAction = "rem";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_HEADER;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "blanditiis";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "praesentium";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "totam";
                                exceedAction = "illo";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 528963;
                                    message = "ipsum";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "harum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 453427;
                                    intervalSec = 486472;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "cum";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "aliquid";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                            ruleNumber = "cum";
                            ruleTupleCount = 85404;
                            targetResources = new String[]{{
                                add("quis"),
                                add("cupiditate"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("minus"),
                                add("ut"),
                                add("iste"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "vel";
                            description = "assumenda";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "fugiat";
                                        headerValue = "dignissimos";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "quae";
                                        headerValue = "sit";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "non";
                                        headerValue = "corrupti";
                                    }}),
                                }};
                            }};
                            kind = "quia";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("sapiente"),
                                        add("amet"),
                                        add("inventore"),
                                        add("culpa"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "ratione";
                                            ports = new String[]{{
                                                add("esse"),
                                                add("quas"),
                                                add("fuga"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "culpa";
                                            ports = new String[]{{
                                                add("ut"),
                                                add("illo"),
                                                add("accusamus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "itaque";
                                            ports = new String[]{{
                                                add("minima"),
                                                add("esse"),
                                                add("unde"),
                                                add("enim"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "quisquam";
                                            ports = new String[]{{
                                                add("illo"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "ratione";
                                            ports = new String[]{{
                                                add("ipsa"),
                                                add("sapiente"),
                                                add("fugit"),
                                                add("dignissimos"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "et";
                                            ports = new String[]{{
                                                add("in"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("voluptatem"),
                                        add("porro"),
                                        add("porro"),
                                        add("doloribus"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "repellat";
                                    expression = "sequi";
                                    location = "unde";
                                    title = "Ms.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("velit"),
                                    add("quam"),
                                }};
                                destPorts = new String[]{{
                                    add("autem"),
                                }};
                                ipProtocols = new String[]{{
                                    add("eius"),
                                    add("quibusdam"),
                                    add("odio"),
                                    add("voluptatibus"),
                                }};
                                srcAsns = new Long[]{{
                                    add(203349L),
                                    add(564243L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("eveniet"),
                                    add("quia"),
                                }};
                                srcPorts = new String[]{{
                                    add("sequi"),
                                    add("fugiat"),
                                    add("assumenda"),
                                    add("mollitia"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("impedit"),
                                    add("ab"),
                                    add("asperiores"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Sylvia Nikolaus";
                                        values = new String[]{{
                                            add("aliquid"),
                                            add("dolor"),
                                            add("rerum"),
                                            add("aut"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Silvia Harris";
                                        values = new String[]{{
                                            add("veritatis"),
                                            add("magni"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Essie Kerluke";
                                        values = new String[]{{
                                            add("quaerat"),
                                            add("neque"),
                                            add("culpa"),
                                            add("eligendi"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "repellendus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptatibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "nobis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sed";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ipsum";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("voluptates"),
                                            add("molestiae"),
                                        }};
                                        targetRuleSet = "iste";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "minima";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "dolores";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "explicabo";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "corporis";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "facere";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "et";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("explicabo"),
                                            add("amet"),
                                            add("rerum"),
                                            add("inventore"),
                                        }};
                                        targetRuleSet = "enim";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eligendi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "molestias";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "consequatur";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "architecto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "non";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "voluptatem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "et";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ut";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nulla";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "totam";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "optio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "recusandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "voluptatibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quae";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("consequuntur"),
                                            add("velit"),
                                            add("tempore"),
                                        }};
                                        targetRuleSet = "nisi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "fugiat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quas";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "voluptatum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "minima";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "perspiciatis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "provident";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "illo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "laborum";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("dolorem"),
                                        }};
                                        targetRuleSet = "necessitatibus";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 678086;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 653714;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 485285;
                                    intervalSec = 783940;
                                }};
                                conformAction = "voluptatibus";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL_IPS;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "iusto";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "sit";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "optio";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                }};
                                enforceOnKeyName = "facere";
                                exceedAction = "ex";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 284862;
                                    message = "in";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "explicabo";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 672597;
                                    intervalSec = 408537;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "exercitationem";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            redirectTarget = "nam";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "accusantium";
                            ruleTupleCount = 795068;
                            targetResources = new String[]{{
                                add("blanditiis"),
                                add("magnam"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("itaque"),
                                add("asperiores"),
                                add("et"),
                            }};
                        }}),
                    }};
                    selfLink = "quis";
                    selfLinkWithId = "autem";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_NETWORK;
                    userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField[]{{
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "error";
                            name = "Alejandro Bednar";
                            offset = 409368;
                            size = 757485;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "alias";
                            name = "Kelly Rath";
                            offset = 660715;
                            size = 926871;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "deserunt";
                            name = "Christine Flatley";
                            offset = 151295;
                            size = 907565;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV6;
                            mask = "quo";
                            name = "Helen Moore";
                            offset = 418297;
                            size = 49713;
                        }}),
                    }};
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "quos";
                key = "explicabo";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "animi";
                requestId = "modi";
                uploadType = "ipsam";
                uploadProtocol = "vero";
                userIp = "eos";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesInsertResponse res = sdk.securityPolicies.computeSecurityPoliciesInsert(req, new ComputeSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeSecurityPoliciesInsertSecurityOption1("ad", "numquam") {{
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

## computeSecurityPoliciesList

List all the policies that have been configured for the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesListRequest req = new ComputeSecurityPoliciesListRequest("quas") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "officia";
                filter = "enim";
                key = "dolorum";
                maxResults = 793417L;
                oauthToken = "illum";
                orderBy = "temporibus";
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                returnPartialSuccess = false;
                uploadType = "pariatur";
                uploadProtocol = "eaque";
                userIp = "asperiores";
            }};            

            ComputeSecurityPoliciesListResponse res = sdk.securityPolicies.computeSecurityPoliciesList(req, new ComputeSecurityPoliciesListSecurity() {{
                option1 = new ComputeSecurityPoliciesListSecurityOption1("eligendi", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPolicyList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSecurityPoliciesListPreconfiguredExpressionSets

Gets the current list of preconfigured Web Application Firewall (WAF) expressions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest req = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "repellendus";
                filter = "itaque";
                key = "sunt";
                maxResults = 601092L;
                oauthToken = "fugiat";
                orderBy = "labore";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "vitae";
                returnPartialSuccess = false;
                uploadType = "in";
                uploadProtocol = "repellendus";
                userIp = "ratione";
            }};            

            ComputeSecurityPoliciesListPreconfiguredExpressionSetsResponse res = sdk.securityPolicies.computeSecurityPoliciesListPreconfiguredExpressionSets(req, new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity() {{
                option1 = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption1("in", "asperiores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.securityPoliciesListPreconfiguredExpressionSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSecurityPoliciesPatch

Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicy;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAssociation;
import org.openapis.openapi.models.shared.SecurityPolicyCloudArmorConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField;
import org.openapis.openapi.models.shared.SecurityPolicyUserDefinedFieldBaseEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesPatchRequest req = new ComputeSecurityPoliciesPatchRequest("tempore", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 1240.65;
                            expirationSec = 391013;
                            impactedBaselineThreshold = 9059.8;
                            loadThreshold = 4963.4;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.PREMIUM;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("maxime"),
                                add("ab"),
                                add("quos"),
                                add("adipisci"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.NORMAL;
                        userIpRequestHeaders = new String[]{{
                            add("facere"),
                            add("deleniti"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "tempore";
                            displayName = "est";
                            name = "Kara Goodwin";
                            securityPolicyId = "quas";
                        }}),
                    }};
                    cloudArmorConfig = new SecurityPolicyCloudArmorConfig() {{
                        enableMl = false;
                    }};;
                    creationTimestamp = "veritatis";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "ipsa";
                    displayName = "sit";
                    fingerprint = "possimus";
                    id = "quia";
                    kind = "consequatur";
                    labelFingerprint = "doloremque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("provident", "itaque");
                    }};
                    name = "Ryan Zulauf IV";
                    parent = "impedit";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "corrupti";
                    }};;
                    region = "ex";
                    ruleTupleCount = 783871;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "dolorem";
                            description = "enim";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "tenetur";
                                        headerValue = "accusamus";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nostrum";
                                        headerValue = "laudantium";
                                    }}),
                                }};
                            }};
                            kind = "expedita";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("quos"),
                                        add("ipsam"),
                                        add("laudantium"),
                                    }};
                                    destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "reiciendis";
                                            ports = new String[]{{
                                                add("sed"),
                                                add("distinctio"),
                                                add("illum"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "magnam";
                                            ports = new String[]{{
                                                add("at"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                            ipProtocol = "aliquid";
                                            ports = new String[]{{
                                                add("quis"),
                                                add("dolorum"),
                                            }};
                                        }}),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "dolor";
                                            ports = new String[]{{
                                                add("accusantium"),
                                                add("occaecati"),
                                                add("quos"),
                                                add("eius"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "odit";
                                            ports = new String[]{{
                                                add("ullam"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "ex";
                                            ports = new String[]{{
                                                add("perspiciatis"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("provident"),
                                        add("iste"),
                                        add("amet"),
                                        add("ducimus"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "inventore";
                                    expression = "corrupti";
                                    location = "maiores";
                                    title = "Ms.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                                destIpRanges = new String[]{{
                                    add("dolor"),
                                    add("aut"),
                                    add("et"),
                                    add("iure"),
                                }};
                                destPorts = new String[]{{
                                    add("magni"),
                                    add("culpa"),
                                    add("commodi"),
                                    add("sequi"),
                                }};
                                ipProtocols = new String[]{{
                                    add("laudantium"),
                                }};
                                srcAsns = new Long[]{{
                                    add(393549L),
                                    add(202865L),
                                }};
                                srcIpRanges = new String[]{{
                                    add("consequuntur"),
                                    add("corporis"),
                                    add("officiis"),
                                }};
                                srcPorts = new String[]{{
                                    add("voluptatum"),
                                    add("praesentium"),
                                    add("distinctio"),
                                    add("sunt"),
                                }};
                                srcRegionCodes = new String[]{{
                                    add("sed"),
                                }};
                                userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                                    add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                        name = "Tricia Ward";
                                        values = new String[]{{
                                            add("officia"),
                                            add("voluptatibus"),
                                        }};
                                    }}),
                                }};
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quibusdam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "repellendus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "minus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eveniet";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "blanditiis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "qui";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "pariatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "rem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eius";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "maxime";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("similique"),
                                            add("ea"),
                                            add("quas"),
                                        }};
                                        targetRuleSet = "placeat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "ut";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "provident";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "tenetur";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "at";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "porro";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "aliquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "blanditiis";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quidem";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("facilis"),
                                            add("ea"),
                                            add("repudiandae"),
                                        }};
                                        targetRuleSet = "rem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "architecto";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aperiam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nobis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dolorum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "saepe";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "neque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "possimus";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "doloremque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "esse";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("culpa"),
                                            add("reprehenderit"),
                                            add("fuga"),
                                            add("quasi"),
                                        }};
                                        targetRuleSet = "maxime";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nostrum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "blanditiis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nostrum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "amet";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "commodi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "ducimus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "saepe";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "doloribus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("officiis"),
                                            add("perspiciatis"),
                                        }};
                                        targetRuleSet = "dolores";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 702918;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 257935;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 285571;
                                    intervalSec = 316972;
                                }};
                                conformAction = "eligendi";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_HEADER;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "eum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "cumque";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "mollitia";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                }};
                                enforceOnKeyName = "earum";
                                exceedAction = "beatae";
                                exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                                    code = 921289;
                                    message = "sapiente";
                                }};
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "eum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 488721;
                                    intervalSec = 652124;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "omnis";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            redirectTarget = "nostrum";
                            ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.NONE;
                            ruleNumber = "ex";
                            ruleTupleCount = 511937;
                            targetResources = new String[]{{
                                add("quaerat"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("nihil"),
                                add("magnam"),
                            }};
                        }}),
                    }};
                    selfLink = "vero";
                    selfLinkWithId = "aspernatur";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR;
                    userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyUserDefinedField[]{{
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.TCP;
                            mask = "praesentium";
                            name = "Crystal Stiedemann";
                            offset = 737486;
                            size = 324456;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV4;
                            mask = "natus";
                            name = "Adrienne Larkin";
                            offset = 304752;
                            size = 551573;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.UDP;
                            mask = "distinctio";
                            name = "Fredrick Mertz";
                            offset = 902533;
                            size = 872122;
                        }}),
                        add(new SecurityPolicyUserDefinedField() {{
                            base = SecurityPolicyUserDefinedFieldBaseEnum.IPV6;
                            mask = "sint";
                            name = "Emilio Kirlin";
                            offset = 581821;
                            size = 23524;
                        }}),
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "mollitia";
                key = "expedita";
                oauthToken = "sit";
                paths = new String[]{{
                    add("eaque"),
                    add("voluptate"),
                    add("facere"),
                }};
                prettyPrint = false;
                quotaUser = "modi";
                requestId = "corporis";
                updateMask = "numquam";
                uploadType = "ipsam";
                uploadProtocol = "recusandae";
                userIp = "a";
            }};            

            ComputeSecurityPoliciesPatchResponse res = sdk.securityPolicies.computeSecurityPoliciesPatch(req, new ComputeSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeSecurityPoliciesPatchSecurityOption1("molestiae", "fugiat") {{
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

## computeSecurityPoliciesPatchRule

Patches a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesPatchRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsRpcStatus;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRuleManagedProtectionTierEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesPatchRuleRequest req = new ComputeSecurityPoliciesPatchRuleRequest("blanditiis", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "fuga";
                    description = "voluptatem";
                    direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "a";
                                headerValue = "deserunt";
                            }}),
                        }};
                    }};;
                    kind = "repudiandae";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("iure"),
                                add("recusandae"),
                                add("minus"),
                                add("natus"),
                            }};
                            destPorts = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigDestinationPort[]{{
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "incidunt";
                                    ports = new String[]{{
                                        add("doloribus"),
                                        add("vel"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "voluptatibus";
                                    ports = new String[]{{
                                        add("amet"),
                                        add("in"),
                                        add("id"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigDestinationPort() {{
                                    ipProtocol = "culpa";
                                    ports = new String[]{{
                                        add("aliquid"),
                                        add("porro"),
                                    }};
                                }}),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "eos";
                                    ports = new String[]{{
                                        add("dignissimos"),
                                        add("modi"),
                                        add("suscipit"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "quo";
                                    ports = new String[]{{
                                        add("id"),
                                        add("optio"),
                                        add("id"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "magni";
                                    ports = new String[]{{
                                        add("quibusdam"),
                                        add("reprehenderit"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "facere";
                                    ports = new String[]{{
                                        add("iure"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("repellendus"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "officiis";
                            expression = "labore";
                            location = "fugiat";
                            title = "Dr.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                    }};;
                    networkMatch = new SecurityPolicyRuleNetworkMatcher() {{
                        destIpRanges = new String[]{{
                            add("consectetur"),
                            add("expedita"),
                            add("deserunt"),
                        }};
                        destPorts = new String[]{{
                            add("minus"),
                        }};
                        ipProtocols = new String[]{{
                            add("fugit"),
                        }};
                        srcAsns = new Long[]{{
                            add(243243L),
                        }};
                        srcIpRanges = new String[]{{
                            add("ducimus"),
                            add("nihil"),
                        }};
                        srcPorts = new String[]{{
                            add("corporis"),
                        }};
                        srcRegionCodes = new String[]{{
                            add("perferendis"),
                            add("ex"),
                        }};
                        userDefinedFields = new org.openapis.openapi.models.shared.SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[]{{
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Daryl Ondricka";
                                values = new String[]{{
                                    add("dolores"),
                                    add("reiciendis"),
                                    add("veritatis"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Byron Hermiston";
                                values = new String[]{{
                                    add("quae"),
                                }};
                            }}),
                            add(new SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch() {{
                                name = "Mr. Sara Hansen";
                                values = new String[]{{
                                    add("tempore"),
                                    add("a"),
                                    add("quaerat"),
                                    add("repellendus"),
                                }};
                            }}),
                        }};
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "recusandae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "ducimus";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "voluptas";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "eaque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "repellendus";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "reiciendis";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "nesciunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "voluptates";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("illum"),
                                    add("nam"),
                                    add("ipsum"),
                                    add("voluptatum"),
                                }};
                                targetRuleSet = "dolores";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "voluptatibus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "laudantium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "eius";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "voluptatibus";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "nulla";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "nam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "vero";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "id";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "vel";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "corrupti";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "incidunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "nobis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "delectus";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("laborum"),
                                    add("asperiores"),
                                }};
                                targetRuleSet = "optio";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 730203;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 620174;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 96673;
                            intervalSec = 179546;
                        }};;
                        conformAction = "odit";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_PATH;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "similique";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "cumque";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                            }}),
                        }};
                        enforceOnKeyName = "magni";
                        exceedAction = "mollitia";
                        exceedActionRpcStatus = new SecurityPolicyRuleRateLimitOptionsRpcStatus() {{
                            code = 688589;
                            message = "beatae";
                        }};;
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "excepturi";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 143485;
                            intervalSec = 644334;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "quo";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                    redirectTarget = "quaerat";
                    ruleManagedProtectionTier = SecurityPolicyRuleRuleManagedProtectionTierEnum.PLUS;
                    ruleNumber = "odio";
                    ruleTupleCount = 319173;
                    targetResources = new String[]{{
                        add("voluptates"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("repellendus"),
                        add("magni"),
                        add("illum"),
                        add("voluptates"),
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "voluptatem";
                key = "sit";
                oauthToken = "tempore";
                prettyPrint = false;
                priority = 584767L;
                quotaUser = "tempora";
                updateMask = "voluptas";
                uploadType = "culpa";
                uploadProtocol = "earum";
                userIp = "sit";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesPatchRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesPatchRule(req, new ComputeSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesPatchRuleSecurityOption1("dicta", "quo") {{
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

## computeSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesRemoveRuleRequest req = new ComputeSecurityPoliciesRemoveRuleRequest("nemo", "voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "blanditiis";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "perferendis";
                key = "porro";
                oauthToken = "soluta";
                prettyPrint = false;
                priority = 813439L;
                quotaUser = "quod";
                uploadType = "mollitia";
                uploadProtocol = "totam";
                userIp = "ad";
            }};            

            ComputeSecurityPoliciesRemoveRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesRemoveRule(req, new ComputeSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesRemoveRuleSecurityOption1("itaque", "harum") {{
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

## computeSecurityPoliciesSetLabels

Sets the labels on a security policy. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesSetLabelsRequest req = new ComputeSecurityPoliciesSetLabelsRequest("natus", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "eos");
                        put("molestias", "hic");
                    }};
                }};;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "cum";
                key = "quis";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "aliquam";
                uploadProtocol = "tempora";
                userIp = "veniam";
            }};            

            ComputeSecurityPoliciesSetLabelsResponse res = sdk.securityPolicies.computeSecurityPoliciesSetLabels(req, new ComputeSecurityPoliciesSetLabelsSecurity() {{
                option1 = new ComputeSecurityPoliciesSetLabelsSecurityOption1("fugit", "alias") {{
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

## computeSecurityPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSecurityPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesTestIamPermissionsRequest req = new ComputeSecurityPoliciesTestIamPermissionsRequest("veritatis", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("quo"),
                        add("ipsam"),
                        add("quisquam"),
                    }};
                }};;
                accessToken = "illo";
                alt = AltEnum.JSON;
                callback = "unde";
                fields = "numquam";
                key = "animi";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "dicta";
                uploadProtocol = "suscipit";
                userIp = "quibusdam";
            }};            

            ComputeSecurityPoliciesTestIamPermissionsResponse res = sdk.securityPolicies.computeSecurityPoliciesTestIamPermissions(req, new ComputeSecurityPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeSecurityPoliciesTestIamPermissionsSecurityOption1("temporibus", "quidem") {{
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
