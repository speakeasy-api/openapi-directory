# Accounts

### Available Operations

* [TravelpartnerAccountsAccountLinksCreate](#travelpartneraccountsaccountlinkscreate) - Creates a new account link between a Hotel Center account and a Google Ads account.
* [TravelpartnerAccountsAccountLinksDelete](#travelpartneraccountsaccountlinksdelete) - Deletes an account link.
* [TravelpartnerAccountsAccountLinksList](#travelpartneraccountsaccountlinkslist) - Returns the account links for a Hotel Center account.
* [TravelpartnerAccountsBrandsCreate](#travelpartneraccountsbrandscreate) - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* [TravelpartnerAccountsBrandsList](#travelpartneraccountsbrandslist) - Returns the brands for a partner account.
* [TravelpartnerAccountsBrandsPatch](#travelpartneraccountsbrandspatch) - Updates a brand.
* [TravelpartnerAccountsFreeBookingLinksReportViewsQuery](#travelpartneraccountsfreebookinglinksreportviewsquery) - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* [TravelpartnerAccountsHotelViewsList](#travelpartneraccountshotelviewslist) - Returns the list of hotel views.
* [TravelpartnerAccountsHotelViewsSummarize](#travelpartneraccountshotelviewssummarize) - Returns summarized information about hotels.
* [TravelpartnerAccountsHotelsSetLiveOnGoogle](#travelpartneraccountshotelssetliveongoogle) - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* [TravelpartnerAccountsIconsCreate](#travelpartneraccountsiconscreate) - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* [TravelpartnerAccountsIconsList](#travelpartneraccountsiconslist) - Returns the `Icon`s for a partner account.
* [TravelpartnerAccountsListingsVerify](#travelpartneraccountslistingsverify) - returns verified listings with data issues and serving eligibilities
* [TravelpartnerAccountsParticipationReportViewsQuery](#travelpartneraccountsparticipationreportviewsquery) - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* [TravelpartnerAccountsPriceAccuracyViewsList](#travelpartneraccountspriceaccuracyviewslist) - Lists the available price accuracy views.
* [TravelpartnerAccountsPriceAccuracyViewsSummarize](#travelpartneraccountspriceaccuracyviewssummarize) - Returns the price accuracy summary.
* [TravelpartnerAccountsPriceCoverageViewsGetLatest](#travelpartneraccountspricecoverageviewsgetlatest) - Returns the latest price coverage view in full detail.
* [TravelpartnerAccountsPriceCoverageViewsList](#travelpartneraccountspricecoverageviewslist) - Returns the entire price coverage history.
* [TravelpartnerAccountsPropertyPerformanceReportViewsQuery](#travelpartneraccountspropertyperformancereportviewsquery) - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* [TravelpartnerAccountsReconciliationReportsCreate](#travelpartneraccountsreconciliationreportscreate) - Creates a reconciliation report and uploads it to Google.
* [TravelpartnerAccountsReconciliationReportsGet](#travelpartneraccountsreconciliationreportsget) - Returns a reconciliation report.
* [TravelpartnerAccountsReconciliationReportsList](#travelpartneraccountsreconciliationreportslist) - Returns a list of the names of created reconciliation reports.
* [TravelpartnerAccountsReconciliationReportsValidate](#travelpartneraccountsreconciliationreportsvalidate) - Validates a reconciliation report.

## TravelpartnerAccountsAccountLinksCreate

Creates a new account link between a Hotel Center account and a Google Ads account.

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
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksCreate(ctx, operations.TravelpartnerAccountsAccountLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountLink: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: sdk.Bool(false),
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "excepturi",
                        "nisi",
                    },
                },
            },
            GoogleAdsCustomerName: sdk.String("recusandae"),
            Name: sdk.String("Miss Raymond Hauck III"),
            Status: shared.AccountLinkStatusEnumApproved.ToPointer(),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLink != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsAccountLinksDelete

Deletes an account link.

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
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksDelete(ctx, operations.TravelpartnerAccountsAccountLinksDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("nam"),
        Key: sdk.String("officia"),
        Name: "Wayne Lind",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsAccountLinksList

Returns the account links for a Hotel Center account.

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
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksList(ctx, operations.TravelpartnerAccountsAccountLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("excepturi"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountLinksResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsBrandsCreate

Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.

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
    res, err := s.Accounts.TravelpartnerAccountsBrandsCreate(ctx, operations.TravelpartnerAccountsBrandsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BrandInput: &shared.BrandInput{
            DisplayNames: []shared.LocalizedText{
                shared.LocalizedText{
                    LanguageCode: sdk.String("dolor"),
                    Text: sdk.String("natus"),
                },
                shared.LocalizedText{
                    LanguageCode: sdk.String("laboriosam"),
                    Text: sdk.String("hic"),
                },
                shared.LocalizedText{
                    LanguageCode: sdk.String("saepe"),
                    Text: sdk.String("fuga"),
                },
            },
            Icon: sdk.String("in"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        BrandID: sdk.String("iure"),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("ipsa"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Brand != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsBrandsList

Returns the brands for a partner account.

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
    res, err := s.Accounts.TravelpartnerAccountsBrandsList(ctx, operations.TravelpartnerAccountsBrandsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("omnis"),
        Parent: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBrandsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsBrandsPatch

Updates a brand.

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
    res, err := s.Accounts.TravelpartnerAccountsBrandsPatch(ctx, operations.TravelpartnerAccountsBrandsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BrandInput: &shared.BrandInput{
            DisplayNames: []shared.LocalizedText{
                shared.LocalizedText{
                    LanguageCode: sdk.String("doloribus"),
                    Text: sdk.String("sapiente"),
                },
                shared.LocalizedText{
                    LanguageCode: sdk.String("architecto"),
                    Text: sdk.String("mollitia"),
                },
                shared.LocalizedText{
                    LanguageCode: sdk.String("dolorem"),
                    Text: sdk.String("culpa"),
                },
            },
            Icon: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("repellat"),
        AllowMissing: sdk.Bool(false),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        Name: "Nellie Frami",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UpdateMask: sdk.String("laborum"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Brand != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsFreeBookingLinksReportViewsQuery

**DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.

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
    res, err := s.Accounts.TravelpartnerAccountsFreeBookingLinksReportViewsQuery(ctx, operations.TravelpartnerAccountsFreeBookingLinksReportViewsQueryRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        AggregateBy: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("id"),
        Filter: sdk.String("possimus"),
        Key: sdk.String("aut"),
        Name: "Sabrina Smitham DVM",
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(878194),
        PageToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryFreeBookingLinksReportResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsHotelViewsList

Returns the list of hotel views.

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
    res, err := s.Accounts.TravelpartnerAccountsHotelViewsList(ctx, operations.TravelpartnerAccountsHotelViewsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("doloremque"),
        Filter: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(120196),
        PageToken: sdk.String("corporis"),
        Parent: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHotelViewsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsHotelViewsSummarize

Returns summarized information about hotels.

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
    res, err := s.Accounts.TravelpartnerAccountsHotelViewsSummarize(ctx, operations.TravelpartnerAccountsHotelViewsSummarizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("quidem"),
        Parent: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SummarizeHotelViewsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsHotelsSetLiveOnGoogle

Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.

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
    res, err := s.Accounts.TravelpartnerAccountsHotelsSetLiveOnGoogle(ctx, operations.TravelpartnerAccountsHotelsSetLiveOnGoogleRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SetLiveOnGoogleRequest: &shared.SetLiveOnGoogleRequest{
            LiveOnGoogle: sdk.Bool(false),
            PartnerHotelIds: []string{
                "voluptates",
                "quasi",
                "repudiandae",
            },
        },
        AccessToken: sdk.String("sint"),
        Account: "veritatis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetLiveOnGoogleResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsIconsCreate

Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1

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
    res, err := s.Accounts.TravelpartnerAccountsIconsCreate(ctx, operations.TravelpartnerAccountsIconsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        IconInput: &shared.IconInput{
            ImageData: sdk.String("quibusdam"),
            Reference: sdk.String("labore"),
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Icon != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsIconsList

Returns the `Icon`s for a partner account.

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
    res, err := s.Accounts.TravelpartnerAccountsIconsList(ctx, operations.TravelpartnerAccountsIconsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("tempore"),
        OauthToken: sdk.String("labore"),
        Parent: "delectus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIconsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsListingsVerify

returns verified listings with data issues and serving eligibilities

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
    res, err := s.Accounts.TravelpartnerAccountsListingsVerify(ctx, operations.TravelpartnerAccountsListingsVerifyRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VerifyListingsRequest: &shared.VerifyListingsRequest{
            XMLListing: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("debitis"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyListingsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsParticipationReportViewsQuery

Provides the ability to query (get, filter, and segment) a participation report for a particular account.

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
    res, err := s.Accounts.TravelpartnerAccountsParticipationReportViewsQuery(ctx, operations.TravelpartnerAccountsParticipationReportViewsQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("maiores"),
        AggregateBy: sdk.String("rerum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("cumque"),
        Filter: sdk.String("facere"),
        Key: sdk.String("ea"),
        Name: "Kayla Thompson",
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(881736),
        PageToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryParticipationReportResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsPriceAccuracyViewsList

Lists the available price accuracy views.

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
    res, err := s.Accounts.TravelpartnerAccountsPriceAccuracyViewsList(ctx, operations.TravelpartnerAccountsPriceAccuracyViewsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("amet"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("nisi"),
        Parent: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPriceAccuracyViewsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsPriceAccuracyViewsSummarize

Returns the price accuracy summary.

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
    res, err := s.Accounts.TravelpartnerAccountsPriceAccuracyViewsSummarize(ctx, operations.TravelpartnerAccountsPriceAccuracyViewsSummarizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nihil"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("id"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("labore"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SummarizePriceAccuracyResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsPriceCoverageViewsGetLatest

Returns the latest price coverage view in full detail.

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
    res, err := s.Accounts.TravelpartnerAccountsPriceCoverageViewsGetLatest(ctx, operations.TravelpartnerAccountsPriceCoverageViewsGetLatestRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("et"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("ullam"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PriceCoverageView != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsPriceCoverageViewsList

Returns the entire price coverage history.

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
    res, err := s.Accounts.TravelpartnerAccountsPriceCoverageViewsList(ctx, operations.TravelpartnerAccountsPriceCoverageViewsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("eum"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("necessitatibus"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPriceCoverageViewsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsPropertyPerformanceReportViewsQuery

Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.

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
    res, err := s.Accounts.TravelpartnerAccountsPropertyPerformanceReportViewsQuery(ctx, operations.TravelpartnerAccountsPropertyPerformanceReportViewsQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("debitis"),
        AggregateBy: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("facilis"),
        Filter: sdk.String("in"),
        Key: sdk.String("architecto"),
        Name: "Elvira Herman",
        OauthToken: sdk.String("repellat"),
        PageSize: sdk.Int64(841140),
        PageToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("accusantium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryPropertyPerformanceReportResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsReconciliationReportsCreate

Creates a reconciliation report and uploads it to Google.

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
    res, err := s.Accounts.TravelpartnerAccountsReconciliationReportsCreate(ctx, operations.TravelpartnerAccountsReconciliationReportsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReconciliationReport: &shared.ReconciliationReport{
            Contents: sdk.String("praesentium"),
            FileName: sdk.String("natus"),
            Name: sdk.String("Joan Satterfield"),
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("odit"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("accusantium"),
        Parent: "ab",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReconciliationReportResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsReconciliationReportsGet

Returns a reconciliation report.

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
    res, err := s.Accounts.TravelpartnerAccountsReconciliationReportsGet(ctx, operations.TravelpartnerAccountsReconciliationReportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eaque"),
        Fields: sdk.String("pariatur"),
        IncludeMatchedPrices: sdk.Bool(false),
        IncludeNonScoring: sdk.Bool(false),
        IncludePixels: sdk.Bool(false),
        Key: sdk.String("nemo"),
        Name: "Joseph Steuber DDS",
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReconciliationReport != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsReconciliationReportsList

Returns a list of the names of created reconciliation reports.

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
    res, err := s.Accounts.TravelpartnerAccountsReconciliationReportsList(ctx, operations.TravelpartnerAccountsReconciliationReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        EndDate: sdk.String("eaque"),
        Fields: sdk.String("quis"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("eos"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        StartDate: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReconciliationReportsResponse != nil {
        // handle response
    }
}
```

## TravelpartnerAccountsReconciliationReportsValidate

Validates a reconciliation report.

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
    res, err := s.Accounts.TravelpartnerAccountsReconciliationReportsValidate(ctx, operations.TravelpartnerAccountsReconciliationReportsValidateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReconciliationReport: &shared.ReconciliationReport{
            Contents: sdk.String("nostrum"),
            FileName: sdk.String("hic"),
            Name: sdk.String("Alejandro Purdy DDS"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("rerum"),
        Parent: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateReconciliationReportResponse != nil {
        // handle response
    }
}
```
