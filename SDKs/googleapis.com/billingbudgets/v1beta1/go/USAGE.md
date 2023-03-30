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
            Parent: "corrupti",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "iure",
                        "magnam",
                    },
                    PubsubTopic: "debitis",
                    SchemaVersion: "ipsa",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "nisi",
                        Nanos: 925597,
                        Units: "temporibus",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "CALENDAR_PERIOD_UNSPECIFIED",
                    CreditTypes: []string{
                        "veritatis",
                        "deserunt",
                    },
                    CreditTypesTreatment: "CREDIT_TYPES_TREATMENT_UNSPECIFIED",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 368241,
                            Month: 832620,
                            Year: 957156,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 778157,
                            Month: 140350,
                            Year: 870013,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "maiores": []interface{}{
                            "quod",
                            "quod",
                        },
                        "esse": []interface{}{
                            "porro",
                            "dolorum",
                            "dicta",
                        },
                        "nam": []interface{}{
                            "occaecati",
                            "fugit",
                            "deleniti",
                        },
                        "hic": []interface{}{
                            "totam",
                            "beatae",
                            "commodi",
                            "molestiae",
                        },
                    },
                    Projects: []string{
                        "qui",
                        "impedit",
                    },
                    Services: []string{
                        "esse",
                        "ipsum",
                        "excepturi",
                    },
                    Subaccounts: []string{
                        "perferendis",
                    },
                },
                DisplayName: "ad",
                Etag: "natus",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 2223.21,
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1beta1Budget != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->