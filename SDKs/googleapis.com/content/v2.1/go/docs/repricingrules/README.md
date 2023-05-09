# Repricingrules

### Available Operations

* [ContentRepricingrulesCreate](#contentrepricingrulescreate) - Creates a repricing rule for your Merchant Center account.
* [ContentRepricingrulesDelete](#contentrepricingrulesdelete) - Deletes a repricing rule in your Merchant Center account.
* [ContentRepricingrulesGet](#contentrepricingrulesget) - Retrieves a repricing rule from your Merchant Center account.
* [ContentRepricingrulesList](#contentrepricingruleslist) - Lists the repricing rules in your Merchant Center account.
* [ContentRepricingrulesPatch](#contentrepricingrulespatch) - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
* [ContentRepricingrulesRepricingreportsList](#contentrepricingrulesrepricingreportslist) - Lists the metrics report for a given Repricing rule.

## ContentRepricingrulesCreate

Creates a repricing rule for your Merchant Center account.

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
    res, err := s.Repricingrules.ContentRepricingrulesCreate(ctx, operations.ContentRepricingrulesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RepricingRuleInput: &shared.RepricingRuleInput{
            CogsBasedRule: &shared.RepricingRuleCostOfGoodsSaleRule{
                PercentageDelta: sdk.Int(154117),
                PriceDelta: sdk.String("ad"),
            },
            CountryCode: sdk.String("DZ"),
            EffectiveTimePeriod: &shared.RepricingRuleEffectiveTime{
                FixedTimePeriods: []shared.RepricingRuleEffectiveTimeFixedTimePeriod{
                    shared.RepricingRuleEffectiveTimeFixedTimePeriod{
                        EndTime: sdk.String("provident"),
                        StartTime: sdk.String("possimus"),
                    },
                    shared.RepricingRuleEffectiveTimeFixedTimePeriod{
                        EndTime: sdk.String("iste"),
                        StartTime: sdk.String("blanditiis"),
                    },
                },
            },
            EligibleOfferMatcher: &shared.RepricingRuleEligibleOfferMatcher{
                BrandMatcher: &shared.RepricingRuleEligibleOfferMatcherStringMatcher{
                    StrAttributes: []string{
                        "totam",
                    },
                },
                ItemGroupIDMatcher: &shared.RepricingRuleEligibleOfferMatcherStringMatcher{
                    StrAttributes: []string{
                        "repellat",
                        "iusto",
                    },
                },
                MatcherOption: shared.RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionUseFeedAttribute.ToPointer(),
                OfferIDMatcher: &shared.RepricingRuleEligibleOfferMatcherStringMatcher{
                    StrAttributes: []string{
                        "cupiditate",
                        "maxime",
                    },
                },
                SkipWhenOnPromotion: sdk.Bool(false),
            },
            LanguageCode: sdk.String("assumenda"),
            Paused: sdk.Bool(false),
            Restriction: &shared.RepricingRuleRestriction{
                Floor: &shared.RepricingRuleRestrictionBoundary{
                    PercentageDelta: sdk.Int(471693),
                    PriceDelta: sdk.String("sed"),
                },
                UseAutoPricingMinPrice: sdk.Bool(false),
            },
            StatsBasedRule: &shared.RepricingRuleStatsBasedRule{
                PercentageDelta: sdk.Int(758366),
                PriceDelta: sdk.String("nulla"),
            },
            Title: sdk.String("Mr."),
            Type: shared.RepricingRuleTypeEnumTypeStatsBased.ToPointer(),
        },
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("eos"),
        MerchantID: "sunt",
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        RuleID: sdk.String("omnis"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("qui"),
    }, operations.ContentRepricingrulesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepricingRule != nil {
        // handle response
    }
}
```

## ContentRepricingrulesDelete

Deletes a repricing rule in your Merchant Center account.

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
    res, err := s.Repricingrules.ContentRepricingrulesDelete(ctx, operations.ContentRepricingrulesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("tenetur"),
        MerchantID: "exercitationem",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        RuleID: "quis",
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.ContentRepricingrulesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ContentRepricingrulesGet

Retrieves a repricing rule from your Merchant Center account.

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
    res, err := s.Repricingrules.ContentRepricingrulesGet(ctx, operations.ContentRepricingrulesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("quasi"),
        MerchantID: "itaque",
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        RuleID: "temporibus",
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.ContentRepricingrulesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepricingRule != nil {
        // handle response
    }
}
```

## ContentRepricingrulesList

Lists the repricing rules in your Merchant Center account.

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
    res, err := s.Repricingrules.ContentRepricingrulesList(ctx, operations.ContentRepricingrulesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        CountryCode: sdk.String("CU"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("amet"),
        LanguageCode: sdk.String("labore"),
        MerchantID: "repellat",
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(845191),
        PageToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("officia"),
    }, operations.ContentRepricingrulesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepricingRulesResponse != nil {
        // handle response
    }
}
```

## ContentRepricingrulesPatch

Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.

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
    res, err := s.Repricingrules.ContentRepricingrulesPatch(ctx, operations.ContentRepricingrulesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RepricingRuleInput: &shared.RepricingRuleInput{
            CogsBasedRule: &shared.RepricingRuleCostOfGoodsSaleRule{
                PercentageDelta: sdk.Int(598066),
                PriceDelta: sdk.String("quam"),
            },
            CountryCode: sdk.String("VE"),
            EffectiveTimePeriod: &shared.RepricingRuleEffectiveTime{
                FixedTimePeriods: []shared.RepricingRuleEffectiveTimeFixedTimePeriod{
                    shared.RepricingRuleEffectiveTimeFixedTimePeriod{
                        EndTime: sdk.String("nulla"),
                        StartTime: sdk.String("recusandae"),
                    },
                    shared.RepricingRuleEffectiveTimeFixedTimePeriod{
                        EndTime: sdk.String("iste"),
                        StartTime: sdk.String("aspernatur"),
                    },
                },
            },
            EligibleOfferMatcher: &shared.RepricingRuleEligibleOfferMatcher{
                BrandMatcher: &shared.RepricingRuleEligibleOfferMatcherStringMatcher{
                    StrAttributes: []string{
                        "et",
                    },
                },
                ItemGroupIDMatcher: &shared.RepricingRuleEligibleOfferMatcherStringMatcher{
                    StrAttributes: []string{
                        "et",
                        "delectus",
                    },
                },
                MatcherOption: shared.RepricingRuleEligibleOfferMatcherMatcherOptionEnumMatcherOptionAllProducts.ToPointer(),
                OfferIDMatcher: &shared.RepricingRuleEligibleOfferMatcherStringMatcher{
                    StrAttributes: []string{
                        "in",
                    },
                },
                SkipWhenOnPromotion: sdk.Bool(false),
            },
            LanguageCode: sdk.String("architecto"),
            Paused: sdk.Bool(false),
            Restriction: &shared.RepricingRuleRestriction{
                Floor: &shared.RepricingRuleRestrictionBoundary{
                    PercentageDelta: sdk.Int(150606),
                    PriceDelta: sdk.String("voluptatem"),
                },
                UseAutoPricingMinPrice: sdk.Bool(false),
            },
            StatsBasedRule: &shared.RepricingRuleStatsBasedRule{
                PercentageDelta: sdk.Int(593830),
                PriceDelta: sdk.String("error"),
            },
            Title: sdk.String("Ms."),
            Type: shared.RepricingRuleTypeEnumTypeStatsBased.ToPointer(),
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("quis"),
        MerchantID: "modi",
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        RuleID: "praesentium",
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.ContentRepricingrulesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RepricingRule != nil {
        // handle response
    }
}
```

## ContentRepricingrulesRepricingreportsList

Lists the metrics report for a given Repricing rule.

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
    res, err := s.Repricingrules.ContentRepricingrulesRepricingreportsList(ctx, operations.ContentRepricingrulesRepricingreportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        EndDate: sdk.String("voluptates"),
        Fields: sdk.String("quia"),
        Key: sdk.String("aspernatur"),
        MerchantID: "ut",
        OauthToken: sdk.String("non"),
        PageSize: sdk.Int64(386138),
        PageToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        RuleID: "aliquam",
        StartDate: sdk.String("dolorem"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.ContentRepricingrulesRepricingreportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRepricingRuleReportsResponse != nil {
        // handle response
    }
}
```
