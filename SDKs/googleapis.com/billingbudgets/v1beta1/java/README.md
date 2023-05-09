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

            BillingbudgetsBillingAccountsBudgetsCreateRequest req = new BillingbudgetsBillingAccountsBudgetsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudBillingBudgetsV1beta1CreateBudgetRequestInput = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }};
                            pubsubTopic = "corrupti";
                            schemaVersion = "illum";
                        }};;
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("error", "deserunt");
                                put("suscipit", "iure");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "magnam";
                                nanos = 891773;
                                units = "ipsa";
                            }};;
                        }};;
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnum.YEAR;
                            creditTypes = new String[]{{
                                add("suscipit"),
                                add("molestiae"),
                            }};
                            creditTypesTreatment = GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnum.INCLUDE_SPECIFIED_CREDITS;
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
                                endDate = new GoogleTypeDate() {{
                                    day = 812169;
                                    month = 528895;
                                    year = 479977;
                                }};;
                                startDate = new GoogleTypeDate() {{
                                    day = 568045;
                                    month = 392785;
                                    year = 925597;
                                }};;
                            }};;
                            labels = new java.util.HashMap<String, Object[]>() {{
                                put("ab", new Object[]{{
                                    add("veritatis"),
                                    add("deserunt"),
                                }});
                                put("perferendis", new Object[]{{
                                    add("repellendus"),
                                    add("sapiente"),
                                }});
                                put("quo", new Object[]{{
                                    add("at"),
                                }});
                                put("at", new Object[]{{
                                    add("molestiae"),
                                    add("quod"),
                                    add("quod"),
                                    add("esse"),
                                }});
                            }};
                            projects = new String[]{{
                                add("porro"),
                                add("dolorum"),
                                add("dicta"),
                            }};
                            services = new String[]{{
                                add("officia"),
                                add("occaecati"),
                                add("fugit"),
                            }};
                            subaccounts = new String[]{{
                                add("hic"),
                                add("optio"),
                                add("totam"),
                            }};
                        }};;
                        displayName = "beatae";
                        etag = "commodi";
                        thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]{{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.BASIS_UNSPECIFIED;
                                thresholdPercent = 1863.32;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnum.FORECASTED_SPEND;
                                thresholdPercent = 7369.18;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req, new BillingbudgetsBillingAccountsBudgetsCreateSecurity() {{
                option1 = new BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1("dolor", "natus") {{
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
