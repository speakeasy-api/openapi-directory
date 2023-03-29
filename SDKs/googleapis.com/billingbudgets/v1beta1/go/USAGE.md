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
            Parent: "unde",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "iusto",
                        "ullam",
                    },
                    PubsubTopic: "saepe",
                    SchemaVersion: "inventore",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "reprehenderit",
                        Nanos: 925597,
                        Units: "quo",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "CALENDAR_PERIOD_UNSPECIFIED",
                    CreditTypes: []string{
                        "dicta",
                        "est",
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
                        "reiciendis": []interface{}{
                            "quibusdam",
                            "et",
                        },
                        "praesentium": []interface{}{
                            "dolor",
                            "soluta",
                            "sed",
                        },
                        "quisquam": []interface{}{
                            "culpa",
                            "qui",
                            "sed",
                        },
                        "rerum": []interface{}{
                            "occaecati",
                            "odit",
                            "esse",
                            "rem",
                        },
                    },
                    Projects: []string{
                        "amet",
                        "est",
                    },
                    Services: []string{
                        "blanditiis",
                        "numquam",
                        "similique",
                    },
                    Subaccounts: []string{
                        "sit",
                    },
                },
                DisplayName: "quia",
                Etag: "et",
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