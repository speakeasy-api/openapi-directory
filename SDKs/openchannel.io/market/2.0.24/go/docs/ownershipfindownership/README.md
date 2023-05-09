# OwnershipFindOwnership

### Available Operations

* [GetOwnership](#getownership) - Returns a paginated list of app licenses
* [GetOwnershipOwnershipID](#getownershipownershipid) - Returns an ownership record
* [PatchOwnershipOwnershipID](#patchownershipownershipid) - Updates ownership fields
* [PostOwnershipInstall](#postownershipinstall) - Aquires an app license for a user (installs app)
* [PostOwnershipUninstallOwnershipID](#postownershipuninstallownershipid) - Uninstalls a license for a particular user and app (uninstalls app)
* [PostOwnershipOwnershipID](#postownershipownershipid) - Updates an ownership record

## GetOwnership

 - Results are returned for the market provided within the basic authentication credentials 

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OwnershipFindOwnership.GetOwnership(ctx, operations.GetOwnershipRequest{
        Limit: sdk.Int64(289406),
        PageNumber: sdk.Int64(264730),
        Query: sdk.String("qui"),
        Sort: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOwnershipOwnershipID

 - Results are returned for the market provided within the basic authentication credentials 

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OwnershipFindOwnership.GetOwnershipOwnershipID(ctx, operations.GetOwnershipOwnershipIDRequest{
        OwnershipID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchOwnershipOwnershipID

 - Results are returned for the market provided within the basic authentication credentials 

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OwnershipFindOwnership.PatchOwnershipOwnershipID(ctx, operations.PatchOwnershipOwnershipIDRequest{
        CustomData: sdk.String("quos"),
        Expires: sdk.Int64(20107),
        OwnershipID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOwnershipInstall

 - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OwnershipFindOwnership.PostOwnershipInstall(ctx, operations.PostOwnershipInstallRequest{
        AppID: "assumenda",
        CustomData: sdk.String("ipsam"),
        Model: sdk.String("alias"),
        ModelID: sdk.String("fugit"),
        UserID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOwnershipUninstallOwnershipID

 - This method is called on behalf of a user - User data and statistics are recorded when this method is called 

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OwnershipFindOwnership.PostOwnershipUninstallOwnershipID(ctx, operations.PostOwnershipUninstallOwnershipIDRequest{
        CancelOwnership: sdk.Bool(false),
        CustomData: sdk.String("excepturi"),
        OwnershipID: "tempora",
        UserID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOwnershipOwnershipID

 - Results are returned for the market provided within the basic authentication credentials 

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.OwnershipFindOwnership.PostOwnershipOwnershipID(ctx, operations.PostOwnershipOwnershipIDRequest{
        CustomData: sdk.String("tempore"),
        Expires: sdk.Int64(288476),
        OwnershipID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
