# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/billingbudgets/v1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BillingAccounts](docs/billingaccounts/README.md)

* [BillingbudgetsBillingAccountsBudgetsCreate](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetscreate) - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* [BillingbudgetsBillingAccountsBudgetsDelete](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetsdelete) - Deletes a budget. Returns successfully if already deleted.
* [BillingbudgetsBillingAccountsBudgetsGet](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetsget) - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [BillingbudgetsBillingAccountsBudgetsList](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetslist) - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [BillingbudgetsBillingAccountsBudgetsPatch](docs/billingaccounts/README.md#billingbudgetsbillingaccountsbudgetspatch) - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
