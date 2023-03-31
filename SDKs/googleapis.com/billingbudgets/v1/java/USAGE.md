<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreatePathParams;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1BudgetInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1NotificationsRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1Filter;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1CustomPeriod;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1BudgetAmount;
import org.openapis.openapi.models.shared.GoogleTypeMoney;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsCreateRequest req = new BillingbudgetsBillingAccountsBudgetsCreateRequest() {{
                security = new BillingbudgetsBillingAccountsBudgetsCreateSecurity() {{
                    option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new BillingbudgetsBillingAccountsBudgetsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new BillingbudgetsBillingAccountsBudgetsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudBillingBudgetsV1BudgetInput() {{
                    amount = new GoogleCloudBillingBudgetsV1BudgetAmount() {{
                        lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                        specifiedAmount = new GoogleTypeMoney() {{
                            currencyCode = "delectus";
                            nanos = 272656;
                            units = "suscipit";
                        }};
                    }};
                    budgetFilter = new GoogleCloudBillingBudgetsV1Filter() {{
                        calendarPeriod = "MONTH";
                        creditTypes = new String[]{{
                            add("placeat"),
                            add("voluptatum"),
                            add("iusto"),
                            add("excepturi"),
                        }};
                        creditTypesTreatment = "INCLUDE_ALL_CREDITS";
                        customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod() {{
                            endDate = new GoogleTypeDate() {{
                                day = 925597;
                                month = 836079;
                                year = 71036;
                            }};
                            startDate = new GoogleTypeDate() {{
                                day = 337396;
                                month = 87129;
                                year = 648172;
                            }};
                        }};
                        labels = new java.util.HashMap<String, Object[]>() {{
                            put("ipsam", new Object[]{{
                                add("sapiente"),
                                add("quo"),
                                add("odit"),
                                add("at"),
                            }});
                        }};
                        projects = new String[]{{
                            add("maiores"),
                            add("molestiae"),
                            add("quod"),
                            add("quod"),
                        }};
                        services = new String[]{{
                            add("totam"),
                            add("porro"),
                        }};
                        subaccounts = new String[]{{
                            add("dicta"),
                            add("nam"),
                            add("officia"),
                        }};
                    }};
                    displayName = "occaecati";
                    etag = "fugit";
                    notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule() {{
                        disableDefaultIamRecipients = false;
                        monitoringNotificationChannels = new String[]{{
                            add("hic"),
                            add("optio"),
                            add("totam"),
                        }};
                        pubsubTopic = "beatae";
                        schemaVersion = "commodi";
                    }};
                    thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule[]{{
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "BASIS_UNSPECIFIED";
                            thresholdPercent = 1863.32;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "FORECASTED_SPEND";
                            thresholdPercent = 7369.18;
                        }}),
                    }};
                }};
            }};            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req);

            if (res.googleCloudBillingBudgetsV1Budget.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->