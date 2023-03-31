<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.BillingbudgetsBillingAccountsBudgetsCreateRequest{
        DollarXgafv: "2",
        GoogleCloudBillingBudgetsV1BudgetInput: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "vel",
                    Nanos: 623564,
                    Units: "deserunt",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "MONTH",
                CreditTypes: []string{
                    "magnam",
                    "debitis",
                },
                CreditTypesTreatment: "CREDIT_TYPES_TREATMENT_UNSPECIFIED",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 963663,
                        Month: 272656,
                        Year: 383441,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 477665,
                        Month: 791725,
                        Year: 812169,
                    },
                },
                Labels: map[string][]interface{}{
                    "iusto": []interface{}{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                    "ab": []interface{}{
                        "veritatis",
                        "deserunt",
                    },
                    "perferendis": []interface{}{
                        "repellendus",
                        "sapiente",
                    },
                },
                Projects: []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
                Services: []string{
                    "quod",
                    "quod",
                },
                Subaccounts: []string{
                    "totam",
                    "porro",
                },
            },
            DisplayName: "dolorum",
            Etag: "dicta",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: false,
                MonitoringNotificationChannels: []string{
                    "officia",
                    "occaecati",
                    "fugit",
                },
                PubsubTopic: "deleniti",
                SchemaVersion: "hic",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 1059.07,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 4736,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "BASIS_UNSPECIFIED",
                    ThresholdPercent: 1863.32,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "FORECASTED_SPEND",
                    ThresholdPercent: 7369.18,
                },
            },
        },
        AccessToken: "esse",
        Alt: "json",
        Callback: "excepturi",
        Fields: "aspernatur",
        Key: "perferendis",
        OauthToken: "ad",
        Parent: "natus",
        PrettyPrint: false,
        QuotaUser: "sed",
        UploadType: "iste",
        UploadProtocol: "dolor",
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req, operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1Budget != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->