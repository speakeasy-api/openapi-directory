# RootExclusionPattern

## Overview

Exclusion patterns.

### Available Operations

* [BulkCreateExclusionPattern](#bulkcreateexclusionpattern) - Bulk create exclusion patterns
* [BulkDeleteExclusionPattern](#bulkdeleteexclusionpattern) - Bulk delete the provided mutable exclusion patterns
* [CreateExclusionPattern](#createexclusionpattern) - Create an exclusion pattern
* [DeleteExclusionPattern](#deleteexclusionpattern) - Delete a mutable exclusion pattern
* [GetExclusionPattern](#getexclusionpattern) - Get details of a exclusion pattern
* [QueryExclusionPattern](#queryexclusionpattern) - Get a summary of all exclusion patterns
* [UpdateExclusionPattern](#updateexclusionpattern) - Update a mutable exclusion pattern

## BulkCreateExclusionPattern

Bulk create exclusion patterns.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.BulkCreateExclusionPattern(ctx, []shared.ExclusionPatternCreateConfig{
        shared.ExclusionPatternCreateConfig{
            Pattern: "accusamus",
            SourceID: "totam",
        },
        shared.ExclusionPatternCreateConfig{
            Pattern: "reiciendis",
            SourceID: "ab",
        },
        shared.ExclusionPatternCreateConfig{
            Pattern: "sint",
            SourceID: "nihil",
        },
        shared.ExclusionPatternCreateConfig{
            Pattern: "esse",
            SourceID: "iure",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExclusionPatternDetailList != nil {
        // handle response
    }
}
```

## BulkDeleteExclusionPattern

Bulk deletes the mutable patterns in a specified set of exclusion patterns.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.BulkDeleteExclusionPattern(ctx, operations.BulkDeleteExclusionPatternRequest{
        Ids: []string{
            "nesciunt",
            "debitis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateExclusionPattern

Create a exclusion pattern.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.CreateExclusionPattern(ctx, shared.ExclusionPatternCreateConfig{
        Pattern: "vel",
        SourceID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExclusionPatternDetail != nil {
        // handle response
    }
}
```

## DeleteExclusionPattern

Deletes an exclusion pattern if that pattern is mutable.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.DeleteExclusionPattern(ctx, operations.DeleteExclusionPatternRequest{
        ID: "562a7b40-8f05-4e3d-88fd-af313a1f5fd9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetExclusionPattern

Get details of a exclusion pattern.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.GetExclusionPattern(ctx, operations.GetExclusionPatternRequest{
        ID: "4259c0b3-6f25-4ea9-84f3-b756c11f6c37",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExclusionPatternDetail != nil {
        // handle response
    }
}
```

## QueryExclusionPattern

Get a summary of all exclusion patterns.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.QueryExclusionPattern(ctx, operations.QueryExclusionPatternRequest{
        IsMutable: sdk.Bool(false),
        Limit: sdk.Int(683727),
        Offset: sdk.Int(326903),
        Pattern: sdk.String("architecto"),
        PrimaryClusterID: sdk.String("qui"),
        SortBy: operations.QueryExclusionPatternSortByEnumPattern.ToPointer(),
        SortOrder: operations.QueryExclusionPatternSortOrderEnumAsc.ToPointer(),
        SourceID: sdk.String("magni"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExclusionPatternDetailListResponse != nil {
        // handle response
    }
}
```

## UpdateExclusionPattern

Update mutable exclusion pattern with specified properties. The exclusion pattern which is mutable can be modified.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootExclusionPattern.UpdateExclusionPattern(ctx, operations.UpdateExclusionPatternRequest{
        ExclusionPatternUpdateConfig: shared.ExclusionPatternUpdateConfig{
            IsActive: sdk.Bool(false),
            IsMutable: sdk.Bool(false),
            Pattern: sdk.String("incidunt"),
        },
        ID: "3835bbc0-5a23-4a45-8efc-5fde10a0ce21",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExclusionPatternDetail != nil {
        // handle response
    }
}
```
