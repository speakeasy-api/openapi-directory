# billingAccounts

### Available Operations

* [billingbudgetsBillingAccountsBudgetsCreate](#billingbudgetsbillingaccountsbudgetscreate) - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* [billingbudgetsBillingAccountsBudgetsDelete](#billingbudgetsbillingaccountsbudgetsdelete) - Deletes a budget. Returns successfully if already deleted.
* [billingbudgetsBillingAccountsBudgetsGet](#billingbudgetsbillingaccountsbudgetsget) - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsList](#billingbudgetsbillingaccountsbudgetslist) - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsPatch](#billingbudgetsbillingaccountsbudgetspatch) - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

## billingbudgetsBillingAccountsBudgetsCreate

Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1BudgetInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1Filter;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeMoney;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsCreateRequest req = new BillingbudgetsBillingAccountsBudgetsCreateRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]{{
                                add("fuga"),
                                add("in"),
                                add("corporis"),
                                add("iste"),
                            }};
                            pubsubTopic = "iure";
                            schemaVersion = "saepe";
                        }};;
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("architecto", "ipsa");
                                put("reiciendis", "est");
                                put("mollitia", "laborum");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "dolores";
                                nanos = 210382;
                                units = "corporis";
                            }};;
                        }};;
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum.CALENDAR_PERIOD_UNSPECIFIED;
                            creditTypes = new String[]{{
                                add("enim"),
                                add("omnis"),
                                add("nemo"),
                                add("minima"),
                            }};
                            creditTypesTreatment = GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum.EXCLUDE_ALL_CREDITS;
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
                                endDate = new GoogleTypeDate() {{
                                    day = 38425;
                                    month = 438601;
                                    year = 634274;
                                }};;
                                startDate = new GoogleTypeDate() {{
                                    day = 988374;
                                    month = 958950;
                                    year = 102044;
                                }};;
                            }};;
                            labels = new java.util.HashMap<String, Object[]>() {{
                                put("dolorem", new Object[]{{
                                    add("consequuntur"),
                                    add("repellat"),
                                    add("mollitia"),
                                }});
                                put("occaecati", new Object[]{{
                                    add("commodi"),
                                    add("quam"),
                                }});
                                put("molestiae", new Object[]{{
                                    add("error"),
                                }});
                            }};
                            projects = new String[]{{
                                add("quis"),
                            }};
                            services = new String[]{{
                                add("laborum"),
                            }};
                            subaccounts = new String[]{{
                                add("enim"),
                                add("odit"),
                                add("quo"),
                            }};
                        }};;
                        displayName = "sequi";
                        etag = "tenetur";
                        thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]{{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.CURRENT_SPEND;
                                thresholdPercent = 8209.94;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.BASIS_UNSPECIFIED;
                                thresholdPercent = 971.01;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "nihil";
                uploadProtocol = "praesentium";
            }};            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req, new BillingbudgetsBillingAccountsBudgetsCreateSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1("voluptatibus", "ipsa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1beta1Budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingbudgetsBillingAccountsBudgetsDelete

Deletes a budget. Returns successfully if already deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsDeleteRequest req = new BillingbudgetsBillingAccountsBudgetsDeleteRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            BillingbudgetsBillingAccountsBudgetsDeleteResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsDelete(req, new BillingbudgetsBillingAccountsBudgetsDeleteSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1("iusto", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingbudgetsBillingAccountsBudgetsGet

Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsGetRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsGetResponse;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsGetSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsGetSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsGetRequest req = new BillingbudgetsBillingAccountsBudgetsGetRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "excepturi";
                uploadProtocol = "pariatur";
            }};            

            BillingbudgetsBillingAccountsBudgetsGetResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsGet(req, new BillingbudgetsBillingAccountsBudgetsGetSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsGetSecurityOption1("modi", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1beta1Budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingbudgetsBillingAccountsBudgetsList

Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsListRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsListResponse;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsListSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsListSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsListRequest req = new BillingbudgetsBillingAccountsBudgetsListRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                key = "itaque";
                oauthToken = "incidunt";
                pageSize = 318569L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            BillingbudgetsBillingAccountsBudgetsListResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsList(req, new BillingbudgetsBillingAccountsBudgetsListSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsListSecurityOption1("deserunt", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1beta1ListBudgetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingbudgetsBillingAccountsBudgetsPatch

Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsPatchRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsPatchResponse;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsPatchSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1BudgetInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1Filter;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeMoney;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsPatchRequest req = new BillingbudgetsBillingAccountsBudgetsPatchRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]{{
                                add("qui"),
                                add("aliquid"),
                            }};
                            pubsubTopic = "cupiditate";
                            schemaVersion = "quos";
                        }};;
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("magni", "assumenda");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "ipsam";
                                nanos = 4695;
                                units = "fugit";
                            }};;
                        }};;
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum.QUARTER;
                            creditTypes = new String[]{{
                                add("tempora"),
                                add("facilis"),
                                add("tempore"),
                            }};
                            creditTypesTreatment = GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum.INCLUDE_ALL_CREDITS;
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
                                endDate = new GoogleTypeDate() {{
                                    day = 962189;
                                    month = 433288;
                                    year = 248753;
                                }};;
                                startDate = new GoogleTypeDate() {{
                                    day = 756107;
                                    month = 576157;
                                    year = 396098;
                                }};;
                            }};;
                            labels = new java.util.HashMap<String, Object[]>() {{
                                put("necessitatibus", new Object[]{{
                                    add("officia"),
                                    add("dolor"),
                                    add("debitis"),
                                }});
                                put("a", new Object[]{{
                                    add("in"),
                                    add("in"),
                                    add("illum"),
                                }});
                                put("maiores", new Object[]{{
                                    add("dicta"),
                                    add("magnam"),
                                    add("cumque"),
                                }});
                            }};
                            projects = new String[]{{
                                add("ea"),
                                add("aliquid"),
                                add("laborum"),
                                add("accusamus"),
                            }};
                            services = new String[]{{
                                add("occaecati"),
                            }};
                            subaccounts = new String[]{{
                                add("accusamus"),
                                add("delectus"),
                            }};
                        }};;
                        displayName = "quidem";
                        etag = "provident";
                        thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]{{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.CURRENT_SPEND;
                                thresholdPercent = 5013.24;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.CURRENT_SPEND;
                                thresholdPercent = 9560.84;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.BASIS_UNSPECIFIED;
                                thresholdPercent = 6439.9;
                            }}),
                        }};
                    }};;
                    updateMask = "nisi";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "molestiae";
                key = "perferendis";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            BillingbudgetsBillingAccountsBudgetsPatchResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsPatch(req, new BillingbudgetsBillingAccountsBudgetsPatchSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1("labore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1beta1Budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
