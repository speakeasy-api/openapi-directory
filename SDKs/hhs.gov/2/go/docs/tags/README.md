# Tags

## Overview

Information about tags

### Available Operations

* [GetResourcesTagsFormat](#getresourcestagsformat) - Get Tags
* [GetResourcesTagsTagLanguagesFormat](#getresourcestagstaglanguagesformat) - Get TagLanguages
* [GetResourcesTagsTagTypesFormat](#getresourcestagstagtypesformat) - Get MediaItems for Tag
* [GetResourcesTagsIDFormat](#getresourcestagsidformat) - Get Tag by ID
* [GetResourcesTagsIDMediaFormat](#getresourcestagsidmediaformat) - Get MediaItems for Tag
* [GetResourcesTagsIDRelatedFormat](#getresourcestagsidrelatedformat) - Get related Tags by ID
* [GetResourcesTagsIDSyndicateFormat](#getresourcestagsidsyndicateformat) - Get MediaItems for Tag

## GetResourcesTagsFormat

List of Tags

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
    res, err := s.Tags.GetResourcesTagsFormat(ctx, operations.GetResourcesTagsFormatRequest{
        Format: "laborum",
        Max: sdk.Int(96098),
        MediaID: sdk.Int64(971945),
        Name: sdk.String("Caleb Koss"),
        NameContains: sdk.String("ipsa"),
        Offset: sdk.Int(604846),
        Sort: sdk.String("voluptate"),
        TypeID: sdk.Int64(739264),
        TypeName: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagMarshallerWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesTagsTagLanguagesFormat

List of Tag Languages

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
    res, err := s.Tags.GetResourcesTagsTagLanguagesFormat(ctx, operations.GetResourcesTagsTagLanguagesFormatRequest{
        Format: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagLanguageMarshallerWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesTagsTagTypesFormat

List of Types

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
    res, err := s.Tags.GetResourcesTagsTagTypesFormat(ctx, operations.GetResourcesTagsTagTypesFormatRequest{
        Format: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagTypeMarshallerWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesTagsIDFormat

Information about a specific tag

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
    res, err := s.Tags.GetResourcesTagsIDFormat(ctx, operations.GetResourcesTagsIDFormatRequest{
        Format: "ut",
        ID: 979587,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagMarshallerWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesTagsIDMediaFormat

MediaItem

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
    res, err := s.Tags.GetResourcesTagsIDMediaFormat(ctx, operations.GetResourcesTagsIDMediaFormatRequest{
        Format: "dicta",
        ID: 359444,
        Max: sdk.Int(296140),
        Offset: sdk.Int(480894),
        Sort: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaItemWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesTagsIDRelatedFormat

Information about related tags to a specific tag

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
    res, err := s.Tags.GetResourcesTagsIDRelatedFormat(ctx, operations.GetResourcesTagsIDRelatedFormatRequest{
        Format: "harum",
        ID: 317983,
        Max: sdk.Int(880476),
        Offset: sdk.Int(414263),
        Sort: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagMarshallerWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesTagsIDSyndicateFormat

MediaItem

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
    res, err := s.Tags.GetResourcesTagsIDSyndicateFormat(ctx, operations.GetResourcesTagsIDSyndicateFormatRequest{
        DisplayMethod: sdk.String("quae"),
        Format: "ipsum",
        ID: 692472,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcesTagsIDSyndicateFormat200ApplicationJSONString != nil {
        // handle response
    }
}
```
