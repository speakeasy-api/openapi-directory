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
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1BudgetAmount;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1BudgetInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1CustomPeriod;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1Filter;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1NotificationsRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeMoney;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsCreateRequest req = new BillingbudgetsBillingAccountsBudgetsCreateRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBillingBudgetsV1BudgetInput = new GoogleCloudBillingBudgetsV1BudgetInput() {{
                    amount = new GoogleCloudBillingBudgetsV1BudgetAmount() {{
                        lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                            put("natus", "laboriosam");
                        }};
                        specifiedAmount = new GoogleTypeMoney() {{
                            currencyCode = "hic";
                            nanos = 902599;
                            units = "fuga";
                        }};;
                    }};;
                    budgetFilter = new GoogleCloudBillingBudgetsV1Filter() {{
                        calendarPeriod = GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum.MONTH;
                        creditTypes = new String[]{{
                            add("iste"),
                            add("iure"),
                        }};
                        creditTypesTreatment = GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum.INCLUDE_SPECIFIED_CREDITS;
                        customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod() {{
                            endDate = new GoogleTypeDate() {{
                                day = 697631;
                                month = 99280;
                                year = 60225;
                            }};;
                            startDate = new GoogleTypeDate() {{
                                day = 969810;
                                month = 666767;
                                year = 653140;
                            }};;
                        }};;
                        labels = new java.util.HashMap<String, Object[]>() {{
                            put("dolores", new Object[]{{
                                add("corporis"),
                            }});
                            put("explicabo", new Object[]{{
                                add("enim"),
                                add("omnis"),
                                add("nemo"),
                                add("minima"),
                            }});
                            put("excepturi", new Object[]{{
                                add("iure"),
                            }});
                        }};
                        projects = new String[]{{
                            add("doloribus"),
                            add("sapiente"),
                            add("architecto"),
                        }};
                        services = new String[]{{
                            add("dolorem"),
                            add("culpa"),
                            add("consequuntur"),
                        }};
                        subaccounts = new String[]{{
                            add("mollitia"),
                            add("occaecati"),
                            add("numquam"),
                            add("commodi"),
                        }};
                    }};;
                    displayName = "quam";
                    etag = "molestiae";
                    notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule() {{
                        disableDefaultIamRecipients = false;
                        monitoringNotificationChannels = new String[]{{
                            add("error"),
                        }};
                        pubsubTopic = "quia";
                        schemaVersion = "quis";
                    }};;
                    thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule[]{{
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.FORECASTED_SPEND;
                            thresholdPercent = 6563.3;
                        }}),
                    }};
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req, new BillingbudgetsBillingAccountsBudgetsCreateSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1("quasi", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1Budget != null) {
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

            BillingbudgetsBillingAccountsBudgetsDeleteRequest req = new BillingbudgetsBillingAccountsBudgetsDeleteRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            BillingbudgetsBillingAccountsBudgetsDeleteResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsDelete(req, new BillingbudgetsBillingAccountsBudgetsDeleteSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1("voluptate", "cum") {{
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

            BillingbudgetsBillingAccountsBudgetsGetRequest req = new BillingbudgetsBillingAccountsBudgetsGetRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            BillingbudgetsBillingAccountsBudgetsGetResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsGet(req, new BillingbudgetsBillingAccountsBudgetsGetSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsGetSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1Budget != null) {
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

            BillingbudgetsBillingAccountsBudgetsListRequest req = new BillingbudgetsBillingAccountsBudgetsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                pageSize = 265389L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "voluptates";
                uploadProtocol = "quasi";
            }};            

            BillingbudgetsBillingAccountsBudgetsListResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsList(req, new BillingbudgetsBillingAccountsBudgetsListSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsListSecurityOption1("repudiandae", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1ListBudgetsResponse != null) {
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
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1BudgetAmount;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1BudgetInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1CustomPeriod;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1Filter;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1NotificationsRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeMoney;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsPatchRequest req = new BillingbudgetsBillingAccountsBudgetsPatchRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBillingBudgetsV1BudgetInput = new GoogleCloudBillingBudgetsV1BudgetInput() {{
                    amount = new GoogleCloudBillingBudgetsV1BudgetAmount() {{
                        lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                            put("enim", "consequatur");
                            put("est", "quibusdam");
                        }};
                        specifiedAmount = new GoogleTypeMoney() {{
                            currencyCode = "explicabo";
                            nanos = 647174;
                            units = "distinctio";
                        }};;
                    }};;
                    budgetFilter = new GoogleCloudBillingBudgetsV1Filter() {{
                        calendarPeriod = GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum.YEAR;
                        creditTypes = new String[]{{
                            add("modi"),
                            add("qui"),
                        }};
                        creditTypesTreatment = GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum.INCLUDE_ALL_CREDITS;
                        customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod() {{
                            endDate = new GoogleTypeDate() {{
                                day = 586513;
                                month = 552822;
                                year = 20107;
                            }};;
                            startDate = new GoogleTypeDate() {{
                                day = 164940;
                                month = 828940;
                                year = 369808;
                            }};;
                        }};;
                        labels = new java.util.HashMap<String, Object[]>() {{
                            put("fugit", new Object[]{{
                                add("excepturi"),
                                add("tempora"),
                                add("facilis"),
                            }});
                        }};
                        projects = new String[]{{
                            add("labore"),
                            add("delectus"),
                            add("eum"),
                        }};
                        services = new String[]{{
                            add("eligendi"),
                        }};
                        subaccounts = new String[]{{
                            add("aliquid"),
                            add("provident"),
                            add("necessitatibus"),
                        }};
                    }};;
                    displayName = "sint";
                    etag = "officia";
                    notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule() {{
                        disableDefaultIamRecipients = false;
                        monitoringNotificationChannels = new String[]{{
                            add("debitis"),
                        }};
                        pubsubTopic = "a";
                        schemaVersion = "dolorum";
                    }};;
                    thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule[]{{
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.CURRENT_SPEND;
                            thresholdPercent = 8464.09;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.FORECASTED_SPEND;
                            thresholdPercent = 6994.79;
                        }}),
                    }};
                }};;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "facere";
                key = "ea";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "laborum";
                updateMask = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            BillingbudgetsBillingAccountsBudgetsPatchResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsPatch(req, new BillingbudgetsBillingAccountsBudgetsPatchSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1Budget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
