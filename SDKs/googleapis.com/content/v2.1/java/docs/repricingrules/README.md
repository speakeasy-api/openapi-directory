# repricingrules

### Available Operations

* [contentRepricingrulesCreate](#contentrepricingrulescreate) - Creates a repricing rule for your Merchant Center account.
* [contentRepricingrulesDelete](#contentrepricingrulesdelete) - Deletes a repricing rule in your Merchant Center account.
* [contentRepricingrulesGet](#contentrepricingrulesget) - Retrieves a repricing rule from your Merchant Center account.
* [contentRepricingrulesList](#contentrepricingruleslist) - Lists the repricing rules in your Merchant Center account.
* [contentRepricingrulesPatch](#contentrepricingrulespatch) - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* [contentRepricingrulesRepricingreportsList](#contentrepricingrulesrepricingreportslist) - Lists the metrics report for a given Repricing rule.

## contentRepricingrulesCreate

Creates a repricing rule for your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRepricingrulesCreateRequest;
import org.openapis.openapi.models.operations.ContentRepricingrulesCreateResponse;
import org.openapis.openapi.models.operations.ContentRepricingrulesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RepricingRuleCostOfGoodsSaleRule;
import org.openapis.openapi.models.shared.RepricingRuleEffectiveTime;
import org.openapis.openapi.models.shared.RepricingRuleEffectiveTimeFixedTimePeriod;
import org.openapis.openapi.models.shared.RepricingRuleEligibleOfferMatcher;
import org.openapis.openapi.models.shared.RepricingRuleEligibleOfferMatcherMatcherOptionEnum;
import org.openapis.openapi.models.shared.RepricingRuleEligibleOfferMatcherStringMatcher;
import org.openapis.openapi.models.shared.RepricingRuleInput;
import org.openapis.openapi.models.shared.RepricingRuleRestriction;
import org.openapis.openapi.models.shared.RepricingRuleRestrictionBoundary;
import org.openapis.openapi.models.shared.RepricingRuleStatsBasedRule;
import org.openapis.openapi.models.shared.RepricingRuleTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRepricingrulesCreateRequest req = new ContentRepricingrulesCreateRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                repricingRuleInput = new RepricingRuleInput() {{
                    cogsBasedRule = new RepricingRuleCostOfGoodsSaleRule() {{
                        percentageDelta = 794431;
                        priceDelta = "explicabo";
                    }};;
                    countryCode = "AR";
                    effectiveTimePeriod = new RepricingRuleEffectiveTime() {{
                        fixedTimePeriods = new org.openapis.openapi.models.shared.RepricingRuleEffectiveTimeFixedTimePeriod[]{{
                            add(new RepricingRuleEffectiveTimeFixedTimePeriod() {{
                                endTime = "quasi";
                                startTime = "saepe";
                            }}),
                        }};
                    }};;
                    eligibleOfferMatcher = new RepricingRuleEligibleOfferMatcher() {{
                        brandMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher() {{
                            strAttributes = new String[]{{
                                add("aspernatur"),
                            }};
                        }};;
                        itemGroupIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher() {{
                            strAttributes = new String[]{{
                                add("illum"),
                                add("veniam"),
                                add("exercitationem"),
                                add("quod"),
                            }};
                        }};;
                        matcherOption = RepricingRuleEligibleOfferMatcherMatcherOptionEnum.MATCHER_OPTION_ALL_PRODUCTS;
                        offerIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher() {{
                            strAttributes = new String[]{{
                                add("nemo"),
                            }};
                        }};;
                        skipWhenOnPromotion = false;
                    }};;
                    languageCode = "molestias";
                    paused = false;
                    restriction = new RepricingRuleRestriction() {{
                        floor = new RepricingRuleRestrictionBoundary() {{
                            percentageDelta = 267684;
                            priceDelta = "similique";
                        }};;
                        useAutoPricingMinPrice = false;
                    }};;
                    statsBasedRule = new RepricingRuleStatsBasedRule() {{
                        percentageDelta = 93660;
                        priceDelta = "laudantium";
                    }};;
                    title = "Mrs.";
                    type = RepricingRuleTypeEnum.TYPE_COMPETITIVE_PRICE;
                }};;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "omnis";
                key = "voluptate";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "reiciendis";
                ruleId = "cumque";
                uploadType = "atque";
                uploadProtocol = "explicabo";
            }};            

            ContentRepricingrulesCreateResponse res = sdk.repricingrules.contentRepricingrulesCreate(req, new ContentRepricingrulesCreateSecurity("sit", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.repricingRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRepricingrulesDelete

Deletes a repricing rule in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRepricingrulesDeleteRequest;
import org.openapis.openapi.models.operations.ContentRepricingrulesDeleteResponse;
import org.openapis.openapi.models.operations.ContentRepricingrulesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRepricingrulesDeleteRequest req = new ContentRepricingrulesDeleteRequest("commodi", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "rerum";
                key = "distinctio";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "sit";
                uploadProtocol = "optio";
            }};            

            ContentRepricingrulesDeleteResponse res = sdk.repricingrules.contentRepricingrulesDelete(req, new ContentRepricingrulesDeleteSecurity("impedit", "corrupti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRepricingrulesGet

Retrieves a repricing rule from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRepricingrulesGetRequest;
import org.openapis.openapi.models.operations.ContentRepricingrulesGetResponse;
import org.openapis.openapi.models.operations.ContentRepricingrulesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRepricingrulesGetRequest req = new ContentRepricingrulesGetRequest("quas", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "labore";
                key = "nulla";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "ut";
                uploadProtocol = "laborum";
            }};            

            ContentRepricingrulesGetResponse res = sdk.repricingrules.contentRepricingrulesGet(req, new ContentRepricingrulesGetSecurity("hic", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.repricingRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRepricingrulesList

Lists the repricing rules in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRepricingrulesListRequest;
import org.openapis.openapi.models.operations.ContentRepricingrulesListResponse;
import org.openapis.openapi.models.operations.ContentRepricingrulesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRepricingrulesListRequest req = new ContentRepricingrulesListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.PROTO;
                callback = "facere";
                countryCode = "TF";
                fields = "quidem";
                key = "labore";
                languageCode = "commodi";
                oauthToken = "mollitia";
                pageSize = 629618L;
                pageToken = "quasi";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "voluptatibus";
                uploadProtocol = "illum";
            }};            

            ContentRepricingrulesListResponse res = sdk.repricingrules.contentRepricingrulesList(req, new ContentRepricingrulesListSecurity("ea", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRepricingRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRepricingrulesPatch

Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRepricingrulesPatchRequest;
import org.openapis.openapi.models.operations.ContentRepricingrulesPatchResponse;
import org.openapis.openapi.models.operations.ContentRepricingrulesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RepricingRuleCostOfGoodsSaleRule;
import org.openapis.openapi.models.shared.RepricingRuleEffectiveTime;
import org.openapis.openapi.models.shared.RepricingRuleEffectiveTimeFixedTimePeriod;
import org.openapis.openapi.models.shared.RepricingRuleEligibleOfferMatcher;
import org.openapis.openapi.models.shared.RepricingRuleEligibleOfferMatcherMatcherOptionEnum;
import org.openapis.openapi.models.shared.RepricingRuleEligibleOfferMatcherStringMatcher;
import org.openapis.openapi.models.shared.RepricingRuleInput;
import org.openapis.openapi.models.shared.RepricingRuleRestriction;
import org.openapis.openapi.models.shared.RepricingRuleRestrictionBoundary;
import org.openapis.openapi.models.shared.RepricingRuleStatsBasedRule;
import org.openapis.openapi.models.shared.RepricingRuleTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRepricingrulesPatchRequest req = new ContentRepricingrulesPatchRequest("corrupti", "magni") {{
                dollarXgafv = XgafvEnum.TWO;
                repricingRuleInput = new RepricingRuleInput() {{
                    cogsBasedRule = new RepricingRuleCostOfGoodsSaleRule() {{
                        percentageDelta = 828390;
                        priceDelta = "culpa";
                    }};;
                    countryCode = "AX";
                    effectiveTimePeriod = new RepricingRuleEffectiveTime() {{
                        fixedTimePeriods = new org.openapis.openapi.models.shared.RepricingRuleEffectiveTimeFixedTimePeriod[]{{
                            add(new RepricingRuleEffectiveTimeFixedTimePeriod() {{
                                endTime = "nesciunt";
                                startTime = "et";
                            }}),
                        }};
                    }};;
                    eligibleOfferMatcher = new RepricingRuleEligibleOfferMatcher() {{
                        brandMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher() {{
                            strAttributes = new String[]{{
                                add("inventore"),
                                add("vitae"),
                                add("qui"),
                            }};
                        }};;
                        itemGroupIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher() {{
                            strAttributes = new String[]{{
                                add("ex"),
                                add("quaerat"),
                                add("aliquid"),
                            }};
                        }};;
                        matcherOption = RepricingRuleEligibleOfferMatcherMatcherOptionEnum.MATCHER_OPTION_CUSTOM_FILTER;
                        offerIdMatcher = new RepricingRuleEligibleOfferMatcherStringMatcher() {{
                            strAttributes = new String[]{{
                                add("enim"),
                                add("cumque"),
                            }};
                        }};;
                        skipWhenOnPromotion = false;
                    }};;
                    languageCode = "ab";
                    paused = false;
                    restriction = new RepricingRuleRestriction() {{
                        floor = new RepricingRuleRestrictionBoundary() {{
                            percentageDelta = 844482;
                            priceDelta = "blanditiis";
                        }};;
                        useAutoPricingMinPrice = false;
                    }};;
                    statsBasedRule = new RepricingRuleStatsBasedRule() {{
                        percentageDelta = 93299;
                        priceDelta = "delectus";
                    }};;
                    title = "Mr.";
                    type = RepricingRuleTypeEnum.TYPE_SALES_VOLUME_BASED;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "sapiente";
                key = "nemo";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "quidem";
                uploadProtocol = "iusto";
            }};            

            ContentRepricingrulesPatchResponse res = sdk.repricingrules.contentRepricingrulesPatch(req, new ContentRepricingrulesPatchSecurity("culpa", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.repricingRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRepricingrulesRepricingreportsList

Lists the metrics report for a given Repricing rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRepricingrulesRepricingreportsListRequest;
import org.openapis.openapi.models.operations.ContentRepricingrulesRepricingreportsListResponse;
import org.openapis.openapi.models.operations.ContentRepricingrulesRepricingreportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRepricingrulesRepricingreportsListRequest req = new ContentRepricingrulesRepricingreportsListRequest("a", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "eos";
                endDate = "veritatis";
                fields = "vel";
                key = "placeat";
                oauthToken = "libero";
                pageSize = 904944L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "dignissimos";
                startDate = "veritatis";
                uploadType = "harum";
                uploadProtocol = "cumque";
            }};            

            ContentRepricingrulesRepricingreportsListResponse res = sdk.repricingrules.contentRepricingrulesRepricingreportsList(req, new ContentRepricingrulesRepricingreportsListSecurity("ab", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRepricingRuleReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
