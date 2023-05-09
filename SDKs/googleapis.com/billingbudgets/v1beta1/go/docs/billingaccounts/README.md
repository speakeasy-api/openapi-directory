# BillingAccounts

### Available Operations

* [BillingbudgetsBillingAccountsBudgetsCreate](#billingbudgetsbillingaccountsbudgetscreate) - Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
* [BillingbudgetsBillingAccountsBudgetsDelete](#billingbudgetsbillingaccountsbudgetsdelete) - Deletes a budget. Returns successfully if already deleted.
* [BillingbudgetsBillingAccountsBudgetsGet](#billingbudgetsbillingaccountsbudgetsget) - Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [BillingbudgetsBillingAccountsBudgetsList](#billingbudgetsbillingaccountsbudgetslist) - Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
* [BillingbudgetsBillingAccountsBudgetsPatch](#billingbudgetsbillingaccountsbudgetspatch) - Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

## BillingbudgetsBillingAccountsBudgetsCreate

Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.

### Example Usage

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
                        "iste",
                    },
                    PubsubTopic: sdk.String("dolor"),
                    SchemaVersion: sdk.String("natus"),
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "hic": "saepe",
                        "fuga": "in",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: sdk.String("corporis"),
                        Nanos: sdk.Int(613064),
                        Units: sdk.String("iure"),
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: shared.GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumYear.ToPointer(),
                    CreditTypes: []string{
                        "architecto",
                        "ipsa",
                        "reiciendis",
                    },
                    CreditTypesTreatment: shared.GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumExcludeAllCredits.ToPointer(),
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: sdk.Int(653140),
                            Month: sdk.Int(670638),
                            Year: sdk.Int(170909),
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: sdk.Int(210382),
                            Month: sdk.Int(358152),
                            Year: sdk.Int(128926),
                        },
                    },
                    Labels: map[string][]interface{}{
                        "enim": []interface{}{
                            "nemo",
                            "minima",
                            "excepturi",
                        },
                        "accusantium": []interface{}{
                            "culpa",
                            "doloribus",
                        },
                        "sapiente": []interface{}{
                            "mollitia",
                        },
                        "dolorem": []interface{}{
                            "consequuntur",
                            "repellat",
                            "mollitia",
                        },
                    },
                    Projects: []string{
                        "numquam",
                        "commodi",
                        "quam",
                    },
                    Services: []string{
                        "velit",
                        "error",
                    },
                    Subaccounts: []string{
                        "quis",
                    },
                },
                DisplayName: sdk.String("vitae"),
                Etag: sdk.String("laborum"),
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumBasisUnspecified.ToPointer(),
                        ThresholdPercent: sdk.Float64(1381.83),
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumForecastedSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(1965.82),
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumForecastedSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(3687.25),
                    },
                },
            },
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("temporibus"),
        Parent: "laborum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
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

## BillingbudgetsBillingAccountsBudgetsDelete

Deletes a budget. Returns successfully if already deleted.

### Example Usage

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
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsDelete(ctx, operations.BillingbudgetsBillingAccountsBudgetsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("omnis"),
        Name: "Ms. Karla Aufderhar",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.BillingbudgetsBillingAccountsBudgetsDeleteSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## BillingbudgetsBillingAccountsBudgetsGet

Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

### Example Usage

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
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsGet(ctx, operations.BillingbudgetsBillingAccountsBudgetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("commodi"),
        Name: "Eric Emmerich",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.BillingbudgetsBillingAccountsBudgetsGetSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsGetSecurityOption1{
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

## BillingbudgetsBillingAccountsBudgetsList

Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.

### Example Usage

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
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsList(ctx, operations.BillingbudgetsBillingAccountsBudgetsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("sint"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("itaque"),
        PageSize: sdk.Int64(277718),
        PageToken: sdk.String("enim"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.BillingbudgetsBillingAccountsBudgetsListSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse != nil {
        // handle response
    }
}
```

## BillingbudgetsBillingAccountsBudgetsPatch

Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.

### Example Usage

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
    res, err := s.BillingAccounts.BillingbudgetsBillingAccountsBudgetsPatch(ctx, operations.BillingbudgetsBillingAccountsBudgetsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput: &shared.GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput{
            Budget: &shared.GoogleCloudBillingBudgetsV1beta1BudgetInput{
                AllUpdatesRule: &shared.GoogleCloudBillingBudgetsV1beta1AllUpdatesRule{
                    DisableDefaultIamRecipients: sdk.Bool(false),
                    MonitoringNotificationChannels: []string{
                        "quibusdam",
                        "labore",
                        "modi",
                    },
                    PubsubTopic: sdk.String("qui"),
                    SchemaVersion: sdk.String("aliquid"),
                },
                Amount: &shared.GoogleCloudBillingBudgetsV1beta1BudgetAmount{
                    LastPeriodAmount: map[string]interface{}{
                        "quos": "perferendis",
                        "magni": "assumenda",
                        "ipsam": "alias",
                    },
                    SpecifiedAmount: &shared.GoogleTypeMoney{
                        CurrencyCode: sdk.String("fugit"),
                        Nanos: sdk.Int(677817),
                        Units: sdk.String("excepturi"),
                    },
                },
                BudgetFilter: &shared.GoogleCloudBillingBudgetsV1beta1Filter{
                    CalendarPeriod: shared.GoogleCloudBillingBudgetsV1beta1FilterCalendarPeriodEnumMonth.ToPointer(),
                    CreditTypes: []string{
                        "tempore",
                        "labore",
                        "delectus",
                    },
                    CreditTypesTreatment: shared.GoogleCloudBillingBudgetsV1beta1FilterCreditTypesTreatmentEnumIncludeAllCredits.ToPointer(),
                    CustomPeriod: &shared.GoogleCloudBillingBudgetsV1beta1CustomPeriod{
                        EndDate: &shared.GoogleTypeDate{
                            Day: sdk.Int(248753),
                            Month: sdk.Int(756107),
                            Year: sdk.Int(576157),
                        },
                        StartDate: &shared.GoogleTypeDate{
                            Day: sdk.Int(396098),
                            Month: sdk.Int(592042),
                            Year: sdk.Int(896039),
                        },
                    },
                    Labels: map[string][]interface{}{
                        "officia": []interface{}{
                            "debitis",
                        },
                        "a": []interface{}{
                            "in",
                            "in",
                            "illum",
                        },
                        "maiores": []interface{}{
                            "dicta",
                            "magnam",
                            "cumque",
                        },
                    },
                    Projects: []string{
                        "ea",
                        "aliquid",
                        "laborum",
                        "accusamus",
                    },
                    Services: []string{
                        "occaecati",
                    },
                    Subaccounts: []string{
                        "accusamus",
                        "delectus",
                    },
                },
                DisplayName: sdk.String("quidem"),
                Etag: sdk.String("provident"),
                ThresholdRules: []shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(5013.24),
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                        ThresholdPercent: sdk.Float64(9560.84),
                    },
                    shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule{
                        SpendBasis: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRuleSpendBasisEnumBasisUnspecified.ToPointer(),
                        ThresholdPercent: sdk.Float64(6439.9),
                    },
                },
            },
            UpdateMask: sdk.String("nisi"),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("perferendis"),
        Name: "Megan Rau",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.BillingbudgetsBillingAccountsBudgetsPatchSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsPatchSecurityOption1{
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
