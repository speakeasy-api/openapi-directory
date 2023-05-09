# Resources

### Available Operations

* [GetAreas](#getareas) - Lists the geographical areas (e.g. districts) that can be used to filter events.
* [GetEvents](#getevents) - Lists road events
* [GetJurisdiction](#getjurisdiction) - Lists the jurisdictions publishing data through this Open511 API implementation
* [GetJurisdictiongeography](#getjurisdictiongeography) - Provides the geographical boundaries for all the jurisdictions.

## GetAreas

Lists the geographical areas (e.g. districts) that can be used to filter events.

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
    res, err := s.Resources.GetAreas(ctx, operations.GetAreasRequest{
        Format: operations.GetAreasFormatEnumXML.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetEvents

The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 

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
    res, err := s.Resources.GetEvents(ctx, operations.GetEventsRequest{
        AreaID: sdk.String("distinctio"),
        Bbox: sdk.String("quibusdam"),
        Created: sdk.String("unde"),
        EventType: operations.GetEventsEventTypeEnumRoadCondition.ToPointer(),
        Format: operations.GetEventsFormatEnumXML.ToPointer(),
        Jurisdiction: sdk.String("illum"),
        RoadName: sdk.String("vel"),
        Severity: sdk.String("error"),
        Status: operations.GetEventsStatusEnumActive.ToPointer(),
        Updated: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJurisdiction

Lists the jurisdictions publishing data through this Open511 API implementation

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
    res, err := s.Resources.GetJurisdiction(ctx, operations.GetJurisdictionRequest{
        Format: operations.GetJurisdictionFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJurisdictiongeography

Provides the geographical boundaries for all the jurisdictions.

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
    res, err := s.Resources.GetJurisdictiongeography(ctx, operations.GetJurisdictiongeographyRequest{
        Format: operations.GetJurisdictiongeographyFormatEnumJSON.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
