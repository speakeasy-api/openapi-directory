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
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesAddRuleRequest req = new ComputeSecurityPoliciesAddRuleRequest("assumenda", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "molestias";
                    description = "quod";
                    direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "accusantium";
                                headerValue = "vero";
                            }}),
                        }};
                    }};;
                    kind = "cumque";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("recusandae"),
                                add("asperiores"),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "aliquam";
                                    ports = new String[]{{
                                        add("officia"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "mollitia";
                                    ports = new String[]{{
                                        add("ad"),
                                        add("aperiam"),
                                        add("assumenda"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "corporis";
                                    ports = new String[]{{
                                        add("molestiae"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("perspiciatis"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "nemo";
                            expression = "autem";
                            location = "aliquid";
                            title = "Miss";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "odio";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "commodi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "nesciunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "delectus";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "nesciunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "rerum";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "et";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "ipsam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "expedita";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("ut"),
                                    add("nam"),
                                    add("rem"),
                                }};
                                targetRuleSet = "quas";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 417823;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 985105;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 363364;
                            intervalSec = 239064;
                        }};;
                        conformAction = "ut";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_PATH;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "voluptas";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                            }}),
                        }};
                        enforceOnKeyName = "eius";
                        exceedAction = "nihil";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "nihil";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 961654;
                            intervalSec = 504236;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "qui";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                    ruleNumber = "asperiores";
                    ruleTupleCount = 886397;
                    targetResources = new String[]{{
                        add("reprehenderit"),
                        add("quam"),
                        add("voluptatibus"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("aspernatur"),
                    }};
                }};;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "ab";
                key = "tempora";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "asperiores";
                uploadProtocol = "officia";
                userIp = "deleniti";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesAddRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesAddRule(req, new ComputeSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesAddRuleSecurityOption1("ab", "odio") {{
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

            ComputeSecurityPoliciesAggregatedListRequest req = new ComputeSecurityPoliciesAggregatedListRequest("vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "sint";
                filter = "consectetur";
                includeAllScopes = false;
                key = "praesentium";
                maxResults = 274703L;
                oauthToken = "ab";
                orderBy = "quam";
                pageToken = "nisi";
                prettyPrint = false;
                quotaUser = "sint";
                returnPartialSuccess = false;
                uploadType = "libero";
                uploadProtocol = "vitae";
                userIp = "doloribus";
            }};            

            ComputeSecurityPoliciesAggregatedListResponse res = sdk.securityPolicies.computeSecurityPoliciesAggregatedList(req, new ComputeSecurityPoliciesAggregatedListSecurity() {{
                option1 = new ComputeSecurityPoliciesAggregatedListSecurityOption1("laudantium", "harum") {{
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

            ComputeSecurityPoliciesDeleteRequest req = new ComputeSecurityPoliciesDeleteRequest("magni", "iste") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "quam";
                key = "atque";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "quisquam";
                requestId = "voluptas";
                uploadType = "molestiae";
                uploadProtocol = "expedita";
                userIp = "illo";
            }};            

            ComputeSecurityPoliciesDeleteResponse res = sdk.securityPolicies.computeSecurityPoliciesDelete(req, new ComputeSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeSecurityPoliciesDeleteSecurityOption1("laborum", "nesciunt") {{
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

            ComputeSecurityPoliciesGetRequest req = new ComputeSecurityPoliciesGetRequest("nulla", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "adipisci";
                key = "laudantium";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "harum";
                uploadProtocol = "sed";
                userIp = "repellendus";
            }};            

            ComputeSecurityPoliciesGetResponse res = sdk.securityPolicies.computeSecurityPoliciesGet(req, new ComputeSecurityPoliciesGetSecurity() {{
                option1 = new ComputeSecurityPoliciesGetSecurityOption1("hic", "dolore") {{
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

            ComputeSecurityPoliciesGetRuleRequest req = new ComputeSecurityPoliciesGetRuleRequest("accusamus", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "accusantium";
                key = "et";
                oauthToken = "quibusdam";
                prettyPrint = false;
                priority = 329930L;
                quotaUser = "minima";
                uploadType = "ad";
                uploadProtocol = "corporis";
                userIp = "pariatur";
            }};            

            ComputeSecurityPoliciesGetRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesGetRule(req, new ComputeSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesGetRuleSecurityOption1("necessitatibus", "neque") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesInsertRequest req = new ComputeSecurityPoliciesInsertRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 689.85;
                            expirationSec = 363817;
                            impactedBaselineThreshold = 9829.89;
                            loadThreshold = 7770.38;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("eaque"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("molestiae"),
                            add("ratione"),
                            add("atque"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "nobis";
                            displayName = "nostrum";
                            name = "Johnny Turner";
                            securityPolicyId = "nam";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "consectetur";
                            displayName = "consequatur";
                            name = "Toni Oberbrunner";
                            securityPolicyId = "nostrum";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "dignissimos";
                            displayName = "reprehenderit";
                            name = "Vivian Hoeger";
                            securityPolicyId = "beatae";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "earum";
                            displayName = "corrupti";
                            name = "Dr. Toni Kuvalis";
                            securityPolicyId = "neque";
                        }}),
                    }};
                    creationTimestamp = "voluptas";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED;
                    }};;
                    description = "vel";
                    displayName = "sint";
                    fingerprint = "dolores";
                    id = "minima";
                    kind = "mollitia";
                    labelFingerprint = "illo";
                    labels = new java.util.HashMap<String, String>() {{
                        put("beatae", "quam");
                    }};
                    name = "Dr. Regina Cartwright";
                    parent = "quam";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "consectetur";
                    }};;
                    region = "iste";
                    ruleTupleCount = 803527;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "esse";
                            description = "soluta";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "quibusdam";
                                        headerValue = "recusandae";
                                    }}),
                                }};
                            }};
                            kind = "quas";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("officia"),
                                        add("autem"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "aperiam";
                                            ports = new String[]{{
                                                add("alias"),
                                                add("nesciunt"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "voluptate";
                                            ports = new String[]{{
                                                add("blanditiis"),
                                                add("perspiciatis"),
                                                add("doloribus"),
                                                add("mollitia"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "similique";
                                            ports = new String[]{{
                                                add("ut"),
                                                add("magnam"),
                                                add("natus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "voluptate";
                                            ports = new String[]{{
                                                add("saepe"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("voluptate"),
                                        add("natus"),
                                        add("saepe"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "praesentium";
                                    expression = "aliquam";
                                    location = "commodi";
                                    title = "Mrs.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ipsum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "adipisci";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quod";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "voluptates";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "in";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "voluptatem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quidem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "veritatis";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "deleniti";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("doloremque"),
                                            add("impedit"),
                                            add("officiis"),
                                        }};
                                        targetRuleSet = "ducimus";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 269033;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 250533;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 689555;
                                    intervalSec = 510719;
                                }};
                                conformAction = "iste";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "pariatur";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "deleniti";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "sequi";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "dignissimos";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "voluptatibus";
                                exceedAction = "veritatis";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "vero";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 520625;
                                    intervalSec = 381802;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "fugit";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "magni";
                            ruleTupleCount = 731240;
                            targetResources = new String[]{{
                                add("id"),
                                add("fugit"),
                                add("voluptates"),
                                add("itaque"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("dicta"),
                            }};
                        }}),
                    }};
                    selfLink = "eos";
                    selfLinkWithId = "corporis";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_EDGE;
                }};;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "maxime";
                key = "distinctio";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "sunt";
                uploadType = "sit";
                uploadProtocol = "explicabo";
                userIp = "modi";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesInsertResponse res = sdk.securityPolicies.computeSecurityPoliciesInsert(req, new ComputeSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeSecurityPoliciesInsertSecurityOption1("quaerat", "cum") {{
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

            ComputeSecurityPoliciesListRequest req = new ComputeSecurityPoliciesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolore";
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "temporibus";
                filter = "enim";
                key = "facere";
                maxResults = 332183L;
                oauthToken = "alias";
                orderBy = "occaecati";
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "doloremque";
                returnPartialSuccess = false;
                uploadType = "reprehenderit";
                uploadProtocol = "labore";
                userIp = "itaque";
            }};            

            ComputeSecurityPoliciesListResponse res = sdk.securityPolicies.computeSecurityPoliciesList(req, new ComputeSecurityPoliciesListSecurity() {{
                option1 = new ComputeSecurityPoliciesListSecurityOption1("voluptatum", "fugit") {{
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

            ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest req = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "perspiciatis";
                filter = "enim";
                key = "rem";
                maxResults = 509381L;
                oauthToken = "quas";
                orderBy = "deleniti";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "totam";
                returnPartialSuccess = false;
                uploadType = "perspiciatis";
                uploadProtocol = "molestias";
                userIp = "totam";
            }};            

            ComputeSecurityPoliciesListPreconfiguredExpressionSetsResponse res = sdk.securityPolicies.computeSecurityPoliciesListPreconfiguredExpressionSets(req, new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity() {{
                option1 = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption1("delectus", "vitae") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleDirectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesPatchRequest req = new ComputeSecurityPoliciesPatchRequest("sint", "repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 3486.85;
                            expirationSec = 839600;
                            impactedBaselineThreshold = 8109.02;
                            loadThreshold = 9986.54;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("possimus"),
                                add("aliquid"),
                                add("laudantium"),
                                add("temporibus"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("dolore"),
                            add("labore"),
                            add("voluptate"),
                            add("quos"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "fugit";
                            displayName = "aspernatur";
                            name = "Tasha Crist";
                            securityPolicyId = "rem";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "delectus";
                            displayName = "quis";
                            name = "April Bailey";
                            securityPolicyId = "minus";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "quas";
                            displayName = "vitae";
                            name = "Lucy Spencer";
                            securityPolicyId = "occaecati";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "velit";
                            displayName = "aliquid";
                            name = "Mrs. Leslie Bode";
                            securityPolicyId = "veritatis";
                        }}),
                    }};
                    creationTimestamp = "labore";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "eum";
                    displayName = "alias";
                    fingerprint = "rerum";
                    id = "voluptatum";
                    kind = "in";
                    labelFingerprint = "beatae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("tempore", "labore");
                        put("sequi", "quidem");
                        put("a", "minima");
                        put("tempore", "repudiandae");
                    }};
                    name = "Dr. Micheal Zulauf";
                    parent = "occaecati";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "necessitatibus";
                    }};;
                    region = "dignissimos";
                    ruleTupleCount = 401733;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "officiis";
                            description = "commodi";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "consectetur";
                                        headerValue = "necessitatibus";
                                    }}),
                                }};
                            }};
                            kind = "magni";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("ipsa"),
                                        add("eligendi"),
                                        add("ratione"),
                                        add("nisi"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "illo";
                                            ports = new String[]{{
                                                add("voluptate"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("nobis"),
                                        add("quibusdam"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "dicta";
                                    expression = "mollitia";
                                    location = "placeat";
                                    title = "Mr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "iusto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "nemo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "unde";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "consequuntur";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "at";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "molestiae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quidem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eius";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "consequatur";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "blanditiis";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("eos"),
                                            add("ipsa"),
                                        }};
                                        targetRuleSet = "tempore";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "molestiae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ipsam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "non";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "laborum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quod";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "earum";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "impedit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolorem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "libero";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("odit"),
                                            add("sed"),
                                            add("consequatur"),
                                        }};
                                        targetRuleSet = "quia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "excepturi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quas";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "excepturi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "maxime";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "accusamus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "labore";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "asperiores";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "modi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ipsa";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "assumenda";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "facilis";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("possimus"),
                                            add("sed"),
                                        }};
                                        targetRuleSet = "ab";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "doloribus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "harum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aliquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "tempore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "placeat";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "consectetur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "ex";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "corporis";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("similique"),
                                        }};
                                        targetRuleSet = "ipsa";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 475549;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 379387;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 994819;
                                    intervalSec = 22633;
                                }};
                                conformAction = "voluptatibus";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "libero";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "enim";
                                exceedAction = "cupiditate";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "ea";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 796278;
                                    intervalSec = 729377;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "facilis";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "expedita";
                            ruleTupleCount = 937242;
                            targetResources = new String[]{{
                                add("deleniti"),
                                add("modi"),
                                add("eius"),
                                add("exercitationem"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("explicabo"),
                                add("voluptatum"),
                                add("commodi"),
                                add("tempora"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "dolorum";
                            description = "magnam";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "maxime";
                                        headerValue = "cupiditate";
                                    }}),
                                }};
                            }};
                            kind = "soluta";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("neque"),
                                        add("cum"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "neque";
                                            ports = new String[]{{
                                                add("alias"),
                                                add("alias"),
                                                add("modi"),
                                                add("qui"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quo";
                                            ports = new String[]{{
                                                add("voluptatibus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "laborum";
                                            ports = new String[]{{
                                                add("iste"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("ea"),
                                        add("eligendi"),
                                        add("eum"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "nulla";
                                    expression = "nam";
                                    location = "veniam";
                                    title = "Ms.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "harum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "at";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "id";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "facere";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ea";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "occaecati";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "rem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "repudiandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eligendi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "velit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "doloremque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "laboriosam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("a"),
                                            add("in"),
                                            add("dolor"),
                                            add("unde"),
                                        }};
                                        targetRuleSet = "quos";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "labore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quod";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "iste";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "laborum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "iure";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "saepe";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "accusamus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "itaque";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eos";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "aperiam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "necessitatibus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("aliquid"),
                                        }};
                                        targetRuleSet = "cum";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 626569;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 953188;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 330767;
                                    intervalSec = 996394;
                                }};
                                conformAction = "dignissimos";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "neque";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quos";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "vero";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "ullam";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                }};
                                enforceOnKeyName = "illum";
                                exceedAction = "possimus";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "vitae";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 842942;
                                    intervalSec = 843662;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "explicabo";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            ruleNumber = "quod";
                            ruleTupleCount = 377172;
                            targetResources = new String[]{{
                                add("minus"),
                                add("excepturi"),
                                add("nisi"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("ab"),
                                add("vel"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "voluptates";
                            description = "cum";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "voluptatibus";
                                        headerValue = "et";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "animi";
                                        headerValue = "voluptatibus";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "fuga";
                                        headerValue = "cum";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "veritatis";
                                        headerValue = "quam";
                                    }}),
                                }};
                            }};
                            kind = "eligendi";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("error"),
                                        add("et"),
                                        add("expedita"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "explicabo";
                                            ports = new String[]{{
                                                add("tempora"),
                                                add("suscipit"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "necessitatibus";
                                            ports = new String[]{{
                                                add("quibusdam"),
                                                add("eligendi"),
                                                add("corrupti"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("unde"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "quo";
                                    expression = "corrupti";
                                    location = "atque";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "minima";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "culpa";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "et";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "veritatis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "debitis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "molestias";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "deleniti";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "fugiat";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "accusantium";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "molestias";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("iure"),
                                            add("cupiditate"),
                                        }};
                                        targetRuleSet = "quis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "vel";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "maxime";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ex";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "magnam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "officiis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "enim";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "error";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("nemo"),
                                            add("tenetur"),
                                        }};
                                        targetRuleSet = "mollitia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "earum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "cumque";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "autem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "fuga";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "mollitia";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "tenetur";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("blanditiis"),
                                            add("labore"),
                                            add("facilis"),
                                        }};
                                        targetRuleSet = "quas";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 440509;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 471375;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 987941;
                                    intervalSec = 377958;
                                }};
                                conformAction = "est";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_PATH;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quibusdam";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quibusdam";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                }};
                                enforceOnKeyName = "itaque";
                                exceedAction = "perferendis";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "explicabo";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 201202;
                                    intervalSec = 487755;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "voluptatibus";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            ruleNumber = "cumque";
                            ruleTupleCount = 367490;
                            targetResources = new String[]{{
                                add("praesentium"),
                                add("libero"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("quibusdam"),
                                add("iste"),
                            }};
                        }}),
                    }};
                    selfLink = "omnis";
                    selfLinkWithId = "eum";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_EDGE;
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "placeat";
                key = "tempore";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "aperiam";
                uploadType = "eligendi";
                uploadProtocol = "voluptate";
                userIp = "quasi";
            }};            

            ComputeSecurityPoliciesPatchResponse res = sdk.securityPolicies.computeSecurityPoliciesPatch(req, new ComputeSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeSecurityPoliciesPatchSecurityOption1("facere", "doloribus") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherVersionedExprEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams;
import org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsThreshold;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptions;
import org.openapis.openapi.models.shared.SecurityPolicyRuleRedirectOptionsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSecurityPoliciesPatchRuleRequest req = new ComputeSecurityPoliciesPatchRuleRequest("ea", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "neque";
                    description = "repudiandae";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "nesciunt";
                                headerValue = "error";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "autem";
                                headerValue = "minus";
                            }}),
                        }};
                    }};;
                    kind = "laudantium";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("assumenda"),
                                add("illo"),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "odio";
                                    ports = new String[]{{
                                        add("quo"),
                                    }};
                                }}),
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "quam";
                                    ports = new String[]{{
                                        add("modi"),
                                        add("fugit"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("atque"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "nesciunt";
                            expression = "molestiae";
                            location = "dicta";
                            title = "Miss";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "impedit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "facere";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "laudantium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "in";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "omnis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "quos";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ipsum";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "aut";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "nemo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "voluptates";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "id";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "sequi";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("illum"),
                                    add("error"),
                                    add("esse"),
                                    add("atque"),
                                }};
                                targetRuleSet = "asperiores";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 358165;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 563823;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 146394;
                            intervalSec = 926819;
                        }};;
                        conformAction = "architecto";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.IP;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "aliquid";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "quibusdam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                            }}),
                        }};
                        enforceOnKeyName = "sed";
                        exceedAction = "vel";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "placeat";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 239819;
                            intervalSec = 667393;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "dolore";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                    ruleNumber = "aperiam";
                    ruleTupleCount = 134606;
                    targetResources = new String[]{{
                        add("corporis"),
                        add("quisquam"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("sequi"),
                        add("assumenda"),
                    }};
                }};;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "dolorem";
                key = "asperiores";
                oauthToken = "architecto";
                prettyPrint = false;
                priority = 467490L;
                quotaUser = "recusandae";
                updateMask = "quasi";
                uploadType = "ipsam";
                uploadProtocol = "qui";
                userIp = "modi";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesPatchRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesPatchRule(req, new ComputeSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesPatchRuleSecurityOption1("qui", "tenetur") {{
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

            ComputeSecurityPoliciesRemoveRuleRequest req = new ComputeSecurityPoliciesRemoveRuleRequest("libero", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "dicta";
                fields = "cum";
                key = "amet";
                oauthToken = "ex";
                prettyPrint = false;
                priority = 299687L;
                quotaUser = "eaque";
                uploadType = "quia";
                uploadProtocol = "ab";
                userIp = "maiores";
            }};            

            ComputeSecurityPoliciesRemoveRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesRemoveRule(req, new ComputeSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesRemoveRuleSecurityOption1("dolores", "fugiat") {{
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

            ComputeSecurityPoliciesSetLabelsRequest req = new ComputeSecurityPoliciesSetLabelsRequest("eaque", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "est";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eius", "voluptas");
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "alias";
                key = "at";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "ipsam";
                uploadProtocol = "maiores";
                userIp = "quaerat";
            }};            

            ComputeSecurityPoliciesSetLabelsResponse res = sdk.securityPolicies.computeSecurityPoliciesSetLabels(req, new ComputeSecurityPoliciesSetLabelsSecurity() {{
                option1 = new ComputeSecurityPoliciesSetLabelsSecurityOption1("quaerat", "dolor") {{
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

            ComputeSecurityPoliciesTestIamPermissionsRequest req = new ComputeSecurityPoliciesTestIamPermissionsRequest("aliquid", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("cupiditate"),
                        add("voluptatem"),
                    }};
                }};;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "praesentium";
                fields = "repudiandae";
                key = "illum";
                oauthToken = "maxime";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "iusto";
                uploadProtocol = "ullam";
                userIp = "vitae";
            }};            

            ComputeSecurityPoliciesTestIamPermissionsResponse res = sdk.securityPolicies.computeSecurityPoliciesTestIamPermissions(req, new ComputeSecurityPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeSecurityPoliciesTestIamPermissionsSecurityOption1("aspernatur", "tempore") {{
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
