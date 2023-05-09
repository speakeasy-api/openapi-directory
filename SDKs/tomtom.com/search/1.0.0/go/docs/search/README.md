# Search

### Available Operations

* [~~GetSearchVersionNumberCSCategoryExt~~](#getsearchversionnumbercscategoryext) - Low Bandwith Category Search :warning: **Deprecated**
* [GetSearchVersionNumberCategorySearchQueryExt](#getsearchversionnumbercategorysearchqueryext) - Category Search
* [GetSearchVersionNumberGeometrySearchQueryExt](#getsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [GetSearchVersionNumberNearbySearchExt](#getsearchversionnumbernearbysearchext) - Nearby Search
* [GetSearchVersionNumberPoiSearchQueryExt](#getsearchversionnumberpoisearchqueryext) - Points of Interest Search
* [~~GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~](#getsearchversionnumberroutedsearchquerypositionheadingext) - Routed Search :warning: **Deprecated**
* [~~GetSearchVersionNumberSQueryExt~~](#getsearchversionnumbersqueryext) - Low bandwith Search :warning: **Deprecated**
* [GetSearchVersionNumberSearchQueryExt](#getsearchversionnumbersearchqueryext) - Fuzzy Search
* [PostSearchVersionNumberGeometrySearchQueryExt](#postsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [PostSearchVersionNumberSearchAlongRouteQueryExt](#postsearchversionnumbersearchalongroutequeryext) - Along Route Search

## ~~GetSearchVersionNumberCSCategoryExt~~

Low Bandwith Category Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberCSCategoryExt(ctx, operations.GetSearchVersionNumberCSCategoryExtRequest{
        BtmRight: sdk.String("vitae"),
        Category: "laborum",
        CountrySet: sdk.String("animi"),
        Ext: shared.ExtEnumJsonp,
        IdxSet: sdk.String("odit"),
        Language: sdk.String("quo"),
        Lat: sdk.Float32(1965.82),
        Limit: sdk.Int64(949572),
        Lon: sdk.Float32(3687.25),
        Ofs: sdk.Int64(662527),
        Radius: sdk.Int64(820994),
        TopLeft: sdk.String("aut"),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumUnified.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberCategorySearchQueryExt

Category Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberCategorySearchQueryExt(ctx, operations.GetSearchVersionNumberCategorySearchQueryExtRequest{
        BtmRight: sdk.String("error"),
        CountrySet: sdk.String("temporibus"),
        Ext: shared.ExtEnumJs,
        ExtendedPostalCodesFor: sdk.String("quasi"),
        Language: sdk.String("reiciendis"),
        Lat: sdk.Float32(9764.6),
        Limit: sdk.Int64(878194),
        Lon: sdk.Float32(4686.51),
        Ofs: sdk.Int64(509624),
        Query: "voluptatibus",
        Radius: sdk.Int64(55714),
        TopLeft: sdk.String("omnis"),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumPk.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberGeometrySearchQueryExt

Geometry Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberGeometrySearchQueryExt(ctx, operations.GetSearchVersionNumberGeometrySearchQueryExtRequest{
        Ext: shared.ExtEnumJs,
        ExtendedPostalCodesFor: sdk.String("perferendis"),
        GeometryList: sdk.String("doloremque"),
        IdxSet: sdk.String("reprehenderit"),
        Language: sdk.String("ut"),
        Limit: sdk.Int64(979587),
        Query: "dicta",
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberNearbySearchExt

Nearby Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberNearbySearchExt(ctx, operations.GetSearchVersionNumberNearbySearchExtRequest{
        BtmRight: sdk.String("corporis"),
        CountrySet: sdk.String("dolore"),
        Ext: shared.ExtEnumJsonp,
        ExtendedPostalCodesFor: sdk.String("dicta"),
        IdxSet: sdk.String("harum"),
        Language: sdk.String("enim"),
        Lat: 8804.76,
        Limit: sdk.Int64(414263),
        Lon: 9182.36,
        MaxFuzzyLevel: sdk.Int64(64147),
        MinFuzzyLevel: sdk.Int64(216822),
        Ofs: sdk.Int64(692472),
        Radius: sdk.Int64(565189),
        TopLeft: sdk.String("excepturi"),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumMa.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberPoiSearchQueryExt

Points of Interest Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberPoiSearchQueryExt(ctx, operations.GetSearchVersionNumberPoiSearchQueryExtRequest{
        BtmRight: sdk.String("modi"),
        CountrySet: sdk.String("praesentium"),
        Ext: shared.ExtEnumJs,
        ExtendedPostalCodesFor: sdk.String("voluptates"),
        Language: sdk.String("quasi"),
        Lat: sdk.Float32(9211.58),
        Limit: sdk.Int64(575947),
        Lon: sdk.Float32(831.12),
        Ofs: sdk.Int64(929297),
        Query: "incidunt",
        Radius: sdk.Int64(318569),
        TopLeft: sdk.String("consequatur"),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumIl.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~

Routed Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt(ctx, operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest{
        Ext: shared.ExtEnumXML,
        ExtendedPostalCodesFor: sdk.String("explicabo"),
        Heading: 6471.74,
        IdxSet: sdk.String("distinctio"),
        Language: sdk.String("quibusdam"),
        Limit: sdk.Int64(289406),
        Multiplier: sdk.Int64(264730),
        Position: "qui",
        Query: "aliquid",
        RoutingTimeout: sdk.Int64(586513),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~GetSearchVersionNumberSQueryExt~~

Low bandwith Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberSQueryExt(ctx, operations.GetSearchVersionNumberSQueryExtRequest{
        BtmRight: sdk.String("quos"),
        CountrySet: sdk.String("perferendis"),
        Ext: shared.ExtEnumJSON,
        IdxSet: sdk.String("assumenda"),
        Language: sdk.String("ipsam"),
        Lat: sdk.Float32(46.95),
        Limit: sdk.Int64(146441),
        Lon: sdk.Float32(6778.17),
        Ofs: sdk.Int64(569618),
        Query: "tempora",
        Radius: sdk.Int64(703737),
        TopLeft: sdk.String("tempore"),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumIn.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSearchVersionNumberSearchQueryExt

Fuzzy Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.GetSearchVersionNumberSearchQueryExt(ctx, operations.GetSearchVersionNumberSearchQueryExtRequest{
        BtmRight: sdk.String("delectus"),
        CountrySet: sdk.String("eum"),
        Ext: shared.ExtEnumJSON,
        ExtendedPostalCodesFor: sdk.String("eligendi"),
        IdxSet: sdk.String("sint"),
        Language: sdk.String("aliquid"),
        Lat: sdk.Float32(5920.42),
        Limit: sdk.Int64(896039),
        Lon: sdk.Float32(5722.52),
        MaxFuzzyLevel: sdk.Int64(638921),
        MinFuzzyLevel: sdk.Int64(223081),
        Ofs: sdk.Int64(891555),
        Query: "a",
        Radius: sdk.Int64(680056),
        TopLeft: sdk.String("in"),
        Typeahead: sdk.Bool(false),
        VersionNumber: shared.VersionNumberEnumTwo,
        View: shared.ViewEnumPk.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSearchVersionNumberGeometrySearchQueryExt

Geometry Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.PostSearchVersionNumberGeometrySearchQueryExt(ctx, operations.PostSearchVersionNumberGeometrySearchQueryExtRequest{
        RequestBody: &operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBody{
            GeometryList: []PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList{
                operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList{
                    Position: sdk.String("maiores"),
                    Radius: sdk.Int64(699479),
                    Type: sdk.String("dicta"),
                    Vertices: []string{
                        "cumque",
                        "facere",
                    },
                },
                operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList{
                    Position: sdk.String("ea"),
                    Radius: sdk.Int64(396506),
                    Type: sdk.String("laborum"),
                    Vertices: []string{
                        "non",
                        "occaecati",
                        "enim",
                        "accusamus",
                    },
                },
                operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList{
                    Position: sdk.String("delectus"),
                    Radius: sdk.Int64(692532),
                    Type: sdk.String("provident"),
                    Vertices: []string{
                        "id",
                        "blanditiis",
                        "deleniti",
                    },
                },
                operations.PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList{
                    Position: sdk.String("sapiente"),
                    Radius: sdk.Int64(230533),
                    Type: sdk.String("deserunt"),
                    Vertices: []string{
                        "vel",
                        "natus",
                    },
                },
            },
        },
        Ext: shared.ExtEnumJs,
        ExtendedPostalCodesFor: sdk.String("molestiae"),
        IdxSet: sdk.String("perferendis"),
        Language: sdk.String("nihil"),
        Limit: sdk.Int64(301575),
        Query: "distinctio",
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostSearchVersionNumberSearchAlongRouteQueryExt

Along Route Search

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Search.PostSearchVersionNumberSearchAlongRouteQueryExt(ctx, operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest{
        RequestBody: &operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody{
            Route: &operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute{
                Points: []PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints{
                    operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints{
                        Lat: sdk.Float32(2879.91),
                        Lon: sdk.Float32(2900.77),
                    },
                    operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints{
                        Lat: sdk.Float32(3834.62),
                        Lon: sdk.Float32(6180.16),
                    },
                    operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints{
                        Lat: sdk.Float32(7491.7),
                        Lon: sdk.Float32(4287.69),
                    },
                },
            },
        },
        Ext: shared.ExtEnumXML,
        Limit: sdk.Int64(135474),
        MaxDetourTime: 102863,
        Query: "magnam",
        VersionNumber: shared.VersionNumberEnumTwo,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
