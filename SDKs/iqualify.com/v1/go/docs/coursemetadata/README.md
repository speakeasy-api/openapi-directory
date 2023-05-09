# CourseMetadata

### Available Operations

* [PutCoursesContentIDMetadataCategory](#putcoursescontentidmetadatacategory) - Update course category
* [PutCoursesContentIDMetadataLevel](#putcoursescontentidmetadatalevel) - Update course level
* [PutCoursesContentIDMetadataTags](#putcoursescontentidmetadatatags) - Update course tags
* [PutCoursesContentIDMetadataTopic](#putcoursescontentidmetadatatopic) - Update course topic

## PutCoursesContentIDMetadataCategory

Add or update course category in the metadata of a course.

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
    res, err := s.CourseMetadata.PutCoursesContentIDMetadataCategory(ctx, operations.PutCoursesContentIDMetadataCategoryRequest{
        RequestBody: operations.PutCoursesContentIDMetadataCategoryRequestBody{
            Category: sdk.String("molestiae"),
        },
        ContentID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseMetaResponse != nil {
        // handle response
    }
}
```

## PutCoursesContentIDMetadataLevel

Add or update the course level in the metadata of a course.

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
    res, err := s.CourseMetadata.PutCoursesContentIDMetadataLevel(ctx, operations.PutCoursesContentIDMetadataLevelRequest{
        RequestBody: operations.PutCoursesContentIDMetadataLevelRequestBody{
            Level: sdk.String("error"),
        },
        ContentID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseMetaResponse != nil {
        // handle response
    }
}
```

## PutCoursesContentIDMetadataTags

Add or update course tags in the metadata of a course.

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
    res, err := s.CourseMetadata.PutCoursesContentIDMetadataTags(ctx, operations.PutCoursesContentIDMetadataTagsRequest{
        RequestBody: operations.PutCoursesContentIDMetadataTagsRequestBody{
            Tags: []string{
                "vitae",
                "laborum",
            },
        },
        ContentID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseMetaResponse != nil {
        // handle response
    }
}
```

## PutCoursesContentIDMetadataTopic

Add or update the course topic in the metadata of a course.

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
    res, err := s.CourseMetadata.PutCoursesContentIDMetadataTopic(ctx, operations.PutCoursesContentIDMetadataTopicRequest{
        RequestBody: operations.PutCoursesContentIDMetadataTopicRequestBody{
            Topic: sdk.String("enim"),
        },
        ContentID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseMetaResponse != nil {
        // handle response
    }
}
```
