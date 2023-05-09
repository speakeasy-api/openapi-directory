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
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
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

            ComputeSecurityPoliciesAddRuleRequest req = new ComputeSecurityPoliciesAddRuleRequest("autem", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "maxime";
                    description = "dolore";
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "eligendi";
                                headerValue = "hic";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "velit";
                                headerValue = "dolores";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "at";
                                headerValue = "tempora";
                            }}),
                        }};
                    }};;
                    kind = "veniam";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            srcIpRanges = new String[]{{
                                add("cumque"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "asperiores";
                            expression = "reiciendis";
                            location = "accusamus";
                            title = "Dr.";
                        }};;
                        versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                    }};;
                    preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                        exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "beatae";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "deserunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "delectus";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "suscipit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quo";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "tempora";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "maiores";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "odit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ut";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "natus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "autem";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("distinctio"),
                                }};
                                targetRuleSet = "impedit";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "quasi";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "id";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "placeat";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "necessitatibus";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "laborum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "unde";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ab";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "repellat";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("ipsam"),
                                }};
                                targetRuleSet = "repudiandae";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "in";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "sunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "perferendis";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "laboriosam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "ea";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "laborum";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "totam";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "accusamus";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("nam"),
                                }};
                                targetRuleSet = "atque";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 867001;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 889411;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 400923;
                            intervalSec = 712410;
                        }};;
                        conformAction = "aspernatur";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "dolor";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                            }}),
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "aliquam";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                            }}),
                        }};
                        enforceOnKeyName = "ipsa";
                        exceedAction = "eaque";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "voluptatem";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 232987;
                            intervalSec = 361121;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "veritatis";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                    }};;
                }};;
                accessToken = "harum";
                alt = AltEnum.PROTO;
                callback = "suscipit";
                fields = "sit";
                key = "quae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quos";
                uploadProtocol = "voluptatem";
                userIp = "quae";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesAddRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesAddRule(req, new ComputeSecurityPoliciesAddRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesAddRuleSecurityOption1("enim", "voluptatum") {{
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

            ComputeSecurityPoliciesAggregatedListRequest req = new ComputeSecurityPoliciesAggregatedListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "rerum";
                filter = "inventore";
                includeAllScopes = false;
                key = "ad";
                maxResults = 570444L;
                oauthToken = "illum";
                orderBy = "occaecati";
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                returnPartialSuccess = false;
                uploadType = "quod";
                uploadProtocol = "nisi";
                userIp = "omnis";
            }};            

            ComputeSecurityPoliciesAggregatedListResponse res = sdk.securityPolicies.computeSecurityPoliciesAggregatedList(req, new ComputeSecurityPoliciesAggregatedListSecurity() {{
                option1 = new ComputeSecurityPoliciesAggregatedListSecurityOption1("expedita", "doloribus") {{
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

            ComputeSecurityPoliciesDeleteRequest req = new ComputeSecurityPoliciesDeleteRequest("nostrum", "officiis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "minus";
                key = "quae";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "recusandae";
                requestId = "ut";
                uploadType = "aperiam";
                uploadProtocol = "sequi";
                userIp = "repudiandae";
            }};            

            ComputeSecurityPoliciesDeleteResponse res = sdk.securityPolicies.computeSecurityPoliciesDelete(req, new ComputeSecurityPoliciesDeleteSecurity() {{
                option1 = new ComputeSecurityPoliciesDeleteSecurityOption1("voluptate", "odio") {{
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

            ComputeSecurityPoliciesGetRequest req = new ComputeSecurityPoliciesGetRequest("soluta", "delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "a";
                key = "vero";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "aliquam";
                uploadProtocol = "hic";
                userIp = "minus";
            }};            

            ComputeSecurityPoliciesGetResponse res = sdk.securityPolicies.computeSecurityPoliciesGet(req, new ComputeSecurityPoliciesGetSecurity() {{
                option1 = new ComputeSecurityPoliciesGetSecurityOption1("voluptatem", "architecto") {{
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

            ComputeSecurityPoliciesGetRuleRequest req = new ComputeSecurityPoliciesGetRuleRequest("ipsam", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "aliquid";
                key = "ullam";
                oauthToken = "veritatis";
                prettyPrint = false;
                priority = 709684L;
                quotaUser = "esse";
                uploadType = "iste";
                uploadProtocol = "provident";
                userIp = "a";
            }};            

            ComputeSecurityPoliciesGetRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesGetRule(req, new ComputeSecurityPoliciesGetRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesGetRuleSecurityOption1("maxime", "unde") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
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

            ComputeSecurityPoliciesInsertRequest req = new ComputeSecurityPoliciesInsertRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("quod"),
                                add("in"),
                                add("pariatur"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.STANDARD;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                    }};;
                    creationTimestamp = "aperiam";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.ADVANCED;
                    }};;
                    description = "debitis";
                    fingerprint = "doloribus";
                    id = "ab";
                    kind = "tenetur";
                    labelFingerprint = "voluptatum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("soluta", "totam");
                    }};
                    name = "Rebecca Rohan";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "est";
                    }};;
                    region = "occaecati";
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "odio";
                            description = "temporibus";
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nesciunt";
                                        headerValue = "officia";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "ipsa";
                                        headerValue = "ad";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "adipisci";
                                        headerValue = "incidunt";
                                    }}),
                                }};
                            }};
                            kind = "repellendus";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("quaerat"),
                                        add("sed"),
                                        add("eveniet"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "amet";
                                    expression = "nostrum";
                                    location = "ipsa";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "reiciendis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "temporibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "temporibus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "provident";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "totam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "magnam";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laboriosam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "enim";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "possimus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("sapiente"),
                                            add("ex"),
                                            add("repudiandae"),
                                        }};
                                        targetRuleSet = "ut";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptatum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "aliquid";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "incidunt";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "voluptatibus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "at";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "minima";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "accusamus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ab";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quia";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "autem";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "minus";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("tenetur"),
                                            add("qui"),
                                        }};
                                        targetRuleSet = "molestias";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "minima";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "nostrum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "veritatis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "quia";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "dolorum";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quisquam";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "pariatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "similique";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "in";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("ducimus"),
                                            add("corrupti"),
                                            add("libero"),
                                        }};
                                        targetRuleSet = "placeat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ea";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ipsum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "optio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "consequatur";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("vero"),
                                        }};
                                        targetRuleSet = "odio";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 769354;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 727990;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 132405;
                                    intervalSec = 302208;
                                }};
                                conformAction = "molestiae";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "quia";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "consequuntur";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "illo";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                }};
                                enforceOnKeyName = "facere";
                                exceedAction = "excepturi";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "ut";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 724868;
                                    intervalSec = 297101;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "nihil";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                        }}),
                    }};
                    selfLink = "optio";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_EDGE;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "vero";
                key = "laboriosam";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "iure";
                requestId = "inventore";
                uploadType = "magnam";
                uploadProtocol = "natus";
                userIp = "laudantium";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesInsertResponse res = sdk.securityPolicies.computeSecurityPoliciesInsert(req, new ComputeSecurityPoliciesInsertSecurity() {{
                option1 = new ComputeSecurityPoliciesInsertSecurityOption1("sapiente", "dicta") {{
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

            ComputeSecurityPoliciesListRequest req = new ComputeSecurityPoliciesListRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "asperiores";
                filter = "deserunt";
                key = "quam";
                maxResults = 392151L;
                oauthToken = "vel";
                orderBy = "totam";
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "temporibus";
                returnPartialSuccess = false;
                uploadType = "praesentium";
                uploadProtocol = "exercitationem";
                userIp = "in";
            }};            

            ComputeSecurityPoliciesListResponse res = sdk.securityPolicies.computeSecurityPoliciesList(req, new ComputeSecurityPoliciesListSecurity() {{
                option1 = new ComputeSecurityPoliciesListSecurityOption1("qui", "distinctio") {{
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

            ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest req = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "numquam";
                fields = "magni";
                filter = "error";
                key = "deleniti";
                maxResults = 187934L;
                oauthToken = "est";
                orderBy = "alias";
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "accusantium";
                returnPartialSuccess = false;
                uploadType = "debitis";
                uploadProtocol = "exercitationem";
                userIp = "quasi";
            }};            

            ComputeSecurityPoliciesListPreconfiguredExpressionSetsResponse res = sdk.securityPolicies.computeSecurityPoliciesListPreconfiguredExpressionSets(req, new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurity() {{
                option1 = new ComputeSecurityPoliciesListPreconfiguredExpressionSetsSecurityOption1("quo", "animi") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigJsonParsingEnum;
import org.openapis.openapi.models.shared.SecurityPolicyAdvancedOptionsConfigLogLevelEnum;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfig;
import org.openapis.openapi.models.shared.SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
import org.openapis.openapi.models.shared.SecurityPolicyRecaptchaOptionsConfig;
import org.openapis.openapi.models.shared.SecurityPolicyRule;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
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

            ComputeSecurityPoliciesPatchRequest req = new ComputeSecurityPoliciesPatchRequest("sit", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicy1 = new SecurityPolicy() {{
                    adaptiveProtectionConfig = new SecurityPolicyAdaptiveProtectionConfig() {{
                        layer7DdosDefenseConfig = new SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig() {{
                            enable = false;
                            ruleVisibility = SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum.STANDARD;
                        }};;
                    }};;
                    advancedOptionsConfig = new SecurityPolicyAdvancedOptionsConfig() {{
                        jsonCustomConfig = new SecurityPolicyAdvancedOptionsConfigJsonCustomConfig() {{
                            contentTypes = new String[]{{
                                add("deleniti"),
                            }};
                        }};;
                        jsonParsing = SecurityPolicyAdvancedOptionsConfigJsonParsingEnum.DISABLED;
                        logLevel = SecurityPolicyAdvancedOptionsConfigLogLevelEnum.VERBOSE;
                    }};;
                    creationTimestamp = "consectetur";
                    ddosProtectionConfig = new SecurityPolicyDdosProtectionConfig() {{
                        ddosProtection = SecurityPolicyDdosProtectionConfigDdosProtectionEnum.STANDARD;
                    }};;
                    description = "soluta";
                    fingerprint = "facilis";
                    id = "accusamus";
                    kind = "a";
                    labelFingerprint = "eos";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iusto", "magnam");
                        put("nesciunt", "in");
                        put("maxime", "corporis");
                    }};
                    name = "Julius Monahan";
                    recaptchaOptionsConfig = new SecurityPolicyRecaptchaOptionsConfig() {{
                        redirectSiteKey = "doloremque";
                    }};;
                    region = "odio";
                    rules = new org.openapis.openapi.models.shared.SecurityPolicyRule[]{{
                        add(new SecurityPolicyRule() {{
                            action = "sint";
                            description = "ex";
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "hic";
                                        headerValue = "dolorem";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "nam";
                                        headerValue = "voluptatibus";
                                    }}),
                                }};
                            }};
                            kind = "repudiandae";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("possimus"),
                                        add("occaecati"),
                                        add("deserunt"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "sint";
                                    expression = "ab";
                                    location = "eveniet";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sapiente";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "odit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "veritatis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "dicta";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "molestiae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "saepe";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "sunt";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ratione";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "reprehenderit";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "esse";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "eaque";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "aut";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("animi"),
                                        }};
                                        targetRuleSet = "suscipit";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 442627;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 424038;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 654547;
                                    intervalSec = 267530;
                                }};
                                conformAction = "quam";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "odit";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "harum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.XFF_IP;
                                    }}),
                                }};
                                enforceOnKeyName = "a";
                                exceedAction = "amet";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "nostrum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 142786;
                                    intervalSec = 14926;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "eius";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "sed";
                            description = "placeat";
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "dolor";
                                        headerValue = "id";
                                    }}),
                                }};
                            }};
                            kind = "voluptate";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("illo"),
                                        add("non"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "consectetur";
                                    expression = "occaecati";
                                    location = "deleniti";
                                    title = "Dr.";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "perspiciatis";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "magnam";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "repudiandae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "magni";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "aspernatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "atque";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("sit"),
                                            add("repellendus"),
                                        }};
                                        targetRuleSet = "nesciunt";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "vitae";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "repellendus";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "optio";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "quo";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "nobis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "molestias";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "voluptatem";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "assumenda";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("dolores"),
                                        }};
                                        targetRuleSet = "magnam";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 29698;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 53522;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 445293;
                                    intervalSec = 565753;
                                }};
                                conformAction = "quaerat";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.SNI;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "illo";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_PATH;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "nisi";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "repellendus";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                                    }}),
                                }};
                                enforceOnKeyName = "impedit";
                                exceedAction = "occaecati";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "dolorem";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 251009;
                                    intervalSec = 692947;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "similique";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "adipisci";
                            description = "distinctio";
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "necessitatibus";
                                        headerValue = "porro";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "cum";
                                        headerValue = "natus";
                                    }}),
                                }};
                            }};
                            kind = "a";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("qui"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "laboriosam";
                                    expression = "eos";
                                    location = "nesciunt";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quas";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "sit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quas";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "ipsum";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "voluptates";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "voluptatibus";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "labore";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "cum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "voluptates";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "at";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("blanditiis"),
                                            add("excepturi"),
                                        }};
                                        targetRuleSet = "fugit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "quo";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "eveniet";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "numquam";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "unde";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "reprehenderit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "ratione";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "eveniet";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "adipisci";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "aspernatur";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "eius";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "est";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "harum";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("repellendus"),
                                            add("ratione"),
                                            add("libero"),
                                            add("iure"),
                                        }};
                                        targetRuleSet = "doloremque";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "assumenda";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "repellendus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "at";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "sequi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "velit";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "unde";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "laborum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "accusantium";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "ipsum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "illum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "omnis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "quidem";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("impedit"),
                                            add("rem"),
                                            add("nihil"),
                                            add("omnis"),
                                        }};
                                        targetRuleSet = "voluptatibus";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 564489;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 480418;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 496295;
                                    intervalSec = 282644;
                                }};
                                conformAction = "dolore";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.XFF_IP;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "iusto";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_COOKIE;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "recusandae";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "voluptatum";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                }};
                                enforceOnKeyName = "amet";
                                exceedAction = "delectus";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "nostrum";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 982084;
                                    intervalSec = 930267;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "dolorem";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                            }};
                        }}),
                        add(new SecurityPolicyRule() {{
                            action = "corporis";
                            description = "aspernatur";
                            headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                                requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "libero";
                                        headerValue = "distinctio";
                                    }}),
                                    add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                        headerName = "cumque";
                                        headerValue = "consectetur";
                                    }}),
                                }};
                            }};
                            kind = "quod";
                            match = new SecurityPolicyRuleMatcher() {{
                                config = new SecurityPolicyRuleMatcherConfig() {{
                                    srcIpRanges = new String[]{{
                                        add("ullam"),
                                        add("sapiente"),
                                        add("at"),
                                        add("commodi"),
                                    }};
                                }};
                                expr = new Expr() {{
                                    description = "vel";
                                    expression = "dignissimos";
                                    location = "hic";
                                    title = "Miss";
                                }};
                                versionedExpr = SecurityPolicyRuleMatcherVersionedExprEnum.SRC_IPS_V1;
                            }};
                            preconfiguredWafConfig = new SecurityPolicyRulePreconfiguredWafConfig() {{
                                exclusions = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusion[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ab";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "atque";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "at";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "dolorem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "iure";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "deleniti";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "recusandae";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("inventore"),
                                        }};
                                        targetRuleSet = "dignissimos";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "voluptatum";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "accusamus";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                                val = "eveniet";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "quia";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "provident";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "consectetur";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("ipsum"),
                                        }};
                                        targetRuleSet = "voluptates";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                        requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "autem";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "fugiat";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "animi";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                                val = "beatae";
                                            }}),
                                        }};
                                        requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "nesciunt";
                                            }}),
                                        }};
                                        requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "debitis";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                                val = "dolor";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "in";
                                            }}),
                                        }};
                                        requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                                val = "molestias";
                                            }}),
                                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                                op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                                val = "ipsam";
                                            }}),
                                        }};
                                        targetRuleIds = new String[]{{
                                            add("harum"),
                                            add("iusto"),
                                            add("quisquam"),
                                            add("eum"),
                                        }};
                                        targetRuleSet = "quam";
                                    }}),
                                }};
                            }};
                            preview = false;
                            priority = 244202;
                            rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                                banDurationSec = 880176;
                                banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 534633;
                                    intervalSec = 173585;
                                }};
                                conformAction = "temporibus";
                                enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.HTTP_PATH;
                                enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "recusandae";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.HTTP_HEADER;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "ab";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.SNI;
                                    }}),
                                    add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                        enforceOnKeyName = "veritatis";
                                        enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.ALL;
                                    }}),
                                }};
                                enforceOnKeyName = "minus";
                                exceedAction = "accusantium";
                                exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                    target = "delectus";
                                    type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                                }};
                                rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                                    count = 630466;
                                    intervalSec = 530494;
                                }};
                            }};
                            redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                                target = "aut";
                                type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                            }};
                        }}),
                    }};
                    selfLink = "nostrum";
                    type = SecurityPolicyTypeEnum.CLOUD_ARMOR_NETWORK;
                }};;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "enim";
                key = "ex";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "aliquid";
                requestId = "velit";
                uploadType = "ipsa";
                uploadProtocol = "possimus";
                userIp = "facere";
            }};            

            ComputeSecurityPoliciesPatchResponse res = sdk.securityPolicies.computeSecurityPoliciesPatch(req, new ComputeSecurityPoliciesPatchSecurity() {{
                option1 = new ComputeSecurityPoliciesPatchSecurityOption1("recusandae", "doloremque") {{
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
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderAction;
import org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcher;
import org.openapis.openapi.models.shared.SecurityPolicyRuleMatcherConfig;
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

            ComputeSecurityPoliciesPatchRuleRequest req = new ComputeSecurityPoliciesPatchRuleRequest("aliquid", "error") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyRule = new SecurityPolicyRule() {{
                    action = "libero";
                    description = "ex";
                    headerAction = new SecurityPolicyRuleHttpHeaderAction() {{
                        requestHeadersToAdds = new org.openapis.openapi.models.shared.SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[]{{
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "ipsam";
                                headerValue = "quas";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "praesentium";
                                headerValue = "quas";
                            }}),
                            add(new SecurityPolicyRuleHttpHeaderActionHttpHeaderOption() {{
                                headerName = "ducimus";
                                headerValue = "soluta";
                            }}),
                        }};
                    }};;
                    kind = "vero";
                    match = new SecurityPolicyRuleMatcher() {{
                        config = new SecurityPolicyRuleMatcherConfig() {{
                            srcIpRanges = new String[]{{
                                add("natus"),
                                add("unde"),
                                add("inventore"),
                            }};
                        }};;
                        expr = new Expr() {{
                            description = "ratione";
                            expression = "animi";
                            location = "asperiores";
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
                                        val = "dolorem";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "dolor";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "voluptatum";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "nesciunt";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "repellat";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "repellendus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "sequi";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "modi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "architecto";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "aspernatur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "quo";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("perferendis"),
                                }};
                                targetRuleSet = "dolor";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "quisquam";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "molestias";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "doloremque";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "est";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "a";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "error";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "ipsa";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "necessitatibus";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "cumque";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "similique";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "repudiandae";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("rem"),
                                    add("nihil"),
                                }};
                                targetRuleSet = "laudantium";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "reprehenderit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "adipisci";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "in";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "esse";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "asperiores";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "autem";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "maiores";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "id";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "hic";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "sit";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "sequi";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.STARTS_WITH;
                                        val = "odit";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "dicta";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "cupiditate";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "amet";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("commodi"),
                                    add("sapiente"),
                                    add("in"),
                                    add("iure"),
                                }};
                                targetRuleSet = "facilis";
                            }}),
                            add(new SecurityPolicyRulePreconfiguredWafConfigExclusion() {{
                                requestCookiesToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "repudiandae";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "assumenda";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "consequuntur";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "vero";
                                    }}),
                                }};
                                requestHeadersToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "quaerat";
                                    }}),
                                }};
                                requestQueryParamsToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS_ANY;
                                        val = "est";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.ENDS_WITH;
                                        val = "veritatis";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "ducimus";
                                    }}),
                                }};
                                requestUrisToExclude = new org.openapis.openapi.models.shared.SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[]{{
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.CONTAINS;
                                        val = "mollitia";
                                    }}),
                                    add(new SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams() {{
                                        op = SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum.EQUALS;
                                        val = "illum";
                                    }}),
                                }};
                                targetRuleIds = new String[]{{
                                    add("officiis"),
                                    add("nobis"),
                                }};
                                targetRuleSet = "velit";
                            }}),
                        }};
                    }};;
                    preview = false;
                    priority = 633962;
                    rateLimitOptions = new SecurityPolicyRuleRateLimitOptions() {{
                        banDurationSec = 954286;
                        banThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 49330;
                            intervalSec = 372152;
                        }};;
                        conformAction = "praesentium";
                        enforceOnKey = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyEnum.ALL;
                        enforceOnKeyConfigs = new org.openapis.openapi.models.shared.SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[]{{
                            add(new SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig() {{
                                enforceOnKeyName = "quaerat";
                                enforceOnKeyType = SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigEnforceOnKeyTypeEnum.IP;
                            }}),
                        }};
                        enforceOnKeyName = "dolores";
                        exceedAction = "harum";
                        exceedRedirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                            target = "tempora";
                            type = SecurityPolicyRuleRedirectOptionsTypeEnum.EXTERNAL302;
                        }};;
                        rateLimitThreshold = new SecurityPolicyRuleRateLimitOptionsThreshold() {{
                            count = 554820;
                            intervalSec = 795320;
                        }};;
                    }};;
                    redirectOptions = new SecurityPolicyRuleRedirectOptions() {{
                        target = "perspiciatis";
                        type = SecurityPolicyRuleRedirectOptionsTypeEnum.GOOGLE_RECAPTCHA;
                    }};;
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "ullam";
                key = "natus";
                oauthToken = "autem";
                prettyPrint = false;
                priority = 524085L;
                quotaUser = "laboriosam";
                uploadType = "quas";
                uploadProtocol = "sit";
                userIp = "voluptates";
                validateOnly = false;
            }};            

            ComputeSecurityPoliciesPatchRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesPatchRule(req, new ComputeSecurityPoliciesPatchRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesPatchRuleSecurityOption1("quisquam", "distinctio") {{
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

            ComputeSecurityPoliciesRemoveRuleRequest req = new ComputeSecurityPoliciesRemoveRuleRequest("praesentium", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "impedit";
                key = "magnam";
                oauthToken = "dolorem";
                prettyPrint = false;
                priority = 937896L;
                quotaUser = "cupiditate";
                uploadType = "quidem";
                uploadProtocol = "sed";
                userIp = "asperiores";
            }};            

            ComputeSecurityPoliciesRemoveRuleResponse res = sdk.securityPolicies.computeSecurityPoliciesRemoveRule(req, new ComputeSecurityPoliciesRemoveRuleSecurity() {{
                option1 = new ComputeSecurityPoliciesRemoveRuleSecurityOption1("nisi", "autem") {{
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

            ComputeSecurityPoliciesSetLabelsRequest req = new ComputeSecurityPoliciesSetLabelsRequest("natus", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "delectus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("error", "corrupti");
                        put("esse", "ducimus");
                        put("libero", "optio");
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "tempore";
                key = "a";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "sint";
                uploadProtocol = "numquam";
                userIp = "voluptas";
            }};            

            ComputeSecurityPoliciesSetLabelsResponse res = sdk.securityPolicies.computeSecurityPoliciesSetLabels(req, new ComputeSecurityPoliciesSetLabelsSecurity() {{
                option1 = new ComputeSecurityPoliciesSetLabelsSecurityOption1("provident", "beatae") {{
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
