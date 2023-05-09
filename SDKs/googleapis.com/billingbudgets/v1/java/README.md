# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [billingAccounts](docs/billingaccounts/README.md)

* [billingbudgetsBillingAccountsBudgetsCreate](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetscreate) - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* [billingbudgetsBillingAccountsBudgetsDelete](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetsdelete) - Deletes a budget. Returns successfully if already deleted.
* [billingbudgetsBillingAccountsBudgetsGet](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetsget) - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsList](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetslist) - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [billingbudgetsBillingAccountsBudgetsPatch](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetspatch) - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
