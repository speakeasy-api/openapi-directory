# Feature

### Available Operations

* [GetFeature](#getfeature) - Feature Detail
* [ListFeatureTypes](#listfeaturetypes) - Feature Type Collection
* [ListFeatures](#listfeatures) - Feature Collection

## GetFeature

Return the content of the selected feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Feature.GetFeature(ctx, operations.GetFeatureRequest{
        FeatureID: "excepturi",
    }, operations.GetFeatureSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFeature200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListFeatureTypes

Return a collection of Feature Types.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Feature.ListFeatureTypes(ctx, operations.ListFeatureTypesSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeatureTypes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListFeatures

Return a collection of Feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Feature.ListFeatures(ctx, operations.ListFeaturesRequest{
        Date: sdk.String("nisi"),
        End: sdk.String("recusandae"),
        Start: sdk.String("temporibus"),
        Type: sdk.String("ab"),
    }, operations.ListFeaturesSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFeatures200ApplicationJSONObject != nil {
        // handle response
    }
}
```
