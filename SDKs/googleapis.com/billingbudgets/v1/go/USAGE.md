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
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "iusto": "ullam",
                    "saepe": "inventore",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "sapiente",
                    Nanos: 272656,
                    Units: "eum",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "MONTH",
                CreditTypes: []string{
                    "vel",
                    "non",
                    "deleniti",
                    "similique",
                },
                CreditTypesTreatment: "INCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
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
                    "consequatur": []interface{}{
                        "a",
                        "omnis",
                        "eos",
                        "accusamus",
                    },
                },
                Projects: []string{
                    "reiciendis",
                    "rem",
                    "quibusdam",
                    "et",
                },
                Services: []string{
                    "occaecati",
                    "dolor",
                },
                Subaccounts: []string{
                    "sed",
                    "quisquam",
                    "rerum",
                },
            },
            DisplayName: "culpa",
            Etag: "qui",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: false,
                MonitoringNotificationChannels: []string{
                    "rerum",
                    "possimus",
                    "occaecati",
                },
                PubsubTopic: "odit",
                SchemaVersion: "esse",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
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
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1Budget != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->