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
            Parent: "cumque",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "eius",
            Alt: "proto",
            Callback: "officia",
            Fields: "repellat",
            Key: "esse",
            OauthToken: "dolore",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "ab",
            UploadProtocol: "maiores",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "explicabo": "rerum",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "qui",
                    Nanos: 8985795213304127196,
                    Units: "rem",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "CALENDAR_PERIOD_UNSPECIFIED",
                CreditTypes: []string{
                    "sunt",
                    "nam",
                    "omnis",
                },
                CreditTypesTreatment: "EXCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 8333690218060858671,
                        Month: 2533105141029214426,
                        Year: 1410349808972765185,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 1275637256825083909,
                        Month: 468591680390426196,
                        Year: 6684335792117637658,
                    },
                },
                Labels: map[string][]interface{}{
                    "a": []interface{}{
                        "et",
                        "ipsum",
                        "vel",
                    },
                    "repellendus": []interface{}{
                        "vel",
                    },
                    "est": []interface{}{
                        "voluptas",
                        "omnis",
                    },
                },
                Projects: []string{
                    "repellat",
                    "veritatis",
                    "neque",
                },
                Services: []string{
                    "enim",
                },
                Subaccounts: []string{
                    "porro",
                },
            },
            DisplayName: "dicta",
            Etag: "cupiditate",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: true,
                MonitoringNotificationChannels: []string{
                    "nemo",
                    "eos",
                    "atque",
                },
                PubsubTopic: "qui",
                SchemaVersion: "cumque",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 0.100000,
                },
            },
        },
    }
    
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1Budget != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->