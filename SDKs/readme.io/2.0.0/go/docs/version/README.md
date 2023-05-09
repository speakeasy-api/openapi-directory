# Version

### Available Operations

* [CreateVersion](#createversion) - Create version
* [DeleteVersion](#deleteversion) - Delete version
* [GetVersion](#getversion) - Get version
* [GetVersions](#getversions) - Get versions
* [UpdateVersion](#updateversion) - Update version

## CreateVersion

Create a new version

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
    res, err := s.Version.CreateVersion(ctx, shared.Version{
        Codename: sdk.String("provident"),
        From: "necessitatibus",
        IsBeta: sdk.Bool(false),
        IsDeprecated: sdk.Bool(false),
        IsHidden: sdk.Bool(false),
        IsStable: sdk.Bool(false),
        Version: "sint",
    }, operations.CreateVersionSecurity{
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

## DeleteVersion

Delete a version

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
    res, err := s.Version.DeleteVersion(ctx, operations.DeleteVersionRequest{
        VersionID: "officia",
    }, operations.DeleteVersionSecurity{
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

## GetVersion

Returns the version with this version ID

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
    res, err := s.Version.GetVersion(ctx, operations.GetVersionRequest{
        VersionID: "dolor",
    }, operations.GetVersionSecurity{
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

## GetVersions

Retrieve a list of versions associated with a project API key

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
    res, err := s.Version.GetVersions(ctx, operations.GetVersionsSecurity{
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

## UpdateVersion

Update an existing version

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
    res, err := s.Version.UpdateVersion(ctx, operations.UpdateVersionRequest{
        Version: shared.Version{
            Codename: sdk.String("debitis"),
            From: "a",
            IsBeta: sdk.Bool(false),
            IsDeprecated: sdk.Bool(false),
            IsHidden: sdk.Bool(false),
            IsStable: sdk.Bool(false),
            Version: "dolorum",
        },
        VersionID: "in",
    }, operations.UpdateVersionSecurity{
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
