<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.BillingbudgetsBillingAccountsBudgetsCreateRequest{
        Security: operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity{
            Option1: &operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BillingbudgetsBillingAccountsBudgetsCreatePathParams{
            Parent: "accusamus",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "officia",
            Alt: "json",
            Callback: "enim",
            Fields: "accusantium",
            Key: "deserunt",
            OauthToken: "dolores",
            PrettyPrint: true,
            QuotaUser: "quam",
            UploadType: "quod",
            UploadProtocol: "iste",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: true,
                    MonitoringNotificationChannels: []string{
                        "beatae",
                    },
                    PubsubTopic: "impedit",
                    SchemaVersion: "natus",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "non": "tempore",
                        "iusto": "quas",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "nobis",
                        Nanos: 2434754690830972633,
                        Units: "debitis",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "QUARTER",
                    CreditTypes: []string{
                        "ratione",
                        "ad",
                    },
                    CreditTypesTreatment: "INCLUDE_ALL_CREDITS",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 6022974110687088585,
                            Month: 3276416351004451594,
                            Year: 8350655293440247125,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 6207443467076797378,
                            Month: 8419873006552606755,
                            Year: 196396550416631637,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "sed": []interface{}{
                            "possimus",
                            "sit",
                            "ut",
                        },
                    },
                    Projects: []string{
                        "et",
                        "aliquam",
                    },
                    Services: []string{
                        "pariatur",
                        "tempora",
                    },
                    Subaccounts: []string{
                        "maiores",
                        "et",
                    },
                },
                DisplayName: "est",
                Etag: "ipsa",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 96.099998,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "BASIS_UNSPECIFIED",
                        ThresholdPercent: 16.200001,
                    },
                },
            },
        },
    }
    
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1beta1Budget != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->