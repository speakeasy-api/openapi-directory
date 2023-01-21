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
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "voluptatum",
                    },
                    PubsubTopic: "et",
                    SchemaVersion: "ut",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "et": "voluptate",
                        "iste": "vitae",
                        "totam": "dolores",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "illum",
                        Nanos: 6392442863481646880,
                        Units: "vel",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "CALENDAR_PERIOD_UNSPECIFIED",
                    CreditTypes: []string{
                        "id",
                        "aspernatur",
                    },
                    CreditTypesTreatment: "CREDIT_TYPES_TREATMENT_UNSPECIFIED",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 1395437218309923052,
                            Month: 6745438398739480977,
                            Year: 2897681629866238117,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 3398579248012586914,
                            Month: 5974317550424871033,
                            Year: 3317123977833389635,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "voluptas": []interface{}{
                            "aut",
                            "illo",
                        },
                        "sed": []interface{}{
                            "autem",
                            "consectetur",
                        },
                        "nobis": []interface{}{
                            "qui",
                        },
                    },
                    Projects: []string{
                        "at",
                        "ipsum",
                        "eveniet",
                    },
                    Services: []string{
                        "sint",
                        "inventore",
                    },
                    Subaccounts: []string{
                        "exercitationem",
                        "aut",
                        "reprehenderit",
                    },
                },
                DisplayName: "tempore",
                Etag: "maiores",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 23.200001,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "FORECASTED_SPEND",
                        ThresholdPercent: 69.199997,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "BASIS_UNSPECIFIED",
                        ThresholdPercent: 66.099998,
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