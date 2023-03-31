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
        GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                    PubsubTopic: "nulla",
                    SchemaVersion: "corrupti",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "vel": "error",
                        "deserunt": "suscipit",
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "delectus",
                        Nanos: 272656,
                        Units: "suscipit",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "MONTH",
                    CreditTypes: []string{
                        "placeat",
                        "voluptatum",
                        "iusto",
                        "excepturi",
                    },
                    CreditTypesTreatment: "INCLUDE_ALL_CREDITS",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
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
                DisplayName: "occaecati",
                Etag: "fugit",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "FORECASTED_SPEND",
                        ThresholdPercent: 7586.16,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 1059.07,
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 4736,
                    },
                },
            },
        },
        AccessToken: "modi",
        Alt: "json",
        Callback: "impedit",
        Fields: "cum",
        Key: "esse",
        OauthToken: "ipsum",
        Parent: "excepturi",
        PrettyPrint: false,
        QuotaUser: "aspernatur",
        UploadType: "perferendis",
        UploadProtocol: "ad",
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

    if res.GoogleCloudBillingBudgetsV1beta1Budget != nil {
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
