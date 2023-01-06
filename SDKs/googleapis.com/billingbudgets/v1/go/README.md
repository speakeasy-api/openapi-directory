# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            Parent: "cumque",
        },
        QueryParams: operations.BillingbudgetsBillingAccountsBudgetsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "eius",
            Alt: "proto",
            Callback: "officia",
            Fields: "repellat",
            Key: "esse",
            OauthToken: "dolore",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "ab",
            UploadProtocol: "maiores",
        },
        Request: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "explicabo": "rerum",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: "qui",
                    Nanos: 8985795213304127196,
                    Units: "rem",
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: "CALENDAR_PERIOD_UNSPECIFIED",
                CreditTypes: []string{
                    "sunt",
                    "nam",
                    "omnis",
                },
                CreditTypesTreatment: "EXCLUDE_ALL_CREDITS",
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: 8333690218060858671,
                        Month: 2533105141029214426,
                        Year: 1410349808972765185,
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: 1275637256825083909,
                        Month: 468591680390426196,
                        Year: 6684335792117637658,
                    },
                },
                Labels: map[string][]interface{}{
                    "a": []interface{}{
                        "et",
                        "ipsum",
                        "vel",
                    },
                    "repellendus": []interface{}{
                        "vel",
                    },
                    "est": []interface{}{
                        "voluptas",
                        "omnis",
                    },
                },
                Projects: []string{
                    "repellat",
                    "veritatis",
                    "neque",
                },
                Services: []string{
                    "enim",
                },
                Subaccounts: []string{
                    "porro",
                },
            },
            DisplayName: "dicta",
            Etag: "cupiditate",
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: true,
                MonitoringNotificationChannels: []string{
                    "nemo",
                    "eos",
                    "atque",
                },
                PubsubTopic: "qui",
                SchemaVersion: "cumque",
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: "CURRENT_SPEND",
                    ThresholdPercent: 0.100000,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `BillingbudgetsBillingAccountsBudgetsCreate` - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* `BillingbudgetsBillingAccountsBudgetsDelete` - Deletes a budget. Returns successfully if already deleted.
* `BillingbudgetsBillingAccountsBudgetsGet` - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsList` - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* `BillingbudgetsBillingAccountsBudgetsPatch` - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
