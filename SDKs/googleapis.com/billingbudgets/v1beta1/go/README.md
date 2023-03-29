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
        Request: &shared.GoogleCloudBillingBudgetsV1beta1CreateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: false,
                    MonitoringNotificationChannels: []string{
                        "iusto",
                        "ullam",
                    },
                    PubsubTopic: "saepe",
                    SchemaVersion: "inventore",
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "enim": "eum",
                        "voluptatum": "autem",
                        "vel": "non",
                        "deleniti": "similique",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: "reprehenderit",
                        Nanos: 925597,
                        Units: "quo",
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: "CALENDAR_PERIOD_UNSPECIFIED",
                    CreditTypes: []string{
                        "dicta",
                        "est",
                    },
                    CreditTypesTreatment: "CREDIT_TYPES_TREATMENT_UNSPECIFIED",
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: 368241,
                            Month: 832620,
                            Year: 957156,
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: 778157,
                            Month: 140350,
                            Year: 870013,
                        },
                    },
                    Labels: map[string][]interface{}{
                        "reiciendis": []interface{}{
                            "quibusdam",
                            "et",
                        },
                        "praesentium": []interface{}{
                            "dolor",
                            "soluta",
                            "sed",
                        },
                        "quisquam": []interface{}{
                            "culpa",
                            "qui",
                            "sed",
                        },
                        "rerum": []interface{}{
                            "occaecati",
                            "odit",
                            "esse",
                            "rem",
                        },
                    },
                    Projects: []string{
                        "amet",
                        "est",
                    },
                    Services: []string{
                        "blanditiis",
                        "numquam",
                        "similique",
                    },
                    Subaccounts: []string{
                        "sit",
                    },
                },
                DisplayName: "quia",
                Etag: "et",
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: "CURRENT_SPEND",
                        ThresholdPercent: 2223.21,
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsCreate(ctx, req)
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
## SDK Available Operations


### BillingAccounts

* `BillingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `BillingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `BillingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
