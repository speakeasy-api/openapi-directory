# Filters

### Available Operations

* [GetSearchVersionNumberGeometryFilterExt](#getsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~GetSearchVersionNumberRoutedFilterPositionHeadingExt~~](#getsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**
* [PostSearchVersionNumberGeometryFilterExt](#postsearchversionnumbergeometryfilterext) - Geometry Filter
* [~~PostSearchVersionNumberRoutedFilterPositionHeadingExt~~](#postsearchversionnumberroutedfilterpositionheadingext) - Routed Filter :warning: **Deprecated**

## GetSearchVersionNumberGeometryFilterExt

Geometry Filter

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
    res, err := s.Filters.GetSearchVersionNumberGeometryFilterExt(ctx, operations.GetSearchVersionNumberGeometryFilterExtRequest{
        Ext: shared.ExtEnumJs,
        GeometryList: "nulla",
        PoiList: "corrupti",
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

## ~~GetSearchVersionNumberRoutedFilterPositionHeadingExt~~

Routed Filter

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
    res, err := s.Filters.GetSearchVersionNumberRoutedFilterPositionHeadingExt(ctx, operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest{
        Ext: shared.ExtEnumXML,
        Heading: 4236.55,
        PoiList: "error",
        Position: "deserunt",
        RoutingTimeout: sdk.Int64(384382),
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

## PostSearchVersionNumberGeometryFilterExt

Geometry Filter

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
    res, err := s.Filters.PostSearchVersionNumberGeometryFilterExt(ctx, operations.PostSearchVersionNumberGeometryFilterExtRequest{
        RequestBody: &operations.PostSearchVersionNumberGeometryFilterExtRequestBody{
            GeometryList: []PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList{
                operations.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList{
                    Position: sdk.String("magnam"),
                    Radius: sdk.Int64(891773),
                    Type: sdk.String("ipsa"),
                    Vertices: []string{
                        "tempora",
                        "suscipit",
                        "molestiae",
                        "minus",
                    },
                },
                operations.PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList{
                    Position: sdk.String("placeat"),
                    Radius: sdk.Int64(528895),
                    Type: sdk.String("iusto"),
                    Vertices: []string{
                        "nisi",
                        "recusandae",
                        "temporibus",
                    },
                },
            },
            PoiList: []PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList{
                operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList{
                    Address: &operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress{
                        FreeformAddress: sdk.String("quis"),
                    },
                    Poi: &operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi{
                        Name: sdk.String("Iris Aufderhar"),
                    },
                    Position: &operations.PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition{
                        Lat: sdk.Float32(9571.56),
                        Lon: sdk.Float32(7781.57),
                    },
                },
            },
        },
        Ext: shared.ExtEnumJSON,
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

## ~~PostSearchVersionNumberRoutedFilterPositionHeadingExt~~

Routed Filter

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
    res, err := s.Filters.PostSearchVersionNumberRoutedFilterPositionHeadingExt(ctx, operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest{
        RequestBody: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody{
            PoiList: []PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList{
                operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList{
                    Address: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress{
                        FreeformAddress: sdk.String("at"),
                    },
                    Poi: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi{
                        Name: sdk.String("Javier Schmidt"),
                    },
                    Position: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition{
                        Lat: sdk.Float32(5204.78),
                        Lon: sdk.Float32(7805.29),
                    },
                },
                operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList{
                    Address: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress{
                        FreeformAddress: sdk.String("dolorum"),
                    },
                    Poi: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi{
                        Name: sdk.String("Antoinette Nikolaus"),
                    },
                    Position: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition{
                        Lat: sdk.Float32(5373.73),
                        Lon: sdk.Float32(9446.69),
                    },
                },
                operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList{
                    Address: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress{
                        FreeformAddress: sdk.String("optio"),
                    },
                    Poi: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi{
                        Name: sdk.String("Jack Johns"),
                    },
                    Position: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition{
                        Lat: sdk.Float32(1863.32),
                        Lon: sdk.Float32(7742.34),
                    },
                },
                operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList{
                    Address: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress{
                        FreeformAddress: sdk.String("cum"),
                    },
                    Poi: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi{
                        Name: sdk.String("Edna Mante II"),
                    },
                    Position: &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition{
                        Lat: sdk.Float32(6176.36),
                        Lon: sdk.Float32(1496.75),
                    },
                },
            },
        },
        Ext: shared.ExtEnumJs,
        Heading: 2223.21,
        Position: "natus",
        RoutingTimeout: sdk.Int64(386489),
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
