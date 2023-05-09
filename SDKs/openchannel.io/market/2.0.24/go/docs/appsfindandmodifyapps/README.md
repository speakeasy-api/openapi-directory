# AppsFindAndModifyApps

### Available Operations

* [DeleteAppsAppID](#deleteappsappid) - Removes app and all versions
* [DeleteAppsAppIDVersionsVersion](#deleteappsappidversionsversion) - Removes AppVersion
* [GetApps](#getapps) - Returns a paginated list of APPROVED or SUSPENDED apps
* [GetAppsBySafeNameSafeName](#getappsbysafenamesafename) - Returns a single APPROVED or SUSPENDED app
* [GetAppsTextSearch](#getappstextsearch) - Searches through the text of fields to find APPROVED or SUSPENDED apps
* [GetAppsVersions](#getappsversions) - Returns a paginated list of AppVersions
* [GetAppsAppID](#getappsappid) - Returns a single APPROVED or SUSPENDED app
* [GetAppsAppIDVersionsVersion](#getappsappidversionsversion) - Returns a single AppVersion
* [PatchAppsAppIDVersionsVersion](#patchappsappidversionsversion) - Updates the app fields or creates a new version
* [PostApps](#postapps) - Adds a new app for this developer
* [PostAppsAppIDLive](#postappsappidlive) - Change the live app to another, previously approved version
* [PostAppsAppIDPublish](#postappsappidpublish) - Publishes the current working version of the app to the marketplace
* [PostAppsAppIDVersionsVersion](#postappsappidversionsversion) - Updates the app or creates a new version
* [PostAppsAppIDVersionsVersionStatus](#postappsappidversionsversionstatus) - Allows a developer or administrator to change the status of apps

## DeleteAppsAppID

- This method is called on behalf of a developer.


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
    res, err := s.AppsFindAndModifyApps.DeleteAppsAppID(ctx, operations.DeleteAppsAppIDRequest{
        AppID: "distinctio",
        DeveloperID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAppsAppIDVersionsVersion

- This method is called on behalf of a developer.


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
    res, err := s.AppsFindAndModifyApps.DeleteAppsAppIDVersionsVersion(ctx, operations.DeleteAppsAppIDVersionsVersionRequest{
        AppID: "unde",
        DeveloperID: "nulla",
        Version: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetApps

- Results are paginated and the default is value is 1000 if no limit is provided
- If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace


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
    res, err := s.AppsFindAndModifyApps.GetApps(ctx, operations.GetAppsRequest{
        IsOwner: sdk.Bool(false),
        Limit: sdk.Int64(847252),
        PageNumber: sdk.Int64(423655),
        Query: sdk.String("error"),
        Sort: sdk.String("deserunt"),
        UserID: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsBySafeNameSafeName

- A 'view' event is recorded when trackViews is set to true


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
    res, err := s.AppsFindAndModifyApps.GetAppsBySafeNameSafeName(ctx, operations.GetAppsBySafeNameSafeNameRequest{
        SafeName: "iure",
        TrackViews: sdk.Bool(false),
        UserID: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsTextSearch

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
    res, err := s.AppsFindAndModifyApps.GetAppsTextSearch(ctx, operations.GetAppsTextSearchRequest{
        Fields: "debitis",
        IsOwned: sdk.Bool(false),
        Limit: sdk.Int64(56713),
        PageNumber: sdk.Int64(963663),
        Query: sdk.String("tempora"),
        Text: "suscipit",
        UserID: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsVersions

- Results are paginated when limit is set, otherwise all results are returned
- If no query is specified, returns all AppVersions within the marketplace
- Only returns AppVersions owned by this developer


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
    res, err := s.AppsFindAndModifyApps.GetAppsVersions(ctx, operations.GetAppsVersionsRequest{
        DeveloperID: sdk.String("minus"),
        Limit: sdk.Int64(812169),
        PageNumber: sdk.Int64(528895),
        Query: sdk.String("iusto"),
        Sort: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsAppID

- A 'view' event is recorded when trackViews is set to true


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
    res, err := s.AppsFindAndModifyApps.GetAppsAppID(ctx, operations.GetAppsAppIDRequest{
        AppID: "nisi",
        TrackViews: sdk.Bool(false),
        UserID: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAppsAppIDVersionsVersion

- Only returns AppVersions owned by this developer


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
    res, err := s.AppsFindAndModifyApps.GetAppsAppIDVersionsVersion(ctx, operations.GetAppsAppIDVersionsVersionRequest{
        AppID: "temporibus",
        DeveloperID: sdk.String("ab"),
        Version: 337396,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchAppsAppIDVersionsVersion

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). 


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
    res, err := s.AppsFindAndModifyApps.PatchAppsAppIDVersionsVersion(ctx, operations.PatchAppsAppIDVersionsVersionRequest{
        Access: sdk.String("veritatis"),
        Allow: sdk.String("deserunt"),
        AppID: "perferendis",
        ApprovalRequired: sdk.String("ipsam"),
        Attributes: sdk.String("repellendus"),
        CustomData: sdk.String("sapiente"),
        DeveloperID: "quo",
        Model: sdk.String("odit"),
        Name: sdk.String("Wilfred Wolff"),
        Restrict: sdk.String("quod"),
        Type: sdk.String("esse"),
        Version: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostApps

- This method is called on behalf of a developer.
- Price is required if the model is 'single' or 'recurring'
- Returns the newly created app


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
    res, err := s.AppsFindAndModifyApps.PostApps(ctx, operations.PostAppsRequest{
        Access: sdk.String("porro"),
        Allow: sdk.String("dolorum"),
        Attributes: sdk.String("dicta"),
        CustomData: sdk.String("nam"),
        DeveloperID: "officia",
        Model: sdk.String("occaecati"),
        Name: "Cassandra Welch",
        Restrict: sdk.String("beatae"),
        Type: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAppsAppIDLive

- This method is called on behalf of a developer.


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
    res, err := s.AppsFindAndModifyApps.PostAppsAppIDLive(ctx, operations.PostAppsAppIDLiveRequest{
        AppID: "molestiae",
        DeveloperID: "modi",
        Version: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAppsAppIDPublish

- This method is called on behalf of a developer. 
- Only effects the current working version of the app.


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
    res, err := s.AppsFindAndModifyApps.PostAppsAppIDPublish(ctx, operations.PostAppsAppIDPublishRequest{
        AppID: "impedit",
        AutoApprove: sdk.Bool(false),
        DeveloperID: "cum",
        Version: 456150,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAppsAppIDVersionsVersion

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).


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
    res, err := s.AppsFindAndModifyApps.PostAppsAppIDVersionsVersion(ctx, operations.PostAppsAppIDVersionsVersionRequest{
        Access: sdk.String("ipsum"),
        Allow: sdk.String("excepturi"),
        AppID: "aspernatur",
        ApprovalRequired: sdk.String("perferendis"),
        Attributes: sdk.String("ad"),
        CustomData: sdk.String("natus"),
        DeveloperID: "sed",
        Model: sdk.String("iste"),
        Name: sdk.String("Faye Howe"),
        Restrict: sdk.String("fuga"),
        Type: sdk.String("in"),
        Version: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostAppsAppIDVersionsVersionStatus

Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change


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
    res, err := s.AppsFindAndModifyApps.PostAppsAppIDVersionsVersionStatus(ctx, operations.PostAppsAppIDVersionsVersionStatusRequest{
        AppID: "iste",
        DeveloperID: sdk.String("iure"),
        ModifiedBy: operations.PostAppsAppIDVersionsVersionStatusModifiedByEnumAdministrator.ToPointer(),
        Reason: sdk.String("quidem"),
        Status: operations.PostAppsAppIDVersionsVersionStatusStatusEnumInReview.ToPointer(),
        Version: 60225,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
