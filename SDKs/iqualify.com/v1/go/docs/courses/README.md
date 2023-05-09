# Courses

### Available Operations

* [GetCourses](#getcourses) - Find courses
* [GetCoursesContentID](#getcoursescontentid) - Find course by contentId
* [GetCoursesContentIDActivations](#getcoursescontentidactivations) - Find activations for a contentId
* [GetCoursesContentIDPermissions](#getcoursescontentidpermissions) - Find users who have access to the contentId provided
* [PostCoursesRootContentIDPermissionsUserEmail](#postcoursesrootcontentidpermissionsuseremail) - Update course access

## GetCourses

Responds with all courses (draft and published.)

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
    res, err := s.Courses.GetCourses(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseResponses != nil {
        // handle response
    }
}
```

## GetCoursesContentID

Responds with a course matching the contentId.

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
    res, err := s.Courses.GetCoursesContentID(ctx, operations.GetCoursesContentIDRequest{
        ContentID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CourseMetaResponse != nil {
        // handle response
    }
}
```

## GetCoursesContentIDActivations

Responds with all activations for the contentId provided.

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
    res, err := s.Courses.GetCoursesContentIDActivations(ctx, operations.GetCoursesContentIDActivationsRequest{
        ContentID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivationResponse != nil {
        // handle response
    }
}
```

## GetCoursesContentIDPermissions

Responds with users who have access to a specific course by contentId.

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
    res, err := s.Courses.GetCoursesContentIDPermissions(ctx, operations.GetCoursesContentIDPermissionsRequest{
        ContentID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserPermission != nil {
        // handle response
    }
}
```

## PostCoursesRootContentIDPermissionsUserEmail

Provide a user with access to a specific course by rootContentId.

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
    res, err := s.Courses.PostCoursesRootContentIDPermissionsUserEmail(ctx, operations.PostCoursesRootContentIDPermissionsUserEmailRequest{
        RequestBody: operations.PostCoursesRootContentIDPermissionsUserEmailPermissionToBeGrantedToTheUser{
            IsBuilder: sdk.Bool(false),
            IsReviewer: sdk.Bool(false),
        },
        RootContentID: "ipsam",
        UserEmail: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCoursesRootContentIDPermissionsUserEmail201ApplicationJSONObject != nil {
        // handle response
    }
}
```
