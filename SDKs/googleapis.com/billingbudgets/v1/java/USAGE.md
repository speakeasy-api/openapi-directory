<!-- Start SDK Example Usage -->
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

            BillingbudgetsBillingAccountsBudgetsCreateRequest req = new BillingbudgetsBillingAccountsBudgetsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBillingBudgetsV1BudgetInput = new GoogleCloudBillingBudgetsV1BudgetInput() {{
                    amount = new GoogleCloudBillingBudgetsV1BudgetAmount() {{
                        lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                            put("quibusdam", "unde");
                            put("nulla", "corrupti");
                            put("illum", "vel");
                        }};
                        specifiedAmount = new GoogleTypeMoney() {{
                            currencyCode = "error";
                            nanos = 645894;
                            units = "suscipit";
                        }};;
                    }};;
                    budgetFilter = new GoogleCloudBillingBudgetsV1Filter() {{
                        calendarPeriod = GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnum.MONTH;
                        creditTypes = new String[]{{
                            add("debitis"),
                            add("ipsa"),
                        }};
                        creditTypesTreatment = GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnum.INCLUDE_SPECIFIED_CREDITS;
                        customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod() {{
                            endDate = new GoogleTypeDate() {{
                                day = 272656;
                                month = 383441;
                                year = 477665;
                            }};;
                            startDate = new GoogleTypeDate() {{
                                day = 791725;
                                month = 812169;
                                year = 528895;
                            }};;
                        }};;
                        labels = new java.util.HashMap<String, Object[]>() {{
                            put("excepturi", new Object[]{{
                                add("recusandae"),
                                add("temporibus"),
                            }});
                            put("ab", new Object[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }});
                        }};
                        projects = new String[]{{
                            add("ipsam"),
                        }};
                        services = new String[]{{
                            add("sapiente"),
                            add("quo"),
                            add("odit"),
                            add("at"),
                        }};
                        subaccounts = new String[]{{
                            add("maiores"),
                            add("molestiae"),
                            add("quod"),
                            add("quod"),
                        }};
                    }};;
                    displayName = "esse";
                    etag = "totam";
                    notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule() {{
                        disableDefaultIamRecipients = false;
                        monitoringNotificationChannels = new String[]{{
                            add("dolorum"),
                            add("dicta"),
                            add("nam"),
                            add("officia"),
                        }};
                        pubsubTopic = "occaecati";
                        schemaVersion = "fugit";
                    }};;
                    thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule[]{{
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.FORECASTED_SPEND;
                            thresholdPercent = 7586.16;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.CURRENT_SPEND;
                            thresholdPercent = 1059.07;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum.CURRENT_SPEND;
                            thresholdPercent = 4736;
                        }}),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req, new BillingbudgetsBillingAccountsBudgetsCreateSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1("ad", "natus") {{
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
<!-- End SDK Example Usage -->