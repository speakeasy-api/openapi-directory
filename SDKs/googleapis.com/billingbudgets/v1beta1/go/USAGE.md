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
        GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                    PubsubTopic: "nulla",
                    SchemaVersion: "corrupti",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "delectus",
                        Nanos: 272656,
                        Units: "suscipit",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "MONTH",
                    CreditTypes: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    CreditTypesTreatment: "INCLUDE_ALL_CREDITS",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 925597,
                            Month: 836079,
                            Year: 71036,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 337396,
                            Month: 87129,
                            Year: 648172,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "ipsam": []interface{}{
                            "sapiente",
                            "quo",
                            "odit",
                            "at",
                        },
                    },
                    Projects: []string{
                        "maiores",
                        "molestiae",
                        "quod",
                        "quod",
                    },
                    Services: []string{
                        "totam",
                        "porro",
                    },
                    Subaccounts: []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                },
                DisplayName: "occaecati",
                Etag: "fugit",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "FORECASTED_SPEND",
                        ThresholdPercent: 7586.16,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 1059.07,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 4736,
                    },
                },
            },
        },
        AccessToken: "modi",
        Alt: "json",
        Callback: "impedit",
        Fields: "cum",
        Key: "esse",
        OauthToken: "ipsum",
        Parent: "excepturi",
        PrettyPrint: false,
        QuotaUser: "aspernatur",
        UploadType: "perferendis",
        UploadProtocol: "ad",
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

    if res.GoogleCloudBillingBudgetsV1beta1Budget != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->