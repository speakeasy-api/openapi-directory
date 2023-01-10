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
            Parent: "nihil",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "at",
            Alt: "media",
            Callback: "ducimus",
            Fields: "sit",
            Key: "ut",
            OauthToken: "impedit",
            PrettyPrint: false,
            QuotaUser: "officiis",
            UploadType: "exercitationem",
            UploadProtocol: "dolores",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "et": "iure",
                    "ea": "tempora",
                    "cumque": "id",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "sint",
                    Nanos: 2804072079223311850,
                    Units: "eum",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "QUARTER",
                CreditTypes: []string{
                    "aut",
                },
                CreditTypesTreatment: "EXCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 7940414151295099142,
                        Month: 7958944695709345380,
                        Year: 71631997747501121,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 2278120660741257848,
                        Month: 5472587920773032124,
                        Year: 7486886862016919883,
                    },
                },
                Labels: map[string][]interface{}{
                    "corrupti": []interface{}{
                        "illo",
                        "et",
                        "earum",
                    },
                    "sunt": []interface{}{
                        "quis",
                        "blanditiis",
                        "recusandae",
                    },
                },
                Projects: []string{
                    "dolorem",
                },
                Services: []string{
                    "est",
                    "accusantium",
                    "illum",
                },
                Subaccounts: []string{
                    "qui",
                    "dicta",
                },
            },
            DisplayName: "eligendi",
            Etag: "eum",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: false,
                MonitoringNotificationChannels: []string{
                    "a",
                },
                PubsubTopic: "laudantium",
                SchemaVersion: "porro",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 82.099998,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "BASIS_UNSPECIFIED",
                    ThresholdPercent: 21.100000,
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