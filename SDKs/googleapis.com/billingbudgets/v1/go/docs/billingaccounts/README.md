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
        GoogleCloudBillingBudgetsV1BudgetInput: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
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
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: shared.GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumYear.ToPointer(),
                CreditTypes: []string{
                    "architecto",
                    "ipsa",
                    "reiciendis",
                },
                CreditTypesTreatment: shared.GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumExcludeAllCredits.ToPointer(),
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
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
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: sdk.Bool(false),
                MonitoringNotificationChannels: []string{
                    "enim",
                    "odit",
                    "quo",
                },
                PubsubTopic: sdk.String("sequi"),
                SchemaVersion: sdk.String("tenetur"),
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                    ThresholdPercent: sdk.Float64(8209.94),
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumBasisUnspecified.ToPointer(),
                    ThresholdPercent: sdk.Float64(971.01),
                },
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("voluptatibus"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("praesentium"),
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

    if res.GoogleCloudBillingBudgetsV1Budget != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        Name: "Mrs. April Wuckert",
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("enim"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("quidem"),
        Name: "Andy Streich",
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.BillingbudgetsBillingAccountsBudgetsGetSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsGetSecurityOption1{
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
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(842342),
        PageToken: sdk.String("explicabo"),
        Parent: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("labore"),
    }, operations.BillingbudgetsBillingAccountsBudgetsListSecurity{
        Option1: &operations.BillingbudgetsBillingAccountsBudgetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudBillingBudgetsV1ListBudgetsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudBillingBudgetsV1BudgetInput: &shared.GoogleCloudBillingBudgetsV1BudgetInput{
            Amount: &shared.GoogleCloudBillingBudgetsV1BudgetAmount{
                LastPeriodAmount: map[string]interface{}{
                    "aliquid": "cupiditate",
                },
                SpecifiedAmount: &shared.GoogleTypeMoney{
                    CurrencyCode: sdk.String("quos"),
                    Nanos: sdk.Int(20107),
                    Units: sdk.String("magni"),
                },
            },
            BudgetFilter: &shared.GoogleCloudBillingBudgetsV1Filter{
                CalendarPeriod: shared.GoogleCloudBillingBudgetsV1FilterCalendarPeriodEnumYear.ToPointer(),
                CreditTypes: []string{
                    "alias",
                    "fugit",
                },
                CreditTypesTreatment: shared.GoogleCloudBillingBudgetsV1FilterCreditTypesTreatmentEnumExcludeAllCredits.ToPointer(),
                CustomPeriod: &shared.GoogleCloudBillingBudgetsV1CustomPeriod{
                    EndDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(569618),
                        Month: sdk.Int(270008),
                        Year: sdk.Int(703737),
                    },
                    StartDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(735194),
                        Month: sdk.Int(288476),
                        Year: sdk.Int(962189),
                    },
                },
                Labels: map[string][]interface{}{
                    "non": []interface{}{
                        "sint",
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                    "sint": []interface{}{
                        "dolor",
                        "debitis",
                        "a",
                    },
                },
                Projects: []string{
                    "in",
                    "in",
                    "illum",
                },
                Services: []string{
                    "rerum",
                    "dicta",
                    "magnam",
                    "cumque",
                },
                Subaccounts: []string{
                    "ea",
                    "aliquid",
                    "laborum",
                    "accusamus",
                },
            },
            DisplayName: sdk.String("non"),
            Etag: sdk.String("occaecati"),
            NotificationsRule: &shared.GoogleCloudBillingBudgetsV1NotificationsRule{
                DisableDefaultIamRecipients: sdk.Bool(false),
                MonitoringNotificationChannels: []string{
                    "accusamus",
                    "delectus",
                },
                PubsubTopic: sdk.String("quidem"),
                SchemaVersion: sdk.String("provident"),
            },
            ThresholdRules: []shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                    ThresholdPercent: sdk.Float64(5013.24),
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumCurrentSpend.ToPointer(),
                    ThresholdPercent: sdk.Float64(9560.84),
                },
                shared.GoogleCloudBillingBudgetsV1ThresholdRule{
                    SpendBasis: shared.GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnumBasisUnspecified.ToPointer(),
                    ThresholdPercent: sdk.Float64(6439.9),
                },
            },
        },
        AccessToken: sdk.String("nisi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("molestiae"),
        Name: "Marcia Gutkowski",
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UpdateMask: sdk.String("suscipit"),
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

    if res.GoogleCloudBillingBudgetsV1Budget != nil {
        // handle response
    }
}
```
