# Datafeeds

### Available Operations

* [ContentDatafeedsCustombatch](#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [ContentDatafeedsDelete](#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [ContentDatafeedsFetchnow](#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DatafeedsCustomBatchRequest: &shared.DatafeedsCustomBatchRequest{
            Entries: []shared.DatafeedsCustomBatchRequestEntry{
                shared.DatafeedsCustomBatchRequestEntry{
                    BatchID: sdk.Int64(730442),
                    Datafeed: &shared.Datafeed{
                        AttributeLanguage: sdk.String("voluptas"),
                        ContentLanguage: sdk.String("deserunt"),
                        ContentType: sdk.String("quam"),
                        FetchSchedule: &shared.DatafeedFetchSchedule{
                            DayOfMonth: sdk.Int64(214880),
                            FetchURL: sdk.String("incidunt"),
                            Hour: sdk.Int64(186458),
                            MinuteOfHour: sdk.Int64(586784),
                            Password: sdk.String("maxime"),
                            Paused: sdk.Bool(false),
                            TimeZone: sdk.String("pariatur"),
                            Username: sdk.String("Ned_Carroll27"),
                            Weekday: sdk.String("aspernatur"),
                        },
                        FileName: sdk.String("dolores"),
                        Format: &shared.DatafeedFormat{
                            ColumnDelimiter: sdk.String("distinctio"),
                            FileEncoding: sdk.String("facilis"),
                            QuotingMode: sdk.String("aliquid"),
                        },
                        ID: sdk.String("quam"),
                        IntendedDestinations: []string{
                            "temporibus",
                            "qui",
                            "neque",
                        },
                        Kind: sdk.String("fugit"),
                        Name: sdk.String("Courtney Cassin"),
                        TargetCountry: sdk.String("hic"),
                        Targets: []shared.DatafeedTarget{
                            shared.DatafeedTarget{
                                Country: sdk.String("Saint Pierre and Miquelon"),
                                ExcludedDestinations: []string{
                                    "nobis",
                                    "et",
                                    "saepe",
                                },
                                IncludedDestinations: []string{
                                    "veritatis",
                                },
                                Language: sdk.String("nobis"),
                            },
                        },
                    },
                    DatafeedID: sdk.String("quos"),
                    MerchantID: sdk.String("tempore"),
                    Method: sdk.String("cupiditate"),
                },
                shared.DatafeedsCustomBatchRequestEntry{
                    BatchID: sdk.Int64(45614),
                    Datafeed: &shared.Datafeed{
                        AttributeLanguage: sdk.String("delectus"),
                        ContentLanguage: sdk.String("dolorem"),
                        ContentType: sdk.String("dolore"),
                        FetchSchedule: &shared.DatafeedFetchSchedule{
                            DayOfMonth: sdk.Int64(286915),
                            FetchURL: sdk.String("adipisci"),
                            Hour: sdk.Int64(677263),
                            MinuteOfHour: sdk.Int64(100294),
                            Password: sdk.String("quae"),
                            Paused: sdk.Bool(false),
                            TimeZone: sdk.String("aut"),
                            Username: sdk.String("Kayleigh66"),
                            Weekday: sdk.String("repellendus"),
                        },
                        FileName: sdk.String("porro"),
                        Format: &shared.DatafeedFormat{
                            ColumnDelimiter: sdk.String("doloribus"),
                            FileEncoding: sdk.String("ut"),
                            QuotingMode: sdk.String("facilis"),
                        },
                        ID: sdk.String("cupiditate"),
                        IntendedDestinations: []string{
                            "quae",
                        },
                        Kind: sdk.String("laudantium"),
                        Name: sdk.String("Toni Wolff"),
                        TargetCountry: sdk.String("omnis"),
                        Targets: []shared.DatafeedTarget{
                            shared.DatafeedTarget{
                                Country: sdk.String("Cuba"),
                                ExcludedDestinations: []string{
                                    "voluptate",
                                    "consectetur",
                                    "vero",
                                    "tenetur",
                                },
                                IncludedDestinations: []string{
                                    "hic",
                                    "distinctio",
                                },
                                Language: sdk.String("quod"),
                            },
                            shared.DatafeedTarget{
                                Country: sdk.String("Latvia"),
                                ExcludedDestinations: []string{
                                    "facilis",
                                    "vero",
                                    "ducimus",
                                },
                                IncludedDestinations: []string{
                                    "quibusdam",
                                    "illum",
                                },
                                Language: sdk.String("sequi"),
                            },
                        },
                    },
                    DatafeedID: sdk.String("natus"),
                    MerchantID: sdk.String("impedit"),
                    Method: sdk.String("aut"),
                },
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("fugit"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("eligendi"),
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
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        DatafeedID: "ipsam",
        DryRun: sdk.Bool(false),
        Fields: sdk.String("ea"),
        Key: sdk.String("aspernatur"),
        MerchantID: "vel",
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("ratione"),
        UploadProtocol: sdk.String("ex"),
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

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.

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
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        DatafeedID: "quasi",
        DryRun: sdk.Bool(false),
        Fields: sdk.String("ex"),
        Key: sdk.String("nulla"),
        MerchantID: "excepturi",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quisquam"),
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
        AccessToken: sdk.String("ea"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        DatafeedID: "veniam",
        Fields: sdk.String("aliquid"),
        Key: sdk.String("inventore"),
        MerchantID: "magnam",
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("recusandae"),
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
            AttributeLanguage: sdk.String("minima"),
            ContentLanguage: sdk.String("eaque"),
            ContentType: sdk.String("a"),
            FetchSchedule: &shared.DatafeedFetchSchedule{
                DayOfMonth: sdk.Int64(725595),
                FetchURL: sdk.String("aut"),
                Hour: sdk.Int64(11427),
                MinuteOfHour: sdk.Int64(533466),
                Password: sdk.String("impedit"),
                Paused: sdk.Bool(false),
                TimeZone: sdk.String("aliquam"),
                Username: sdk.String("Caesar25"),
                Weekday: sdk.String("et"),
            },
            FileName: sdk.String("dolorum"),
            Format: &shared.DatafeedFormat{
                ColumnDelimiter: sdk.String("laborum"),
                FileEncoding: sdk.String("placeat"),
                QuotingMode: sdk.String("velit"),
            },
            ID: sdk.String("eum"),
            IntendedDestinations: []string{
                "nobis",
                "quas",
            },
            Kind: sdk.String("assumenda"),
            Name: sdk.String("Mrs. Shane Reinger"),
            TargetCountry: sdk.String("explicabo"),
            Targets: []shared.DatafeedTarget{
                shared.DatafeedTarget{
                    Country: sdk.String("Austria"),
                    ExcludedDestinations: []string{
                        "magnam",
                        "odio",
                    },
                    IncludedDestinations: []string{
                        "esse",
                        "esse",
                    },
                    Language: sdk.String("rem"),
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Palestinian Territory"),
                    ExcludedDestinations: []string{
                        "quidem",
                        "fugiat",
                    },
                    IncludedDestinations: []string{
                        "eum",
                        "suscipit",
                    },
                    Language: sdk.String("assumenda"),
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Christmas Island"),
                    ExcludedDestinations: []string{
                        "quisquam",
                        "veritatis",
                        "ipsa",
                    },
                    IncludedDestinations: []string{
                        "quidem",
                        "neque",
                        "quo",
                    },
                    Language: sdk.String("illum"),
                },
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("eos"),
        Key: sdk.String("voluptas"),
        MerchantID: "ab",
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("esse"),
        Key: sdk.String("recusandae"),
        MaxResults: sdk.Int64(44612),
        MerchantID: "distinctio",
        OauthToken: sdk.String("quod"),
        PageToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("totam"),
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
            AttributeLanguage: sdk.String("aliquam"),
            ContentLanguage: sdk.String("odio"),
            ContentType: sdk.String("occaecati"),
            FetchSchedule: &shared.DatafeedFetchSchedule{
                DayOfMonth: sdk.Int64(414567),
                FetchURL: sdk.String("sapiente"),
                Hour: sdk.Int64(174112),
                MinuteOfHour: sdk.Int64(645570),
                Password: sdk.String("molestiae"),
                Paused: sdk.Bool(false),
                TimeZone: sdk.String("accusantium"),
                Username: sdk.String("Ottilie_Keeling"),
                Weekday: sdk.String("consequuntur"),
            },
            FileName: sdk.String("deleniti"),
            Format: &shared.DatafeedFormat{
                ColumnDelimiter: sdk.String("fugit"),
                FileEncoding: sdk.String("fuga"),
                QuotingMode: sdk.String("mollitia"),
            },
            ID: sdk.String("incidunt"),
            IntendedDestinations: []string{
                "explicabo",
                "minima",
                "nisi",
            },
            Kind: sdk.String("fugit"),
            Name: sdk.String("Eugene Dibbert"),
            TargetCountry: sdk.String("occaecati"),
            Targets: []shared.DatafeedTarget{
                shared.DatafeedTarget{
                    Country: sdk.String("Benin"),
                    ExcludedDestinations: []string{
                        "eveniet",
                        "accusamus",
                    },
                    IncludedDestinations: []string{
                        "esse",
                    },
                    Language: sdk.String("quod"),
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Qatar"),
                    ExcludedDestinations: []string{
                        "aliquid",
                        "quasi",
                        "saepe",
                        "vel",
                    },
                    IncludedDestinations: []string{
                        "molestiae",
                        "rerum",
                        "occaecati",
                    },
                    Language: sdk.String("minima"),
                },
                shared.DatafeedTarget{
                    Country: sdk.String("Portugal"),
                    ExcludedDestinations: []string{
                        "sit",
                        "culpa",
                        "tempore",
                        "adipisci",
                    },
                    IncludedDestinations: []string{
                        "consequuntur",
                        "consequatur",
                        "minus",
                        "quaerat",
                    },
                    Language: sdk.String("sapiente"),
                },
            },
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        DatafeedID: "provident",
        DryRun: sdk.Bool(false),
        Fields: sdk.String("a"),
        Key: sdk.String("nulla"),
        MerchantID: "quas",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("error"),
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
