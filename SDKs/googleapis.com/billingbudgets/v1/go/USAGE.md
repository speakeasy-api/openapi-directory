<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, operations.BillingbudgetsBillingAccountsBudgetsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudBillingBudgetsV1BudgetInput: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: sdk.String("vel"),
                    Nanos: sdk.Int(623564),
                    Units: sdk.String("deserunt"),
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: shared.GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumMonth.ToPointer(),
                CreditTypes: []string{
                    "magnam",
                    "debitis",
                },
                CreditTypesTreatment: shared.GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumCreditTypesTreatmentUnspecified.ToPointer(),
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(963663),
                        Month: sdk.Int(272656),
                        Year: sdk.Int(383441),
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(477665),
                        Month: sdk.Int(791725),
                        Year: sdk.Int(812169),
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
            DisplayName: sdk.String("dolorum"),
            Etag: sdk.String("dicta"),
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: sdk.Bool(false),
                MonitoringNotificationChannels: []string{
                    "officia",
                    "occaecati",
                    "fugit",
                },
                PubsubTopic: sdk.String("deleniti"),
                SchemaVersion: sdk.String("hic"),
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                    ThresholdPercent: sdk.Float64(1059.07),
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                    ThresholdPercent: sdk.Float64(4736),
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumBasisUnspecified.ToPointer(),
                    ThresholdPercent: sdk.Float64(1863.32),
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumForecastedSpend.ToPointer(),
                    ThresholdPercent: sdk.Float64(7369.18),
                },
            },
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ad"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity{
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