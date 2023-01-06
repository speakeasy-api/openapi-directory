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
            AccessToken: "dolores",
            Alt: "media",
            Callback: "ipsam",
            Fields: "est",
            Key: "ut",
            OauthToken: "corrupti",
            PrettyPrint: false,
            QuotaUser: "illum",
            UploadType: "et",
            UploadProtocol: "sunt",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "omnis",
                    },
                    PubsubTopic: "hic",
                    SchemaVersion: "voluptatem",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "autem": "nesciunt",
                        "voluptas": "non",
                        "et": "debitis",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "rerum",
                        Nanos: 3935183703835838449,
                        Units: "deleniti",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "YEAR",
                    CreditTypes: []string{
                        "quis",
                        "id",
                    },
                    CreditTypesTreatment: "INCLUDE_ALL_CREDITS",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 3108647445270735640,
                            Month: 6367047841469662539,
                            Year: 2246308380640359291,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 4454711727644508773,
                            Month: 893560508835310437,
                            Year: 538351812575737580,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "aut": []interface{}{
                            "porro",
                            "reprehenderit",
                            "magni",
                        },
                    },
                    Projects: []string{
                        "eligendi",
                    },
                    Services: []string{
                        "qui",
                        "omnis",
                        "ut",
                    },
                    Subaccounts: []string{
                        "placeat",
                    },
                },
                DisplayName: "aut",
                Etag: "cumque",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 26.200001,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "BASIS_UNSPECIFIED",
                        ThresholdPercent: 78.099998,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "FORECASTED_SPEND",
                        ThresholdPercent: 77.099998,
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