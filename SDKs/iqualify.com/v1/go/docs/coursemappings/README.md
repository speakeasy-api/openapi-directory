# CourseMappings

### Available Operations

* [DeleteCourseMappingsOfferingIDExternalCourseID](#deletecoursemappingsofferingidexternalcourseid) - Remove course mapping
* [GetCourseMappings](#getcoursemappings) - Find course mappings
* [GetCourseMappingsExternalcourseExternalCourseID](#getcoursemappingsexternalcourseexternalcourseid) - Find course mappings by externalCourseId
* [GetCourseMappingsOfferingID](#getcoursemappingsofferingid) - Find course mappings by offeringId
* [PutCourseMappingsOfferingIDExternalCourseID](#putcoursemappingsofferingidexternalcourseid) - Add course mapping

## DeleteCourseMappingsOfferingIDExternalCourseID

Removes the course mapping between the offering and the externalCourseId.

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
    res, err := s.CourseMappings.DeleteCourseMappingsOfferingIDExternalCourseID(ctx, operations.DeleteCourseMappingsOfferingIDExternalCourseIDRequest{
        ExternalCourseID: "repellat",
        OfferingID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCourseMappingsOfferingIDExternalCourseID200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetCourseMappings

Returns all course mappings for course offerings.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CourseMappings.GetCourseMappings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseMappings != nil {
        // handle response
    }
}
```

## GetCourseMappingsExternalcourseExternalCourseID

Responds with course mapping details by externalCourseId.

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
    res, err := s.CourseMappings.GetCourseMappingsExternalcourseExternalCourseID(ctx, operations.GetCourseMappingsExternalcourseExternalCourseIDRequest{
        ExternalCourseID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCourseMappingsExternalcourseExternalCourseID200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetCourseMappingsOfferingID

Responds with course mapping details by offeringId.

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
    res, err := s.CourseMappings.GetCourseMappingsOfferingID(ctx, operations.GetCourseMappingsOfferingIDRequest{
        OfferingID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCourseMappingsOfferingID200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## PutCourseMappingsOfferingIDExternalCourseID

Creates a mapping between the offering and the externalCourseId.

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
    res, err := s.CourseMappings.PutCourseMappingsOfferingIDExternalCourseID(ctx, operations.PutCourseMappingsOfferingIDExternalCourseIDRequest{
        ExternalCourseID: "commodi",
        OfferingID: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutCourseMappingsOfferingIDExternalCourseID200ApplicationJSONStrings != nil {
        // handle response
    }
}
```
