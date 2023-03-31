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
