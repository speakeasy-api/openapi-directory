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
                    parent = "eum";
                }};
                queryParams = new BillingbudgetsBillingAccountsBudgetsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolor";
                    alt = "proto";
                    callback = "veritatis";
                    fields = "sapiente";
                    key = "molestiae";
                    oauthToken = "aut";
                    prettyPrint = false;
                    quotaUser = "sapiente";
                    uploadType = "quisquam";
                    uploadProtocol = "ad";
                }};
                request = new GoogleCloudBillingBudgetsV1BudgetInput() {{
                    amount = new GoogleCloudBillingBudgetsV1BudgetAmount() {{
                        lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                            put("dolor", "suscipit");
                            put("officiis", "cum");
                            put("totam", "mollitia");
                        }};
                        specifiedAmount = new GoogleTypeMoney() {{
                            currencyCode = "quo";
                            nanos = 5866902376426639069;
                            units = "beatae";
                        }};
                    }};
                    budgetFilter = new GoogleCloudBillingBudgetsV1Filter() {{
                        calendarPeriod = "QUARTER";
                        creditTypes = new String[]() {{
                            add("veritatis"),
                            add("dicta"),
                        }};
                        creditTypesTreatment = "INCLUDE_SPECIFIED_CREDITS";
                        customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod() {{
                            endDate = new GoogleTypeDate() {{
                                day = 4426289520483379215;
                                month = 7875800120860199593;
                                year = 1720041101896227105;
                            }};
                            startDate = new GoogleTypeDate() {{
                                day = 4614246532965064907;
                                month = 4855820520886898177;
                                year = 6779591085514758841;
                            }};
                        }};
                        labels = new java.util.HashMap<String, Object[]>() {{
                            put("assumenda", new Object[]() {{
                                add("quidem"),
                                add("et"),
                            }});
                            put("voluptates", new Object[]() {{
                                add("inventore"),
                                add("est"),
                                add("nisi"),
                            }});
                            put("consequatur", new Object[]() {{
                                add("tenetur"),
                                add("nihil"),
                            }});
                        }};
                        projects = new String[]() {{
                            add("aspernatur"),
                        }};
                        services = new String[]() {{
                            add("inventore"),
                            add("expedita"),
                            add("saepe"),
                        }};
                        subaccounts = new String[]() {{
                            add("sunt"),
                            add("optio"),
                        }};
                    }};
                    displayName = "omnis";
                    etag = "ut";
                    notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule() {{
                        disableDefaultIamRecipients = true;
                        monitoringNotificationChannels = new String[]() {{
                            add("id"),
                        }};
                        pubsubTopic = "facere";
                        schemaVersion = "dolorum";
                    }};
                    thresholdRules = new openapisdk.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule[]() {{
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "BASIS_UNSPECIFIED";
                            thresholdPercent = 49.099998;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "CURRENT_SPEND";
                            thresholdPercent = 43.200001;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "FORECASTED_SPEND";
                            thresholdPercent = 7.200000;
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
