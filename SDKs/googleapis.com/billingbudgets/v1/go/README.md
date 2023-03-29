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
            Parent: "unde",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "iusto": "ullam",
                    "saepe": "inventore",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "sapiente",
                    Nanos: 272656,
                    Units: "eum",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "MONTH",
                CreditTypes: []string{
                    "vel",
                    "non",
                    "deleniti",
                    "similique",
                },
                CreditTypesTreatment: "INCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
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
                    "consequatur": []interface{}{
                        "a",
                        "omnis",
                        "eos",
                        "accusamus",
                    },
                },
                Projects: []string{
                    "reiciendis",
                    "rem",
                    "quibusdam",
                    "et",
                },
                Services: []string{
                    "occaecati",
                    "dolor",
                },
                Subaccounts: []string{
                    "sed",
                    "quisquam",
                    "rerum",
                },
            },
            DisplayName: "culpa",
            Etag: "qui",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: false,
                MonitoringNotificationChannels: []string{
                    "rerum",
                    "possimus",
                    "occaecati",
                },
                PubsubTopic: "odit",
                SchemaVersion: "esse",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
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
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
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
## SDK Available Operations


### BillingAccounts

* `BillingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `BillingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `BillingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
