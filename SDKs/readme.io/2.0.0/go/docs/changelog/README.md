# Changelog

### Available Operations

* [CreateChangelog](#createchangelog) - Create changelog
* [DeleteChangelog](#deletechangelog) - Delete changelog
* [GetChangelog](#getchangelog) - Get changelog
* [GetChangelogs](#getchangelogs) - Get changelogs
* [UpdateChangelog](#updatechangelog) - Update changelog

## CreateChangelog

Create a new changelog inside of this project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Changelog.CreateChangelog(ctx, shared.Changelog{
        Body: "sapiente",
        Hidden: sdk.Bool(false),
        Title: "Mr.",
        Type: shared.ChangelogTypeEnumImproved.ToPointer(),
    }, operations.CreateChangelogSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteChangelog

Delete the changelog with this slug

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
    res, err := s.Changelog.DeleteChangelog(ctx, operations.DeleteChangelogRequest{
        Slug: "dolorem",
    }, operations.DeleteChangelogSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChangelog

Returns the changelog with this slug

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
    res, err := s.Changelog.GetChangelog(ctx, operations.GetChangelogRequest{
        Slug: "culpa",
    }, operations.GetChangelogSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetChangelogs

Returns a list of changelogs associated with the project API key

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
    res, err := s.Changelog.GetChangelogs(ctx, operations.GetChangelogsRequest{
        Page: sdk.Int64(161309),
        PerPage: sdk.Int64(995300),
    }, operations.GetChangelogsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateChangelog

Update a changelog with this slug

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Changelog.UpdateChangelog(ctx, operations.UpdateChangelogRequest{
        Changelog: shared.Changelog{
            Body: "mollitia",
            Hidden: sdk.Bool(false),
            Title: "Ms.",
            Type: shared.ChangelogTypeEnumAdded.ToPointer(),
        },
        Slug: "commodi",
    }, operations.UpdateChangelogSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
