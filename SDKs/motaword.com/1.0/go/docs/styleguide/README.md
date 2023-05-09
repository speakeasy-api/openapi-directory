# StyleGuide

### Available Operations

* [CreateStyleGuideJSON](#createstyleguidejson) - Upload a new style guide
* [CreateStyleGuideMultipart](#createstyleguidemultipart) - Upload a new style guide
* [DeleteStyleGuide](#deletestyleguide) - Delete a style guide
* [DownloadGlobalStyleGuide](#downloadglobalstyleguide) - Download account style guide
* [DownloadStyleGuide](#downloadstyleguide) - Download a style guide
* [GetStyleGuide](#getstyleguide) - View a style guide
* [GetStyleGuides](#getstyleguides) - View style guides
* [UpdateGlobalStyleGuideJSON](#updateglobalstyleguidejson) - Create or update the account style guide
* [UpdateGlobalStyleGuideMultipart](#updateglobalstyleguidemultipart) - Create or update the account style guide
* [UpdateStyleGuideJSON](#updatestyleguidejson) - Update a style guide
* [UpdateStyleGuideMultipart](#updatestyleguidemultipart) - Update a style guide

## CreateStyleGuideJSON

Upload a new style guide

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.CreateStyleGuideJSON(ctx, operations.CreateStyleGuideJSONRequest{
        StyleGuideUploadRequest: &shared.StyleGuideUploadRequest{
            Styleguides: []byte("fugiat"),
        },
        ProjectID: 424089,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleGuideList != nil {
        // handle response
    }
}
```

## CreateStyleGuideMultipart

Upload a new style guide

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.CreateStyleGuideMultipart(ctx, operations.CreateStyleGuideMultipartRequest{
        StyleGuideUploadRequest1: &shared.StyleGuideUploadRequest1{
            Styleguides: shared.StyleGuideUploadRequestStyleguides{
                Content: []byte("ducimus"),
                Styleguides: "quos",
            },
        },
        ProjectID: 427834,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleGuideList != nil {
        // handle response
    }
}
```

## DeleteStyleGuide

Delete the existing style guide from the project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.DeleteStyleGuide(ctx, operations.DeleteStyleGuideRequest{
        ProjectID: 287051,
        StyleGuideID: 822560,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## DownloadGlobalStyleGuide

Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.DownloadGlobalStyleGuide(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadGlobalStyleGuide200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DownloadStyleGuide

Download a previously uploaded style guide file.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.DownloadStyleGuide(ctx, operations.DownloadStyleGuideRequest{
        ProjectID: 706575,
        StyleGuideID: 738227,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DownloadStyleGuide200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetStyleGuide

View the details of a style guide uploaded to a project

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.GetStyleGuide(ctx, operations.GetStyleGuideRequest{
        ProjectID: 414857,
        StyleGuideID: 447144,
        With: []GetStyleGuideWithEnum{
            operations.GetStyleGuideWithEnumPreview,
            operations.GetStyleGuideWithEnumPreview,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleGuide != nil {
        // handle response
    }
}
```

## GetStyleGuides

View a list of style guides in your project.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.GetStyleGuides(ctx, operations.GetStyleGuidesRequest{
        ProjectID: 968904,
        With: []GetStyleGuidesWithEnum{
            operations.GetStyleGuidesWithEnumPreview,
            operations.GetStyleGuidesWithEnumPreview,
            operations.GetStyleGuidesWithEnumPreview,
            operations.GetStyleGuidesWithEnumPreview,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleGuideList != nil {
        // handle response
    }
}
```

## UpdateGlobalStyleGuideJSON

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.UpdateGlobalStyleGuideJSON(ctx, shared.AccountStyleGuideUploadRequest{
        Styleguide: []byte("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdateGlobalStyleGuideMultipart

Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.UpdateGlobalStyleGuideMultipart(ctx, shared.AccountStyleGuideUploadRequest1{
        Styleguide: shared.AccountStyleGuideUploadRequestStyleguide{
            Content: []byte("recusandae"),
            Styleguide: "aliquid",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## UpdateStyleGuideJSON

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.UpdateStyleGuideJSON(ctx, operations.UpdateStyleGuideJSONRequest{
        StyleGuideUploadRequest: &shared.StyleGuideUploadRequest{
            Styleguides: []byte("aperiam"),
        },
        ProjectID: 738683,
        StyleGuideID: 232627,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleGuide != nil {
        // handle response
    }
}
```

## UpdateStyleGuideMultipart

Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.StyleGuide.UpdateStyleGuideMultipart(ctx, operations.UpdateStyleGuideMultipartRequest{
        StyleGuideUploadRequest1: &shared.StyleGuideUploadRequest1{
            Styleguides: shared.StyleGuideUploadRequestStyleguides{
                Content: []byte("in"),
                Styleguides: "exercitationem",
            },
        },
        ProjectID: 937285,
        StyleGuideID: 814967,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StyleGuide != nil {
        // handle response
    }
}
```
