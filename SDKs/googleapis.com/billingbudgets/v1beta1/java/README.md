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
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreatePathParams;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateRequest;
import org.openapis.openapi.models.operations.BillingbudgetsBillingAccountsBudgetsCreateResponse;
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
                request = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                            pubsubTopic = "debitis";
                            schemaVersion = "ipsa";
                        }};
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("tempora", "suscipit");
                                put("molestiae", "minus");
                                put("placeat", "voluptatum");
                                put("iusto", "excepturi");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "nisi";
                                nanos = 925597;
                                units = "temporibus";
                            }};
                        }};
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = "CALENDAR_PERIOD_UNSPECIFIED";
                            creditTypes = new String[]{{
                                add("veritatis"),
                                add("deserunt"),
                            }};
                            creditTypesTreatment = "CREDIT_TYPES_TREATMENT_UNSPECIFIED";
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
                                endDate = new GoogleTypeDate() {{
                                    day = 368241;
                                    month = 832620;
                                    year = 957156;
                                }};
                                startDate = new GoogleTypeDate() {{
                                    day = 778157;
                                    month = 140350;
                                    year = 870013;
                                }};
                            }};
                            labels = new java.util.HashMap<String, Object[]>() {{
                                put("maiores", new Object[]{{
                                    add("quod"),
                                    add("quod"),
                                }});
                                put("esse", new Object[]{{
                                    add("porro"),
                                    add("dolorum"),
                                    add("dicta"),
                                }});
                                put("nam", new Object[]{{
                                    add("occaecati"),
                                    add("fugit"),
                                    add("deleniti"),
                                }});
                                put("hic", new Object[]{{
                                    add("totam"),
                                    add("beatae"),
                                    add("commodi"),
                                    add("molestiae"),
                                }});
                            }};
                            projects = new String[]{{
                                add("qui"),
                                add("impedit"),
                            }};
                            services = new String[]{{
                                add("esse"),
                                add("ipsum"),
                                add("excepturi"),
                            }};
                            subaccounts = new String[]{{
                                add("perferendis"),
                            }};
                        }};
                        displayName = "ad";
                        etag = "natus";
                        thresholdRules = new org.openapis.openapi.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]{{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "CURRENT_SPEND";
                                thresholdPercent = 2223.21;
                            }}),
                        }};
                    }};
                }};
            }};            

            BillingbudgetsBillingAccountsBudgetsCreateResponse res = sdk.billingAccounts.billingbudgetsBillingAccountsBudgetsCreate(req);

            if (res.googleCloudBillingBudgetsV1beta1Budget.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
