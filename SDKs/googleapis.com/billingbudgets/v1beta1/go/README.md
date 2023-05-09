# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/billingbudgets/v1beta1/go
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
        GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: sdk.Bool(false),
                    MonitoringNotificationChannels: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                    PubsubTopic: sdk.String("nulla"),
                    SchemaVersion: sdk.String("corrupti"),
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: sdk.String("delectus"),
                        Nanos: sdk.Int(272656),
                        Units: sdk.String("suscipit"),
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: shared.GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumMonth.ToPointer(),
                    CreditTypes: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    CreditTypesTreatment: shared.GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumIncludeAllCredits.ToPointer(),
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: sdk.Int(925597),
                            Month: sdk.Int(836079),
                            Year: sdk.Int(71036),
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: sdk.Int(337396),
                            Month: sdk.Int(87129),
                            Year: sdk.Int(648172),
                        },
                    },
                    Labels: map[string][]interface{}{
                        "ipsam": []interface{}{
                            "sapiente",
                            "quo",
                            "odit",
                            "at",
                        },
                    },
                    Projects: []string{
                        "maiores",
                        "molestiae",
                        "quod",
                        "quod",
                    },
                    Services: []string{
                        "totam",
                        "porro",
                    },
                    Subaccounts: []string{
                        "dicta",
                        "nam",
                        "officia",
                    },
                },
                DisplayName: sdk.String("occaecati"),
                Etag: sdk.String("fugit"),
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumForecastedSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(7586.16),
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(1059.07),
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(4736),
                    },
                },
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("ipsum"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ad"),
    }, operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1beta1Budget != nil {
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
