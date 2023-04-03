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

import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption2;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1BudgetInput;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1Filter;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount;
import org.openapis.openapi.models.shared.GoogleTypeMoney;
import org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingbudgetsBillingAccountsBudgetsCreateRequest req = new BillingbudgetsBillingAccountsBudgetsCreateRequest() {{
                dollarXgafv = "2";
                googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]{{
                                add("distinctio"),
                                add("quibusdam"),
                                add("unde"),
                            }};
                            pubsubTopic = "nulla";
                            schemaVersion = "corrupti";
                        }};
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("vel", "error");
                                put("deserunt", "suscipit");
                                put("iure", "magnam");
                                put("debitis", "ipsa");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "delectus";
                                nanos = 272656;
                                units = "suscipit";
                            }};
                        }};
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = "MONTH";
                            creditTypes = new String[]{{
                                add("placeat"),
                                add("voluptatum"),
                                add("iusto"),
                                add("excepturi"),
                            }};
                            creditTypesTreatment = "INCLUDE_ALL_CREDITS";
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
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
                        thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]{{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "FORECASTED_SPEND";
                                thresholdPercent = 7586.16;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "CURRENT_SPEND";
                                thresholdPercent = 1059.07;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "CURRENT_SPEND";
                                thresholdPercent = 4736;
                            }}),
                        }};
                    }};
                }};
                accessToken = "modi";
                alt = "json";
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                parent = "excepturi";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "perferendis";
                uploadProtocol = "ad";
            }}            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req, new BillingbudgetsBillingAccountsBudgetsCreateSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleCloudBillingBudgetsV1beta1Budget.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### billingAccounts

* `billingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `billingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `billingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `billingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
