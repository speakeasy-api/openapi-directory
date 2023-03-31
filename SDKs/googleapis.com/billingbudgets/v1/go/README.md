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
        DollarXgafv: "2",
        GoogleCloudBillingBudgetsV1BudgetInput: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "vel",
                    Nanos: 623564,
                    Units: "deserunt",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "MONTH",
                CreditTypes: []string{
                    "magnam",
                    "debitis",
                },
                CreditTypesTreatment: "CREDIT_TYPES_TREATMENT_UNSPECIFIED",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 963663,
                        Month: 272656,
                        Year: 383441,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 477665,
                        Month: 791725,
                        Year: 812169,
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
            DisplayName: "dolorum",
            Etag: "dicta",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: false,
                MonitoringNotificationChannels: []string{
                    "officia",
                    "occaecati",
                    "fugit",
                },
                PubsubTopic: "deleniti",
                SchemaVersion: "hic",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 1059.07,
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 4736,
                },
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
        AccessToken: "esse",
        Alt: "json",
        Callback: "excepturi",
        Fields: "aspernatur",
        Key: "perferendis",
        OauthToken: "ad",
        Parent: "natus",
        PrettyPrint: false,
        QuotaUser: "sed",
        UploadType: "iste",
        UploadProtocol: "dolor",
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req, operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity{
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


### BillingAccounts

* `BillingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `BillingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `BillingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
