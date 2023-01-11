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
                    parent = "velit";
                }};
                queryParams = new BillingbudgetsBillingAccountsBudgetsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "id";
                    alt = "proto";
                    callback = "dolor";
                    fields = "sit";
                    key = "non";
                    oauthToken = "sed";
                    prettyPrint = true;
                    quotaUser = "architecto";
                    uploadType = "accusantium";
                    uploadProtocol = "non";
                }};
                request = new GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput() {{
                    budget = new GoogleCloudBillingBudgetsV1beta1BudgetInput() {{
                        allUpdatesRule = new GoogleCloudBillingBudgetsV1beta1AllUpdatesRule() {{
                            disableDefaultIamRecipients = false;
                            monitoringNotificationChannels = new String[]() {{
                                add("voluptas"),
                                add("deserunt"),
                                add("amet"),
                            }};
                            pubsubTopic = "optio";
                            schemaVersion = "reiciendis";
                        }};
                        amount = new GoogleCloudBillingBudgetsV1beta1BudgetAmount() {{
                            lastPeriodAmount = new java.util.HashMap<String, Object>() {{
                                put("dolorem", "minus");
                            }};
                            specifiedAmount = new GoogleTypeMoney() {{
                                currencyCode = "ea";
                                nanos = 8052198656549024570;
                                units = "dolorem";
                            }};
                        }};
                        budgetFilter = new GoogleCloudBillingBudgetsV1beta1Filter() {{
                            calendarPeriod = "MONTH";
                            creditTypes = new String[]() {{
                                add("provident"),
                                add("sint"),
                                add("distinctio"),
                            }};
                            creditTypesTreatment = "CREDIT_TYPES_TREATMENT_UNSPECIFIED";
                            customPeriod = new GoogleCloudBillingBudgetsV1beta1CustomPeriod() {{
                                endDate = new GoogleTypeDate() {{
                                    day = 6222451410304687022;
                                    month = 5267464546262533560;
                                    year = 357893216372422809;
                                }};
                                startDate = new GoogleTypeDate() {{
                                    day = 2163213464577242930;
                                    month = 6809300015302446064;
                                    year = 1367961179176800403;
                                }};
                            }};
                            labels = new java.util.HashMap<String, Object[]>() {{
                                put("quis", new Object[]() {{
                                    add("est"),
                                }});
                                put("ipsa", new Object[]() {{
                                    add("eveniet"),
                                    add("sequi"),
                                    add("vitae"),
                                }});
                            }};
                            projects = new String[]() {{
                                add("possimus"),
                            }};
                            services = new String[]() {{
                                add("eveniet"),
                                add("alias"),
                                add("tenetur"),
                            }};
                            subaccounts = new String[]() {{
                                add("porro"),
                                add("eveniet"),
                                add("sed"),
                            }};
                        }};
                        displayName = "cum";
                        etag = "repellat";
                        thresholdRules = new openapisdk.models.shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule[]() {{
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "CURRENT_SPEND";
                                thresholdPercent = 5.100000;
                            }}),
                            add(new GoogleCloudBillingBudgetsV1beta1ThresholdRule() {{
                                spendBasis = "CURRENT_SPEND";
                                thresholdPercent = 23.100000;
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