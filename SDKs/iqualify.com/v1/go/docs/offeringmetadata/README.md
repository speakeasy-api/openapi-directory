# OfferingMetadata

### Available Operations

* [PutOfferingsOfferingIDMetadataCategory](#putofferingsofferingidmetadatacategory) - Update offering category metadata
* [PutOfferingsOfferingIDMetadataLevel](#putofferingsofferingidmetadatalevel) - Update offering level metadata
* [PutOfferingsOfferingIDMetadataTags](#putofferingsofferingidmetadatatags) - Update offering tags metadata
* [PutOfferingsOfferingIDMetadataTopic](#putofferingsofferingidmetadatatopic) - Update offering topic metadata

## PutOfferingsOfferingIDMetadataCategory

Updates the offering category metadata.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OfferingMetadata.PutOfferingsOfferingIDMetadataCategory(ctx, operations.PutOfferingsOfferingIDMetadataCategoryRequest{
        RequestBody: operations.PutOfferingsOfferingIDMetadataCategoryRequestBody{
            Category: sdk.String("dolor"),
        },
        OfferingID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```

## PutOfferingsOfferingIDMetadataLevel

Updates the offering level metadata.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OfferingMetadata.PutOfferingsOfferingIDMetadataLevel(ctx, operations.PutOfferingsOfferingIDMetadataLevelRequest{
        RequestBody: operations.PutOfferingsOfferingIDMetadataLevelRequestBody{
            Level: sdk.String("a"),
        },
        OfferingID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```

## PutOfferingsOfferingIDMetadataTags

Updates the offering tags metadata.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OfferingMetadata.PutOfferingsOfferingIDMetadataTags(ctx, operations.PutOfferingsOfferingIDMetadataTagsRequest{
        RequestBody: operations.PutOfferingsOfferingIDMetadataTagsRequestBody{
            Tags: []string{
                "in",
                "illum",
            },
        },
        OfferingID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```

## PutOfferingsOfferingIDMetadataTopic

Updates the offering topic metadata.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OfferingMetadata.PutOfferingsOfferingIDMetadataTopic(ctx, operations.PutOfferingsOfferingIDMetadataTopicRequest{
        RequestBody: operations.PutOfferingsOfferingIDMetadataTopicRequestBody{
            Topic: sdk.String("rerum"),
        },
        OfferingID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingMetadataResponse != nil {
        // handle response
    }
}
```
