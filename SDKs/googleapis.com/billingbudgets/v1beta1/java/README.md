# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new BillingbudgetsBillingAccountsBudgetsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]() {{
                                add("voluptatum"),
                            }};
                            pubsubTopic = "et";
                            schemaVersion = "ut";
                        }};
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("et", "voluptate");
                                put("iste", "vitae");
                                put("totam", "dolores");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "illum";
                                nanos = 6392442863481646880;
                                units = "vel";
                            }};
                        }};
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = "CALENDAR_PERIOD_UNSPECIFIED";
                            creditTypes = new String[]() {{
                                add("id"),
                                add("aspernatur"),
                            }};
                            creditTypesTreatment = "CREDIT_TYPES_TREATMENT_UNSPECIFIED";
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
                                endDate = new GoogleTypeDate() {{
                                    day = 1395437218309923052;
                                    month = 6745438398739480977;
                                    year = 2897681629866238117;
                                }};
                                startDate = new GoogleTypeDate() {{
                                    day = 3398579248012586914;
                                    month = 5974317550424871033;
                                    year = 3317123977833389635;
                                }};
                            }};
                            labels = new java.util.HashMap<String, Object[]>() {{
                                put("voluptas", new Object[]() {{
                                    add("aut"),
                                    add("illo"),
                                }});
                                put("sed", new Object[]() {{
                                    add("autem"),
                                    add("consectetur"),
                                }});
                                put("nobis", new Object[]() {{
                                    add("qui"),
                                }});
                            }};
                            projects = new String[]() {{
                                add("at"),
                                add("ipsum"),
                                add("eveniet"),
                            }};
                            services = new String[]() {{
                                add("sint"),
                                add("inventore"),
                            }};
                            subaccounts = new String[]() {{
                                add("exercitationem"),
                                add("aut"),
                                add("reprehenderit"),
                            }};
                        }};
                        displayName = "tempore";
                        etag = "maiores";
                        thresholdRules = new openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]() {{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "CURRENT_SPEND";
                                thresholdPercent = 23.200001;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "FORECASTED_SPEND";
                                thresholdPercent = 69.199997;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "BASIS_UNSPECIFIED";
                                thresholdPercent = 66.099998;
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
