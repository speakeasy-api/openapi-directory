# regionSecurityPolicies

### Available Operations

* [computeRegionSecurityPoliciesAddRule](#computeregionsecuritypoliciesaddrule) - Inserts a rule into a security policy.
* [computeRegionSecurityPoliciesDelete](#computeregionsecuritypoliciesdelete) - Deletes the specified policy.
* [computeRegionSecurityPoliciesGet](#computeregionsecuritypoliciesget) - List all of the ordered rules present in a single specified policy.
* [computeRegionSecurityPoliciesGetRule](#computeregionsecuritypoliciesgetrule) - Gets a rule at the specified priority.
* [computeRegionSecurityPoliciesInsert](#computeregionsecuritypoliciesinsert) - Creates a new policy in the specified project using the data included in the request.
* [computeRegionSecurityPoliciesList](#computeregionsecuritypolicieslist) - List all the policies that have been configured for the specified project and region.
* [computeRegionSecurityPoliciesPatch](#computeregionsecuritypoliciespatch) - Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.
* [computeRegionSecurityPoliciesPatchRule](#computeregionsecuritypoliciespatchrule) - Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.
* [computeRegionSecurityPoliciesRemoveRule](#computeregionsecuritypoliciesremoverule) - Deletes a rule at the specified priority.

## computeRegionSecurityPoliciesAddRule

Inserts a rule into a security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesAddRuleSecurityOption2;
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

            ComputeRegionSecurityPoliciesAddRuleRequest req = new ComputeRegionSecurityPoliciesAddRuleRequest("quo", "error", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "non";
                    description = "doloremque";
                    direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "architecto";
                                headerValue = "voluptatem";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "facere";
                                headerValue = "consectetur";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "est";
                                headerValue = "suscipit";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "odit";
                                headerValue = "hic";
                            }}),
                        }};
                    }};;
                    kind = "beatae";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("libero"),
                                add("ipsum"),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "quisquam";
                                    ports = new String[]{{
                                        add("omnis"),
                                        add("suscipit"),
                                        add("maxime"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("sequi"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "blanditiis";
                            expression = "quis";
                            location = "ipsum";
                            title = "Ms.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "laboriosam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "eaque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "suscipit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "natus";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "necessitatibus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "eum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "sit";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "vel";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "incidunt";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "asperiores";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("dolorum"),
                                }};
                                targetRuleSet = "nesciunt";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "atque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "suscipit";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "cumque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "eius";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "accusantium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "nam";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "perferendis";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("beatae"),
                                    add("quae"),
                                    add("blanditiis"),
                                    add("deleniti"),
                                }};
                                targetRuleSet = "tempore";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "magni";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "numquam";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "aliquid";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "explicabo";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "vitae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "sapiente";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "quia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "illum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "nesciunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "dolor";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("similique"),
                                }};
                                targetRuleSet = "blanditiis";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 40951;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 1808;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 225840;
                            intervalSec = 834282;
                        }};;
                        conformAction = "et";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "consectetur";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "veniam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "quis";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "nam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                            }}),
                        }};
                        enforceOnKeyName = "odit";
                        exceedAction = "molestiae";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "necessitatibus";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 155031;
                            intervalSec = 548111;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "dolorum";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                    ruleNumber = "maiores";
                    ruleTupleCount = 165976;
                    targetResources = new String[]{{
                        add("pariatur"),
                        add("optio"),
                        add("voluptatum"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("assumenda"),
                        add("perspiciatis"),
                    }};
                }};;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "id";
                key = "ea";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "laboriosam";
                uploadType = "natus";
                uploadProtocol = "mollitia";
                userIp = "assumenda";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesAddRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesAddRule(req, new ComputeRegionSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesAddRuleSecurityOption1("et", "dignissimos") {{
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

## computeRegionSecurityPoliciesDelete

Deletes the specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesDeleteRequest req = new ComputeRegionSecurityPoliciesDeleteRequest("quae", "earum", "maxime") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "dolore";
                fields = "voluptatem";
                key = "perferendis";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "sunt";
                uploadType = "quos";
                uploadProtocol = "porro";
                userIp = "quidem";
            }};            

            ComputeRegionSecurityPoliciesDeleteResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesDelete(req, new ComputeRegionSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesDeleteSecurityOption1("natus", "temporibus") {{
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

## computeRegionSecurityPoliciesGet

List all of the ordered rules present in a single specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesGetRequest req = new ComputeRegionSecurityPoliciesGetRequest("molestiae", "similique", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "aspernatur";
                key = "officia";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "molestiae";
                uploadProtocol = "adipisci";
                userIp = "exercitationem";
            }};            

            ComputeRegionSecurityPoliciesGetResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesGet(req, new ComputeRegionSecurityPoliciesGetSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesGetSecurityOption1("veritatis", "sit") {{
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

## computeRegionSecurityPoliciesGetRule

Gets a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesGetRuleSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesGetRuleRequest req = new ComputeRegionSecurityPoliciesGetRuleRequest("sed", "qui", "non") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "ratione";
                key = "quaerat";
                oauthToken = "qui";
                prettyPrint = false;
                priority = 645883L;
                quotaUser = "repudiandae";
                uploadType = "maxime";
                uploadProtocol = "eveniet";
                userIp = "esse";
            }};            

            ComputeRegionSecurityPoliciesGetRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesGetRule(req, new ComputeRegionSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesGetRuleSecurityOption1("fugit", "veniam") {{
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

## computeRegionSecurityPoliciesInsert

Creates a new policy in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesInsertSecurityOption2;
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

            ComputeRegionSecurityPoliciesInsertRequest req = new ComputeRegionSecurityPoliciesInsertRequest("sunt", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 6131.5;
                            expirationSec = 369623;
                            impactedBaselineThreshold = 97.5;
                            loadThreshold = 4158.97;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.PREMIUM;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("quos"),
                                add("nostrum"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.NORMAL;
                        userIpRequestHeaders = new String[]{{
                            add("nesciunt"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "culpa";
                            displayName = "eius";
                            name = "Mrs. Marlene Walker";
                            securityPolicyId = "odit";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "porro";
                            displayName = "ducimus";
                            name = "George Moore";
                            securityPolicyId = "laborum";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "possimus";
                            displayName = "architecto";
                            name = "Patty Volkman";
                            securityPolicyId = "ipsa";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "in";
                            displayName = "earum";
                            name = "Lamar Morar";
                            securityPolicyId = "eveniet";
                        }}),
                    }};
                    creationTimestamp = "debitis";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "consequatur";
                    displayName = "doloribus";
                    fingerprint = "illum";
                    id = "dicta";
                    kind = "non";
                    labelFingerprint = "dolorum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vero", "doloremque");
                        put("nulla", "fugit");
                        put("expedita", "tempora");
                        put("odit", "explicabo");
                    }};
                    name = "Oscar Leffler";
                    parent = "explicabo";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "nostrum";
                    }};;
                    region = "facilis";
                    ruleTupleCount = 936444;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "eligendi";
                            description = "est";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "voluptatem";
                                        headerValue = "atque";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "et";
                                        headerValue = "magni";
                                    }}),
                                }};
                            }};
                            kind = "quos";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("suscipit"),
                                        add("nam"),
                                        add("cupiditate"),
                                        add("dolor"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "consectetur";
                                            ports = new String[]{{
                                                add("amet"),
                                                add("dolore"),
                                                add("sed"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quaerat";
                                            ports = new String[]{{
                                                add("perferendis"),
                                                add("ratione"),
                                                add("libero"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "reprehenderit";
                                            ports = new String[]{{
                                                add("quia"),
                                                add("minus"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("esse"),
                                        add("quae"),
                                        add("nemo"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "possimus";
                                    expression = "quibusdam";
                                    location = "nostrum";
                                    title = "Mr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "necessitatibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "rem";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quaerat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "error";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "autem";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "architecto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quasi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sapiente";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "provident";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("molestiae"),
                                        }};
                                        targetRuleSet = "voluptates";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "iure";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolor";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "cumque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptatibus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "enim";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quas";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "architecto";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "tempora";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "placeat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "culpa";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "illum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "rem";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("delectus"),
                                            add("aliquid"),
                                            add("totam"),
                                        }};
                                        targetRuleSet = "nulla";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "sunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "aut";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "tempora";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "consequuntur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "suscipit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "labore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "rerum";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("non"),
                                            add("blanditiis"),
                                            add("sapiente"),
                                        }};
                                        targetRuleSet = "modi";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 213244;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 802518;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 217721;
                                    intervalSec = 977961;
                                }};
                                conformAction = "non";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.REGION_CODE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quasi";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "voluptatibus";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "laborum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "veritatis";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                }};
                                enforceOnKeyName = "reiciendis";
                                exceedAction = "corrupti";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "natus";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 24903;
                                    intervalSec = 799454;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "dolor";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "totam";
                            ruleTupleCount = 7452;
                            targetResources = new String[]{{
                                add("sapiente"),
                                add("eaque"),
                                add("cum"),
                                add("voluptate"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("et"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "doloribus";
                            description = "commodi";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "ratione";
                                        headerValue = "assumenda";
                                    }}),
                                }};
                            }};
                            kind = "cum";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("odio"),
                                        add("cumque"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "vitae";
                                            ports = new String[]{{
                                                add("sapiente"),
                                                add("ullam"),
                                                add("molestias"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "soluta";
                                            ports = new String[]{{
                                                add("unde"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quod";
                                            ports = new String[]{{
                                                add("occaecati"),
                                                add("nemo"),
                                                add("velit"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "nihil";
                                            ports = new String[]{{
                                                add("iste"),
                                                add("culpa"),
                                                add("nihil"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("libero"),
                                        add("distinctio"),
                                        add("cumque"),
                                        add("id"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "laborum";
                                    expression = "quaerat";
                                    location = "incidunt";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "omnis";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "dicta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "voluptas";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nemo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "commodi";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "iusto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "pariatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sit";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("excepturi"),
                                            add("ex"),
                                            add("molestiae"),
                                        }};
                                        targetRuleSet = "quasi";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 675120;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 299084;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 569185;
                                    intervalSec = 260345;
                                }};
                                conformAction = "sapiente";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "tempora";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "autem";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                }};
                                enforceOnKeyName = "at";
                                exceedAction = "rem";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "eos";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 638420;
                                    intervalSec = 351585;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "deleniti";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "similique";
                            ruleTupleCount = 108521;
                            targetResources = new String[]{{
                                add("ad"),
                                add("temporibus"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("incidunt"),
                            }};
                        }}),
                    }};
                    selfLink = "voluptate";
                    selfLinkWithId = "adipisci";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR;
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "fuga";
                fields = "pariatur";
                key = "eum";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "suscipit";
                uploadType = "voluptatum";
                uploadProtocol = "explicabo";
                userIp = "nostrum";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesInsertResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesInsert(req, new ComputeRegionSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesInsertSecurityOption1("odio", "distinctio") {{
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

## computeRegionSecurityPoliciesList

List all the policies that have been configured for the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesListRequest req = new ComputeRegionSecurityPoliciesListRequest("nihil", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "sit";
                filter = "quo";
                key = "exercitationem";
                maxResults = 300866L;
                oauthToken = "animi";
                orderBy = "minima";
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "impedit";
                returnPartialSuccess = false;
                uploadType = "distinctio";
                uploadProtocol = "sunt";
                userIp = "explicabo";
            }};            

            ComputeRegionSecurityPoliciesListResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesList(req, new ComputeRegionSecurityPoliciesListSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesListSecurityOption1("quis", "in") {{
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

## computeRegionSecurityPoliciesPatch

Patches the specified policy with the data included in the request. To clear fields in the rule, leave the fields empty and specify them in the updateMask. This cannot be used to be update the rules in the policy. Please use the per rule methods like addRule, patchRule, and removeRule instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchSecurityOption2;
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

            ComputeRegionSecurityPoliciesPatchRequest req = new ComputeRegionSecurityPoliciesPatchRequest("pariatur", "est", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        autoDeployConfig = new SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig() {{
                            confidenceThreshold = 9974.26;
                            expirationSec = 918388;
                            impactedBaselineThreshold = 3280.86;
                            loadThreshold = 3539.05;
                        }};;
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("soluta"),
                                add("libero"),
                                add("consectetur"),
                                add("dolores"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.DISABLED;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                        userIpRequestHeaders = new String[]{{
                            add("enim"),
                            add("quidem"),
                            add("dignissimos"),
                            add("aut"),
                        }};
                    }};;
                    associations = new org.openapis.openapi.models.shared.SecurityPolicyAssociation[]{{
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "voluptatem";
                            displayName = "itaque";
                            name = "Ronnie Weimann Sr.";
                            securityPolicyId = "ad";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "accusamus";
                            displayName = "consequatur";
                            name = "Rickey Harber";
                            securityPolicyId = "facilis";
                        }}),
                        add(new SecurityPolicyAssociation() {{
                            attachmentId = "nobis";
                            displayName = "laudantium";
                            name = "Jo Rodriguez";
                            securityPolicyId = "accusamus";
                        }}),
                    }};
                    creationTimestamp = "perspiciatis";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED_PREVIEW;
                    }};;
                    description = "ut";
                    displayName = "assumenda";
                    fingerprint = "deserunt";
                    id = "eos";
                    kind = "totam";
                    labelFingerprint = "hic";
                    labels = new java.util.HashMap<String, String>() {{
                        put("saepe", "eveniet");
                    }};
                    name = "Courtney Schamberger";
                    parent = "perferendis";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "hic";
                    }};;
                    region = "porro";
                    ruleTupleCount = 275756;
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "corrupti";
                            description = "quis";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "reprehenderit";
                                        headerValue = "alias";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "qui";
                                        headerValue = "nemo";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "non";
                                        headerValue = "ipsam";
                                    }}),
                                }};
                            }};
                            kind = "vero";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("temporibus"),
                                        add("quis"),
                                        add("corrupti"),
                                        add("cumque"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "accusamus";
                                            ports = new String[]{{
                                                add("debitis"),
                                                add("earum"),
                                                add("iure"),
                                                add("soluta"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("iusto"),
                                        add("voluptatibus"),
                                        add("est"),
                                        add("assumenda"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "dolorum";
                                    expression = "debitis";
                                    location = "minus";
                                    title = "Mr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "repellendus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "minima";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "recusandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "nisi";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "magnam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dolores";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("velit"),
                                            add("veniam"),
                                        }};
                                        targetRuleSet = "perspiciatis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "dolorum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "magni";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quos";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "est";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "dolores";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ab";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "minima";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("autem"),
                                            add("vitae"),
                                            add("nesciunt"),
                                            add("amet"),
                                        }};
                                        targetRuleSet = "velit";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 664958;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 1538;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 129815;
                                    intervalSec = 164707;
                                }};
                                conformAction = "ipsum";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "dignissimos";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "expedita";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quod";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                }};
                                enforceOnKeyName = "deserunt";
                                exceedAction = "quam";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "modi";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 390304;
                                    intervalSec = 370695;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "ducimus";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "dolore";
                            ruleTupleCount = 801552;
                            targetResources = new String[]{{
                                add("inventore"),
                                add("dignissimos"),
                                add("soluta"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("reiciendis"),
                                add("saepe"),
                                add("quidem"),
                                add("suscipit"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "ex";
                            description = "vero";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "veritatis";
                                        headerValue = "eius";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nesciunt";
                                        headerValue = "vero";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "dolores";
                                        headerValue = "recusandae";
                                    }}),
                                }};
                            }};
                            kind = "illo";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("aspernatur"),
                                        add("in"),
                                        add("eius"),
                                        add("atque"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "quia";
                                            ports = new String[]{{
                                                add("earum"),
                                                add("perspiciatis"),
                                                add("accusantium"),
                                                add("blanditiis"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "possimus";
                                            ports = new String[]{{
                                                add("nesciunt"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("enim"),
                                        add("ratione"),
                                        add("distinctio"),
                                        add("maxime"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "ab";
                                    expression = "architecto";
                                    location = "impedit";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "blanditiis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "repudiandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quas";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ipsum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "architecto";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "illo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "impedit";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "placeat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sint";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quaerat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "dignissimos";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("illo"),
                                        }};
                                        targetRuleSet = "quasi";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 772790;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 169510;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 722056;
                                    intervalSec = 488487;
                                }};
                                conformAction = "ullam";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "pariatur";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "rem";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                                    }}),
                                }};
                                enforceOnKeyName = "iste";
                                exceedAction = "at";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "amet";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 79890;
                                    intervalSec = 790832;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "ab";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                            ruleNumber = "beatae";
                            ruleTupleCount = 399755;
                            targetResources = new String[]{{
                                add("sequi"),
                                add("nemo"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("pariatur"),
                                add("aliquid"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "itaque";
                            description = "velit";
                            direction = SecurityPolicyRuleDirectionEnum.EGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "distinctio";
                                        headerValue = "repellat";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "excepturi";
                                        headerValue = "mollitia";
                                    }}),
                                }};
                            }};
                            kind = "molestias";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("voluptatum"),
                                        add("ullam"),
                                        add("et"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "consequuntur";
                                            ports = new String[]{{
                                                add("nostrum"),
                                                add("porro"),
                                                add("ea"),
                                                add("corrupti"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("et"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "accusantium";
                                    expression = "expedita";
                                    location = "quasi";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "ipsum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "illo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "repellendus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "repellat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "aliquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nemo";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptate";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "soluta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("dolores"),
                                            add("vitae"),
                                            add("commodi"),
                                            add("sed"),
                                        }};
                                        targetRuleSet = "possimus";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 284611;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 436742;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 631301;
                                    intervalSec = 195188;
                                }};
                                conformAction = "quaerat";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_COOKIE;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "incidunt";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "saepe";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "optio";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                }};
                                enforceOnKeyName = "reprehenderit";
                                exceedAction = "molestiae";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "veniam";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 160834;
                                    intervalSec = 532954;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "alias";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "voluptatum";
                            ruleTupleCount = 903419;
                            targetResources = new String[]{{
                                add("maxime"),
                                add("a"),
                                add("autem"),
                                add("quidem"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("maxime"),
                                add("porro"),
                                add("a"),
                                add("deleniti"),
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "doloremque";
                            description = "excepturi";
                            direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                            enableLogging = false;
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "repellendus";
                                        headerValue = "quos";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "optio";
                                        headerValue = "praesentium";
                                    }}),
                                }};
                            }};
                            kind = "impedit";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    destIpRanges = new String[]{{
                                        add("optio"),
                                        add("quis"),
                                    }};
                                    layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "voluptatibus";
                                            ports = new String[]{{
                                                add("voluptatibus"),
                                                add("consequuntur"),
                                                add("illo"),
                                                add("temporibus"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "temporibus";
                                            ports = new String[]{{
                                                add("quibusdam"),
                                            }};
                                        }}),
                                        add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                            ipProtocol = "minus";
                                            ports = new String[]{{
                                                add("neque"),
                                                add("eveniet"),
                                                add("amet"),
                                            }};
                                        }}),
                                    }};
                                    srcIpRanges = new String[]{{
                                        add("atque"),
                                        add("corporis"),
                                        add("labore"),
                                        add("itaque"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "temporibus";
                                    expression = "laboriosam";
                                    location = "aspernatur";
                                    title = "Ms.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "beatae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "nisi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "modi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sit";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "repellendus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "minima";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "adipisci";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "nulla";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "pariatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "reiciendis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "sunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "voluptate";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eos";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("blanditiis"),
                                            add("nisi"),
                                            add("ad"),
                                            add("molestias"),
                                        }};
                                        targetRuleSet = "distinctio";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "tempore";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "similique";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "magnam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quidem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "culpa";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "magnam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "laborum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sapiente";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("veritatis"),
                                            add("rem"),
                                            add("nobis"),
                                            add("possimus"),
                                        }};
                                        targetRuleSet = "iure";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "adipisci";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "officiis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "neque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "at";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "necessitatibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "eaque";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "incidunt";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "dicta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eum";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "consequatur";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("quia"),
                                            add("cupiditate"),
                                            add("corporis"),
                                            add("unde"),
                                        }};
                                        targetRuleSet = "maxime";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 268421;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 846919;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 28163;
                                    intervalSec = 646599;
                                }};
                                conformAction = "laboriosam";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_HEADER;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "mollitia";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "sequi";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                                    }}),
                                }};
                                enforceOnKeyName = "quisquam";
                                exceedAction = "necessitatibus";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "reprehenderit";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 965475;
                                    intervalSec = 802416;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "numquam";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                            ruleNumber = "officia";
                            ruleTupleCount = 153055;
                            targetResources = new String[]{{
                                add("impedit"),
                                add("velit"),
                                add("deserunt"),
                                add("sit"),
                            }};
                            targetServiceAccounts = new String[]{{
                                add("iure"),
                                add("dolorem"),
                                add("laudantium"),
                                add("sunt"),
                            }};
                        }}),
                    }};
                    selfLink = "ipsum";
                    selfLinkWithId = "voluptates";
                    type = SecurityPolicyTypeEnum.FIREWALL;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "molestias";
                key = "cupiditate";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "excepturi";
                uploadType = "recusandae";
                uploadProtocol = "commodi";
                userIp = "nam";
            }};            

            ComputeRegionSecurityPoliciesPatchResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesPatch(req, new ComputeRegionSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesPatchSecurityOption1("sed", "a") {{
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

## computeRegionSecurityPoliciesPatchRule

Patches a rule at the specified priority. To clear fields in the rule, leave the fields empty and specify them in the updateMask.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesPatchRuleSecurityOption2;
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

            ComputeRegionSecurityPoliciesPatchRuleRequest req = new ComputeRegionSecurityPoliciesPatchRuleRequest("reiciendis", "voluptate", "voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "veniam";
                    description = "sapiente";
                    direction = SecurityPolicyRuleDirectionEnum.INGRESS;
                    enableLogging = false;
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "quod";
                                headerValue = "iste";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "et";
                                headerValue = "fuga";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "veritatis";
                                headerValue = "error";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "et";
                                headerValue = "ex";
                            }}),
                        }};
                    }};;
                    kind = "accusantium";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            destIpRanges = new String[]{{
                                add("molestias"),
                            }};
                            layer4Configs = new org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfigLayer4Config[]{{
                                add(new SecurityPolicyRuleMatcherConfigLayer4Config() {{
                                    ipProtocol = "qui";
                                    ports = new String[]{{
                                        add("est"),
                                        add("non"),
                                        add("illum"),
                                    }};
                                }}),
                            }};
                            srcIpRanges = new String[]{{
                                add("rem"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "itaque";
                            expression = "assumenda";
                            location = "saepe";
                            title = "Mrs.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.FIREWALL;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ex";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "asperiores";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "hic";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "error";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "veniam";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "iste";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "reprehenderit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "atque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ut";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("sint"),
                                    add("quod"),
                                    add("sit"),
                                }};
                                targetRuleSet = "voluptas";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "repellat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "amet";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "corporis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "minima";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "praesentium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "tempora";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "veniam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "sequi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "voluptatum";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "nam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "voluptatem";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("quasi"),
                                    add("expedita"),
                                }};
                                targetRuleSet = "nihil";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "hic";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "soluta";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "reiciendis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "fuga";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "a";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ab";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "eos";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("aperiam"),
                                    add("asperiores"),
                                }};
                                targetRuleSet = "modi";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "dolorem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "aliquid";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "laudantium";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "sint";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "consequuntur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "possimus";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "quis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "distinctio";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "magnam";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "reprehenderit";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("voluptatum"),
                                    add("beatae"),
                                    add("iusto"),
                                }};
                                targetRuleSet = "earum";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 293058;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 222757;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 564620;
                            intervalSec = 461617;
                        }};;
                        conformAction = "minus";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.REGION_CODE;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "unde";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "dolore";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL_IPS;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "earum";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "esse";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.REGION_CODE;
                            }}),
                        }};
                        enforceOnKeyName = "dolorum";
                        exceedAction = "exercitationem";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "fugit";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 262296;
                            intervalSec = 988852;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "consequuntur";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                    ruleNumber = "iste";
                    ruleTupleCount = 847861;
                    targetResources = new String[]{{
                        add("necessitatibus"),
                    }};
                    targetServiceAccounts = new String[]{{
                        add("ipsam"),
                        add("ea"),
                    }};
                }};;
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "nesciunt";
                fields = "qui";
                key = "incidunt";
                oauthToken = "minima";
                prettyPrint = false;
                priority = 583107L;
                quotaUser = "totam";
                uploadType = "laborum";
                uploadProtocol = "iste";
                userIp = "consectetur";
                validateOnly = false;
            }};            

            ComputeRegionSecurityPoliciesPatchRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesPatchRule(req, new ComputeRegionSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesPatchRuleSecurityOption1("facilis", "iste") {{
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

## computeRegionSecurityPoliciesRemoveRule

Deletes a rule at the specified priority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleRequest;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleResponse;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSecurityPoliciesRemoveRuleSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSecurityPoliciesRemoveRuleRequest req = new ComputeRegionSecurityPoliciesRemoveRuleRequest("placeat", "vel", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "dolor";
                key = "quod";
                oauthToken = "assumenda";
                prettyPrint = false;
                priority = 574603L;
                quotaUser = "vel";
                uploadType = "quia";
                uploadProtocol = "ut";
                userIp = "odit";
            }};            

            ComputeRegionSecurityPoliciesRemoveRuleResponse res = sdk.regionSecurityPolicies.computeRegionSecurityPoliciesRemoveRule(req, new ComputeRegionSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeRegionSecurityPoliciesRemoveRuleSecurityOption1("dolorem", "inventore") {{
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
