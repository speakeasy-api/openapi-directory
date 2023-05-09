# Datafeeds

### Available Operations

* [ContentDatafeedsCustombatch](#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [ContentDatafeedsDelete](#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsFetchnow](#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
* [ContentDatafeedsGet](#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsInsert](#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [ContentDatafeedsList](#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [ContentDatafeedsUpdate](#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

## ContentDatafeedsCustombatch

Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.

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
    res, err := s.Datafeeds.ContentDatafeedsCustombatch(ctx, operations.ContentDatafeedsCustombatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DatafeedsCustomBatchRequest: &shared.DatafeedsCustomBatchRequest{
            Entries: []shared.DatafeedsCustomBatchRequestEntry{
                shared.DatafeedsCustomBatchRequestEntry{
                    BatchID: sdk.Int64(477646),
                    Datafeed: &shared.Datafeed{
                        AttributeLanguage: sdk.String("ex"),
                        ContentType: sdk.String("ut"),
                        FetchSchedule: &shared.DatafeedFetchSchedule{
                            DayOfMonth: sdk.Int64(633062),
                            FetchURL: sdk.String("adipisci"),
                            Hour: sdk.Int64(890653),
                            MinuteOfHour: sdk.Int64(514513),
                            Password: sdk.String("eum"),
                            Paused: sdk.Bool(false),
                            TimeZone: sdk.String("nemo"),
                            Username: sdk.String("Tina.Klocko"),
                            Weekday: sdk.String("eum"),
                        },
                        FileName: sdk.String("reiciendis"),
                        Format: &shared.DatafeedFormat{
                            ColumnDelimiter: sdk.String("provident"),
                            FileEncoding: sdk.String("aspernatur"),
                            QuotingMode: sdk.String("ullam"),
                        },
                        ID: sdk.String("quasi"),
                        Kind: sdk.String("animi"),
                        Name: sdk.String("Angie McLaughlin"),
                        Targets: []shared.DatafeedTarget{
                            shared.DatafeedTarget{
                                Country: sdk.String("Hungary"),
                                ExcludedDestinations: []string{
                                    "repellat",
                                },
                                FeedLabel: sdk.String("doloribus"),
                                IncludedDestinations: []string{
                                    "in",
                                    "nam",
                                },
                                Language: sdk.String("earum"),
                                TargetCountries: []string{
                                    "laborum",
                                    "placeat",
                                    "modi",
                                },
                            },
                            shared.DatafeedTarget{
                                Country: sdk.String("Virgin Islands, U.S."),
                                ExcludedDestinations: []string{
                                    "officiis",
                                    "sapiente",
                                    "cumque",
                                },
                                FeedLabel: sdk.String("vitae"),
                                IncludedDestinations: []string{
                                    "tempora",
                                    "quis",
                                    "inventore",
                                },
                                Language: sdk.String("fugit"),
                                TargetCountries: []string{
                                    "quae",
                                    "perferendis",
                                    "velit",
                                    "aspernatur",
                                },
                            },
                        },
                    },
                    DatafeedID: sdk.String("eum"),
                    MerchantID: sdk.String("eius"),
                    Method: sdk.String("rem"),
                },
                shared.DatafeedsCustomBatchRequestEntry{
                    BatchID: sdk.Int64(871083),
                    Datafeed: &shared.Datafeed{
                        AttributeLanguage: sdk.String("impedit"),
                        ContentType: sdk.String("eos"),
                        FetchSchedule: &shared.DatafeedFetchSchedule{
                            DayOfMonth: sdk.Int64(958741),
                            FetchURL: sdk.String("eum"),
                            Hour: sdk.Int64(117320),
                            MinuteOfHour: sdk.Int64(325118),
                            Password: sdk.String("beatae"),
                            Paused: sdk.Bool(false),
                            TimeZone: sdk.String("cupiditate"),
                            Username: sdk.String("Lambert_Weber84"),
                            Weekday: sdk.String("eaque"),
                        },
                        FileName: sdk.String("earum"),
                        Format: &shared.DatafeedFormat{
                            ColumnDelimiter: sdk.String("perspiciatis"),
                            FileEncoding: sdk.String("maiores"),
                            QuotingMode: sdk.String("debitis"),
                        },
                        ID: sdk.String("aliquid"),
                        Kind: sdk.String("porro"),
                        Name: sdk.String("Connie Corkery"),
                        Targets: []shared.DatafeedTarget{
                            shared.DatafeedTarget{
                                Country: sdk.String("Norfolk Island"),
                                ExcludedDestinations: []string{
                                    "nulla",
                                    "consequatur",
                                    "quasi",
                                    "et",
                                },
                                FeedLabel: sdk.String("ducimus"),
                                IncludedDestinations: []string{
                                    "occaecati",
                                    "suscipit",
                                    "adipisci",
                                },
                                Language: sdk.String("quasi"),
                                TargetCountries: []string{
                                    "doloribus",
                                },
                            },
                        },
                    },
                    DatafeedID: sdk.String("nulla"),
                    MerchantID: sdk.String("necessitatibus"),
                    Method: sdk.String("ipsa"),
                },
            },
        },
        AccessToken: sdk.String("tempora"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.ContentDatafeedsCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatafeedsCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentDatafeedsDelete

Deletes a datafeed configuration from your Merchant Center account.

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
    res, err := s.Datafeeds.ContentDatafeedsDelete(ctx, operations.ContentDatafeedsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloremque"),
        DatafeedID: "dicta",
        Fields: sdk.String("odio"),
        Key: sdk.String("tempora"),
        MerchantID: "esse",
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.ContentDatafeedsDeleteSecurity{
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

## ContentDatafeedsFetchnow

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.

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
    res, err := s.Datafeeds.ContentDatafeedsFetchnow(ctx, operations.ContentDatafeedsFetchnowRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        DatafeedID: "expedita",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("officia"),
        MerchantID: "suscipit",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.ContentDatafeedsFetchnowSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatafeedsFetchNowResponse != nil {
        // handle response
    }
}
```

## ContentDatafeedsGet

Retrieves a datafeed configuration from your Merchant Center account.

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
    res, err := s.Datafeeds.ContentDatafeedsGet(ctx, operations.ContentDatafeedsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        DatafeedID: "possimus",
        Fields: sdk.String("voluptates"),
        Key: sdk.String("mollitia"),
        MerchantID: "laborum",
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("enim"),
    }, operations.ContentDatafeedsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Datafeed != nil {
        // handle response
    }
}
```

## ContentDatafeedsInsert

Registers a datafeed configuration with your Merchant Center account.

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
    res, err := s.Datafeeds.ContentDatafeedsInsert(ctx, operations.ContentDatafeedsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Datafeed: &shared.Datafeed{
            AttributeLanguage: sdk.String("repellendus"),
            ContentType: sdk.String("ex"),
            FetchSchedule: &shared.DatafeedFetchSchedule{
                DayOfMonth: sdk.Int64(775803),
                FetchURL: sdk.String("ex"),
                Hour: sdk.Int64(281153),
                MinuteOfHour: sdk.Int64(321043),
                Password: sdk.String("expedita"),
                Paused: sdk.Bool(false),
                TimeZone: sdk.String("voluptatem"),
                Username: sdk.String("Kellie.Rippin"),
                Weekday: sdk.String("voluptatum"),
            },
            FileName: sdk.String("omnis"),
            Format: &shared.DatafeedFormat{
                ColumnDelimiter: sdk.String("veritatis"),
                FileEncoding: sdk.String("rerum"),
                QuotingMode: sdk.String("est"),
            },
            ID: sdk.String("culpa"),
            Kind: sdk.String("voluptatem"),
            Name: sdk.String("Stewart Brakus"),
            Targets: []shared.DatafeedTarget{
                shared.DatafeedTarget{
                    Country: sdk.String("Antarctica (the territory South of 60 deg S)"),
                    ExcludedDestinations: []string{
                        "deleniti",
                    },
                    FeedLabel: sdk.String("earum"),
                    IncludedDestinations: []string{
                        "sapiente",
                        "rem",
                    },
                    Language: sdk.String("minus"),
                    TargetCountries: []string{
                        "asperiores",
                        "ratione",
                    },
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Guatemala"),
                    ExcludedDestinations: []string{
                        "illum",
                    },
                    FeedLabel: sdk.String("totam"),
                    IncludedDestinations: []string{
                        "quibusdam",
                        "nam",
                        "ipsam",
                        "culpa",
                    },
                    Language: sdk.String("dolor"),
                    TargetCountries: []string{
                        "inventore",
                        "deleniti",
                    },
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Belgium"),
                    ExcludedDestinations: []string{
                        "dolor",
                        "consequatur",
                    },
                    FeedLabel: sdk.String("architecto"),
                    IncludedDestinations: []string{
                        "modi",
                    },
                    Language: sdk.String("fugit"),
                    TargetCountries: []string{
                        "laudantium",
                    },
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Bahrain"),
                    ExcludedDestinations: []string{
                        "fugiat",
                    },
                    FeedLabel: sdk.String("ipsam"),
                    IncludedDestinations: []string{
                        "ipsa",
                    },
                    Language: sdk.String("quas"),
                    TargetCountries: []string{
                        "impedit",
                        "officiis",
                        "esse",
                        "necessitatibus",
                    },
                },
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("eum"),
        MerchantID: "vel",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("exercitationem"),
        UploadProtocol: sdk.String("ab"),
    }, operations.ContentDatafeedsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Datafeed != nil {
        // handle response
    }
}
```

## ContentDatafeedsList

Lists the configurations for datafeeds in your Merchant Center account.

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
    res, err := s.Datafeeds.ContentDatafeedsList(ctx, operations.ContentDatafeedsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("autem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("consequuntur"),
        MaxResults: sdk.Int64(28952),
        MerchantID: "exercitationem",
        OauthToken: sdk.String("necessitatibus"),
        PageToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("vero"),
    }, operations.ContentDatafeedsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatafeedsListResponse != nil {
        // handle response
    }
}
```

## ContentDatafeedsUpdate

Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

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
    res, err := s.Datafeeds.ContentDatafeedsUpdate(ctx, operations.ContentDatafeedsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Datafeed: &shared.Datafeed{
            AttributeLanguage: sdk.String("harum"),
            ContentType: sdk.String("sequi"),
            FetchSchedule: &shared.DatafeedFetchSchedule{
                DayOfMonth: sdk.Int64(987349),
                FetchURL: sdk.String("repudiandae"),
                Hour: sdk.Int64(759283),
                MinuteOfHour: sdk.Int64(579681),
                Password: sdk.String("nemo"),
                Paused: sdk.Bool(false),
                TimeZone: sdk.String("voluptate"),
                Username: sdk.String("Jewel.Nitzsche"),
                Weekday: sdk.String("nemo"),
            },
            FileName: sdk.String("quos"),
            Format: &shared.DatafeedFormat{
                ColumnDelimiter: sdk.String("eius"),
                FileEncoding: sdk.String("aspernatur"),
                QuotingMode: sdk.String("ducimus"),
            },
            ID: sdk.String("nesciunt"),
            Kind: sdk.String("fuga"),
            Name: sdk.String("Randall Boyle"),
            Targets: []shared.DatafeedTarget{
                shared.DatafeedTarget{
                    Country: sdk.String("Hungary"),
                    ExcludedDestinations: []string{
                        "consectetur",
                    },
                    FeedLabel: sdk.String("aperiam"),
                    IncludedDestinations: []string{
                        "reiciendis",
                        "soluta",
                        "alias",
                    },
                    Language: sdk.String("omnis"),
                    TargetCountries: []string{
                        "occaecati",
                    },
                },
            },
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("inventore"),
        DatafeedID: "fuga",
        Fields: sdk.String("accusamus"),
        Key: sdk.String("voluptatibus"),
        MerchantID: "distinctio",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.ContentDatafeedsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Datafeed != nil {
        // handle response
    }
}
```
