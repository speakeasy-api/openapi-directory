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
                request = new GoogleCloudBillingBudgetsV1BudgetInput() {{
                    amount = new GoogleCloudBillingBudgetsV1BudgetAmount() {{
                        lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                            put("debitis", "voluptatum");
                            put("et", "ut");
                            put("dolorem", "et");
                        }};
                        specifiedAmount = new GoogleTypeMoney() {{
                            currencyCode = "voluptate";
                            nanos = 3287288577352441706;
                            units = "vitae";
                        }};
                    }};
                    budgetFilter = new GoogleCloudBillingBudgetsV1Filter() {{
                        calendarPeriod = "QUARTER";
                        creditTypes = new String[]() {{
                            add("illum"),
                        }};
                        creditTypesTreatment = "EXCLUDE_ALL_CREDITS";
                        customPeriod = new GoogleCloudBillingBudgetsV1CustomPeriod() {{
                            endDate = new GoogleTypeDate() {{
                                day = 3706853784096366226;
                                month = 2627038740284806767;
                                year = 6303220950515014660;
                            }};
                            startDate = new GoogleTypeDate() {{
                                day = 4035568504096476779;
                                month = 959367522974354090;
                                year = 2914295034816259174;
                            }};
                        }};
                        labels = new java.util.HashMap<String, Object[]>() {{
                            put("commodi", new Object[]() {{
                                add("est"),
                                add("aut"),
                                add("odit"),
                            }});
                            put("non", new Object[]() {{
                                add("omnis"),
                            }});
                            put("aut", new Object[]() {{
                                add("sed"),
                            }});
                        }};
                        projects = new String[]() {{
                            add("autem"),
                            add("consectetur"),
                        }};
                        services = new String[]() {{
                            add("odio"),
                        }};
                        subaccounts = new String[]() {{
                            add("recusandae"),
                        }};
                    }};
                    displayName = "at";
                    etag = "ipsum";
                    notificationsRule = new GoogleCloudBillingBudgetsV1NotificationsRule() {{
                        disableDefaultIamRecipients = true;
                        monitoringNotificationChannels = new String[]() {{
                            add("sint"),
                            add("inventore"),
                        }};
                        pubsubTopic = "ut";
                        schemaVersion = "exercitationem";
                    }};
                    thresholdRules = new openapisdk.models.shared.GoogleCloudBillingBudgetsV1ThresholdRule[]() {{
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "BASIS_UNSPECIFIED";
                            thresholdPercent = 7.200000;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "FORECASTED_SPEND";
                            thresholdPercent = 94.199997;
                        }}),
                        add(new GoogleCloudBillingBudgetsV1ThresholdRule() {{
                            spendBasis = "CURRENT_SPEND";
                            thresholdPercent = 80.199997;
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
