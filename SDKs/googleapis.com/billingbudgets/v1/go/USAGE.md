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
            Parent: "sit",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "debitis": "voluptatum",
                    "et": "ut",
                    "dolorem": "et",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "voluptate",
                    Nanos: 3287288577352441706,
                    Units: "vitae",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "QUARTER",
                CreditTypes: []string{
                    "illum",
                },
                CreditTypesTreatment: "EXCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 3706853784096366226,
                        Month: 2627038740284806767,
                        Year: 6303220950515014660,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 4035568504096476779,
                        Month: 959367522974354090,
                        Year: 2914295034816259174,
                    },
                },
                Labels: map[string][]interface{}{
                    "commodi": []interface{}{
                        "est",
                        "aut",
                        "odit",
                    },
                    "non": []interface{}{
                        "omnis",
                    },
                    "aut": []interface{}{
                        "sed",
                    },
                },
                Projects: []string{
                    "autem",
                    "consectetur",
                },
                Services: []string{
                    "odio",
                },
                Subaccounts: []string{
                    "recusandae",
                },
            },
            DisplayName: "at",
            Etag: "ipsum",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: true,
                MonitoringNotificationChannels: []string{
                    "sint",
                    "inventore",
                },
                PubsubTopic: "ut",
                SchemaVersion: "exercitationem",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "BASIS_UNSPECIFIED",
                    ThresholdPercent: 7.200000,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "FORECASTED_SPEND",
                    ThresholdPercent: 94.199997,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 80.199997,
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