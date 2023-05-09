# Bidders

### Available Operations

* [Adexchangebuyer2BiddersFilterSetsBidMetricsList](#adexchangebuyer2biddersfiltersetsbidmetricslist) - Lists all metrics that are measured in terms of number of bids.
* [Adexchangebuyer2BiddersFilterSetsBidResponseErrorsList](#adexchangebuyer2biddersfiltersetsbidresponseerrorslist) - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
* [Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList](#adexchangebuyer2biddersfiltersetsbidresponseswithoutbidslist) - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
* [Adexchangebuyer2BiddersFilterSetsCreate](#adexchangebuyer2biddersfiltersetscreate) - Creates the specified filter set for the account with the given account ID.
* [Adexchangebuyer2BiddersFilterSetsDelete](#adexchangebuyer2biddersfiltersetsdelete) - Deletes the requested filter set from the account with the given account ID.
* [Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList](#adexchangebuyer2biddersfiltersetsfilteredbidrequestslist) - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
* [Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList](#adexchangebuyer2biddersfiltersetsfilteredbidscreativeslist) - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
* [Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList](#adexchangebuyer2biddersfiltersetsfilteredbidsdetailslist) - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
* [Adexchangebuyer2BiddersFilterSetsFilteredBidsList](#adexchangebuyer2biddersfiltersetsfilteredbidslist) - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
* [Adexchangebuyer2BiddersFilterSetsGet](#adexchangebuyer2biddersfiltersetsget) - Retrieves the requested filter set for the account with the given account ID.
* [Adexchangebuyer2BiddersFilterSetsImpressionMetricsList](#adexchangebuyer2biddersfiltersetsimpressionmetricslist) - Lists all metrics that are measured in terms of number of impressions.
* [Adexchangebuyer2BiddersFilterSetsList](#adexchangebuyer2biddersfiltersetslist) - Lists all filter sets for the account with the given account ID.
* [Adexchangebuyer2BiddersFilterSetsLosingBidsList](#adexchangebuyer2biddersfiltersetslosingbidslist) - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
* [Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList](#adexchangebuyer2biddersfiltersetsnonbillablewinningbidslist) - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

## Adexchangebuyer2BiddersFilterSetsBidMetricsList

Lists all metrics that are measured in terms of number of bids.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsBidMetricsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("odit"),
        FilterSetName: "ad",
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("beatae"),
        PageSize: sdk.Int64(481042),
        PageToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBidMetricsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsBidResponseErrorsList

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("laborum"),
        FilterSetName: "illum",
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("maxime"),
        PageSize: sdk.Int64(681115),
        PageToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBidResponseErrorsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consectetur"),
        Fields: sdk.String("temporibus"),
        FilterSetName: "optio",
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(350271),
        PageToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBidResponsesWithoutBidsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsCreate

Creates the specified filter set for the account with the given account ID.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsCreate(ctx, operations.Adexchangebuyer2BiddersFilterSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FilterSet: &shared.FilterSet{
            AbsoluteDateRange: &shared.AbsoluteDateRange{
                EndDate: &shared.Date{
                    Day: sdk.Int(640565),
                    Month: sdk.Int(379661),
                    Year: sdk.Int(688649),
                },
                StartDate: &shared.Date{
                    Day: sdk.Int(496578),
                    Month: sdk.Int(42454),
                    Year: sdk.Int(20141),
                },
            },
            BreakdownDimensions: []shared.FilterSetBreakdownDimensionsEnum{
                shared.FilterSetBreakdownDimensionsEnumBreakdownDimensionUnspecified,
                shared.FilterSetBreakdownDimensionsEnumPublisherIdentifier,
                shared.FilterSetBreakdownDimensionsEnumBreakdownDimensionUnspecified,
            },
            CreativeID: sdk.String("quis"),
            DealID: sdk.String("iure"),
            Environment: shared.FilterSetEnvironmentEnumEnvironmentUnspecified.ToPointer(),
            Format: shared.FilterSetFormatEnumNativeDisplay.ToPointer(),
            Formats: []shared.FilterSetFormatsEnum{
                shared.FilterSetFormatsEnumNonNativeVideo,
            },
            Name: sdk.String("Monique Kerluke"),
            Platforms: []shared.FilterSetPlatformsEnum{
                shared.FilterSetPlatformsEnumTablet,
                shared.FilterSetPlatformsEnumDesktop,
                shared.FilterSetPlatformsEnumDesktop,
            },
            PublisherIdentifiers: []string{
                "minima",
                "tempora",
            },
            RealtimeTimeRange: &shared.RealtimeTimeRange{
                StartTimestamp: sdk.String("perferendis"),
            },
            RelativeDateRange: &shared.RelativeDateRange{
                DurationDays: sdk.Int(546963),
                OffsetDays: sdk.Int(40874),
            },
            SellerNetworkIds: []int{
                257821,
                39202,
                740245,
                751298,
            },
            TimeSeriesGranularity: shared.FilterSetTimeSeriesGranularityEnumHourly.ToPointer(),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("cumque"),
        IsTransient: sdk.Bool(false),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("fugiat"),
        OwnerName: "laboriosam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.Adexchangebuyer2BiddersFilterSetsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilterSet != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsDelete

Deletes the requested filter set from the account with the given account ID.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsDelete(ctx, operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("provident"),
        Name: "Carol Gutkowski",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("id"),
    }, operations.Adexchangebuyer2BiddersFilterSetsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("sequi"),
        FilterSetName: "voluptatum",
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("error"),
        PageSize: sdk.Int64(748606),
        PageToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFilteredBidRequestsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(ctx, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptates"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugit"),
        CreativeStatusID: 27946,
        Fields: sdk.String("repudiandae"),
        FilterSetName: "corporis",
        Key: sdk.String("ea"),
        OauthToken: sdk.String("eos"),
        PageSize: sdk.Int64(305267),
        PageToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreativeStatusBreakdownByCreativeResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("animi"),
        CreativeStatusID: 591171,
        Fields: sdk.String("beatae"),
        FilterSetName: "ipsa",
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("nam"),
        PageSize: sdk.Int64(827314),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreativeStatusBreakdownByDetailResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsFilteredBidsList

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsFilteredBidsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("aliquid"),
        FilterSetName: "provident",
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("accusamus"),
        PageSize: sdk.Int64(68292),
        PageToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("eaque"),
        UploadProtocol: sdk.String("alias"),
    }, operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFilteredBidsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsGet

Retrieves the requested filter set for the account with the given account ID.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsGet(ctx, operations.Adexchangebuyer2BiddersFilterSetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("amet"),
        Name: "Angel Lakin",
        OauthToken: sdk.String("eligendi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.Adexchangebuyer2BiddersFilterSetsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilterSet != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsImpressionMetricsList

Lists all metrics that are measured in terms of number of impressions.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsImpressionMetricsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("atque"),
        FilterSetName: "quibusdam",
        Key: sdk.String("sit"),
        OauthToken: sdk.String("quo"),
        PageSize: sdk.Int64(329973),
        PageToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("earum"),
    }, operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImpressionMetricsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsList

Lists all filter sets for the account with the given account ID.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("quam"),
        OwnerName: "atque",
        PageSize: sdk.Int64(638363),
        PageToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.Adexchangebuyer2BiddersFilterSetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFilterSetsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsLosingBidsList

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsLosingBidsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("accusantium"),
        FilterSetName: "commodi",
        Key: sdk.String("atque"),
        OauthToken: sdk.String("totam"),
        PageSize: sdk.Int64(945637),
        PageToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLosingBidsResponse != nil {
        // handle response
    }
}
```

## Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

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
    res, err := s.Bidders.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(ctx, operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("inventore"),
        FilterSetName: "facere",
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("fuga"),
        PageSize: sdk.Int64(66596),
        PageToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("sed"),
    }, operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNonBillableWinningBidsResponse != nil {
        // handle response
    }
}
```
